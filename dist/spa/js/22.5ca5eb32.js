(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"1c97":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-pa-md"},[a("span",{staticClass:"text-h4"},[e._v("\n    User\n  ")]),e.user?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("q-form",{staticClass:"q-pa-md q-gutter-sm"},[a("q-input",{attrs:{label:"Name"},model:{value:e.userView.name,callback:function(t){e.$set(e.userView,"name",t)},expression:"userView.name"}}),a("q-input",{attrs:{label:"Email"},model:{value:e.userView.email,callback:function(t){e.$set(e.userView,"email",t)},expression:"userView.email"}}),a("q-btn",{staticClass:"float-left",attrs:{color:"negative",label:"Delete user"},on:{click:function(t){return e.deleteUser()}}}),a("q-btn",{staticClass:"float-left",attrs:{label:"Reset password"}}),a("q-btn",{staticClass:"float-right",attrs:{color:"primary",label:"Save"},on:{click:function(t){return e.saveUser()}}})],1)],1)]):e._e()])},s=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),o=a.n(n),i=(a("7f7f"),a("2f62"));function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={name:"EditUser",data:function(){return{user:null,userView:null}},mounted:function(){var e=this;e.loadData({tableName:"user_account",params:{query:JSON.stringify([{column:"email",operator:"is",value:this.$route.params.emailId}])}}).then((function(t){if(console.log("Loaded user",t),!t.data||0===t.data.length)return e.$q.notify({message:"User not found"}),void e.$router.back();e.userView={name:t.data[0].name,email:t.data[0].email},e.user=t.data[0]}))},methods:c({deleteUser:function(){var e=this;e.deleteRow({tableName:"user_account",reference_id:e.user.reference_id}).then((function(t){console.log("Deleted user",t),e.$q.notify({message:"Deleted user"}),e.$router.back()})).catch((function(t){e.$q.notify({message:JSON.stringify(t)})}))},saveUser:function(){console.log("Save user",this.user,this.userView);var e=this;e.updateRow({tableName:"user_account",id:e.user.reference_id,name:e.user.name,email:e.user.email}).then((function(t){e.$q.notify({message:"Saved user details"})})).catch((function(t){console.log("Failed to save user details",t),e.$q.notify({message:"Failed to save user details"})}))}},Object(i["b"])(["loadData","updateRow","deleteRow"]))},f=u,d=a("2877"),m=a("9989"),p=a("0378"),b=a("27f9"),w=a("9c40"),v=a("eebe"),g=a.n(v),h=Object(d["a"])(f,r,s,!1,null,null,null);t["default"]=h.exports;g()(h,"components",{QPage:m["a"],QForm:p["a"],QInput:b["a"],QBtn:w["a"]})}}]);