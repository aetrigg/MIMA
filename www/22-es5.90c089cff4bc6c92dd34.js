(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{mcFB:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),i=u("oBZk"),a=u("ZZ/e"),r=u("gIcY"),s=u("Ip0R"),b=u("iqUP"),h=u("qfBg"),c=u("lGQG"),d=function(){function l(l,n,u,e,t,o,i,a){this.afstore=l,this.user=n,this.router=u,this.toastCtrl=e,this.activatedRoute=t,this.modalController=o,this.auth=i,this.titleService=a,this.hideMe1=!1,this.hideMe2=!1,this.hideMe3=!1,this.titleService.setTitle("MIMA Module 4")}return l.prototype.ngOnInit=function(){},l.prototype.submitExFour=function(){try{var l=this.exFour_Counter,n=b.firestore.FieldValue.serverTimestamp();console.log("clicked"),this.afstore.doc("users/"+this.user.getUID()).update({module04_timestamp:n}),this.afstore.doc("exercises/"+this.user.getUID()).update({module04:b.firestore.FieldValue.arrayUnion("Negative Thoughts: "+this.exFour_Negative)}),this.afstore.doc("exercises/"+this.user.getUID()).update({module04:b.firestore.FieldValue.arrayUnion("Counter: "+l)}),this.showToast("This exercise has been submitted!")}catch(u){console.dir(u),"Cannot read property 'uid' of undefined"===u.message?(console.dir("Error"),this.showToast("Please login to submit this exercise."),this.router.navigateByUrl("/login")):(console.dir("Error"),this.showToast("Sorry, there was an error processing this request."))}},l.prototype.showToast=function(l){this.toastCtrl.create({message:l,duration:3e3}).then((function(l){return l.present()}))},l.prototype.hide1=function(){this.hideMe1=!this.hideMe1},l.prototype.hide2=function(){this.hideMe2=!this.hideMe2},l.prototype.hide3=function(){this.hideMe3=!this.hideMe3},l}(),g=u("fvl4"),p=u("ZYCi"),f=u("ZYjt"),m=e.sb({encapsulation:0,styles:[[""]],data:{}});function y(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,133,"div",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["4.1 Stress Management"])),(l()(),e.ub(3,0,null,null,77,"ul",[],null,null,null,null,null)),(l()(),e.ub(4,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Our perception and interpretation of events determines whether or not we experience a situation as stressful. "])),(l()(),e.ub(7,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" As our brains receive neural transmissions (i.e., input) from our various senses, there are three primary processes that occur within nanoseconds that influence each other: the bottom-up brain rapidly reacts automatically to the experience and triggers an emotional reaction; the top-down brain cognitively assesses the situation and assesses one\u2019s ability to respond to that situation. "])),(l()(),e.ub(10,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.1-1.png"]],null,null,null,null,null)),(l()(),e.ub(11,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" The processes on the left-hand side of the diagram are those of the top-down brain; those on the right-hand side involve the bottom-up brain. "])),(l()(),e.ub(14,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" The emotional reaction of the bottom-up brain can be managed through rapid relaxation (i.e., the techniques covered in the last module), whereas the processes of the top-down brain \u2013 assessment of the situation and one\u2019s ability to handle it \u2013 can be managed through self-talk (i.e., covered in this module. "])),(l()(),e.ub(17,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(18,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ub(19,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Attention Management: A.I.R."])),(l()(),e.ub(21,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ub(22,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ub(23,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Reiterating key concepts:"])),(l()(),e.Lb(-1,null,[" The key to success in any performance situation is knowing what is essential, keeping your attention on the essential and ignoring distractions. Thinking can be one of the major distractions to optimal performance. "])),(l()(),e.ub(26,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),e.ub(27,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" If your attention is \u201coff target\u201d, the most efficient technique for getting back on target is "])),(l()(),e.ub(29,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["\u201cAIR\u201d"])),(l()(),e.Lb(-1,null,[". "])),(l()(),e.ub(32,0,null,null,12,"ul",[],null,null,null,null,null)),(l()(),e.ub(33,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(34,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["A"])),(l()(),e.Lb(-1,null,["- Aware that you\u2019re off target "])),(l()(),e.ub(37,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(38,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["I"])),(l()(),e.Lb(-1,null,["- Interrupt the pattern of thinking "])),(l()(),e.ub(41,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(42,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["R"])),(l()(),e.Lb(-1,null,["- Refocus your attention back on target "])),(l()(),e.ub(45,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(46,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ub(47,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Increasing Awareness with Mindfulness"])),(l()(),e.ub(49,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ub(50,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ub(51,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Mindfulness"])),(l()(),e.Lb(-1,null,[" is a bottom-up neurological sense of awareness, facilitated by paying attention in a sustained and particular way: purposefully, in the present moment, and non-judgmentally. "])),(l()(),e.ub(54,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Mindfulness training can enhance performance by helping you fully immerse yourself in the task you\u2019re performing, which prevents cognitive distraction from getting in the way. As we\u2019ve discussed in this module already, thinking can be one of the most significant distractions to your performance. "])),(l()(),e.ub(57,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(58,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Methods of mindfulness training: "])),(l()(),e.ub(60,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(61,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Mindfulness Bells"])),(l()(),e.ub(63,0,null,null,17,"ul",[],null,null,null,null,null)),(l()(),e.ub(64,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Pick a few ordinary activities from your daily life that you can turn into \u201cmindfulness bells\u201d, which can act as reminders to stop and attend to the task you\u2019re performing. Do this by stopping yourself from thinking, and fully immerse yourself in the present moment. "])),(l()(),e.ub(66,0,null,null,14,"ul",[],null,null,null,null,null)),(l()(),e.ub(67,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" First two bites of any meal "])),(l()(),e.ub(69,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" First two sips of morning coffee "])),(l()(),e.ub(71,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Washing dishes "])),(l()(),e.ub(73,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Waiting at red lights "])),(l()(),e.ub(75,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Waking up (start day with mindfulness in your bed before you run through your \u201cto do\u201d list for the day) "])),(l()(),e.ub(77,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Connect and scan your body (for any tension or physiological signs of stress) "])),(l()(),e.ub(79,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Practice mindfulness of your breathing during centered breathing exercises "])),(l()(),e.ub(81,0,null,null,0,"hr",[["class","blue-border"]],null,null,null,null,null)),(l()(),e.ub(82,0,null,null,4,"p",[["style","color:#006298"]],null,null,null,null,null)),(l()(),e.ub(83,0,null,null,3,"i",[],null,null,null,null,null)),(l()(),e.ub(84,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Reflection:"])),(l()(),e.Lb(-1,null,[" Do you already engage in mindfulness? In what ways do you already practice mindfulness? "])),(l()(),e.ub(87,0,null,null,0,"hr",[["class","blue-border"]],null,null,null,null,null)),(l()(),e.ub(88,0,null,null,45,"ul",[],null,null,null,null,null)),(l()(),e.ub(89,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(90,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Thought Management"])),(l()(),e.ub(92,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(93,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.1-2.png"]],null,null,null,null,null)),(l()(),e.ub(94,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(95,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Optimal performance involves not only automation of fine-motor skills; it also involves the top-down neurology of thinking. "])),(l()(),e.ub(97,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Self-talk during the learning phase for technical skills guides the execution of physical actions until a routine is established that can help automate the behavior as a bottom-up process. "])),(l()(),e.ub(99,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Complex procedures, such as those in surgery, have specific points where cognitive mediation is necessary to determine the most appropriate course of action. "])),(l()(),e.ub(101,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Cognitive mediation is required whenever an individual needs to redirect an impulsive reaction of bottom-up neurology, such as the physiological response to an emotional hijack. "])),(l()(),e.ub(103,0,null,null,0,"hr",[["class","blue-border"]],null,null,null,null,null)),(l()(),e.ub(104,0,null,null,4,"p",[["style","color:#006298"]],null,null,null,null,null)),(l()(),e.ub(105,0,null,null,3,"i",[],null,null,null,null,null)),(l()(),e.ub(106,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Reflection:"])),(l()(),e.Lb(-1,null,[" What situations in surgery could prompt you to switch neurological processes from bottom-up neurology to active, cognitive effort? "])),(l()(),e.ub(109,0,null,null,0,"hr",[["class","blue-border"]],null,null,null,null,null)),(l()(),e.ub(110,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Excellent performance also involves anticipation and preparation before a performance, plus debriefing and assessment after a performance. "])),(l()(),e.ub(112,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" The process goals for these situations involve thinking and assessment, just be certain that your thinking optimizes your performance. "])),(l()(),e.ub(114,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(115,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Focus on what you DO want to happen:"])),(l()(),e.Lb(-1,null,[" One common error with self-talk is thinking about what you don\u2019t want to happen rather than focusing on what you DO want to happen. With your action plan it\u2019s important to identify effective self-talk that directs your attention to precisely what you want to do as opposed to what you want to avoid. "])),(l()(),e.ub(118,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.1-3.png"]],null,null,null,null,null)),(l()(),e.ub(119,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(120,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Snap out of it!"])),(l()(),e.Lb(-1,null,[" If you find that you are starting to put yourself in a negative trance, the solution is simply: WAKE UP!!! Whatever you\u2019re doing, STOP it and do something different. Back off; take a break; shift your attention; anything, but do not continue down the path. This is a great opportunity to use the A.I.R. refocusing technique with a powerful interruption such as a trigger breath or a physical interruption such as clapping your hands or physically changing your external environment. "])),(l()(),e.ub(123,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),e.ub(124,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Redirecting with Believable Counters:"])),(l()(),e.Lb(-1,null,[" Once you stop the negative trance, you need to direct your thoughts and attention to things you can control and actions that will optimize your performance. This task is challenging because you become conditioned where one negative thought triggers another. For each negative thought, you want to develop a believable counter that you can re-program as a response. You cannot discount your feelings and fears with a simple positive statement. "])),(l()(),e.ub(127,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["It must be believable and realistic."])),(l()(),e.ub(129,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.1-4.png"]],null,null,null,null,null)),(l()(),e.ub(130,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(131,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Reprogramming Tip:"])),(l()(),e.Lb(-1,null,[" In developing counters to negative thoughts, it\u2019s critical for the new responses to become automated in the same fashion as foreign languages, and to tailor the counters to your own internal language (i.e., thinking in the foreign language). This automated process is developed through repeated pairing and practice through visual recall and association, which facilitates an automated neurological process. Once this process becomes automated, you will be able to immediately counter negative thoughts without cognitive mediation (i.e., like responding in the once foreign language without having to actively think of verb conjugation). "]))],null,null)}function v(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,60,"div",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Exercise:"])),(l()(),e.Lb(-1,null,[" Creating believable counters to negative thoughts. Write down negative thoughts you have experienced during surgical or FLS training performance (left column). Then, write down a believable counter that you could make to redirect your attention back to the task (right column). "])),(l()(),e.ub(5,0,null,null,49,"ion-grid",[],null,null,null,i.L,i.m)),e.tb(6,49152,null,0,a.z,[e.h,e.k,e.z],null,null),(l()(),e.ub(7,0,null,0,11,"ion-row",[],null,null,null,i.S,i.t)),e.tb(8,49152,null,0,a.ib,[e.h,e.k,e.z],null,null),(l()(),e.ub(9,0,null,0,4,"ion-col",[],null,null,null,i.I,i.j)),e.tb(10,49152,null,0,a.s,[e.h,e.k,e.z],null,null),(l()(),e.ub(11,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),e.ub(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Negative Thoughts:"])),(l()(),e.ub(14,0,null,0,4,"ion-col",[],null,null,null,i.I,i.j)),e.tb(15,49152,null,0,a.s,[e.h,e.k,e.z],null,null),(l()(),e.ub(16,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),e.ub(17,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Counter"])),(l()(),e.ub(19,0,null,0,9,"ion-row",[],null,null,null,i.S,i.t)),e.tb(20,49152,null,0,a.ib,[e.h,e.k,e.z],null,null),(l()(),e.ub(21,0,null,0,3,"ion-col",[],null,null,null,i.I,i.j)),e.tb(22,49152,null,0,a.s,[e.h,e.k,e.z],null,null),(l()(),e.ub(23,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Example: I have to be at the meeting in 30 minutes. I have to rush to get this lap chole finished before then! There\u2019s no way I can do this in time! "])),(l()(),e.ub(25,0,null,0,3,"ion-col",[],null,null,null,i.I,i.j)),e.tb(26,49152,null,0,a.s,[e.h,e.k,e.z],null,null),(l()(),e.ub(27,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Counter: Maybe, maybe not. Freaking out isn\u2019t going to help. Take it one step at a time as smoothly and rapidly as possible and let\u2019s see what happens. "])),(l()(),e.ub(29,0,null,0,25,"ion-row",[],null,null,null,i.S,i.t)),e.tb(30,49152,null,0,a.ib,[e.h,e.k,e.z],null,null),(l()(),e.ub(31,0,null,0,11,"ion-col",[],null,null,null,i.I,i.j)),e.tb(32,49152,null,0,a.s,[e.h,e.k,e.z],null,null),(l()(),e.ub(33,0,null,0,9,"div",[],null,null,null,null,null)),(l()(),e.ub(34,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Negative Thoughts"])),(l()(),e.ub(36,0,null,null,6,"ion-textarea",[["style","border:solid 1px rgb(90, 90, 90); height:100px; border-radius: 12px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,37)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,37)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.exFour_Negative=u)&&t),t}),i.V,i.w)),e.tb(37,16384,null,0,a.Lb,[e.k],null,null),e.Ib(1024,null,r.b,(function(l){return[l]}),[a.Lb]),e.tb(39,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,r.c,null,[r.e]),e.tb(41,16384,null,0,r.d,[[4,r.c]],null,null),e.tb(42,49152,null,0,a.xb,[e.h,e.k,e.z],null,null),(l()(),e.ub(43,0,null,0,11,"ion-col",[],null,null,null,i.I,i.j)),e.tb(44,49152,null,0,a.s,[e.h,e.k,e.z],null,null),(l()(),e.ub(45,0,null,0,9,"div",[],null,null,null,null,null)),(l()(),e.ub(46,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Counter"])),(l()(),e.ub(48,0,null,null,6,"ion-textarea",[["style","border:solid 1px rgb(90, 90, 90); height:100px; border-radius: 12px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,49)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,49)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.exFour_Counter=u)&&t),t}),i.V,i.w)),e.tb(49,16384,null,0,a.Lb,[e.k],null,null),e.Ib(1024,null,r.b,(function(l){return[l]}),[a.Lb]),e.tb(51,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,r.c,null,[r.e]),e.tb(53,16384,null,0,r.d,[[4,r.c]],null,null),e.tb(54,49152,null,0,a.xb,[e.h,e.k,e.z],null,null),(l()(),e.ub(55,0,null,null,2,"ion-button",[["expand","block"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.submitExFour()&&e),e}),i.B,i.c)),e.tb(56,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],shape:[1,"shape"]},null),(l()(),e.Lb(-1,0,["Submit Exercise"])),(l()(),e.ub(58,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(59,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.2-1.png"]],null,null,null,null,null)),(l()(),e.ub(60,0,null,null,0,"img",[["src","../../../assets/module_pictures/4.2-2.png"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,39,0,u.exFour_Negative),l(n,51,0,u.exFour_Counter),l(n,56,0,"block","round")}),(function(l,n){l(n,36,0,e.Fb(n,41).ngClassUntouched,e.Fb(n,41).ngClassTouched,e.Fb(n,41).ngClassPristine,e.Fb(n,41).ngClassDirty,e.Fb(n,41).ngClassValid,e.Fb(n,41).ngClassInvalid,e.Fb(n,41).ngClassPending),l(n,48,0,e.Fb(n,53).ngClassUntouched,e.Fb(n,53).ngClassTouched,e.Fb(n,53).ngClassPristine,e.Fb(n,53).ngClassDirty,e.Fb(n,53).ngClassValid,e.Fb(n,53).ngClassInvalid,e.Fb(n,53).ngClassPending)}))}function w(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,11,"ion-header",[],null,null,null,i.M,i.n)),e.tb(1,49152,null,0,a.A,[e.h,e.k,e.z],null,null),(l()(),e.ub(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.X,i.y)),e.tb(3,49152,null,0,a.Bb,[e.h,e.k,e.z],null,null),(l()(),e.ub(4,0,null,0,2,"ion-title",[],null,null,null,i.W,i.x)),e.tb(5,49152,null,0,a.zb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Module 4: Attention/Thought Management"])),(l()(),e.ub(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.C,i.d)),e.tb(8,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.ub(9,0,null,0,2,"ion-back-button",[["defaultHref","/modules-list"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,11).onClick(u)&&t),t}),i.A,i.b)),e.tb(10,49152,null,0,a.f,[e.h,e.k,e.z],{defaultHref:[0,"defaultHref"]},null),e.tb(11,16384,null,0,a.g,[[2,a.hb],a.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.ub(12,0,null,null,29,"ion-content",[["class","ion-padding"]],null,null,null,i.J,i.k)),e.tb(13,49152,null,0,a.t,[e.h,e.k,e.z],null,null),(l()(),e.ub(14,0,null,0,27,"div",[["class","ion-text-wrap"]],null,null,null,null,null)),(l()(),e.ub(15,0,null,null,1,"h2",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Attention/Thought Management"])),(l()(),e.ub(17,0,null,null,8,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.ub(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(20,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["src","https://www.youtube.com/embed/prboHUpK6gs"]],null,null,null,null,null)),(l()(),e.ub(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(22,0,null,null,1,"a",[["href","https://www.youtube.com/watch?v=prboHUpK6gs"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Module 4 Video"])),(l()(),e.ub(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(26,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide1()&&e),e}),i.B,i.c)),e.tb(27,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.ub(28,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" 4.1 Stress Management"])),(l()(),e.ub(30,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,i.N,i.o)),e.tb(31,49152,null,0,a.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.jb(16777216,null,null,1,null,y)),e.tb(33,16384,null,0,s.k,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ub(34,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide2()&&e),e}),i.B,i.c)),e.tb(35,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.ub(36,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Exercises"])),(l()(),e.ub(38,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,i.N,i.o)),e.tb(39,49152,null,0,a.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.jb(16777216,null,null,1,null,v)),e.tb(41,16384,null,0,s.k,[e.P,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,10,0,"/modules-list"),l(n,11,0,"/modules-list"),l(n,27,0,"block","outline"),l(n,31,0,"arrow-dropdown"),l(n,33,0,u.hideMe1),l(n,35,0,"block","outline"),l(n,39,0,"arrow-dropdown"),l(n,41,0,u.hideMe2)}),null)}function k(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,1,"app-module-four",[],null,null,null,w,m)),e.tb(1,114688,null,0,d,[g.a,h.a,p.m,a.Mb,p.a,a.Fb,c.a,f.h],null,null)],(function(l,n){l(n,1,0)}),null)}var L=e.qb("app-module-four",d,k,{},{},[]),x=function(){return function(){}}();u.d(n,"ModuleFourPageModuleNgFactory",(function(){return C}));var C=e.rb(t,[],(function(l){return e.Cb([e.Db(512,e.j,e.cb,[[8,[o.a,L]],[3,e.j],e.x]),e.Db(4608,s.m,s.l,[e.u,[2,s.t]]),e.Db(4608,r.g,r.g,[]),e.Db(4608,a.a,a.a,[e.z,e.g]),e.Db(4608,a.Fb,a.Fb,[a.a,e.j,e.q]),e.Db(4608,a.Ib,a.Ib,[a.a,e.j,e.q]),e.Db(1073742336,s.c,s.c,[]),e.Db(1073742336,r.f,r.f,[]),e.Db(1073742336,r.a,r.a,[]),e.Db(1073742336,a.Db,a.Db,[]),e.Db(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),e.Db(1073742336,x,x,[]),e.Db(1073742336,t,t,[]),e.Db(1024,p.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);