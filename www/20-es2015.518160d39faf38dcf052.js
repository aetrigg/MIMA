(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{cZd9:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var s=u("pMnS"),a=u("oBZk"),o=u("ZZ/e"),i=u("s7LF"),r=u("mrSG"),b=u("qfBg");class d{constructor(l,n,u,e,t,s){this.afAuth=l,this.afstore=n,this.user=u,this.toastCtrl=e,this.router=t,this.titleService=s,this.username="",this.password="",this.cpassword="",this.displayName="",this.titleService.setTitle("MIMA Create Account")}ngOnInit(){}register(){return r.__awaiter(this,void 0,void 0,(function*(){const{username:l,password:n,cpassword:u}=this;if(n!==u)return this.showToast("Passwords don't match"),console.error("Passwords don't match");try{const u=yield this.afAuth.auth.createUserWithEmailAndPassword(l,n);this.afstore.doc(`users/${u.user.uid}`).set({username:l}),this.user.setUser({username:l,uid:u.user.uid}),console.log(u),console.dir("successful login"),this.router.navigateByUrl("/modules-list"),this.showToast("Welcome aboard!")}catch(e){console.dir(e),"auth/email-already-in-use"===e.code&&(console.dir("email in use"),this.showToast("Sorry, this email is already in use")),"auth/invalid-email"===e.code&&(console.dir("invalid email"),this.showToast("Invalid email")),"auth/weak-password"===e.code?(console.dir("Weak Password"),this.showToast("Password should be at lease 6 characters")):(console.dir("There was an error creating this account"),this.showToast("There was an error creating this account, please try again"))}}))}showToast(l){this.toastCtrl.create({message:l,duration:5e3}).then(l=>l.present())}}var c=u("irV9"),g=u("Xr7G"),h=u("iInd"),p=u("cUpR"),C=e.qb({encapsulation:0,styles:[[""]],data:{}});function f(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,11,"ion-header",[],null,null,null,a.M,a.n)),e.rb(1,49152,null,0,o.A,[e.h,e.k,e.x],null,null),(l()(),e.sb(2,0,null,0,9,"ion-toolbar",[],null,null,null,a.X,a.y)),e.rb(3,49152,null,0,o.Bb,[e.h,e.k,e.x],null,null),(l()(),e.sb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.C,a.d)),e.rb(5,49152,null,0,o.k,[e.h,e.k,e.x],null,null),(l()(),e.sb(6,0,null,0,2,"ion-back-button",[["defaultHref","/user-account"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Db(l,8).onClick(u)&&t),t}),a.A,a.b)),e.rb(7,49152,null,0,o.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.rb(8,16384,null,0,o.g,[[2,o.hb],o.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.sb(9,0,null,0,2,"ion-title",[],null,null,null,a.W,a.x)),e.rb(10,49152,null,0,o.zb,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Create Account"])),(l()(),e.sb(12,0,null,null,54,"ion-content",[["class","ion-padding"]],null,null,null,a.J,a.k)),e.rb(13,49152,null,0,o.t,[e.h,e.k,e.x],null,null),(l()(),e.sb(14,0,null,0,49,"ion-list",[],null,null,null,a.R,a.s)),e.rb(15,49152,null,0,o.N,[e.h,e.k,e.x],null,null),(l()(),e.sb(16,0,null,0,11,"ion-item",[],null,null,null,a.P,a.q)),e.rb(17,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.sb(18,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.Q,a.r)),e.rb(19,49152,null,0,o.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Email"])),(l()(),e.sb(21,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,22)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,22)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.username=u)&&t),t}),a.O,a.p)),e.rb(22,16384,null,0,o.Lb,[e.k],null,null),e.Gb(1024,null,i.b,(function(l){return[l]}),[o.Lb]),e.rb(24,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,i.c,null,[i.e]),e.rb(26,16384,null,0,i.d,[[4,i.c]],null,null),e.rb(27,49152,null,0,o.F,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.sb(28,0,null,0,11,"ion-item",[],null,null,null,a.P,a.q)),e.rb(29,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.sb(30,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.Q,a.r)),e.rb(31,49152,null,0,o.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Full Name"])),(l()(),e.sb(33,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,34)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,34)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.displayName=u)&&t),t}),a.O,a.p)),e.rb(34,16384,null,0,o.Lb,[e.k],null,null),e.Gb(1024,null,i.b,(function(l){return[l]}),[o.Lb]),e.rb(36,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,i.c,null,[i.e]),e.rb(38,16384,null,0,i.d,[[4,i.c]],null,null),e.rb(39,49152,null,0,o.F,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.sb(40,0,null,0,11,"ion-item",[],null,null,null,a.P,a.q)),e.rb(41,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.sb(42,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.Q,a.r)),e.rb(43,49152,null,0,o.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Password"])),(l()(),e.sb(45,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,46)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,46)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.password=u)&&t),t}),a.O,a.p)),e.rb(46,16384,null,0,o.Lb,[e.k],null,null),e.Gb(1024,null,i.b,(function(l){return[l]}),[o.Lb]),e.rb(48,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,i.c,null,[i.e]),e.rb(50,16384,null,0,i.d,[[4,i.c]],null,null),e.rb(51,49152,null,0,o.F,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.sb(52,0,null,0,11,"ion-item",[],null,null,null,a.P,a.q)),e.rb(53,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.sb(54,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.Q,a.r)),e.rb(55,49152,null,0,o.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Jb(-1,0,["Confirm Password"])),(l()(),e.sb(57,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,s=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,58)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,58)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(s.cpassword=u)&&t),t}),a.O,a.p)),e.rb(58,16384,null,0,o.Lb,[e.k],null,null),e.Gb(1024,null,i.b,(function(l){return[l]}),[o.Lb]),e.rb(60,671744,null,0,i.e,[[8,null],[8,null],[8,null],[6,i.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,i.c,null,[i.e]),e.rb(62,16384,null,0,i.d,[[4,i.c]],null,null),e.rb(63,49152,null,0,o.F,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.sb(64,0,null,0,2,"ion-button",[["expand","block"],["fill","solid"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.register()&&e),e}),a.B,a.c)),e.rb(65,49152,null,0,o.j,[e.h,e.k,e.x],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.Jb(-1,0,["Sign Up"]))],(function(l,n){var u=n.component;l(n,7,0,"/user-account"),l(n,8,0,"/user-account"),l(n,19,0,"floating"),l(n,24,0,u.username),l(n,27,0,"text"),l(n,31,0,"floating"),l(n,36,0,u.displayName),l(n,39,0,"text"),l(n,43,0,"floating"),l(n,48,0,u.password),l(n,51,0,"password"),l(n,55,0,"floating"),l(n,60,0,u.cpassword),l(n,63,0,"password"),l(n,65,0,"block","solid")}),(function(l,n){l(n,21,0,e.Db(n,26).ngClassUntouched,e.Db(n,26).ngClassTouched,e.Db(n,26).ngClassPristine,e.Db(n,26).ngClassDirty,e.Db(n,26).ngClassValid,e.Db(n,26).ngClassInvalid,e.Db(n,26).ngClassPending),l(n,33,0,e.Db(n,38).ngClassUntouched,e.Db(n,38).ngClassTouched,e.Db(n,38).ngClassPristine,e.Db(n,38).ngClassDirty,e.Db(n,38).ngClassValid,e.Db(n,38).ngClassInvalid,e.Db(n,38).ngClassPending),l(n,45,0,e.Db(n,50).ngClassUntouched,e.Db(n,50).ngClassTouched,e.Db(n,50).ngClassPristine,e.Db(n,50).ngClassDirty,e.Db(n,50).ngClassValid,e.Db(n,50).ngClassInvalid,e.Db(n,50).ngClassPending),l(n,57,0,e.Db(n,62).ngClassUntouched,e.Db(n,62).ngClassTouched,e.Db(n,62).ngClassPristine,e.Db(n,62).ngClassDirty,e.Db(n,62).ngClassValid,e.Db(n,62).ngClassInvalid,e.Db(n,62).ngClassPending)}))}function m(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"app-create-account",[],null,null,null,f,C)),e.rb(1,114688,null,0,d,[c.a,g.a,b.a,o.Mb,h.m,p.h],null,null)],(function(l,n){l(n,1,0)}),null)}var D=e.ob("app-create-account",d,m,{},{},[]),v=u("SVse");class k{}u.d(n,"CreateAccountPageModuleNgFactory",(function(){return w}));var w=e.pb(t,[],(function(l){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[s.a,D]],[3,e.j],e.v]),e.Bb(4608,v.m,v.l,[e.s,[2,v.t]]),e.Bb(4608,i.g,i.g,[]),e.Bb(4608,o.a,o.a,[e.x,e.g]),e.Bb(4608,o.Fb,o.Fb,[o.a,e.j,e.p]),e.Bb(4608,o.Ib,o.Ib,[o.a,e.j,e.p]),e.Bb(1073742336,v.c,v.c,[]),e.Bb(1073742336,i.f,i.f,[]),e.Bb(1073742336,i.a,i.a,[]),e.Bb(1073742336,o.Db,o.Db,[]),e.Bb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),e.Bb(1073742336,k,k,[]),e.Bb(1073742336,t,t,[]),e.Bb(1024,h.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);