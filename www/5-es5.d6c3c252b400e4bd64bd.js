(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/yGZ":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),o=u("oBZk"),r=u("ZZ/e"),s=u("gIcY"),a=u("ZYCi"),b=u("Ip0R"),c=u("mrSG"),d=u("qfBg"),g=function(){function l(l,n,u,t,e){this.afAuth=l,this.toastCtrl=n,this.router=u,this.user=t,this.titleService=e,this.username="",this.password="",this.titleService.setTitle("MIMA Login")}return l.prototype.ngOnInit=function(){},l.prototype.login=function(){return c.__awaiter(this,void 0,void 0,(function(){var l,n,u,t,e;return c.__generator(this,(function(i){switch(i.label){case 0:n=(l=this).username,u=l.password,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.afAuth.auth.signInWithEmailAndPassword(n,u)];case 2:return(t=i.sent()).user&&(this.user.setUser({username:n,uid:t.user.uid}),this.router.navigateByUrl("/modules-list")),"4bwqZympg4OisQKEsxnNUOeuTeX2"===t.user.uid&&this.router.navigateByUrl("/admin-home"),console.dir("successful login"),[3,4];case 3:return e=i.sent(),console.dir(e),e.code&&(console.dir("User not found"),this.showToast("Incorrect username or password")),[3,4];case 4:return[2]}}))}))},l.prototype.showToast=function(l){this.toastCtrl.create({message:l,duration:5e3}).then((function(l){return l.present()}))},l}(),h=u("ZBkt"),p=u("ZYjt"),f=t.sb({encapsulation:0,styles:[[""]],data:{}});function k(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,6,"ion-header",[],null,null,null,o.M,o.n)),t.tb(1,49152,null,0,r.A,[t.h,t.k,t.z],null,null),(l()(),t.ub(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.X,o.y)),t.tb(3,49152,null,0,r.Bb,[t.h,t.k,t.z],null,null),(l()(),t.ub(4,0,null,0,2,"ion-title",[],null,null,null,o.W,o.x)),t.tb(5,49152,null,0,r.zb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Mental Skills Cirriculum"])),(l()(),t.ub(7,0,null,null,38,"ion-content",[["class","ion-padding"]],null,null,null,o.J,o.k)),t.tb(8,49152,null,0,r.t,[t.h,t.k,t.z],null,null),(l()(),t.ub(9,0,null,0,26,"ion-list",[["style","display:flex; flex-direction:column; align-items:center; align-content:center; justify-content:center;"]],null,null,null,o.R,o.s)),t.tb(10,49152,null,0,r.N,[t.h,t.k,t.z],null,null),(l()(),t.ub(11,0,null,0,0,"img",[["src","../../../assets/module_pictures/logo.png"]],null,null,null,null,null)),(l()(),t.ub(12,0,null,0,11,"ion-item",[["style","width:100%;"]],null,null,null,o.P,o.q)),t.tb(13,49152,null,0,r.G,[t.h,t.k,t.z],null,null),(l()(),t.ub(14,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.Q,o.r)),t.tb(15,49152,null,0,r.M,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Lb(-1,0,["Email"])),(l()(),t.ub(17,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,18)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,18)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.username=u)&&e),e}),o.O,o.p)),t.tb(18,16384,null,0,r.Lb,[t.k],null,null),t.Ib(1024,null,s.b,(function(l){return[l]}),[r.Lb]),t.tb(20,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,s.c,null,[s.e]),t.tb(22,16384,null,0,s.d,[[4,s.c]],null,null),t.tb(23,49152,null,0,r.F,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.ub(24,0,null,0,11,"ion-item",[["style","width:100%;"]],null,null,null,o.P,o.q)),t.tb(25,49152,null,0,r.G,[t.h,t.k,t.z],null,null),(l()(),t.ub(26,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.Q,o.r)),t.tb(27,49152,null,0,r.M,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Lb(-1,0,["Password"])),(l()(),t.ub(29,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,30)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,30)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.password=u)&&e),e}),o.O,o.p)),t.tb(30,16384,null,0,r.Lb,[t.k],null,null),t.Ib(1024,null,s.b,(function(l){return[l]}),[r.Lb]),t.tb(32,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,s.c,null,[s.e]),t.tb(34,16384,null,0,s.d,[[4,s.c]],null,null),t.tb(35,49152,null,0,r.F,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.ub(36,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.ub(37,0,null,0,2,"ion-button",[["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.login()&&t),t}),o.B,o.c)),t.tb(38,49152,null,0,r.j,[t.h,t.k,t.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),t.Lb(-1,0,["Login"])),(l()(),t.ub(40,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.ub(41,0,null,0,4,"ion-button",[["expand","block"],["fill","outline"],["routerLink","/create-account"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,43).onClick()&&e),"click"===n&&(e=!1!==t.Fb(l,44).onClick(u)&&e),e}),o.B,o.c)),t.tb(42,49152,null,0,r.j,[t.h,t.k,t.z],{expand:[0,"expand"],fill:[1,"fill"]},null),t.tb(43,16384,null,0,a.n,[a.m,a.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.tb(44,737280,null,0,r.Jb,[b.i,r.Gb,t.k,a.m,[2,a.n]],null,null),(l()(),t.Lb(-1,0,["Create an Account"]))],(function(l,n){var u=n.component;l(n,15,0,"floating"),l(n,20,0,u.username),l(n,23,0,"text"),l(n,27,0,"floating"),l(n,32,0,u.password),l(n,35,0,"password"),l(n,38,0,"block","solid"),l(n,42,0,"block","outline"),l(n,43,0,"/create-account"),l(n,44,0)}),(function(l,n){l(n,17,0,t.Fb(n,22).ngClassUntouched,t.Fb(n,22).ngClassTouched,t.Fb(n,22).ngClassPristine,t.Fb(n,22).ngClassDirty,t.Fb(n,22).ngClassValid,t.Fb(n,22).ngClassInvalid,t.Fb(n,22).ngClassPending),l(n,29,0,t.Fb(n,34).ngClassUntouched,t.Fb(n,34).ngClassTouched,t.Fb(n,34).ngClassPristine,t.Fb(n,34).ngClassDirty,t.Fb(n,34).ngClassValid,t.Fb(n,34).ngClassInvalid,t.Fb(n,34).ngClassPending)}))}function m(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,1,"app-login",[],null,null,null,k,f)),t.tb(1,114688,null,0,g,[h.a,r.Mb,a.m,d.a,p.h],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.qb("app-login",g,m,{},{},[]),y=function(){return function(){}}();u.d(n,"LoginPageModuleNgFactory",(function(){return v}));var v=t.rb(e,[],(function(l){return t.Cb([t.Db(512,t.j,t.cb,[[8,[i.a,C]],[3,t.j],t.x]),t.Db(4608,b.m,b.l,[t.u,[2,b.t]]),t.Db(4608,s.g,s.g,[]),t.Db(4608,r.a,r.a,[t.z,t.g]),t.Db(4608,r.Fb,r.Fb,[r.a,t.j,t.q]),t.Db(4608,r.Ib,r.Ib,[r.a,t.j,t.q]),t.Db(1073742336,b.c,b.c,[]),t.Db(1073742336,s.f,s.f,[]),t.Db(1073742336,s.a,s.a,[]),t.Db(1073742336,r.Db,r.Db,[]),t.Db(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),t.Db(1073742336,y,y,[]),t.Db(1073742336,e,e,[]),t.Db(1024,a.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);