(function(t){function e(e){for(var n,i,o=e[0],r=e[1],d=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,d||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],n=!0,o=1;o<s.length;o++){var r=s[o];0!==a[r]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},c=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=r;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=c(t);return s(e)}function c(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=c,t.exports=a,a.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"task-manager-container py-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t.creatingTask?s("button",{staticClass:"btn btn-block btn-outline-secondary",on:{click:function(e){t.creatingTask=!1}}},[t._v("\n                                Отмена\n                            ")]):s("button",{staticClass:"btn btn-block btn-outline-secondary",on:{click:t.runCreateTask}},[t._v("\n                                Новая заметка\n                            ")])]),s("div",{staticClass:"card-header d-flex justify-content-between"},[s("button",{staticClass:"btn btn-outline-primary btn-sm",class:{active:t.showingActual},on:{click:function(e){t.showingActual=!0}}},[t._v("\n                                Актуальные\n                            ")]),s("button",{staticClass:"btn btn-outline-success btn-sm",class:{active:!t.showingActual},on:{click:function(e){t.showingActual=!1}}},[t._v("\n                                Выполненые\n                            ")])]),s("b-list-group",{staticClass:"tasks-list"},t._l(t.tasks,function(e){return s("b-list-group-item",{key:e.id,staticClass:"flex-column align-items-start",attrs:{href:"#",active:t.chosenTaskId===e.id},on:{click:function(s){t.chosenTaskId=e.id}}},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"mb-1"},[t._v(t._s(e.title))]),s("small",[t._v("#"+t._s(e.id))])]),s("p",{staticClass:"mb-1",domProps:{innerHTML:t._s(t.strip(t.trim(e.content,60)))}}),s("small",[t._v("Добавлено: "+t._s(t._f("timestampToDate")(e.createdAt)))])])}),1)],1)]),s("div",{staticClass:"col-8"},[s("div",{staticClass:"card"},[t.creatingTask?s("div",{staticClass:"card-body"},[s("b-form",[s("b-form-group",{attrs:{id:"title-input-group",label:"Название:","label-for":"title-input"}},[s("b-form-input",{attrs:{id:"title-input",required:""},model:{value:t.newTask.title,callback:function(e){t.$set(t.newTask,"title",e)},expression:"newTask.title"}})],1),s("b-form-group",{attrs:{id:"content-input-group",label:"Текст:","label-for":"text-input"}},[s("editor-menu-bar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.commands,a=e.isActive;e.focused;return[s("div",{staticClass:"menubar"},t._l(t.editorCommandsButtons,function(t){return s("button",{key:t.command,staticClass:"menubar__button",class:{"is-active":t.toggleable&&a[t.command]()},attrs:{type:"button"},on:{click:function(e){n[t.command]()}}},[s("font-awesome-icon",{attrs:{icon:t.icon}})],1)}),0)]}}],null,!1,2776279656)}),s("editor-content",{staticClass:"rounded p-1 mb-0",staticStyle:{border:"1px solid #ced4da"},attrs:{editor:t.editor,id:"text-input"}})],1),s("b-button",{on:{click:t.saveTask}},[t._v("Сохранить")])],1)],1):s("div",[t.chosenTaskId?s("div",[s("div",{staticClass:"card-header d-flex justify-content-between"},[s("div",[t.chosenTask.isSolved?s("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.markTaskAs(!1)}}},[t._v("\n                                            Выполненое\n                                        ")]):s("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.markTaskAs(!0)}}},[t._v("\n                                            Отметить как выполненое\n                                        ")])],1),s("b-button",{attrs:{variant:"outline-danger"},on:{click:t.deleteTask}},[t._v("\n                                        Удалить\n                                    ")])],1),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[s("span",{staticClass:"text-muted"},[t._v("#"+t._s(t.chosenTask.id))]),t._v(" "+t._s(t.chosenTask.title))]),s("h6",{staticClass:"card-subtitle text-muted"},[s("small",[t._v("Добавлено: "+t._s(t._f("timestampToDate")(t.chosenTask.createdAt,"D MMMM YYYY, HH:mm")))])]),s("div",{staticClass:"mt-4",domProps:{innerHTML:t._s(t.chosenTask.content)}})])]):s("div",[s("div",{staticClass:"card-body"},[t._v("Выбери заметку или создай новую")])])])])])])])])])},c=[],i=(s("ac6a"),s("cd42")),o=s("c1df"),r=s.n(o),d=s("f23d"),l="https://task-manager.bobroid.win",u={name:"app",data:function(){return{editorCommandsButtons:[{command:"bold",icon:"bold",toggleable:!0},{command:"italic",icon:"italic",toggleable:!0},{command:"strike",icon:"strikethrough",toggleable:!0},{command:"underline",icon:"underline",toggleable:!0},{command:"code",icon:"code",toggleable:!0},{command:"bullet_list",icon:"list-ul",toggleable:!0},{command:"ordered_list",icon:"list-ol",toggleable:!0},{command:"undo",icon:"undo"},{command:"redo",icon:"redo"}],chosenTaskId:null,creatingTask:!1,editor:!1,showingActual:!0,newTask:{title:"",text:""},tasks:[]}},computed:{chosenTask:function(){var t,e=this;return this.tasks.forEach(function(s){s.id===e.chosenTaskId&&(t=s)}),t||{}}},components:{EditorContent:i["b"],EditorMenuBar:i["c"]},mounted:function(){this.updateTasksList(),r.a.locale("ru")},filters:{timestampToDate:function(t,e){var s=r.a.unix(t);return void 0===e&&(e="D MMM HH:mm"),s.format(e)}},watch:{creatingTask:function(t){var e=this;t?this.editor=new i["a"]({extensions:[new d["d"],new d["e"],new d["f"]({levels:[1,2,3]}),new d["b"],new d["k"],new d["j"],new d["a"],new d["c"],new d["h"],new d["i"],new d["l"],new d["m"],new d["g"]],onUpdate:function(t){var s=t.getHTML;e.newTask.text=s()}}):void 0!==this.editor&&this.editor.destroy()},showingActual:function(){this.updateTasksList(),this.chosenTaskId=null}},methods:{runCreateTask:function(){this.creatingTask=!0,this.chosenTaskId=null},trim:function(t,e){return null===t?"":t.slice(0,e)},strip:function(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText||""},saveTask:function(t){var e=this;t.preventDefault(),fetch(l+"/tasks",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({title:this.newTask.title,content:this.newTask.text})}).then(function(t){return t.ok?(e.updateTasksList(),e.creatingTask=!1,e.newTask.title=null,t.json()):t.text().then(function(t){return Promise.reject(t)})}).catch(function(){})},updateTasksList:function(){var t=this;fetch(l+"/tasks?sort=-id&filter[isSolved]="+(this.showingActual?0:1)).then(function(t){return t.json()}).then(function(e){t.tasks=e})},markTaskAs:function(t){var e=this,s=t?1:0;fetch(l+"/tasks/"+this.chosenTaskId,{method:"PUT",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({isSolved:s})}).then(function(){e.updateTasksList(),e.chosenTaskId=null})},deleteTask:function(){var t=this;fetch(l+"/tasks/"+this.chosenTaskId,{method:"DELETE"}).then(function(){t.updateTasksList(),t.chosenTaskId=null})}}},f=u,b=(s("5c0b"),s("2877")),j=Object(b["a"])(f,a,c,!1,null,null,null),m=j.exports,h=s("5f5b"),k=(s("f9e3"),s("2dd8"),s("ecee")),p=s("c074"),v=s("ad3d");n["default"].use(h["a"]),k["c"].add(p["a"],p["c"],p["d"],p["e"],p["f"],p["b"],p["h"],p["i"],p["j"],p["g"]),n["default"].component("font-awesome-icon",v["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("e332"),a=s.n(n);a.a},e332:function(t,e,s){}});
//# sourceMappingURL=app.4f6d76f3.js.map