(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4NsP":function(t,n,i){"use strict";i.r(n),i.d(n,"InstitutionsModule",(function(){return Y}));var e=i("Valr"),o=i("DUip"),a=i("wHSu"),c=i("TYT/"),r=i("2yus"),l=i("JOp9"),s=i("2MiI"),b=i("A27j"),d=i("6BC6"),u=i("QJY3"),f=i("qSak"),p=i("o8Qb");function g(t,n){1&t&&c.Ob(0,"app-loading-block")}var m=function(t){return["/","institutions","add",t]};function T(t,n){if(1&t&&(c.Tb(0,"li",10),c.Tb(1,"div",11),c.Tb(2,"b"),c.Cc(3),c.Sb(),c.Tb(4,"small",12),c.Cc(5),c.Sb(),c.Sb(),c.Tb(6,"div"),c.Tb(7,"small"),c.Cc(8),c.Sb(),c.Sb(),c.Sb()),2&t){var i=n.$implicit;c.kc("routerLink",c.nc(4,m,null==i?null:i.id)),c.Bb(3),c.Ec("",null==i?null:i.name," "),c.Bb(2),c.Dc(null==i?null:i.level),c.Bb(3),c.Dc(null==i?null:i.zone)}}function S(t,n){if(1&t&&(c.Tb(0,"ul"),c.Ac(1,T,9,6,"li",9),c.Sb()),2&t){var i=c.ec();c.Bb(1),c.kc("ngForOf",i.data)}}var h=function(){return["/","institutions","add"]},O=function(){function t(t,n){var i=this;this.rest=t,this.shared=n,this.faHome=a.e,this.faPlus=a.g,this.faDownload=a.d,this.data=[],this.loading=!1,this.page=1,this.limit=9,this.src="",this.roundInnerHeight=function(t,n,i){return void 0===i&&(i=.02),parseInt(String(t+n))+parseInt(String(t+n))*i},this.search=function(t){i.data=[],t.length>2?(i.page=1,i.actualPage=null,i.load(["&src="+t])):(i.actualPage=null,i.page=1,i.load())},this.report=function(){i.shared.confirm("Reporte","","OK").then((function(t){i.rest.get("institutions?export=pdf").subscribe((function(t){window.open(t.data.file)}),(function(t){}))}))},this.load=function(t){void 0===t&&(t=[]);var n=["institutions","?limit="+i.limit];i.page&&i.actualPage!==i.page&&!i.loading&&(n=["institutions?","limit="+i.limit+"&page="+i.page,""+t.join("")],i.loading=!0,i.rest.get(n.join("")).subscribe((function(t){return i.parseDate(t.data.data,t.data.next_page_url,t.data.from)}),(function(t){i.loading=!1})))},this.parseDate=function(t,n,e){void 0===t&&(t=[]),i.actualPage=e,i.loading=!1,i.page=i.shared.parsePageUrl(n),t.map((function(t){return i.data.push(t)}))}}return t.prototype.onScroll=function(){this.roundInnerHeight(window.innerHeight,window.scrollY)>parseInt(String(document.body.offsetHeight))&&this.load()},t.prototype.ngOnInit=function(){this.load()},t.\u0275fac=function(n){return new(n||t)(c.Nb(r.a),c.Nb(l.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-list"]],hostBindings:function(t,n){1&t&&c.bc("scroll",(function(){return n.onScroll()}),!1,c.sc)},decls:16,vars:14,consts:[[3,"label","icon"],[1,"list-user","p-2","pl-3","pr-3"],[1,"d-flex","justify-content-between","mb-2","pl-1","pr-1"],[1,"btn","btn-outline-info","btn-sm",3,"click"],[3,"icon"],[1,"btn","btn-outline-secondary","btn-sm",3,"routerLink"],[1,"form-group"],["autocomplete","off","type","text","id","src","placeholder","Buscar...",1,"form-control","src-input",3,"ngModel","ngModelChange"],[4,"ngIf"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"d-flex","justify-content-between"],[1,"text-muted"]],template:function(t,n){1&t&&(c.Ob(0,"app-header",0),c.fc(1,"translate"),c.Ob(2,"app-logged-user"),c.Tb(3,"div",1),c.Tb(4,"div",2),c.Tb(5,"button",3),c.bc("click",(function(){return n.report()})),c.Ob(6,"fa-icon",4),c.Tb(7,"span"),c.Cc(8),c.fc(9,"translate"),c.Sb(),c.Sb(),c.Tb(10,"button",5),c.Ob(11,"fa-icon",4),c.Sb(),c.Sb(),c.Tb(12,"div",6),c.Tb(13,"input",7),c.bc("ngModelChange",(function(t){return n.src=t}))("ngModelChange",(function(t){return n.search(t)})),c.Sb(),c.Sb(),c.Ac(14,g,1,0,"app-loading-block",8),c.Ac(15,S,2,1,"ul",8),c.Sb()),2&t&&(c.kc("label",c.gc(1,9,"HEADER.INSTITUTIONS"))("icon",n.faHome),c.Bb(6),c.kc("icon",n.faDownload),c.Bb(2),c.Dc(c.gc(9,11,"INSTITUTIONS.REPORT")),c.Bb(2),c.kc("routerLink",c.mc(13,h)),c.Bb(1),c.kc("icon",n.faPlus),c.Bb(2),c.kc("ngModel",n.src),c.Bb(1),c.kc("ngIf",n.loading),c.Bb(1),c.kc("ngIf",!n.loading))},directives:[s.a,b.a,d.a,o.d,u.c,u.n,u.p,e.k,f.a,e.j],pipes:[p.c],styles:[".list-user[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;font-size:.8rem;background-color:#fff}.list-user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1rem;margin-bottom:.5rem;border-bottom:1px solid #f4f4f4}.list-user[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:0}.src-input[_ngcontent-%COMP%]{border:0 solid #fff;border-radius:3px;font-size:.8rem;background-color:hsla(0,0%,100%,.45)}"]}),t}(),I=i("jioA"),v=i("cUzu"),k=i("hMSI"),N=i("zRhN"),C=i("JYfv"),B=i("YRkU"),M=function(t,n){return["/","forms",t,"add",n]},D=function(t){return["/","forms",t,"add"]};function y(t,n){if(1&t&&(c.Tb(0,"li",2),c.Tb(1,"div"),c.Ob(2,"fa-icon",3),c.Tb(3,"span",4),c.Cc(4),c.Sb(),c.Sb(),c.Sb()),2&t){var i=n.$implicit,e=c.ec(2);c.kc("routerLink",e.target?c.oc(3,M,null==i?null:i.id,e.target):c.nc(6,D,null==i?null:i.id)),c.Bb(2),c.kc("icon",e.faTasks),c.Bb(2),c.Dc(null==i?null:i.title)}}function P(t,n){if(1&t&&(c.Tb(0,"ul"),c.Ac(1,y,5,8,"li",1),c.Sb()),2&t){var i=c.ec();c.Bb(1),c.kc("ngForOf",i.data)}}function E(t,n){1&t&&c.Ob(0,"app-loading-block")}var R=function(){function t(t){var n=this;this.rest=t,this.target=null,this.faTasks=a.j,this.loading=!1,this.load=function(t){void 0===t&&(t=""),n.loading=!0,n.rest.get("forms?filters=source,=,"+t).subscribe((function(t){n.data=t.data.data,n.loading=!1}),(function(t){n.loading=!1}))}}return t.prototype.ngOnInit=function(){this.load("institutions")},t.\u0275fac=function(n){return new(n||t)(c.Nb(r.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-list-forms"]],inputs:{target:"target"},decls:2,vars:2,consts:[[4,"ngIf"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[3,"icon"],[1,"ml-1"]],template:function(t,n){1&t&&(c.Ac(0,P,2,1,"ul",0),c.Ac(1,E,1,0,"app-loading-block",0)),2&t&&(c.kc("ngIf",!n.loading),c.Bb(1),c.kc("ngIf",n.loading))},directives:[e.k,e.j,o.d,d.a,f.a],styles:["[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#fcfcfc;padding:.45rem;margin-bottom:.25rem}"]}),t}();function A(t,n){if(1&t&&(c.Tb(0,"option",35),c.Cc(1),c.Sb()),2&t){var i=n.$implicit;c.kc("value",null==i?null:i.value),c.Bb(1),c.Dc(null==i?null:i.name)}}function _(t,n){if(1&t&&(c.Tb(0,"div",6),c.Tb(1,"label",12),c.Cc(2),c.fc(3,"translate"),c.Sb(),c.Ob(4,"app-list-forms",36),c.Sb()),2&t){var i=c.ec();c.Bb(2),c.Dc(c.gc(3,2,"INSTITUTIONS.FORM.FORMS")),c.Bb(2),c.kc("target",i.id)}}function w(t,n){}function F(t,n){if(1&t&&c.Ob(0,"img",40),2&t){var i=c.ec().$implicit;c.kc("src",null==i?null:i.src,c.vc)}}function L(t,n){if(1&t&&c.Ob(0,"img",40),2&t){var i=c.ec().$implicit;c.kc("src",null==i?null:i.small,c.vc)}}var U=function(t){return{"image-loading":t}};function x(t,n){if(1&t){var i=c.Ub();c.Tb(0,"div",37),c.Tb(1,"span",38),c.bc("click",(function(){c.tc(i);var t=n.$implicit;return c.ec().removeImage(t)})),c.Ob(2,"fa-icon",4),c.Sb(),c.Ac(3,F,1,1,"img",39),c.Ac(4,L,1,1,"img",39),c.Sb()}if(2&t){var e=n.$implicit,o=c.ec();c.kc("ngClass",c.nc(4,U,null==e?null:e.loading)),c.Bb(2),c.kc("icon",o.faTimes),c.Bb(1),c.kc("ngIf",null==e?null:e.src),c.Bb(1),c.kc("ngIf",null==e?null:e.small)}}var H=function(){return{standalone:!0}},j=function(){function t(t,n,i,e,o,c,r){var l=this;this.formBuilder=t,this.rest=n,this.router=i,this.shared=e,this.http=o,this.cookie=c,this.route=r,this.faHome=a.e,this.faDownload=a.d,this.faTrash=a.l,this.faCamera=a.a,this.faImage=a.f,this.faTimes=a.k,this.loading=!1,this.id=!1,this.images=[],this.users=[],this.institutions=[],this.adapter=new I.a(this.http,this.cookie),this.type=[{name:"Publico",value:"public",select:!1},{name:"Privado",value:"private",select:!1}],this.onSubmit=function(){l.loading=!0,l.form.patchValue({extra:l.itemsAsObjects,images:l.images}),l.rest[l.id?"put":"post"]("institutions"+(l.id?"/"+l.id:""),l.form.value).subscribe((function(t){l.loading=!1,l.router.navigate(["/","institutions","add",t.data.id])}),(function(t){l.loading=!1}))},this.load=function(t){void 0===t&&(t=!1),l.rest.get("institutions/"+l.id+(t?"?export=pdf":"")).subscribe((function(t){l.itemsAsObjects=l.shared.wrapperDataExtra(t.data),l.images=t.data.images,l.form.patchValue(t.data)}),(function(t){}))},this.trash=function(){l.shared.confirm("\xbfSeguro?","","OK").then((function(t){l.rest.delete("institutions/"+l.id).subscribe((function(){return l.router.navigate(["/","institutions"])}),(function(t){}))}))},this.report=function(){l.shared.confirm("Reporte","","OK").then((function(t){l.rest.get("institutions/"+l.id+"?export=pdf").subscribe((function(t){window.open(t.data.url)}),(function(t){}))}))},this.addImage=function(t){l.loading=!0,l.shared.toBase64(t.file).then((function(n){l.images.push({name:t.fileName,src:n,loading:!0})}))},this.uploadImage=function(t){l.loading=!1,l.images.forEach((function(n){t.fileName===n.name&&(n.online=JSON.parse(t.fileId),n.loading=!1,n.id=n.online.id)}))},this.uploadImageFail=function(t){l.loading=!1},this.removeImage=function(t){l.images=l.images.filter((function(n){return n.id!==t.id}))},this.loadInstitutions=function(){l.rest.get("institutions?limit=10000").subscribe((function(t){l.institutions=t.data.data}),(function(t){}))},this.loadUsers=function(){l.rest.get("users?limit=10000").subscribe((function(t){l.users=t.data.data}),(function(t){}))}}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe((function(n){t.id=n.id,t.load(),t.loadInstitutions(),t.loadUsers()})),this.form=this.formBuilder.group({name:["",u.u.required],address:["",u.u.required],phone:["",u.u.required],description:[""],date:[""],type:[""],images:[""],extra:[""]})},t.\u0275fac=function(n){return new(n||t)(c.Nb(u.e),c.Nb(r.a),c.Nb(o.c),c.Nb(l.a),c.Nb(v.a),c.Nb(k.a),c.Nb(o.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-add"]],decls:91,vars:77,consts:[[3,"label","icon"],[1,"edit-add-user","p-2","pl-2","pr-2","ml-3","mr-3"],[1,"d-flex","pt-0","pb-1","mb-2","pl-0","pr-0","border-bottom-section"],[1,"badge","badge-info","mr-2",3,"click"],[3,"icon"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","form_date"],["type","date","formControlName","date","id","form_date","placeholder","",1,"form-control"],[1,"form-text","text-muted"],["for","form_name"],["type","text","formControlName","name","id","form_name","placeholder","",1,"form-control"],["for","form_address"],["type","text","formControlName","address","id","form_address","placeholder","",1,"form-control"],["for","form_phone"],["type","phone","formControlName","phone","id","form_phone","placeholder","",1,"form-control"],["for","form_description"],["name","","id","form_description","formControlName","description","cols","30","rows","3",1,"form-control"],["for","form_type"],["formControlName","type","id","form_type",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],[3,"identifyBy","secondaryPlaceholder","displayBy","placeholder","ngModel","ngModelOptions","ngModelChange"],["class","form-group",4,"ngIf"],["itemTemplate",""],[1,"col-12","row","m-0","p-0"],["class","col-4 pl-0 pt-0 pb-1 pr-1",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-4","p-0"],[1,"customPicker",3,"adapter","itemTemplate","fileAdded","uploadSuccess","uploadFail"],[1,"dropzoneTemplate","text-center"],["size","2x",3,"icon"],[1,"d-flex"],[1,"w-75"],[1,"btn","btn-info","w-100",3,"appLoadingButton","dis","label"],[1,"w-25","pl-1"],["type","button",1,"btn","btn-danger","w-100",3,"disabled","click"],[3,"value"],[3,"target"],[1,"col-4","pl-0","pt-0","pb-1","pr-1",3,"ngClass"],[1,"icon-close",3,"click"],["class","img-gallery","alt","",3,"src",4,"ngIf"],["alt","",1,"img-gallery",3,"src"]],template:function(t,n){if(1&t&&(c.Ob(0,"app-header",0),c.fc(1,"translate"),c.Ob(2,"app-logged-user"),c.Tb(3,"div",1),c.Tb(4,"div",2),c.Tb(5,"span",3),c.bc("click",(function(){return n.report()})),c.Ob(6,"fa-icon",4),c.Cc(7),c.fc(8,"translate"),c.Sb(),c.Sb(),c.Tb(9,"form",5),c.bc("ngSubmit",(function(){return n.onSubmit()})),c.Tb(10,"div",6),c.Tb(11,"label",7),c.Cc(12),c.fc(13,"translate"),c.Sb(),c.Ob(14,"input",8),c.Tb(15,"small",9),c.Cc(16),c.fc(17,"translate"),c.Sb(),c.Sb(),c.Tb(18,"div",6),c.Tb(19,"label",10),c.Cc(20),c.fc(21,"translate"),c.Sb(),c.Ob(22,"input",11),c.Tb(23,"small",9),c.Cc(24),c.fc(25,"translate"),c.Sb(),c.Sb(),c.Tb(26,"div",6),c.Tb(27,"label",12),c.Cc(28),c.fc(29,"translate"),c.Sb(),c.Ob(30,"input",13),c.Tb(31,"small",9),c.Cc(32),c.fc(33,"translate"),c.Sb(),c.Sb(),c.Tb(34,"div",6),c.Tb(35,"label",14),c.Cc(36),c.fc(37,"translate"),c.Sb(),c.Ob(38,"input",15),c.Tb(39,"small",9),c.Cc(40),c.fc(41,"translate"),c.Sb(),c.Sb(),c.Tb(42,"div",6),c.Tb(43,"label",16),c.Cc(44),c.fc(45,"translate"),c.Sb(),c.Ob(46,"textarea",17),c.Tb(47,"small",9),c.Cc(48),c.fc(49,"translate"),c.Sb(),c.Sb(),c.Tb(50,"div",6),c.Tb(51,"label",18),c.Cc(52),c.fc(53,"translate"),c.Sb(),c.Tb(54,"select",19),c.Ac(55,A,2,2,"option",20),c.Sb(),c.Tb(56,"small",9),c.Cc(57),c.fc(58,"translate"),c.Sb(),c.Sb(),c.Tb(59,"div",6),c.Tb(60,"label"),c.Cc(61),c.fc(62,"translate"),c.Sb(),c.Tb(63,"tag-input",21),c.bc("ngModelChange",(function(t){return n.itemsAsObjects=t})),c.Sb(),c.Tb(64,"small",9),c.Cc(65),c.fc(66,"translate"),c.Sb(),c.Sb(),c.Ac(67,_,5,4,"div",22),c.Tb(68,"div",6),c.Tb(69,"label"),c.Cc(70),c.fc(71,"translate"),c.Sb(),c.Ac(72,w,0,0,"ng-template",null,23,c.Bc),c.Tb(74,"div",24),c.Ac(75,x,5,6,"div",25),c.Tb(76,"div",26),c.Tb(77,"ngx-file-picker",27),c.bc("fileAdded",(function(t){return n.addImage(t)}))("uploadSuccess",(function(t){return n.uploadImage(t)}))("uploadFail",(function(t){return n.uploadImageFail(t)})),c.Tb(78,"div",28),c.Ob(79,"fa-icon",29),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(80,"small",9),c.Cc(81),c.fc(82,"translate"),c.Sb(),c.Sb(),c.Tb(83,"div",30),c.Tb(84,"div",31),c.Tb(85,"button",32),c.fc(86,"translate"),c.Cc(87," ENVIAR "),c.Sb(),c.Sb(),c.Tb(88,"div",33),c.Tb(89,"button",34),c.bc("click",(function(){return n.trash()})),c.Ob(90,"fa-icon",4),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t){var i=c.rc(73);c.kc("label",c.gc(1,38,"HEADER.INSTITUTIONS"))("icon",n.faHome),c.Bb(6),c.kc("icon",n.faDownload),c.Bb(1),c.Ec(" ",c.gc(8,40,"INSTITUTIONS.REPORT"),""),c.Bb(2),c.kc("formGroup",n.form),c.Bb(3),c.Dc(c.gc(13,42,"INSTITUTIONS.FORM.DATE")),c.Bb(4),c.Dc(c.gc(17,44,"INSTITUTIONS.FORM.DATE_PLACEHOLDER")),c.Bb(4),c.Dc(c.gc(21,46,"INSTITUTIONS.FORM.NAME")),c.Bb(4),c.Dc(c.gc(25,48,"INSTITUTIONS.FORM.NAME_PLACEHOLDER")),c.Bb(4),c.Dc(c.gc(29,50,"INSTITUTIONS.FORM.ADDRESS")),c.Bb(4),c.Dc(c.gc(33,52,"INSTITUTIONS.FORM.ADDRESS_PLACEHOLDER")),c.Bb(4),c.Dc(c.gc(37,54,"INSTITUTIONS.FORM.PHONE")),c.Bb(4),c.Dc(c.gc(41,56,"INSTITUTIONS.FORM.PHONE_PLACEHOLDER")),c.Bb(4),c.Dc(c.gc(45,58,"INSTITUTIONS.FORM.DESCRIPTION")),c.Bb(4),c.Dc(c.gc(49,60,"INSTITUTIONS.FORM.DESCRIPTION_PLACEHOLDER")),c.Bb(4),c.Dc(c.gc(53,62,"INSTITUTIONS.FORM.TYPE")),c.Bb(3),c.kc("ngForOf",n.type),c.Bb(2),c.Dc(c.gc(58,64,"INSTITUTIONS.FORM.USER_PLACEHOLDER")),c.Bb(4),c.Dc(c.gc(62,66,"INSTITUTIONS.FORM.TAG")),c.Bb(2),c.kc("identifyBy","key")("secondaryPlaceholder","")("displayBy","value")("placeholder","")("ngModel",n.itemsAsObjects)("ngModelOptions",c.mc(76,H)),c.Bb(2),c.Dc(c.gc(66,68,"USER.FORM.TAG_PLACEHOLDER")),c.Bb(2),c.kc("ngIf",n.id),c.Bb(3),c.Dc(c.gc(71,70,"INSTITUTIONS.FORM.IMAGES")),c.Bb(5),c.kc("ngForOf",n.images),c.Bb(2),c.kc("adapter",n.adapter)("itemTemplate",i),c.Bb(2),c.kc("icon",n.faImage),c.Bb(2),c.Dc(c.gc(82,72,"INSTITUTIONS.FORM.IMAGES_PLACEHOLDER")),c.Bb(4),c.kc("appLoadingButton",n.loading)("dis",!n.form.valid)("label",c.gc(86,74,"GENERAL.LOADING")),c.Bb(4),c.kc("disabled",!n.form.valid),c.Bb(1),c.kc("icon",n.faTrash)}},directives:[s.a,b.a,d.a,u.w,u.o,u.j,u.c,u.n,u.h,u.t,e.j,N.a,u.p,e.k,C.b,B.a,u.q,u.v,R,e.i],pipes:[p.c],styles:[".edit-add-user[_ngcontent-%COMP%]{padding:0;list-style:none;font-size:.8rem;background-color:#fff}.form-control[_ngcontent-%COMP%]{border-radius:0;font-size:.8rem;background-color:#fafafa;border:0 solid #fff;border-bottom:1px solid #ddd}input.ng-touched.ng-invalid[_ngcontent-%COMP%]{border:1px solid #ff756b}.border-bottom-section[_ngcontent-%COMP%]{border-bottom:1px solid #fafafa}.badge[_ngcontent-%COMP%]{font-size:90%;background-color:#00bcd4;color:#fff;font-weight:500;border-radius:3px;padding:.35rem}"]}),t}(),z=[{path:"",component:O},{path:"add",component:j},{path:"add/:id",component:j}],G=function(){function t(){}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(n){return new(n||t)},imports:[[o.f.forChild(z)],o.f]}),t}(),$=i("ct+p"),J=i("PCNd"),Y=function(){function t(){}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(n){return new(n||t)},imports:[[e.c,G,$.HomeModule,u.s,J.a,p.b,N.b,d.b,u.k,C.c]]}),t}()}}]);