(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43e2e309"],{"0e82":function(t,e,a){"use strict";var r=a("c496"),i=a.n(r);i.a},2288:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,':root{--accent:#e1002d;--bg-color:#fff;--base-color:#202a3d;--darkAccent:#a2001e;--tableHead:#788699}.loading-container{width:100%;position:relative;padding-top:8rem}.atom-spinner,.loading-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.atom-spinner{z-index:999999;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.atom-spinner .spinner-inner{width:6rem;height:6rem}.tree{position:relative;padding:0}.tree .search-box{text-align:right}.tree .search_result{-ms-flex-negative:0;flex-shrink:0;margin-top:-5px;color:#798699}.tree .search-box .search{max-height:45px}.tree .top-action .btn{margin-right:15px}.tree .top-action .btn-small{padding:.9rem 3rem;font-size:1.5rem;height:45px}.tree .top-action .dropdown{max-height:45px}.tree .top-action .dropdown .btn-dropdown{font-size:1.5rem}.tree .top-action .search-box{max-height:45px}.tree .dragEnable .dragAndDropLine{cursor:move}.tree li{position:relative}.tree li:after{content:"";width:100%;position:absolute;height:3px;top:-1px;left:0;background-color:var(--accent);-webkit-transition:.25s;transition:.25s;opacity:0}.tree li.dragSelect:after{opacity:1;z-index:999}.tree .tree-box{padding-top:2rem}.tree .table-header{height:4rem;display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid #ced0da;background:var(--tableHead);color:#fff}.tree .table-header .checkbox-wrapper{width:7rem;-ms-flex-negative:0;flex-shrink:0;border:1px solid #ced0da;border-top:0;border-left:0}.tree .table-header .left-part{width:calc(50% - 2rem);border-left:1px solid #ced0da;margin-left:-1px}.tree .table-header .right-part{width:calc(50% - 2rem)}.tree .table-header .right-part table{table-layout:fixed;width:100%;height:100%}.tree .table-header .right-part table td{border-left:1px solid #ced0da;border-right:1px solid #ced0da;vertical-align:middle;text-align:center;font-weight:500;font-size:1.4rem}.tree .table-header .right-part table td:last-child{border-right:0}.tree .page_buttons_bottom .btn:last-child{margin-right:0}.tree .tree-element-body{-webkit-transition:all .3s;transition:all .3s}.tree .full-width{width:100%}.tree .answer-transition-enter,.tree .answer-transition-leave-to{opacity:0;-webkit-transform:translateY(70px);transform:translateY(70px)}.tree ul{position:relative}.tree ul li{-webkit-transition:1s;transition:1s}.tree .light-theme{border:1px solid #798699;border-radius:5px;padding:4px 8px}.tree .light-theme .tippy-content{color:#798699;font-size:12px;line-height:1}.tree .info-theme{border:1px solid #798699;border-radius:5px;background:#fff!important;padding:4px 8px}.tree .info-theme .tippy-content{color:#798699;font-size:1.4rem;line-height:1}.tree .info-theme .tippy-backdrop{background-color:#fff!important}',""])},6285:function(t,e,a){"use strict";var r=a("b3e9"),i=a.n(r);i.a},"730d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tree container"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading?a("div",{key:"spinner",staticClass:"loading-container"},[a("atom-spinner",{attrs:{"animation-duration":1e3,color:"var(--accent)"}})],1):t._e(),t.loading?t._e():a("div",{key:"content"},[a("h1",[t._v(t._s(t.form_parameters.form_title))]),a("div",{staticClass:"row top-action"},[a("div",{staticClass:"col d-flex"},[t.sets&&t.sets.list_top_dropdown_actions.length>2?[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-dropdown",attrs:{disabled:!t.isChecked}},[t._v("\n                  Действия\n                  "),a("img",{staticClass:"drop-i",attrs:{src:"/img/dropdown-i.png",alt:""}})]),a("div",{staticClass:"dropdown_box"},[a("ul",t._l(t.sets.list_top_dropdown_actions,function(e){return a("li",[a("button",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"left",animation:"fade",distance:"-0",offset:"0,5",delay:[500,250],arrow:!1,theme:"info"},expression:"{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplacement : 'left',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation : 'fade',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdistance  : '-0',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toffset    : '0,5',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdelay     : [500,250],\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tarrow     : false,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttheme     : 'info'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t }"}],staticClass:"dropwond_link",attrs:{content:e.title},on:{click:function(a){return t.massAction(e.code,e.link)}}},[t._v(t._s(e.title))])])}),0)])])]:t._e(),t.form_parameters.drag_and_drop?a("div",{staticClass:"btn btn-green btn-icon",class:{active:t.dragDropEnable,"not-active":!t.dragDropEnable},on:{click:function(e){return t.dragAndDropInit(".dragAndDropLine","ul",!0,"li")}}},[a("img",{staticClass:"svg",attrs:{src:"/img/interfacedashboard/dragdrop.svg",alt:"arrow"}})]):t._e(),a("div",{staticClass:"btn btn-green btn-small",on:{click:t.addFirstLevelRow}},[t._v("Добавить")])],2),a("div",{staticClass:"col-md-7 d-flex align-items-center"},[a("transition",{attrs:{name:"fade"}},[t.filterActive?a("p",{staticClass:"search_result"},[a("b",{staticClass:"accent"},[t._v("Результат поиска:")]),t._v("\n                "+t._s(t.resultItems.length)+" объекта\n              ")]):t._e()]),a("div",{staticClass:"search-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"search",attrs:{type:"search",placeholder:"Поиск"},domProps:{value:t.filter},on:{input:[function(e){e.target.composing||(t.filter=e.target.value)},t.searchTree]}}),a("button",{staticClass:"search_btn",class:{active:t.filter.length>0}},[a("img",{staticClass:"svg",attrs:{src:"/img/interfacedashboard/Search_icon.svg",alt:""}})])])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"tree-box",class:{dragEnable:this.dragDropEnable}},[a("div",{staticClass:"table-header"},[a("div",{staticClass:"checkbox-wrapper"}),a("div",{staticClass:"left-part"}),a("div",{staticClass:"right-part"},[a("table",[a("tr",t._l(t.table_fields,function(e){return a("td",{key:e.key},[t._v(t._s(e.label))])}),0)])])]),a("transition-group",{attrs:{tag:"ul",name:"answer-transition"}},t._l(t.items,function(e,r){return!t.filterActive||Boolean(e.show)?a("TreeElement",{key:e.id||Math.random(),attrs:{model_name:t.form_parameters.form_base_data_model,item:e,depth:1,dragDrop:t.dragDrop,parent:null}}):t._e()}),1)],1)])]),a("div",{staticClass:"row action-buttons"},[t.sets&&t.sets.card_actions?a("div",{staticClass:"col d-flex justify-content-end page_buttons_bottom margin-top-2"},t._l(t.sets.card_actions,function(e){return a("a",{key:e.title,class:e.class,attrs:{id:e.code},on:{click:function(a){return t.saveModel(e)}}},[t._v(t._s(e.title))])}),0):t._e()])])])],1)},i=[],n=a("75fc"),s=(a("6762"),a("2fdb"),a("456d"),a("a481"),a("cebc")),o=(a("b54a"),a("96cf"),a("3b8d")),l=(a("cadf"),a("8615"),a("ac6a"),a("6b54"),a("4a7a")),c=a.n(l),d=a("4583"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"tree-element-header",class:{backlight:!0===t.item.backlight,dragAndDropLine:this.editableFields.parameters["drag_and_drop"]},attrs:{"data-depth":t.depth},on:{mouseenter:function(e){t.item&&(t.dragDrop.item=t.item,t.dragDrop.depth=t.depth)}}},[a("div",{staticClass:"checkbox-wrapper",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"list_checkbox checkbox checkbox-all"},[a("label",{attrs:{for:t.model_name+"_"+t.item.id}},[a("input",{attrs:{type:"checkbox",id:t.model_name+"_"+t.item.id},domProps:{checked:t.item.checked},on:{click:t.selectLevel}}),t._m(0)])])]),a("div",{staticClass:"left-part",class:{open:t.item.visible},style:{"padding-left":2*(t.depth-1)+"rem"}},[a("div",{staticClass:"header-wrapper"},[this.getIcon?a("img",{staticClass:"svg",attrs:{src:this.getIcon,alt:t.title}}):t._e(),a("p",{on:{click:t.goToCard}},[t._v(t._s(t.title))]),t.editableFields.parameters.allow_editing?a("div",{staticClass:"add-question",on:{click:function(e){return e.stopPropagation(),t.editLine(!1)}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}},[a("path",{staticClass:"cls-1",attrs:{id:"Forma_1","data-name":"Forma 1",d:"M1568.54,437.155l-2.68-2.662a1.636,1.636,0,0,0-1.18-.493,1.6,1.6,0,0,0-1.18.493l-1.8,1.783a1.1,1.1,0,0,0-1.04.219l-0.77.767a1.046,1.046,0,0,0-.2,1.153l-8.65,8.617a0.153,0.153,0,0,0-.06.081v0.028c-0.03.028-.03,0.056-0.06,0.081h0l-1.54,4.667h0l-0.16.493-0.17.493c0,0.028,0,.056-0.03.056a0.931,0.931,0,0,0,.08.63,0.6,0.6,0,0,0,.09.137,0.876,0.876,0,0,0,.68.3h0.2c0.02,0,.05,0,0.05-0.028l0.69-.218,4.96-1.619h0a0.54,0.54,0,0,0,.2-0.109l8.68-8.642a0.748,0.748,0,0,0,.36.056,0.989,0.989,0,0,0,.71-0.3l0.78-.768a0.977,0.977,0,0,0,.21-1.069l1.8-1.783A1.632,1.632,0,0,0,1568.54,437.155Zm-12.87,13.774-1.41-1.4,8.24-8.231,1.41,1.4Zm6.12-10.344-8.25,8.23-1.4-1.425,8.24-8.2Zm-10.64,11.99-0.69-.686,1.18-3.567,1.55,1.537h0l1.54,1.537Zm14.05-10.288c-0.02-.028-0.02-0.056-0.05-0.056l-4.27-4.281a0.654,0.654,0,0,0-.14-0.109l0.6-.63,0.06,0.056h0l4.33,4.308a0.182,0.182,0,0,0,.08.056Zm2.62-3.458-1.73,1.728-3.61-3.62,1.73-1.728a0.691,0.691,0,0,1,.94,0l2.67,2.66A0.708,0.708,0,0,1,1567.82,438.829Z",transform:"translate(-1549 -434)"}})])]):t._e(),a("div",{staticClass:"row-actions"},[t.editableFields.parameters.allow_adding_children?a("div",{staticClass:"add-question",on:{click:function(e){return e.stopPropagation(),t.editLine(!0)}}},[a("svg",[a("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M17,13 L13,13 L13,17 L11,17 L11,13 L7,13 L7,11 L11,11 L11,7 L13,7 L13,11 L17,11 L17,13 L17,13 Z",id:"Shape-Copy-3",fill:"#000000"}})])]):t._e(),t.itemChildren.length>0?a("div",{staticClass:"collapse-item",class:{up:t.item.visible},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleLevel(t.item)}}},[a("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})]):t._e()])])]),a("div",{staticClass:"right-part"},[a("table",[a("tr",t._l(t.table_fields,function(e){return a("td",{key:e.key},["actions"===e.column_code?[a("ul",{staticClass:"actions__list"},t._l(t.getActions,function(e){return a("li",{key:e.code},[a("a",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top-start",animation:"fade",distance:"-0",offset:"10,10",delay:[200,250],arrow:!1,theme:"light"},expression:"{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplacement : 'top-start',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation : 'fade',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdistance  : '-0',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toffset    : '10,10',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdelay     : [200,250],\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tarrow     : false,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttheme     : 'light'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t }"}],attrs:{content:e.title},on:{click:function(a){return t.actionHandler(e,[t.item.id])}}},[a("img",{staticClass:"svg",attrs:{src:e.img,alt:""}})])])}),0)]:[a("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top",animation:"fade",distance:"-0",offset:"0,5",delay:[500,250],arrow:!1,theme:"info"},expression:"{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tplacement : 'top',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tanimation : 'fade',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdistance  : '-0',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\toffset    : '0,5',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdelay     : [500,250],\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tarrow     : false,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttheme     : 'info'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t }"}],staticClass:"clip",attrs:{content:t.cellContent(e,t.item)}},[t._v(t._s(t.cellContent(e,t.item)))])]],2)}),0)])])]),a("transition",{attrs:{name:"tree-transition",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave,"after-enter":t.afterEnter,beforeLeave:t.beforeLeave}},[t.itemChildren&&t.itemChildren.length?a("transition-group",{directives:[{name:"show",rawName:"v-show",value:!0===t.item.visible,expression:"item.visible === true"}],staticClass:"tree-element-body",attrs:{tag:"ul",css:!1,name:"answer-transition"},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave,"after-enter":t.afterEnter,beforeLeave:t.beforeLeave}},[t._l(t.itemChildren,function(e){return t._l(t.item[e],function(r,i){return a("TreeElement",{directives:[{name:"show",rawName:"v-show",value:!1!==r.show,expression:"itemTree.show !== false"}],key:e+(r.id||Math.random()),attrs:{item:r,model_name:e,depth:t.element_depth,parent:t.item,"data-index":i,dragDrop:t.dragDrop}})})})],2):t._e()],1)],1)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"checkbox-custom"},[a("i",{staticClass:"fa fa-check"})])}],m=(a("c5f6"),a("a8db")),f=a("bd86"),u=a("56d7"),b=a("bcc2"),g={name:"TreeElement",data:function(){return{table_fields:this.$store.getters.getTableFields,animation:!1}},mounted:function(){u["EventBus"].$emit("treeMask",this.item),this.$set(this.item,"parent",this.parent),this.$set(this.item,"checked",!1),this.imgtosvg()},methods:{goToCard:function(){this.editableFields.parameters["card_l"]&&this.item.id&&this.$bRouter.push(this.editableFields.parameters["card_url"]+"/"+this.item.id)},toggleLevel:function(t,e){if(this.animation)return!1;!1===t.show&&(t.show=!0),!t.hasOwnProperty("visible")&&this.$set(t,"visible",!1),t.visible=!t.visible},beforeEnter:function(t){this.animation=!0,t.style.height="0",t.style.opacity=0},enter:function(t,e){var a=this;Object(b["a"])(t,{opacity:1,height:t.scrollHeight},{complete:function(r){setTimeout(function(){t.style.height="auto",setTimeout(function(){a.animation=!1},500),e()},250)}})},afterEnter:function(t,e){Object(b["a"])(t,{overflow:"visible",height:"auto"})},beforeLeave:function(t){this.animation=!0,t.style.height="".concat(t.scrollHeight,"px")},leave:function(t,e){var a=this;this.$nextTick(function(e){Object(b["a"])(t,{opacity:0,height:0,overflow:"hidden"},{complete:function(){setTimeout(function(){a.animation=!1},500)}})})},selectLevel:function(){var t=this,e=this.$store.getters.formParameters,a=!0===e.select_in_deep&&!0!==e.select_in_level,r=e.show_checked,i=!this.item.checked;function s(e){!e.hasOwnProperty("visible")&&t.$set(e,"visible",!1),e.visible=!0}function o(t,e){r&&s(t);var a=t[e].map(function(t){if(t.checked!==i)return t.checked=i,t.id});a.length>0&&"undefined"!==typeof a[0]&&p(Object(f["a"])({},e,a))}function l(t,e,a){Object(n["a"])(t).forEach(function(t){var r,i=e.hasOwnProperty(t);if(!i)return!1;r=e[t],o(e,t),Object(n["a"])(r).forEach(function(t){l(d(a+1,t),t,a+1)})})}function c(t,e){Object(n["a"])(t).forEach(function(t){var a=e.hasOwnProperty(t);if(!a)return!1;o(e,t)})}function d(e,a){var r=t.$store.getters.getDepthParameters(e)["children_models"],i=[];return r.forEach(function(t){a.hasOwnProperty(t)&&a[t].length>0&&i.push(t)}),i}function p(t){u["EventBus"].$emit("treeSelectModel",{items:t,modeAdd:i})}this.item.checked=!this.item.checked,p(Object(f["a"])({},this.model_name,[this.item.id])),a?l(this.itemChildren,this.item,this.depth):c(this.itemChildren,this.item)},editLine:function(t){var e,a=this,r={modal:{link:this.$bRoute.meta.route,modal_title:"title",fields:this.editableFields.columns,type:"editRow",model:Object(s["a"])({},this.item),model_name:this.model_name,addModels:[],send_request:!1}},i=this.item;if(t){e=this.getNewItem(),r.modal.fields=this.$store.getters.getFieldsParameters[e.child_model]["columns"];var n=e.empty_row,o=(n.parent,Object(m["a"])(n,["parent"]));r.modal.model=o,r.modal.model_name=e.child_model,i=e.empty_row}u["EventBus"].$emit("showModal",r),u["EventBus"].$on("editFinish",function(r){for(var n in console.log(r),r)i[n]=r[n];t&&r&&a.item[e.child_model].push(i),u["EventBus"].$off("editFinish")})},getNewItem:function(){var t=this.$store.getters.getDepthParameters(this.depth)["children_models"][0],e=JSON.parse(JSON.stringify(this.$store.getters.getFieldsParameters[t]["parameters"]["empty_row"]));return this.item[t]||(this.item[t]=[]),{empty_row:e,child_model:t}},cellContent:function(t,e){var a=t.column_code,r=this.editableFields.columns.filter(function(t){return t.column_code===a});return r.length>0?e[r[0]["key"]]:null},actionHandler:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,a){var r,i,n,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.link,i=e.code,n=e.execute_fe_action_l,t.prev=1,!n){t.next=10;break}t.t0=i,t.next="edit"===t.t0?6:"show"===t.t0?8:9;break;case 6:return this.goToCard(),t.abrupt("break",9);case 8:return t.abrupt("break",9);case 9:return t.abrupt("return",!1);case 10:return s=Object(f["a"])({},this.model_name,a),t.next=13,this.$http.post(r,s);case 13:return o=t.sent,o.data.requery&&u["EventBus"].$emit("refreshTreeQuery"),t.next=17,this.$store.dispatch("showToast",{template:o.data.template,title:o.data.title,message:o.data.message,position:o.data.position});case 17:t.next=24;break;case 19:return t.prev=19,t.t1=t["catch"](1),t.t1.response.data.requery&&u["EventBus"].$emit("refreshTreeQuery"),t.next=24,this.$store.dispatch("showToast",{template:"error",title:t.t1.response.status,message:t.t1.response.data.message,position:t.t1.response.data.position});case 24:case"end":return t.stop()}},t,this,[[1,19]])}));function e(e,a){return t.apply(this,arguments)}return e}()},computed:{getIcon:function(){var t,e=this.$store.getters.getDepthParameters(this.depth);return!!e.use_icon&&(t=this.editableFields.parameters.icon?this.editableFields.parameters.icon:e.icon,t)},getActions:function(){var t;return this.editableFields.columns.forEach(function(e){"actions"===e.key&&(t=e.actions_list)}),t},element_depth:function(){return this.depth+1},title:function(){var t=this.editableFields.parameters["model_title_field"];return this.item[t]},itemChildren:function(){var t=this,e=this.$store.getters.getDepthParameters(this.depth)["children_models"],a=[];return e.forEach(function(e){t.item.hasOwnProperty(e)&&t.item[e].length>0&&a.push(e)}),a},editableFields:function(){return this.$store.getters.getFieldsParameters[this.model_name]}},props:{item:{type:Object},dragDrop:{type:Object},depth:{type:Number},model_name:{type:String},parent:{type:Object}},components:{TreeElement:x}},v=g,_=(a("0e82"),a("2877")),w=Object(_["a"])(v,p,h,!1,null,null,null),x=w.exports,k=a("f7fe"),y=a.n(k),$=a("32a7"),C={name:"Tree",mixins:[$["a"]],data:function(){return{sets:{},items:[],treeMask:[],resultItems:[],filter:"",filterActive:!1,increment:0,table_fields:{},form_parameters:{},main_data_models:{},fields_parameters:{},loading:!0,checkedItems:{}}},props:{treeProp:{type:Object,default:null}},methods:{searchTree:y()(function(){var t=this,e=r(this.filter);if(c(this.resultItems),o(this.resultItems),0===e.length)return this.filterActive=!1,!1;this.filterActive=!0;var a=l.call(this);function r(t){return t?t.toString().toLocaleLowerCase():""}function i(e){t.$set(e,"visible",!0),t.$set(e,"show",!0),e.parent&&i(e.parent)}function n(t){t.visible=!1,t.show=!1,t.parent&&n(t.parent)}function s(t){t.forEach(function(t){t.parent&&i(t.parent)})}function o(t){t.forEach(function(t){t.parent&&n(t.parent)})}function l(){return this.treeMask.filter(function(t){var a=Object.values(t);return a.some(function(t){return-1!==r(t).indexOf(e)})})}function c(t){t.forEach(function(t){return t.backlight=!1})}function d(e){e.forEach(function(e){return t.$set(e,"backlight",!0)})}d(a),s.call(this,a),this.resultItems=a},1e3),componentData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,r,i=this,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=n.length>1&&void 0!==n[1]?n[1]:null,t.prev=1,r={},this.treeProp){t.next=9;break}return t.next=6,this.$http.post(e,a);case 6:r=t.sent,t.next=10;break;case 9:r.data=this.treeProp;case 10:this.form_parameters=r.data.form_parameters,this.$store.commit("formParameters",this.form_parameters),this.main_data_models=r.data.main_data_models,this.sets=r.data.sets,this.table_fields=r.data.table_fields,this.fields_parameters=r.data.fields_parameters,this.items=this.main_data_models[this.form_parameters.form_base_data_model],this.$store.commit("setFormParameters",{table_fields:r.data.table_fields,fields_parameters:this.fields_parameters,depths_parameters:r.data.depths_parameters}),this.$nextTick(function(t){i.loading=!1}),t.next=26;break;case 21:t.prev=21,t.t0=t["catch"](1),console.log(t.t0),this.$store.dispatch("showToast",{template:"error",title:t.t0.response.status,message:t.t0.response.data.message,position:t.t0.response.data.position}),this.$bRouter.push({path:"/"+t.t0.response.status});case 26:case"end":return t.stop()}},t,this,[[1,21]])}));function e(e){return t.apply(this,arguments)}return e}(),saveModel:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,r,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,t.prev=1,"back"!=e.code){t.next=11;break}if(!this.model_has_changed){t.next=9;break}return this.$toast.error("Изменения не были сохранены","",{position:"topRight"}),this.$bRouter.go(-1),t.abrupt("return");case 9:return this.$bRouter.go(-1),t.abrupt("return");case 11:return this.treeMask.forEach(function(t){return t.parent=null}),a={main_data_models:this.main_data_models,form_parameters:{form_base_data_model:this.form_parameters.form_base_data_model}},t.next=15,this.$http.post(e.link,a);case 15:r=t.sent,this.treeMask=[],this.main_data_models=Object(s["a"])({},r.data.main_data_models),this.items=r.data.main_data_models[r.data.form_parameters.form_base_data_model],this.$store.dispatch("showToast",{template:r.data.template?r.data.template:"success",title:r.data.title,message:r.data.message,position:r.data.position}),t.next=27;break;case 22:t.prev=22,t.t0=t["catch"](1),this.$store.dispatch("showToast",{template:"error",title:t.t0.response.status,message:t.t0.response.data.message,position:t.t0.response.data.position}),t.t0.response.data.requery&&this.$nextTick(Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i.paramCard.id=i.step_l?i.row_id_fe_route_step_object:i.$bRoute.params[i.$bRoute.meta.id_field],t.next=3,i.componentData(i.$bRoute.meta.route,i.paramCard);case 3:case"end":return t.stop()}},t)}))),400!==t.t0.response.status&&this.$bRouter.replace({path:"/"+t.t0.response.status});case 27:setTimeout(function(t){i.loading=!1},500);case 28:case"end":return t.stop()}},t,this,[[1,22]])}));function e(e){return t.apply(this,arguments)}return e}(),massAction:function(t,e){var a=this;this.$http.post(e,this.checkedItems).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(r){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("download"!==t){e.next=4;break}return e.next=3,a.saveFile(r.data);case 3:return e.abrupt("return");case 4:i={id:a.$bRoute.params[a.$bRoute.meta.id_field]},a.$bRoute.meta.prev_controller_alias&&(i["dependent"]={controller_alias:a.$bRoute.meta.prev_controller_alias,id:a.$bRoute.params[a.$bRoute.meta.prev_id_field]}),a.componentData(a.$bRoute.meta.route,i),a.$store.dispatch("showToast",{template:r.data.template,title:r.data.title,message:r.data.message,position:r.data.position});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(t){a.$store.dispatch("showToast",{template:"error",title:t.response.status,message:t.response.data.message,position:t.response.data.position})})},addFirstLevelRow:function(){var t=this,e=this.form_parameters["form_base_data_model"],a=this.fields_parameters[e],r=a.parameters,i=a.columns,n=JSON.parse(JSON.stringify(r.empty_row)),s={modal:{link:this.$bRoute.meta.route,modal_title:"title",fields:i,type:"editRow",model:n,model_name:e,addModels:[],send_request:!1}},o=n;u["EventBus"].$emit("showModal",s),u["EventBus"].$on("editFinish",function(e){if(console.log(e),e){for(var a in e)o[a]=e[a];t.items.push(o)}u["EventBus"].$off("editFinish")})}},created:function(){var t=this;u["EventBus"].$on("treeMask",function(e){t.treeMask.push(e)}),u["EventBus"].$on("refreshTreeQuery",function(e){t.componentData(t.$bRoute.meta.route,{id:t.$bRoute.params[t.$bRoute.meta["id_field"]]})});var e=document.querySelector(".wrapper");e.style.overflow="hidden",u["EventBus"].$on("treeSelectModel",function(e){var a=e.modeAdd,r=Object.keys(e.items);function i(t,e){var a=t[e].length;0===a&&delete t[e]}function n(t,e,r){r.forEach(function(r){var n=t[e].includes(r);if(!n&&a)t[e].push(r);else if(n&&!a){var s=t[e].indexOf(r);t[e].splice(s,1),i(t,e)}})}r.forEach(function(a){t.checkedItems.hasOwnProperty(a)?n(t.checkedItems,a,e.items[a]):t.$set(t.checkedItems,a,e.items[a])})})},computed:{isChecked:function(){var t=this,e=0;return Object(n["a"])(Object.keys(this.checkedItems)).forEach(function(a){e+=t.checkedItems[a].length}),0!==e}},components:{vSelect:c.a,TreeElement:x,AtomSpinner:d["a"]},beforeDestroy:function(){var t=document.querySelector(".wrapper");t.style.overflow="visible"},mounted:function(){var t=this;this.componentData(this.$bRoute.meta.route,{id:this.$bRoute.params[this.$bRoute.meta["id_field"]]}),this.$nextTick(function(e){t.imgtosvg()})}},E=C,O=(a("6285"),Object(_["a"])(E,r,i,!1,null,null,null));e["default"]=O.exports},a6b3:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,":root{--accent:#e1002d;--bg-color:#fff;--base-color:#202a3d;--darkAccent:#a2001e;--tableHead:#788699}.tree-element-header{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:-1px;background-color:#fff;color:#7c8ca5;-webkit-box-shadow:0 0 0 0 hsla(0,0%,100%,.27);box-shadow:0 0 0 0 hsla(0,0%,100%,.27);-webkit-transition:.35s linear;transition:.35s linear;position:relative;z-index:99}.tree-element-header:hover{-webkit-box-shadow:0 0 14.4px 1.6px rgba(120,134,153,.27);box-shadow:0 0 14.4px 1.6px rgba(120,134,153,.27);z-index:999}.tree-element-header .checkbox-wrapper{width:7rem;-ms-flex-negative:0;flex-shrink:0;border:1px solid #ced0da}.tree-element-header .checkbox-wrapper .list_checkbox{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tree-element-header .checkbox-wrapper .checkbox-custom{margin-right:0}.tree-element-header .left-part{min-width:calc(50% - 3.5rem);max-width:calc(50% - 3.5rem);display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:-1px;border:1px solid #ced0da;border-right:0}.tree-element-header .left-part p{font-size:1.4rem;font-weight:400;-webkit-transition:color .25s;transition:color .25s}.tree-element-header .left-part svg,.tree-element-header .left-part svg path{fill:#7c8ca5;-webkit-transition:.25s;transition:.25s;margin-right:1rem}.tree-element-header .left-part img.svg{margin-right:1rem}.tree-element-header .left-part .header-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;border-right:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:2rem}.tree-element-header .left-part .header-wrapper p{cursor:pointer}.tree-element-header .left-part .add-question{margin-left:1rem;cursor:pointer;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.tree-element-header .left-part .add-question:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.tree-element-header .left-part .add-question path{fill:var(--accent)}.tree-element-header .left-part .row-actions{margin-left:auto}.tree-element-header .left-part .collapse-item{margin-left:auto;margin-right:2rem;cursor:pointer;-webkit-transition:.35s ease-in-out;transition:.35s ease-in-out;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:2.5rem;height:2.5rem;border-radius:100%;-webkit-box-shadow:0 0 0 #fff;box-shadow:0 0 0 #fff}.tree-element-header .left-part .collapse-item i{color:#b4b5c1;-webkit-transition:.25s;transition:.25s;-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.tree-element-header .left-part .collapse-item.up i{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);color:var(--accent)}.tree-element-header .left-part.open>.header-wrapper svg,.tree-element-header .left-part.open>.header-wrapper svg path{fill:var(--accent)}.tree-element-header .left-part.open>.header-wrapper p{color:var(--accent)}.tree-element-header .right-part{width:50%;border:1px solid #ced0da;border-left:none}.tree-element-header .right-part table{width:100%;height:100%;table-layout:fixed}.tree-element-header .right-part table td{border-left:1px solid #ced0da;vertical-align:middle;text-align:center;font-size:1.4rem;padding:.5rem 1rem}.tree-element-header .right-part table td .actions__list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.tree-element-header .right-part table td .actions__list a{cursor:pointer}.tree-element-header .right-part table td .actions__list a svg path{fill:var(--accent)}.tree-element-header.backlight{position:relative;background-color:var(--accent);color:#fff}.tree-element-header.backlight .checkbox-wrapper{border-color:var(--accent)}.tree-element-header.backlight .checkbox-wrapper .checkbox input:checked+.checkbox-custom{background-color:#fff}.tree-element-header.backlight .checkbox-wrapper .checkbox input:checked+.checkbox-custom i{color:var(--accent)}.tree-element-header.backlight .left-part{border-color:var(--accent)}.tree-element-header.backlight .left-part .collapse-item.up i,.tree-element-header.backlight .left-part .collapse-item i{color:#fff}.tree-element-header.backlight .right-part,.tree-element-header.backlight .right-part table td{border-color:var(--accent)}.tree-element-header.backlight .left-part.open>.header-wrapper>svg path,.tree-element-header.backlight .left-part>.header-wrapper>svg path,.tree-element-header.backlight .right-part .actions__list a svg,.tree-element-header.backlight .right-part .actions__list a svg path{fill:#fff}.tree-element-header.backlight .left-part.open>.header-wrapper p,.tree-element-header.backlight .left-part>.header-wrapper p{color:#fff}.tree-element-header.backlight .checkbox-wrapper,.tree-element-header.backlight .left-part,.tree-element-header.backlight .right-part{position:relative;z-index:999}",""])},a8db:function(t,e,a){"use strict";var r=a("e265"),i=a.n(r),n=a("a4bb"),s=a.n(n);function o(t,e){if(null==t)return{};var a,r,i={},n=s()(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}function l(t,e){if(null==t)return{};var a,r,n=o(t,e);if(i.a){var s=i()(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}a.d(e,"a",function(){return l})},b3e9:function(t,e,a){var r=a("2288");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("499e").default;i("2fd4ac26",r,!0,{sourceMap:!1,shadowMode:!1})},c496:function(t,e,a){var r=a("a6b3");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("499e").default;i("48134c87",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-43e2e309.7f734926.js.map