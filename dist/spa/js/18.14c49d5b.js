(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"2fba":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page-container",[a("q-page",[a("table-editor",{attrs:{table:{}},on:{save:e.createTable}})],1)],1)},o=[],r=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("f559"),a("28a5"),a("9523")),l=a.n(r),i=a("2f62");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={name:"CreateTable",methods:s(s({},Object(i["b"])(["executeAction","refreshTableSchema","loadModel"])),{},{createTable:function(e){var t=this;if(0!==e.ColumnModel.length){for(var a=0;a<e.ColumnModel.length;a++){var n=e.ColumnModel[a];if(n.ColumnType.indexOf(" - ")>-1){var o=n.ColumnType.split(" - ");n.ColumnType=o[0],n.DataType=o[1],n.ColumnType.startsWith("file.")&&(n.IsForeignKey=!0,n.ForeignKeyData={DataSource:"cloud_store",Namespace:"localstore",KeyName:e.TableName+"-"+n.ColumnName}),e.ColumnModel[a]=n}}console.log("Table data",e);var r=e.Relations;this.$q.notify("Creating table "+e.TableName),t.$q.loading.show(),t.executeAction({tableName:"world",actionName:"upload_system_schema",params:{schema_file:[{name:"empty.json",file:"data:application/json;base64,"+btoa(JSON.stringify({Tables:[{TableName:e.TableName,Columns:e.ColumnModel}],Relations:r})),type:"application/json"}]}}).then((function(a){console.log("Created table",a),t.$q.notify("Created table, updating schema"),setTimeout((function(){t.refreshTableSchema(e.TableName).then((function(){t.$q.loading.hide(),t.$q.notify("Schema refreshed"),t.$router.push("/tables")})).catch((function(e){t.$q.notify("Failed to refresh"),t.$q.loading.hide()}))}),2e3)})).catch((function(e){t.$q.notify("Failed to create "+e),t.$q.loading.hide()}))}else this.$q.notify("Please add columns")}}),data:function(){return{text:""}},mounted:function(){},watch:{}},f=u,b=a("2877"),m=a("09e3"),p=a("9989"),d=a("eebe"),h=a.n(d),y=Object(b["a"])(f,n,o,!1,null,null,null);t["default"]=y.exports;h()(y,"components",{QPageContainer:m["a"],QPage:p["a"]})}}]);