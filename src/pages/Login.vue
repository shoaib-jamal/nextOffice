<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

  <div class="row">
    <div class="col-sm-8 col-md-10 col-xs-12 col-6">

      <div class="flex flex-center">
        <q-card flat style="min-width: 300px; width: 30vw" class="q-pa-md">
          <q-card-section>
            <span class="text-h4">Login</span>

          </q-card-section>
          <q-card-section>
            <q-form autofocus
                    @submit="onSubmit"
                    class="q-gutter-md"
            >
              <q-input
                filled
                v-model="email"
                label="Email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                filled
                type="password"
                v-model="password"
                label="Password"
                lazy-rules
              />


              <div>
                <q-btn class="float-left" label="Login" type="submit" color="primary"/>
                <q-btn class="float-right" label="Register" @click="$router.push('/register')" type="reset"
                       color="secondary" flat/>
              </div>
            </q-form>

          </q-card-section>
        </q-card>


      </div>
    </div>
  </div>


</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'PageLogin',
  methods: {
    ...mapActions(['executeAction', 'setToken']),
    onSubmit() {
      const that = this;
      that.executeAction({
        tableName: 'user_account',
        actionName: 'signin',
        params: {
          email: this.email,
          password: this.password,
        }
      }).then(function (e) {
        for (var i = 0; i < e.length; i++) {
          if (e[i].ResponseType === "client.notify") {
            that.$q.notify(e[i].Attributes);
          }
        }
        that.setToken();
        that.$router.push("/workspace");
      }).catch(function (e) {
        that.$q.notify("Failed to sign in");
        console.log("error ", arguments)
      })
    },
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
  mounted() {
    console.log("mounted login")
  }
}
</script>
