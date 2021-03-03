(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{mcFB:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("oBZk"),s=u("ZZ/e"),a=u("s7LF"),r=u("SVse"),b=u("iqUP"),h=u("qfBg"),c=u("lGQG");class d{constructor(l,n,u,e,t,o,i,s){this.afstore=l,this.user=n,this.router=u,this.toastCtrl=e,this.activatedRoute=t,this.modalController=o,this.auth=i,this.titleService=s,this.hideMe1=!1,this.hideMe2=!1,this.hideMe3=!1,this.titleService.setTitle("MIMA Module 4")}ngOnInit(){}submitExFour(){try{const l=this.exFour_Counter,n=b.firestore.FieldValue.serverTimestamp();console.log("clicked"),this.afstore.doc(`users/${this.user.getUID()}`).update({module04_timestamp:n}),this.afstore.doc(`exercises/${this.user.getUID()}`).update({module04:b.firestore.FieldValue.arrayUnion(`Negative Thoughts: ${this.exFour_Negative}`)}),this.afstore.doc(`exercises/${this.user.getUID()}`).update({module04:b.firestore.FieldValue.arrayUnion(`Counter: ${l}`)}),this.showToast("This exercise has been submitted!")}catch(l){console.dir(l),"Cannot read property 'uid' of undefined"===l.message?(console.dir("Error"),this.showToast("Please login to submit this exercise."),this.router.navigateByUrl("/login")):(console.dir("Error"),this.showToast("Sorry, there was an error processing this request."))}}showToast(l){this.toastCtrl.create({message:l,duration:3e3}).then(l=>l.present())}hide1(){this.hideMe1=!this.hideMe1}hide2(){this.hideMe2=!this.hideMe2}hide3(){this.hideMe3=!this.hideMe3}}var g=u("Xr7G"),p=u("iInd"),f=u("cUpR"),m=e.qb({encapsulation:0,styles:[[""]],data:{}});function y(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,133,"div",[],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["4.1 Stress Management"])),(l()(),e.sb(3,0,null,null,77,"ul",[],null,null,null,null,null)),(l()(),e.sb(4,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Our perception and interpretation of events determines whether or not we experience a situation as stressful. "])),(l()(),e.sb(7,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" As our brains receive neural transmissions (i.e., input) from our various senses, there are three primary processes that occur within nanoseconds that influence each other: the bottom-up brain rapidly reacts automatically to the experience and triggers an emotional reaction; the top-down brain cognitively assesses the situation and assesses one\u2019s ability to respond to that situation. "])),(l()(),e.sb(10,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.1-1.png"]],null,null,null,null,null)),(l()(),e.sb(11,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" The processes on the left-hand side of the diagram are those of the top-down brain; those on the right-hand side involve the bottom-up brain. "])),(l()(),e.sb(14,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" The emotional reaction of the bottom-up brain can be managed through rapid relaxation (i.e., the techniques covered in the last module), whereas the processes of the top-down brain \u2013 assessment of the situation and one\u2019s ability to handle it \u2013 can be managed through self-talk (i.e., covered in this module. "])),(l()(),e.sb(17,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(18,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.sb(19,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Attention Management: A.I.R."])),(l()(),e.sb(21,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.sb(22,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.sb(23,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Reiterating key concepts:"])),(l()(),e.Jb(-1,null,[" The key to success in any performance situation is knowing what is essential, keeping your attention on the essential and ignoring distractions. Thinking can be one of the major distractions to optimal performance. "])),(l()(),e.sb(26,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),e.sb(27,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" If your attention is \u201coff target\u201d, the most efficient technique for getting back on target is "])),(l()(),e.sb(29,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["\u201cAIR\u201d"])),(l()(),e.Jb(-1,null,[". "])),(l()(),e.sb(32,0,null,null,12,"ul",[],null,null,null,null,null)),(l()(),e.sb(33,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(34,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["A"])),(l()(),e.Jb(-1,null,["- Aware that you\u2019re off target "])),(l()(),e.sb(37,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(38,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["I"])),(l()(),e.Jb(-1,null,["- Interrupt the pattern of thinking "])),(l()(),e.sb(41,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(42,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["R"])),(l()(),e.Jb(-1,null,["- Refocus your attention back on target "])),(l()(),e.sb(45,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(46,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.sb(47,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Increasing Awareness with Mindfulness"])),(l()(),e.sb(49,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.sb(50,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.sb(51,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Mindfulness"])),(l()(),e.Jb(-1,null,[" is a bottom-up neurological sense of awareness, facilitated by paying attention in a sustained and particular way: purposefully, in the present moment, and non-judgmentally. "])),(l()(),e.sb(54,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Mindfulness training can enhance performance by helping you fully immerse yourself in the task you\u2019re performing, which prevents cognitive distraction from getting in the way. As we\u2019ve discussed in this module already, thinking can be one of the most significant distractions to your performance. "])),(l()(),e.sb(57,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(58,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Methods of mindfulness training: "])),(l()(),e.sb(60,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(61,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Mindfulness Bells"])),(l()(),e.sb(63,0,null,null,17,"ul",[],null,null,null,null,null)),(l()(),e.sb(64,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Pick a few ordinary activities from your daily life that you can turn into \u201cmindfulness bells\u201d, which can act as reminders to stop and attend to the task you\u2019re performing. Do this by stopping yourself from thinking, and fully immerse yourself in the present moment. "])),(l()(),e.sb(66,0,null,null,14,"ul",[],null,null,null,null,null)),(l()(),e.sb(67,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" First two bites of any meal "])),(l()(),e.sb(69,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" First two sips of morning coffee "])),(l()(),e.sb(71,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Washing dishes "])),(l()(),e.sb(73,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Waiting at red lights "])),(l()(),e.sb(75,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Waking up (start day with mindfulness in your bed before you run through your \u201cto do\u201d list for the day) "])),(l()(),e.sb(77,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Connect and scan your body (for any tension or physiological signs of stress) "])),(l()(),e.sb(79,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Practice mindfulness of your breathing during centered breathing exercises "])),(l()(),e.sb(81,0,null,null,0,"hr",[["class","blue-border"]],null,null,null,null,null)),(l()(),e.sb(82,0,null,null,4,"p",[["style","color:#006298"]],null,null,null,null,null)),(l()(),e.sb(83,0,null,null,3,"i",[],null,null,null,null,null)),(l()(),e.sb(84,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Reflection:"])),(l()(),e.Jb(-1,null,[" Do you already engage in mindfulness? In what ways do you already practice mindfulness? "])),(l()(),e.sb(87,0,null,null,0,"hr",[["class","blue-border"]],null,null,null,null,null)),(l()(),e.sb(88,0,null,null,45,"ul",[],null,null,null,null,null)),(l()(),e.sb(89,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(90,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Thought Management"])),(l()(),e.sb(92,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(93,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.1-2.png"]],null,null,null,null,null)),(l()(),e.sb(94,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(95,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Optimal performance involves not only automation of fine-motor skills; it also involves the top-down neurology of thinking. "])),(l()(),e.sb(97,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Self-talk during the learning phase for technical skills guides the execution of physical actions until a routine is established that can help automate the behavior as a bottom-up process. "])),(l()(),e.sb(99,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Complex procedures, such as those in surgery, have specific points where cognitive mediation is necessary to determine the most appropriate course of action. "])),(l()(),e.sb(101,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Cognitive mediation is required whenever an individual needs to redirect an impulsive reaction of bottom-up neurology, such as the physiological response to an emotional hijack. "])),(l()(),e.sb(103,0,null,null,0,"hr",[["class","blue-border"]],null,null,null,null,null)),(l()(),e.sb(104,0,null,null,4,"p",[["style","color:#006298"]],null,null,null,null,null)),(l()(),e.sb(105,0,null,null,3,"i",[],null,null,null,null,null)),(l()(),e.sb(106,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Reflection:"])),(l()(),e.Jb(-1,null,[" What situations in surgery could prompt you to switch neurological processes from bottom-up neurology to active, cognitive effort? "])),(l()(),e.sb(109,0,null,null,0,"hr",[["class","blue-border"]],null,null,null,null,null)),(l()(),e.sb(110,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Excellent performance also involves anticipation and preparation before a performance, plus debriefing and assessment after a performance. "])),(l()(),e.sb(112,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" The process goals for these situations involve thinking and assessment, just be certain that your thinking optimizes your performance. "])),(l()(),e.sb(114,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(115,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Focus on what you DO want to happen:"])),(l()(),e.Jb(-1,null,[" One common error with self-talk is thinking about what you don\u2019t want to happen rather than focusing on what you DO want to happen. With your action plan it\u2019s important to identify effective self-talk that directs your attention to precisely what you want to do as opposed to what you want to avoid. "])),(l()(),e.sb(118,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.1-3.png"]],null,null,null,null,null)),(l()(),e.sb(119,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(120,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Snap out of it!"])),(l()(),e.Jb(-1,null,[" If you find that you are starting to put yourself in a negative trance, the solution is simply: WAKE UP!!! Whatever you\u2019re doing, STOP it and do something different. Back off; take a break; shift your attention; anything, but do not continue down the path. This is a great opportunity to use the A.I.R. refocusing technique with a powerful interruption such as a trigger breath or a physical interruption such as clapping your hands or physically changing your external environment. "])),(l()(),e.sb(123,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),e.sb(124,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Redirecting with Believable Counters:"])),(l()(),e.Jb(-1,null,[" Once you stop the negative trance, you need to direct your thoughts and attention to things you can control and actions that will optimize your performance. This task is challenging because you become conditioned where one negative thought triggers another. For each negative thought, you want to develop a believable counter that you can re-program as a response. You cannot discount your feelings and fears with a simple positive statement. "])),(l()(),e.sb(127,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["It must be believable and realistic."])),(l()(),e.sb(129,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.1-4.png"]],null,null,null,null,null)),(l()(),e.sb(130,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.sb(131,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Reprogramming Tip:"])),(l()(),e.Jb(-1,null,[" In developing counters to negative thoughts, it\u2019s critical for the new responses to become automated in the same fashion as foreign languages, and to tailor the counters to your own internal language (i.e., thinking in the foreign language). This automated process is developed through repeated pairing and practice through visual recall and association, which facilitates an automated neurological process. Once this process becomes automated, you will be able to immediately counter negative thoughts without cognitive mediation (i.e., like responding in the once foreign language without having to actively think of verb conjugation). "]))],null,null)}function v(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,60,"div",[],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.sb(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Exercise:"])),(l()(),e.Jb(-1,null,[" Creating believable counters to negative thoughts. Write down negative thoughts you have experienced during surgical or FLS training performance (left column). Then, write down a believable counter that you could make to redirect your attention back to the task (right column). "])),(l()(),e.sb(5,0,null,null,49,"ion-grid",[],null,null,null,i.L,i.m)),e.rb(6,49152,null,0,s.z,[e.h,e.k,e.x],null,null),(l()(),e.sb(7,0,null,0,11,"ion-row",[],null,null,null,i.S,i.t)),e.rb(8,49152,null,0,s.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(9,0,null,0,4,"ion-col",[],null,null,null,i.I,i.j)),e.rb(10,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(11,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),e.sb(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Negative Thoughts:"])),(l()(),e.sb(14,0,null,0,4,"ion-col",[],null,null,null,i.I,i.j)),e.rb(15,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(16,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),e.sb(17,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Counter"])),(l()(),e.sb(19,0,null,0,9,"ion-row",[],null,null,null,i.S,i.t)),e.rb(20,49152,null,0,s.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(21,0,null,0,3,"ion-col",[],null,null,null,i.I,i.j)),e.rb(22,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(23,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Example: I have to be at the meeting in 30 minutes. I have to rush to get this lap chole finished before then! There\u2019s no way I can do this in time! "])),(l()(),e.sb(25,0,null,0,3,"ion-col",[],null,null,null,i.I,i.j)),e.rb(26,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(27,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" Counter: Maybe, maybe not. Freaking out isn\u2019t going to help. Take it one step at a time as smoothly and rapidly as possible and let\u2019s see what happens. "])),(l()(),e.sb(29,0,null,0,25,"ion-row",[],null,null,null,i.S,i.t)),e.rb(30,49152,null,0,s.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(31,0,null,0,11,"ion-col",[],null,null,null,i.I,i.j)),e.rb(32,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(33,0,null,0,9,"div",[],null,null,null,null,null)),(l()(),e.sb(34,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Negative Thoughts"])),(l()(),e.sb(36,0,null,null,6,"ion-textarea",[["style","border:solid 1px rgb(90, 90, 90); height:100px; border-radius: 12px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,37)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,37)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.exFour_Negative=u)&&t),t}),i.V,i.w)),e.rb(37,16384,null,0,s.Lb,[e.k],null,null),e.Gb(1024,null,a.b,(function(l){return[l]}),[s.Lb]),e.rb(39,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,a.c,null,[a.e]),e.rb(41,16384,null,0,a.d,[[4,a.c]],null,null),e.rb(42,49152,null,0,s.xb,[e.h,e.k,e.x],null,null),(l()(),e.sb(43,0,null,0,11,"ion-col",[],null,null,null,i.I,i.j)),e.rb(44,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(45,0,null,0,9,"div",[],null,null,null,null,null)),(l()(),e.sb(46,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Counter"])),(l()(),e.sb(48,0,null,null,6,"ion-textarea",[["style","border:solid 1px rgb(90, 90, 90); height:100px; border-radius: 12px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,49)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,49)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.exFour_Counter=u)&&t),t}),i.V,i.w)),e.rb(49,16384,null,0,s.Lb,[e.k],null,null),e.Gb(1024,null,a.b,(function(l){return[l]}),[s.Lb]),e.rb(51,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,a.c,null,[a.e]),e.rb(53,16384,null,0,a.d,[[4,a.c]],null,null),e.rb(54,49152,null,0,s.xb,[e.h,e.k,e.x],null,null),(l()(),e.sb(55,0,null,null,2,"ion-button",[["expand","block"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.submitExFour()&&e),e}),i.B,i.c)),e.rb(56,49152,null,0,s.j,[e.h,e.k,e.x],{expand:[0,"expand"],shape:[1,"shape"]},null),(l()(),e.Jb(-1,0,["Submit Exercise"])),(l()(),e.sb(58,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(59,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.2-1.png"]],null,null,null,null,null)),(l()(),e.sb(60,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.2-2.png"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,39,0,u.exFour_Negative),l(n,51,0,u.exFour_Counter),l(n,56,0,"block","round")}),(function(l,n){l(n,36,0,e.Db(n,41).ngClassUntouched,e.Db(n,41).ngClassTouched,e.Db(n,41).ngClassPristine,e.Db(n,41).ngClassDirty,e.Db(n,41).ngClassValid,e.Db(n,41).ngClassInvalid,e.Db(n,41).ngClassPending),l(n,48,0,e.Db(n,53).ngClassUntouched,e.Db(n,53).ngClassTouched,e.Db(n,53).ngClassPristine,e.Db(n,53).ngClassDirty,e.Db(n,53).ngClassValid,e.Db(n,53).ngClassInvalid,e.Db(n,53).ngClassPending)}))}function w(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,11,"ion-header",[],null,null,null,i.M,i.n)),e.rb(1,49152,null,0,s.A,[e.h,e.k,e.x],null,null),(l()(),e.sb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.X,i.y)),e.rb(3,49152,null,0,s.Bb,[e.h,e.k,e.x],null,null),(l()(),e.sb(4,0,null,0,2,"ion-title",[],null,null,null,i.W,i.x)),e.rb(5,49152,null,0,s.zb,[e.h,e.k,e.x],null,null),(l()(),e.Jb(-1,0,["Module 4: Attention/Thought Management"])),(l()(),e.sb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.C,i.d)),e.rb(8,49152,null,0,s.k,[e.h,e.k,e.x],null,null),(l()(),e.sb(9,0,null,0,2,"ion-back-button",[["defaultHref","/modules-list"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Db(l,11).onClick(u)&&t),t}),i.A,i.b)),e.rb(10,49152,null,0,s.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.rb(11,16384,null,0,s.g,[[2,s.hb],s.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.sb(12,0,null,null,29,"ion-content",[["class","ion-padding"]],null,null,null,i.J,i.k)),e.rb(13,49152,null,0,s.t,[e.h,e.k,e.x],null,null),(l()(),e.sb(14,0,null,0,27,"div",[["class","ion-text-wrap"]],null,null,null,null,null)),(l()(),e.sb(15,0,null,null,1,"h2",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Attention/Thought Management"])),(l()(),e.sb(17,0,null,null,8,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.sb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(20,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["src","https://www.youtube.com/embed/prboHUpK6gs"]],null,null,null,null,null)),(l()(),e.sb(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(22,0,null,null,1,"a",[["href","https://www.youtube.com/watch?v=prboHUpK6gs"]],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Module 4 Video"])),(l()(),e.sb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(26,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide1()&&e),e}),i.B,i.c)),e.rb(27,49152,null,0,s.j,[e.h,e.k,e.x],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.sb(28,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,[" 4.1 Stress Management"])),(l()(),e.sb(30,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,i.N,i.o)),e.rb(31,49152,null,0,s.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.hb(16777216,null,null,1,null,y)),e.rb(33,16384,null,0,r.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(34,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide2()&&e),e}),i.B,i.c)),e.rb(35,49152,null,0,s.j,[e.h,e.k,e.x],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.sb(36,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Jb(-1,null,["Exercises"])),(l()(),e.sb(38,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,i.N,i.o)),e.rb(39,49152,null,0,s.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.hb(16777216,null,null,1,null,v)),e.rb(41,16384,null,0,r.k,[e.N,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,10,0,"/modules-list"),l(n,11,0,"/modules-list"),l(n,27,0,"block","outline"),l(n,31,0,"arrow-dropdown"),l(n,33,0,u.hideMe1),l(n,35,0,"block","outline"),l(n,39,0,"arrow-dropdown"),l(n,41,0,u.hideMe2)}),null)}function k(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"app-module-four",[],null,null,null,w,m)),e.rb(1,114688,null,0,d,[g.a,h.a,p.m,s.Mb,p.a,s.Fb,c.a,f.h],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e.ob("app-module-four",d,k,{},{},[]);class J{}u.d(n,"ModuleFourPageModuleNgFactory",(function(){return C}));var C=e.pb(t,[],(function(l){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[o.a,x]],[3,e.j],e.v]),e.Bb(4608,r.m,r.l,[e.s,[2,r.t]]),e.Bb(4608,a.g,a.g,[]),e.Bb(4608,s.a,s.a,[e.x,e.g]),e.Bb(4608,s.Fb,s.Fb,[s.a,e.j,e.p]),e.Bb(4608,s.Ib,s.Ib,[s.a,e.j,e.p]),e.Bb(1073742336,r.c,r.c,[]),e.Bb(1073742336,a.f,a.f,[]),e.Bb(1073742336,a.a,a.a,[]),e.Bb(1073742336,s.Db,s.Db,[]),e.Bb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),e.Bb(1073742336,J,J,[]),e.Bb(1073742336,t,t,[]),e.Bb(1024,p.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);