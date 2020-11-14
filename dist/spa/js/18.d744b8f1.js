(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{b8c4:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[e.group?r("div",{staticClass:"q-pa-md q-gutter-sm"},[r("q-breadcrumbs",{scopedSlots:e._u([{key:"separator",fn:function(){return[r("q-icon",{attrs:{size:"1.2em",name:"arrow_forward"}})]},proxy:!0}],null,!1,3034130754)},[r("q-breadcrumbs-el",{attrs:{label:"User",icon:"fas fa-user"}}),r("q-breadcrumbs-el",{attrs:{label:"Groups",icon:"fas fa-users"}}),r("q-breadcrumbs-el",{attrs:{label:e.group.name}})],1)],1):e._e(),r("q-separator"),e.group?r("q-card",{staticClass:"row"},[r("q-card-section",{staticClass:"col-12 q-pa-md q-gutter-sm"},[r("span",{staticClass:"text-h5"},[e._v(e._s(e.group.name))])]),r("q-card-section",{staticClass:"col-12"},[e._v("\n      Users in the group: "+e._s(e.usersInTheGroup.length)+"\n    ")]),r("q-card-section",{staticClass:"col-6 col-xl-3 col-lg-4 col-xs-12 col-sm-12"},[r("q-markup-table",{attrs:{flat:""}},[r("tbody",e._l(e.usersInTheGroup,(function(t){return r("tr",[r("td",[r("span",{staticClass:"text-bold"},[e._v(e._s(t.email))])]),r("td",{staticClass:"text-right"},[r("q-btn",{attrs:{size:"xs",icon:"fas fa-trash",flat:""},on:{click:function(r){return e.removeUserFromGroup(t)}}})],1)])})),0)])],1),r("q-card-section",{staticClass:"col-6 col-xl-12 col-lg-12 col-xs-12 col-sm-12"},[r("q-btn",{attrs:{label:"Delete",color:"negative"},on:{click:function(t){return e.deleteGroup()}}}),r("q-btn",{staticClass:"float-right",attrs:{label:"Add user to group"},on:{click:function(t){e.showAddUserToGroup=!0}}})],1)],1):e._e(),r("q-dialog",{attrs:{persistent:""},model:{value:e.showAddUserToGroup,callback:function(t){e.showAddUserToGroup=t},expression:"showAddUserToGroup"}},[r("q-card",{staticStyle:{"min-width":"350px"}},[r("q-card-section",[r("div",{staticClass:"text-h6"},[e._v("Add user")])]),r("q-card-section",{staticClass:"q-pt-none"},[r("q-select",{attrs:{options:e.allUsers,"option-label":"email","option-value":"reference_id",autofocus:""},model:{value:e.newSelectedUser,callback:function(t){e.newSelectedUser=t},expression:"newSelectedUser"}})],1),r("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"},on:{click:function(t){e.showAddUserToGroup=!1}}}),r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Add user"},on:{click:function(t){return e.addUserToGroup()}}})],1)],1)],1)],1)},a=[],s=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),n=r.n(s),c=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i={name:"EditGroup",data:function(){return{group:null,showAddUserToGroup:!1,newSelectedUser:null,allUsers:[],usersInTheGroup:[]}},mounted:function(){var e=this;e.loadData({tableName:"usergroup",params:{query:JSON.stringify([{column:"reference_id",operator:"is",value:this.$route.params.groupId}])}}).then((function(t){if(console.log("Loaded group",t),!t.data||0===t.data.length)return e.$q.notify({message:"Group not found"}),void e.$router.back();e.group=t.data[0],e.loadData({tableName:"user_account",params:{page:{size:500}}}).then((function(t){e.allUsers=t.data})).catch((function(t){e.$q.notify({message:"Failed to get uses"})})),e.loadGroupUsers()}))},methods:u({removeUserFromGroup:function(e){console.log("remove user from group",e);var t=this;t.removeRelation({tableName:"usergroup",id:t.group.reference_id,relationName:"user_account_id",relationId:e.relation_reference_id}).then((function(e){console.log("Removed user ",e),t.loadGroupUsers()})).catch((function(e){t.$q.notify({message:"Failed to remove user from group"})}))},loadGroupUsers:function(){var e=this;e.loadDataRelations({tableName:"usergroup",relation:"user_account_id",reference_id:e.group.reference_id}).then((function(t){console.log("Users in this group",t),e.usersInTheGroup=t.data}))},addUserToGroup:function(){var e=this;console.log("add user to group",this.newSelectedUser),e.addManyRelation({tableName:"usergroup",id:e.group.id,relationName:"user_account_id",relationId:this.newSelectedUser.reference_id}).then((function(t){console.log("Added user group",t),e.$q.notify({message:"Added user to group"}),e.showAddUserToGroup=!1,e.loadGroupUsers()})).catch((function(t){e.$q.notify({message:JSON.stringify(t)})}))},deleteGroup:function(){var e=this;e.deleteRow({tableName:"usergroup",reference_id:e.group.id}).then((function(t){console.log("Deleted group",t),e.$q.notify({message:"Deleted group"}),e.$router.back()})).catch((function(t){e.$q.notify({message:JSON.stringify(t)})}))}},Object(c["b"])(["loadData","deleteRow","loadDataRelations","addManyRelation","removeRelation"]))},d=i,p=r("2877"),f=r("9989"),g=r("ead5"),m=r("0016"),b=r("079eb"),h=r("eb85"),q=r("f09f"),v=r("a370"),w=r("2bb1"),_=r("9c40"),y=r("24e8"),U=r("ddd8"),G=r("4b7e"),O=r("7f67"),C=r("eebe"),S=r.n(C),k=Object(p["a"])(d,o,a,!1,null,null,null);t["default"]=k.exports;S()(k,"components",{QPage:f["a"],QBreadcrumbs:g["a"],QIcon:m["a"],QBreadcrumbsEl:b["a"],QSeparator:h["a"],QCard:q["a"],QCardSection:v["a"],QMarkupTable:w["a"],QBtn:_["a"],QDialog:y["a"],QSelect:U["a"],QCardActions:G["a"]}),S()(k,"directives",{ClosePopup:O["a"]})}}]);