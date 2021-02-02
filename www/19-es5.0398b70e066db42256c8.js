(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{cZd9:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),i=u("oBZk"),a=u("ZZ/e"),s=u("gIcY"),r=u("mrSG"),b=u("qfBg"),d=function(){function l(l,n,u,t,e,o){this.afAuth=l,this.afstore=n,this.user=u,this.toastCtrl=t,this.router=e,this.titleService=o,this.username="",this.password="",this.cpassword="",this.displayName="",this.titleService.setTitle("MIMA Create Account")}return l.prototype.ngOnInit=function(){},l.prototype.register=function(){return r.__awaiter(this,void 0,void 0,(function(){var l,n,u,t,e;return r.__generator(this,(function(o){switch(o.label){case 0:if(n=(l=this).username,(u=l.password)!==l.cpassword)return this.showToast("Passwords don't match"),[2,console.error("Passwords don't match")];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.afAuth.auth.createUserWithEmailAndPassword(n,u)];case 2:return t=o.sent(),this.afstore.doc("users/"+t.user.uid).set({username:n}),this.user.setUser({username:n,uid:t.user.uid}),console.log(t),console.dir("successful login"),this.router.navigateByUrl("/modules-list"),this.showToast("Welcome aboard!"),[3,4];case 3:return e=o.sent(),console.dir(e),"auth/email-already-in-use"===e.code&&(console.dir("email in use"),this.showToast("Sorry, this email is already in use")),"auth/invalid-email"===e.code&&(console.dir("invalid email"),this.showToast("Invalid email")),"auth/weak-password"===e.code?(console.dir("Weak Password"),this.showToast("Password should be at lease 6 characters")):(console.dir("There was an error creating this account"),this.showToast("There was an error creating this account, please try again")),[3,4];case 4:return[2]}}))}))},l.prototype.showToast=function(l){this.toastCtrl.create({message:l,duration:5e3}).then((function(l){return l.present()}))},l}(),c=u("ZBkt"),g=u("fvl4"),h=u("ZYCi"),p=u("ZYjt"),f=t.sb({encapsulation:0,styles:[[""]],data:{}});function C(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,11,"ion-header",[],null,null,null,i.M,i.n)),t.tb(1,49152,null,0,a.A,[t.h,t.k,t.z],null,null),(l()(),t.ub(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.X,i.y)),t.tb(3,49152,null,0,a.Bb,[t.h,t.k,t.z],null,null),(l()(),t.ub(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.C,i.d)),t.tb(5,49152,null,0,a.k,[t.h,t.k,t.z],null,null),(l()(),t.ub(6,0,null,0,2,"ion-back-button",[["defaultHref","/user-account"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,8).onClick(u)&&e),e}),i.A,i.b)),t.tb(7,49152,null,0,a.f,[t.h,t.k,t.z],{defaultHref:[0,"defaultHref"]},null),t.tb(8,16384,null,0,a.g,[[2,a.hb],a.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.ub(9,0,null,0,2,"ion-title",[],null,null,null,i.W,i.x)),t.tb(10,49152,null,0,a.zb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Create Account"])),(l()(),t.ub(12,0,null,null,54,"ion-content",[["class","ion-padding"]],null,null,null,i.J,i.k)),t.tb(13,49152,null,0,a.t,[t.h,t.k,t.z],null,null),(l()(),t.ub(14,0,null,0,49,"ion-list",[],null,null,null,i.R,i.s)),t.tb(15,49152,null,0,a.N,[t.h,t.k,t.z],null,null),(l()(),t.ub(16,0,null,0,11,"ion-item",[],null,null,null,i.P,i.q)),t.tb(17,49152,null,0,a.G,[t.h,t.k,t.z],null,null),(l()(),t.ub(18,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.Q,i.r)),t.tb(19,49152,null,0,a.M,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Lb(-1,0,["Email"])),(l()(),t.ub(21,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,22)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,22)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.username=u)&&e),e}),i.O,i.p)),t.tb(22,16384,null,0,a.Lb,[t.k],null,null),t.Ib(1024,null,s.b,(function(l){return[l]}),[a.Lb]),t.tb(24,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,s.c,null,[s.e]),t.tb(26,16384,null,0,s.d,[[4,s.c]],null,null),t.tb(27,49152,null,0,a.F,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.ub(28,0,null,0,11,"ion-item",[],null,null,null,i.P,i.q)),t.tb(29,49152,null,0,a.G,[t.h,t.k,t.z],null,null),(l()(),t.ub(30,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.Q,i.r)),t.tb(31,49152,null,0,a.M,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Lb(-1,0,["Full Name"])),(l()(),t.ub(33,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,34)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,34)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.displayName=u)&&e),e}),i.O,i.p)),t.tb(34,16384,null,0,a.Lb,[t.k],null,null),t.Ib(1024,null,s.b,(function(l){return[l]}),[a.Lb]),t.tb(36,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,s.c,null,[s.e]),t.tb(38,16384,null,0,s.d,[[4,s.c]],null,null),t.tb(39,49152,null,0,a.F,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.ub(40,0,null,0,11,"ion-item",[],null,null,null,i.P,i.q)),t.tb(41,49152,null,0,a.G,[t.h,t.k,t.z],null,null),(l()(),t.ub(42,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.Q,i.r)),t.tb(43,49152,null,0,a.M,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Lb(-1,0,["Password"])),(l()(),t.ub(45,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,46)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,46)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.password=u)&&e),e}),i.O,i.p)),t.tb(46,16384,null,0,a.Lb,[t.k],null,null),t.Ib(1024,null,s.b,(function(l){return[l]}),[a.Lb]),t.tb(48,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,s.c,null,[s.e]),t.tb(50,16384,null,0,s.d,[[4,s.c]],null,null),t.tb(51,49152,null,0,a.F,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.ub(52,0,null,0,11,"ion-item",[],null,null,null,i.P,i.q)),t.tb(53,49152,null,0,a.G,[t.h,t.k,t.z],null,null),(l()(),t.ub(54,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.Q,i.r)),t.tb(55,49152,null,0,a.M,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.Lb(-1,0,["Confirm Password"])),(l()(),t.ub(57,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,58)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,58)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(o.cpassword=u)&&e),e}),i.O,i.p)),t.tb(58,16384,null,0,a.Lb,[t.k],null,null),t.Ib(1024,null,s.b,(function(l){return[l]}),[a.Lb]),t.tb(60,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,s.c,null,[s.e]),t.tb(62,16384,null,0,s.d,[[4,s.c]],null,null),t.tb(63,49152,null,0,a.F,[t.h,t.k,t.z],{type:[0,"type"]},null),(l()(),t.ub(64,0,null,0,2,"ion-button",[["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.register()&&t),t}),i.B,i.c)),t.tb(65,49152,null,0,a.j,[t.h,t.k,t.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),t.Lb(-1,0,["Sign Up"]))],(function(l,n){var u=n.component;l(n,7,0,"/user-account"),l(n,8,0,"/user-account"),l(n,19,0,"floating"),l(n,24,0,u.username),l(n,27,0,"text"),l(n,31,0,"floating"),l(n,36,0,u.displayName),l(n,39,0,"text"),l(n,43,0,"floating"),l(n,48,0,u.password),l(n,51,0,"password"),l(n,55,0,"floating"),l(n,60,0,u.cpassword),l(n,63,0,"password"),l(n,65,0,"block","solid")}),(function(l,n){l(n,21,0,t.Fb(n,26).ngClassUntouched,t.Fb(n,26).ngClassTouched,t.Fb(n,26).ngClassPristine,t.Fb(n,26).ngClassDirty,t.Fb(n,26).ngClassValid,t.Fb(n,26).ngClassInvalid,t.Fb(n,26).ngClassPending),l(n,33,0,t.Fb(n,38).ngClassUntouched,t.Fb(n,38).ngClassTouched,t.Fb(n,38).ngClassPristine,t.Fb(n,38).ngClassDirty,t.Fb(n,38).ngClassValid,t.Fb(n,38).ngClassInvalid,t.Fb(n,38).ngClassPending),l(n,45,0,t.Fb(n,50).ngClassUntouched,t.Fb(n,50).ngClassTouched,t.Fb(n,50).ngClassPristine,t.Fb(n,50).ngClassDirty,t.Fb(n,50).ngClassValid,t.Fb(n,50).ngClassInvalid,t.Fb(n,50).ngClassPending),l(n,57,0,t.Fb(n,62).ngClassUntouched,t.Fb(n,62).ngClassTouched,t.Fb(n,62).ngClassPristine,t.Fb(n,62).ngClassDirty,t.Fb(n,62).ngClassValid,t.Fb(n,62).ngClassInvalid,t.Fb(n,62).ngClassPending)}))}function m(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,1,"app-create-account",[],null,null,null,C,f)),t.tb(1,114688,null,0,d,[c.a,g.a,b.a,a.Mb,h.m,p.h],null,null)],(function(l,n){l(n,1,0)}),null)}var F=t.qb("app-create-account",d,m,{},{},[]),k=u("Ip0R"),v=function(){return function(){}}();u.d(n,"CreateAccountPageModuleNgFactory",(function(){return w}));var w=t.rb(e,[],(function(l){return t.Cb([t.Db(512,t.j,t.cb,[[8,[o.a,F]],[3,t.j],t.x]),t.Db(4608,k.m,k.l,[t.u,[2,k.t]]),t.Db(4608,s.g,s.g,[]),t.Db(4608,a.a,a.a,[t.z,t.g]),t.Db(4608,a.Fb,a.Fb,[a.a,t.j,t.q]),t.Db(4608,a.Ib,a.Ib,[a.a,t.j,t.q]),t.Db(1073742336,k.c,k.c,[]),t.Db(1073742336,s.f,s.f,[]),t.Db(1073742336,s.a,s.a,[]),t.Db(1073742336,a.Db,a.Db,[]),t.Db(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.Db(1073742336,v,v,[]),t.Db(1073742336,e,e,[]),t.Db(1024,h.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);