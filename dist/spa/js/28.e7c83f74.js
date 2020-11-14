(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{cbb4:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page-container",[r("q-page",[r("div",{staticClass:"q-pa-md q-gutter-sm"},[r("q-breadcrumbs",{scopedSlots:e._u([{key:"separator",fn:function(){return[r("q-icon",{attrs:{size:"1.2em",name:"arrow_forward"}})]},proxy:!0}])},[r("q-breadcrumbs-el",{attrs:{label:"Users",icon:"fas fa-user"}}),r("q-breadcrumbs-el",{attrs:{label:"Groups",icon:"fas fa-users"}})],1)],1),r("q-separator"),r("q-page-sticky",{attrs:{position:"bottom-right",offset:[50,50]}},[r("q-btn",{attrs:{label:"Add Group",fab:"",icon:"add",color:"primary"},on:{click:function(t){e.newGroupDrawer=!0}}})],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("q-markup-table",[r("tbody",e._l(e.groups,(function(t){return r("tr",{staticStyle:{cursor:"pointer"},on:{click:function(r){return e.$router.push("/groups/"+t.reference_id)}}},[r("td",[e._v(e._s(t.name))])])})),0)])],1)]),r("q-drawer",{attrs:{width:500,"content-class":"bg-grey-3",side:"right"},model:{value:e.newGroupDrawer,callback:function(t){e.newGroupDrawer=t},expression:"newGroupDrawer"}},[r("q-scroll-area",{staticClass:"fit row"},[r("div",{staticClass:"q-pa-md"},[r("span",{staticClass:"text-h6"},[e._v("Create group")]),r("q-form",{staticClass:"q-gutter-md"},[r("q-input",{attrs:{label:"Name"},model:{value:e.group.name,callback:function(t){e.$set(e.group,"name",t)},expression:"group.name"}}),r("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.createGroup()}}},[e._v("Create")]),r("q-btn",{on:{click:function(t){e.newGroupDrawer=!1}}},[e._v("Cancel")])],1)],1)])],1),e.showHelp?e._e():r("q-page-sticky",{attrs:{position:"top-right",offset:[0,0]}},[r("q-btn",{attrs:{flat:"",fab:"",icon:"fas fa-question"},on:{click:function(t){e.showHelp=!0}}})],1),r("q-drawer",{attrs:{overlay:"",width:400,side:"right"},model:{value:e.showHelp,callback:function(t){e.showHelp=t},expression:"showHelp"}},[r("q-scroll-area",{staticClass:"fit"},[r("help-page",{on:{closeHelp:function(t){e.showHelp=!1}},scopedSlots:e._u([{key:"help-content",fn:function(){return[r("q-markdown",{attrs:{src:"::: tip\nYou can create different user groups here. Different user groups can have different permissions.\nE.g. Admin Group that has permissions to create, read, write and delete tables.\n:::"}})]},proxy:!0}])})],1)],1)],1)],1)},o=[],n=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),s=r.n(n),c=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"UserGroupsPage",methods:u(u({editGroup:function(e,t){console.log("Edit group",t)},createGroup:function(){var e=this;console.log("new group",this.group),this.group.tableName="usergroup",e.createRow(e.group).then((function(t){e.user={},e.$q.notify({message:"Group created"}),e.refresh(),e.newGroupDrawer=!1})).catch((function(t){t instanceof Array?e.$q.notify({message:t[0].title}):e.$q.notify({message:"Failed to create group"})}))}},Object(c["b"])(["loadData","getTableSchema","createRow"])),{},{refresh:function(){var e="usergroup",t=this;this.loadData({tableName:e,params:{page:{size:500}}}).then((function(e){console.log("Loaded data",e),t.groups=e.data}))}}),data:function(){return u({text:"",showHelp:!1,group:{},filter:null,newGroupDrawer:!1,groups:[],columns:[{name:"name",field:"name",label:"Group name",align:"left",sortable:!0}]},Object(c["d"])([]))},mounted:function(){this.refresh()},computed:u(u({},Object(c["c"])(["selectedTable"])),Object(c["d"])([])),watch:{}},p=l,f=r("2877"),d=r("09e3"),b=r("9989"),g=r("ead5"),m=r("0016"),w=r("079eb"),h=r("eb85"),q=r("de5e"),y=r("9c40"),v=r("2bb1"),O=r("9404"),k=r("4983"),j=r("0378"),G=r("27f9"),D=r("eebe"),Q=r.n(D),_=Object(f["a"])(p,a,o,!1,null,null,null);t["default"]=_.exports;Q()(_,"components",{QPageContainer:d["a"],QPage:b["a"],QBreadcrumbs:g["a"],QIcon:m["a"],QBreadcrumbsEl:w["a"],QSeparator:h["a"],QPageSticky:q["a"],QBtn:y["a"],QMarkupTable:v["a"],QDrawer:O["a"],QScrollArea:k["a"],QForm:j["a"],QInput:G["a"]})}}]);