<template>


  <div>
    <router-view @logout="triggerLogout()" v-if="loaded"/>
    <q-dialog v-if="showOfflineDialog" persistent v-model="showOfflineDialog" position="bottom">
      <q-card style="width: 350px">
        <q-linear-progress :value="1" color="red"/>

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">No server</div>
            <div class="text-grey">We are offline</div>
          </div>

          <q-space/>

          <q-btn @click="$router.push('/backend')" color="primary" label="Go to server selector page"
                 icon="fast_forward"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

</template>
<style>
.user-background-pattern {
  background: linear-gradient(
    limegreen,
    transparent
  ),
  linear-gradient(
    90deg,
    skyblue,
    transparent
  ),
  linear-gradient(
    -90deg,
    coral,
    transparent
  );

  background-blend-mode: screen;
}

/*.user-area-pattern {*/
/*  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CjxmaWx0ZXIgaWQ9Im4iPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT4KPC9maWx0ZXI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNCI+PC9yZWN0Pgo8L3N2Zz4=");*/
/*}*/

.user-area-pattern {
  background-color: #ffffff;
  /*background-image: linear-gradient(rgba(0, 0, 0, .5) 2px, transparent 2px),*/
  /*linear-gradient(90deg, rgba(0, 0, 0, .5) 2px, transparent 2px);*/
  /*linear-gradient(rgba(255, 255, 255, .28) 1px, transparent 1px),*/
  /*linear-gradient(90deg, rgba(255, 255, 255, .28) 1px, transparent 1px);*/
  /*background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;*/
}
</style>
<script>
import {mapGetters, mapActions} from 'vuex';

var jwt = require('jsonwebtoken');

export default {
  name: 'MainLayout',

  computed: {
    fileDrawerWidth() {
      return window.screen.availWidth;
    },
  },
  components: {},

  data() {
    return {
      showHelp: false,
      showDrawerFull: false,
      showOfflineDialog: false,
      showAdminDrawerMini: false,
      showAdminDrawerStick: false,
      essentialLinks: [],
      drawer: false,
      userDrawer: true,
      loaded: false,
      miniState: true,
      isAdmin: false,
      isUser: false,
      ...mapGetters(['loggedIn', 'drawerLeft', 'authToken', 'decodedAuthToken', 'userGroupTable']),
    }
  },
  mounted() {
    const that = this;
    if (that.decodedAuthToken()) {
      let decodedAuthToken = that.decodedAuthToken();
      let isLoggedOut = decodedAuthToken.exp * 1000 < new Date().getTime();
      console.log("Decoded auth token", isLoggedOut, decodedAuthToken);
      if (isLoggedOut) {
        that.$q.notify({
          message: "Authentication has expired, please login again"
        });
        that.setDecodedAuthToken(null);
        that.logout();
        that.$router.push("/login");
        return
      }
    } else {
      that.$router.push("/login");
      return
    }

    that.loadModel(["cloud_store", "user_account", "usergroup", "world",
      "action", 'site', 'integration', 'calendar', 'document']).then(async function () {
      Promise.all([that.loadTable("world"), that.loadTable("document"), that.loadTable("usergroup")]).then(function () {
        console.log("Loaded world and document", arguments)
        let userGroupTable = that.userGroupTable();
        console.log("Mounted main layout - ", userGroupTable);

        if (userGroupTable.permission !== 2097057 && that.decodedAuthToken()) {
          that.isAdmin = true;
          that.executeAction({
            tableName: 'world',
            actionName: "become_an_administrator"
          }).then(function (res) {

            that.$q.notify({
              message: "You have become the administrator of this instance"
            });
            that.loadTable("world");

            let defaultworkspacename = "my workspace";
            var newRow = {
              document_name: defaultworkspacename,
              tableName: "document",
              document_extension: "folder",
              mime_type: 'workspace/root',
              document_path: defaultworkspacename,
              document_content: [],
            }
            console.log("Create folder request", newRow)

            that.createRow(newRow).then(function (res) {
              that.$emit("new-workspace-created")
            }).catch(function (e) {
              console.log("Failed to create folder", e)
              that.$q.notify({
                message: "Failed to create folder: " + JSON.stringify(e)
              });
            }).then(function (res) {
              console.log("created new workspace: ", res.data)
            }).catch(function (err) {
              that.$q.notify({
                type: "error",
                message: "failed to create default workspace, please try creating one manually"
              })
            });


          }).catch(function (err) {
            console.log("Failed to become admin", err);
            that.loaded = true;
            // that.$router.push("/login");
            // return
          })
        }

        that.loaded = true;
      }).catch(function (err) {
        console.log("Failed to load table ", err)
      })
      that.getDefaultCloudStore();
      that.loadData({
        tableName: "user_account",
      }).then(function (res) {
        const users = res.data;
        console.log("Users: ", users);
        that.isUser = true;


      });

    }).catch(function (err) {
      that.showOfflineDialog = true;
      console.log("Failed to load model for cloud store", err);
      that.$q.notify({
        message: "Failed to load model for cloud store"
      })
    })

  },
  methods: {
    ...mapActions(['getDefaultCloudStore', 'loadModel',
      'executeAction', 'createRow',
      'loadData', 'setDecodedAuthToken', 'loadTable', 'logout']),
    triggerLogout() {

      this.logout();
      // this.$router.push("/login");
      // window.location = window.location;
    }
  }
}
</script>
