<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page-container>
    <q-page>

      <q-card flat>
        <q-card-section>
          <div class="row q-gutter-sm">
            <div class="col-4 q-pa-md">
              <q-input v-model="userFilter" label="search"></q-input>
            </div>
            <div class="col-4 q-pa-md">
              <q-btn @click="newUserDrawer = true" label="Add User" fab icon="add"/>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-markup-table flat>
            <tbody>
            <tr style="cursor: pointer" @click="$router.push('/user/' + user.email)" v-for="user in usersFiltered">
              <td>{{ user.email }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.created_at.split('.')[0].split('T').join(' ') }}</td>
              <td>
                <q-btn flat icon="fas fa-wrench" color="black"></q-btn>
              </td>
            </tr>
            </tbody>
          </q-markup-table>

        </q-card-section>
      </q-card>

    </q-page>

    <q-drawer overlay content-class="bg-grey-3" :width="500" side="right" v-model="newUserDrawer">
      <q-scroll-area class="fit row">
        <div class="q-pa-md">
          <span class="text-h6">Create user</span>
          <q-form class="q-gutter-md">
            <q-input label="Name" v-model="user.name"></q-input>
            <q-input label="Email" v-model="user.email"></q-input>
            <q-input label="Password" type="password" v-model="user.password"></q-input>
            <q-btn color="primary" @click="createUser()">Create</q-btn>
            <q-btn @click="newUserDrawer = false">Cancel</q-btn>
          </q-form>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-drawer overlay :width="400" side="right" v-model="showHelp">
      <q-scroll-area class="fit">
        <help-page @closeHelp="showHelp = false">
          <template v-slot:help-content>
            <q-markdown src="::: tip
You can add users to your instance here. You can also send the sign up link where users can signup themselves.
:::"></q-markdown>
          </template>
        </help-page>
      </q-scroll-area>
    </q-drawer>

  </q-page-container>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
  name: 'UsersPage',

  methods: {
    createUser() {
      const that = this;
      console.log("new user", this.user);
      this.user.tableName = "user_account";
      that.createRow(that.user).then(function (res) {
        that.user = {};
        that.$q.notify({
          message: "User created"
        });
        that.refresh();
        that.newUserDrawer = false;
      }).catch(function (e) {
        if (e instanceof Array) {
          that.$q.notify({
            message: e[0].title
          })
        } else {
          that.$q.notify({
            message: "Failed to create user"
          })
        }
      });
    },
    ...mapActions(['loadData', 'getTableSchema', 'createRow']),
    refresh() {
      const that = this;
      var tableName = "user_account";
      this.loadData({
        tableName: tableName, params: {
          page: {
            size: 500,
          }
        }
      }).then(function (data) {
        console.log("Loaded data", data);
        that.users = data.data;
      })
    },
  },
  data() {
    return {
      text: '',
      userFilter: null,
      user: {},
      showHelp: false,
      newUserDrawer: false,
      users: [],
      filter: null,
      columns: [
        {
          name: 'email',
          field: 'email',
          label: 'Email',
          align: 'left',
          sortable: true,
        }, {
          name: 'name',
          field: 'name',
          label: 'Name',
          align: 'left',
        },
        {
          name: '',
          format: function () {
            return "<span>hi</span>"
          }
        }
      ],
      ...mapState([])
    }
  },
  mounted() {
    this.refresh();
  },
  computed: {
    usersFiltered() {
      const that = this;
      return this.userFilter == null ? this.users : this.users.filter(function (e) {
        return e.email.indexOf(that.userFilter) > -1 || e.name.indexOf(that.userFilter) > -1
      })
    },
    ...mapGetters(['selectedTable']),
    ...mapState([])
  },

  watch: {}
}
</script>
