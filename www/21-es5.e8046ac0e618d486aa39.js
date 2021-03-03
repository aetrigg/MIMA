(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hF4a:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("oBZk"),a=u("ZZ/e"),r=u("gIcY"),s=u("Ip0R"),c=u("iqUP"),b=u("qfBg"),h=u("lGQG"),d=function(){function l(l,n,u,e,t,i,o,a){this.afstore=l,this.user=n,this.router=u,this.toastCtrl=e,this.activatedRoute=t,this.modalController=i,this.auth=o,this.titleService=a,this.hideMe1=!1,this.hideMe2=!1,this.hideMe3=!1,this.hideMe4=!1,this.hideMe5=!1,this.titleService.setTitle("MIMA Module 5")}return l.prototype.submitExFive=function(){try{var l=c.firestore.FieldValue.serverTimestamp();console.log("clicked"),this.afstore.doc("users/"+this.user.getUID()).update({module05_timestamp:l}),this.afstore.doc("exercises/"+this.user.getUID()).update({module05:c.firestore.FieldValue.arrayUnion("Action Plan for Suturing: "+this.exFive_One)}),this.showToast("This exercise has been submitted!")}catch(n){console.dir(n),"Cannot read property 'uid' of undefined"===n.message?(console.dir("Error"),this.showToast("Please login to submit this exercise."),this.router.navigateByUrl("/login")):(console.dir("Error"),this.showToast("Sorry, there was an error processing this request."))}},l.prototype.hide1=function(){this.hideMe1=!this.hideMe1},l.prototype.hide2=function(){this.hideMe2=!this.hideMe2},l.prototype.hide3=function(){this.hideMe3=!this.hideMe3},l.prototype.hide4=function(){this.hideMe4=!this.hideMe4},l.prototype.hide5=function(){this.hideMe5=!this.hideMe5},l.prototype.showToast=function(l){this.toastCtrl.create({message:l,duration:3e3}).then((function(l){return l.present()}))},l.prototype.ngOnInit=function(){},l}(),p=u("fvl4"),f=u("ZYCi"),g=u("ZYjt"),m=e.sb({encapsulation:0,styles:[[""]],data:{}});function y(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,20,"div",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.1 What is Imagery?"])),(l()(),e.ub(4,0,null,null,0,"img",[["src","../../../assets/module_pictures/5.1-1.png"]],null,null,null,null,null)),(l()(),e.ub(5,0,null,null,15,"ul",[],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Imagery is \u201ca process by which sensory experiences are stored in memory and internally recalled in the absence of external stimuli\u201d(1). Effective imagery uses the entire range of sensory experiences, including kinesthetic and tactile sensations, smells, sounds and emotions. "])),(l()(),e.ub(9,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Imagery has three dimensions: vividness, perspective, and controllability. "])),(l()(),e.ub(12,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Vividness refers to the realism and clarity of the imagined experience, which involves imagining multiple senses (e.g., visual, kinesthetic, auditory, olfactory, etc.) that creates an experience that is comparable to the actual situation. "])),(l()(),e.ub(15,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(16,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Perspective refers to the visual representation of the imagined experience. It can vary between an internal perspective (i.e., what the performer experiences) or an external perspective (i.e., an observer\u2019s experience while viewing the performance from either a \u201cthird person\u201d or \u201csecond person\u201d perspective). "])),(l()(),e.ub(18,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Controllability refers to the ability of an individual to influence the content of the imagined experience. It also refers to both actions and emotions, as imagining the management of emotions and attention is crucial to the probability of success in real-life pressure situations. "]))],null,null)}function v(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,17,"div",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.2 How does Imagery Enhance Performance?"])),(l()(),e.ub(4,0,null,null,0,"img",[["src","../../../assets/module_pictures/5.2-1.png"]],null,null,null,null,null)),(l()(),e.ub(5,0,null,null,12,"ul",[],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" When imagining an experience, the same neural patterns of the actual experience are stimulated. While the neural firing does not actually trigger movement, the neural pattern is established and rehearsed. Research indicates that the combination of mental and physical practice is superior to either physical or mental practice alone. "])),(l()(),e.ub(9,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Imagery is the primary means of influencing the bottom-up neurology that is associated with optimal performance in pressure situations. It can be particularly helpful in preparing to perform in emotionally charged situations, as a person can rehearse not only the physical actions and behaviors for optimal performance, but also the emotional components for peak performance. "])),(l()(),e.ub(12,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Vividness refers to the realism and clarity of the imagined experience, which involves imagining multiple senses (e.g., visual, kinesthetic, auditory, olfactory, etc.) that creates an experience that is comparable to the actual situation. "])),(l()(),e.ub(15,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(16,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Optimal use of imagery in applied settings requires the development of a process to mentally rehearse an array of challenges that are context specific, for which there may not be a standardized imagery script (think back to the metaphor of teaching/learning how to ride a bicycle). "]))],null,null)}function w(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,30,"div",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.3 Self-Guided Imagery Techniques for Applied Practice"])),(l()(),e.ub(4,0,null,null,26,"ul",[],null,null,null,null,null)),(l()(),e.ub(5,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" For optimal performance in applied settings, you want to create your own scripts that are custom tailored to your performance situations, your strengths and abilities. "])),(l()(),e.ub(8,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Your scripts should include visual, cognitive, kinesthetic and other sensory cures, as well as emotional cues for adjusting your emotional responses. "])),(l()(),e.ub(11,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" When initially learning a self-directed imagery script, you are to say the nodal events and cues out loud, as it facilitates the learning process and identify areas that may need more attention. "])),(l()(),e.ub(14,0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),e.ub(15,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ub(16,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ub(17,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Phase 1: Create a self-directed imagery script: "])),(l()(),e.Lb(-1,null,[" Begin by viewing a video of a procedure and create an Action Plan identifying the nodal events of the procedure. Make certain that your Action Plan includes the sequence of behaviors and actions; multiple sensory cues, plus cognitive and emotional cues. "])),(l()(),e.ub(20,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(21,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ub(22,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Phase 2: Familiarize yourself with the mental practice process."])),(l()(),e.ub(24,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(25,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ub(26,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Phase 3: Mental Rehearsal. "])),(l()(),e.ub(28,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Begin by using the centered breathing technique for rapid relaxation and directing your attention to your \u201cbottom-up\u201d awareness. Close your eyes to reduce external visual distractions and mentally rehearse the procedure while saying the nodal events and cues out loud. Again, remember to include multiple senses and emotions. For example, include visual (e.g., seeing the needle pass through the penrose), kinesthetic (e.g., feel the needle driver lock around the needle), and auditory cues (e.g., hear the sound of the needle driver locking into place). "]))],null,null)}function x(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,34,"div",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.4 Imagery Exercise: Suturing"])),(l()(),e.ub(4,0,null,null,30,"ul",[],null,null,null,null,null)),(l()(),e.ub(5,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ub(7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Phase 1: Create a self-directed imagery script:"])),(l()(),e.Lb(-1,null,[" Ideally, the Action Plan for suturing that you created in Module 2 can serve as your imagery script. Review, revise and update the Action Plan, if needed, to make certain that it includes cues for multiple senses, cognitions, and emotions. Make certain that visual and kinesthetic cues are included. "])),(l()(),e.ub(10,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ub(11,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Exercise:"])),(l()(),e.Lb(-1,null,[" Write your action plan for suturing in the space below (be sure to include specific process goals for what to do, how to do it, and cues for where to direct your attention) "])),(l()(),e.ub(14,0,null,null,6,"ion-textarea",[["style","border:solid 1px rgb(90, 90, 90); border-radius: 12px; height:200px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Fb(l,15)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,15)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.exFive_One=u)&&t),t}),o.V,o.w)),e.tb(15,16384,null,0,a.Lb,[e.k],null,null),e.Ib(1024,null,r.b,(function(l){return[l]}),[a.Lb]),e.tb(17,671744,null,0,r.e,[[8,null],[8,null],[8,null],[6,r.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,r.c,null,[r.e]),e.tb(19,16384,null,0,r.d,[[4,r.c]],null,null),e.tb(20,49152,null,0,a.xb,[e.h,e.k,e.z],null,null),(l()(),e.ub(21,0,null,null,2,"ion-button",[["expand","block"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.submitExFive()&&e),e}),o.B,o.c)),e.tb(22,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],shape:[1,"shape"]},null),(l()(),e.Lb(-1,0,["Submit Exercise"])),(l()(),e.ub(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(25,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ub(26,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ub(27,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Phase 2: Familiarize yourself with the mental practice process:"])),(l()(),e.Lb(-1,null,[" Visually review your action plan. As you conduct your \u201ccognitive walk-through\u201d of the plan, imagine the sensation of performing each task and nodal event. At each nodal event, say out loud the cue for the event. "])),(l()(),e.ub(30,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.ub(31,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.ub(32,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Phase 3: Mental Rehearsal:"])),(l()(),e.Lb(-1,null,[" Use the center breathing technique again to relax and center yourself. Then close your eyes to reduce external distractions and mentally rehearse the procedure, walking through each step while saying the nodal events and cues out loud. Again, be certain to use multiple senses and emotions. "]))],(function(l,n){l(n,17,0,n.component.exFive_One),l(n,22,0,"block","round")}),(function(l,n){l(n,14,0,e.Fb(n,19).ngClassUntouched,e.Fb(n,19).ngClassTouched,e.Fb(n,19).ngClassPristine,e.Fb(n,19).ngClassDirty,e.Fb(n,19).ngClassValid,e.Fb(n,19).ngClassInvalid,e.Fb(n,19).ngClassPending)}))}function k(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,71,"div",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.5 Tips and Troubleshooting"])),(l()(),e.ub(4,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.ub(5,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["\u201cPower Tips\u201d"])),(l()(),e.ub(7,0,null,null,18,"ul",[],null,null,null,null,null)),(l()(),e.ub(8,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Always begin with relaxation to optimize rehearsal and access bottom-up neurological processes. "])),(l()(),e.ub(11,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Strive for vivid imagery in which you incorporate all your senses, as well as emotions. "])),(l()(),e.ub(14,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Experience the image (i.e., a bottom-up neurological process) rather than using the top-down process of remembering it. "])),(l()(),e.ub(17,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Suggestions are merely that \u2013 suggestions \u2013 and allow the bottom-up mind to help facilitate images and experiences. "])),(l()(),e.ub(20,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Mentally rehearse in slow-motion when initially learning a new procedure or dealing with a challenging situation. "])),(l()(),e.ub(23,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(24,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Once you are successful with rehearsal in slow-motion, shift to mental rehearsal in real-time for optimal performance under pressure. "])),(l()(),e.ub(26,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),e.ub(27,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["\u201cTroubleshooting Tips\u201d"])),(l()(),e.ub(29,0,null,null,39,"ul",[],null,null,null,null,null)),(l()(),e.ub(30,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(31,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ub(32,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Shift perspective of the imagery:"])),(l()(),e.ub(34,0,null,null,9,"ul",[],null,null,null,null,null)),(l()(),e.ub(35,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(36,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Begin by shifting perspective to the 3rd person. Imagine watching another person do the task or procedure. Imagine what you would see the person doing, and what the person is experiencing emotionally. "])),(l()(),e.ub(38,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Next, shift to the 2nd person perspective. If you\u2019re able to successfully imagine in the 3rd person, shift to imagine watching yourself performing the task/procedure at some time in the future. Again, observe both actions and emotions. "])),(l()(),e.ub(41,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(42,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Finally, transition to the first person perspective. After successful mental rehearsal in the 3rd or 2nd person perspective, imagine what the observed person is experiencing, sensing and feeling. Once you have achieved the internal perspective of imaging that person\u2019s experience, shift to actually being the person having the experience. "])),(l()(),e.ub(44,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(45,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ub(46,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Back up the starting point of your mental practice."])),(l()(),e.ub(48,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),e.ub(49,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(50,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" If you repeatedly have difficulty with a specific nodal event or action, back up the starting point of your mental rehearsal to include the events prior to the challenging situation. "])),(l()(),e.ub(52,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(53,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Mentally practice being in your Ideal Performance State and optimally positioned for success immediately prior to the challenging situation. If need be, backup the starting point to the very beginning of the procedure and include mental rehearsal of your mental and emotional preparation before you actually start. "])),(l()(),e.ub(55,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.ub(56,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ub(57,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Imagine performing in \u201cslow motion\u201d. "])),(l()(),e.ub(59,0,null,null,9,"ul",[],null,null,null,null,null)),(l()(),e.ub(60,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(61,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" You can also imagine watching the process in slow motion and mentally halt the imagery experience and adjust your emotions and actions is needed, and then continue once you are \u201con target\u201d. "])),(l()(),e.ub(63,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(64,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" For example, if you have difficulty remaining calm and sustaining your IPS during a certain phase of a procedure begin by mentally rehearsing and achieving your IPS and then start the procedure in slow motion. "])),(l()(),e.ub(66,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.ub(67,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" If at any point you become aware of becoming anxious, you can mentally pause the image; take a few breaths to calm and adjust your emotions; and then proceed once you have refocused and achieved your IPS. "])),(l()(),e.ub(69,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.ub(70,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Experiment with integrating these tips while practicing your imagery script. Write down any thoughts you have on how you can better adapt them to enhance your own use of Imagery."]))],null,null)}function L(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,11,"ion-header",[],null,null,null,o.M,o.n)),e.tb(1,49152,null,0,a.A,[e.h,e.k,e.z],null,null),(l()(),e.ub(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.X,o.y)),e.tb(3,49152,null,0,a.Bb,[e.h,e.k,e.z],null,null),(l()(),e.ub(4,0,null,0,2,"ion-title",[],null,null,null,o.W,o.x)),e.tb(5,49152,null,0,a.zb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(-1,0,["Module 5: Imagery"])),(l()(),e.ub(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.C,o.d)),e.tb(8,49152,null,0,a.k,[e.h,e.k,e.z],null,null),(l()(),e.ub(9,0,null,0,2,"ion-back-button",[["defaultHref","/modules-list"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,11).onClick(u)&&t),t}),o.A,o.b)),e.tb(10,49152,null,0,a.f,[e.h,e.k,e.z],{defaultHref:[0,"defaultHref"]},null),e.tb(11,16384,null,0,a.g,[[2,a.hb],a.Gb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.ub(12,0,null,null,54,"ion-content",[["class","ion-padding"]],null,null,null,o.J,o.k)),e.tb(13,49152,null,0,a.t,[e.h,e.k,e.z],null,null),(l()(),e.ub(14,0,null,0,52,"div",[["class","ion-text-wrap"]],null,null,null,null,null)),(l()(),e.ub(15,0,null,null,2,"h2",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.ub(16,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Imagery"])),(l()(),e.ub(18,0,null,null,8,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.ub(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(21,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["frameborder","0"],["src","https://www.youtube.com/embed/uu-vOxxecC8"]],null,null,null,null,null)),(l()(),e.ub(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(23,0,null,null,1,"a",[["href","https://www.youtube.com/watch?v=uu-vOxxecC8"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Module 5 Video"])),(l()(),e.ub(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.ub(27,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide1()&&e),e}),o.B,o.c)),e.tb(28,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.ub(29,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.1 What is Imagery?"])),(l()(),e.ub(31,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,o.N,o.o)),e.tb(32,49152,null,0,a.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.jb(16777216,null,null,1,null,y)),e.tb(34,16384,null,0,s.k,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ub(35,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide2()&&e),e}),o.B,o.c)),e.tb(36,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.ub(37,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.2 Enhance Performance"])),(l()(),e.ub(39,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,o.N,o.o)),e.tb(40,49152,null,0,a.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.jb(16777216,null,null,1,null,v)),e.tb(42,16384,null,0,s.k,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ub(43,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide3()&&e),e}),o.B,o.c)),e.tb(44,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.ub(45,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.3 Self-Guided Imagery Techniques"])),(l()(),e.ub(47,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,o.N,o.o)),e.tb(48,49152,null,0,a.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.jb(16777216,null,null,1,null,w)),e.tb(50,16384,null,0,s.k,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ub(51,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide4()&&e),e}),o.B,o.c)),e.tb(52,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.ub(53,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.4 Exercise: Suturing"])),(l()(),e.ub(55,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,o.N,o.o)),e.tb(56,49152,null,0,a.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.jb(16777216,null,null,1,null,x)),e.tb(58,16384,null,0,s.k,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ub(59,0,null,null,5,"ion-button",[["expand","block"],["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.hide5()&&e),e}),o.B,o.c)),e.tb(60,49152,null,0,a.j,[e.h,e.k,e.z],{expand:[0,"expand"],fill:[1,"fill"]},null),(l()(),e.ub(61,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Lb(-1,null,["5.5 Tips and Troubleshooting"])),(l()(),e.ub(63,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style"," font-size: 30px; padding-left:20px;"]],null,null,null,o.N,o.o)),e.tb(64,49152,null,0,a.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.jb(16777216,null,null,1,null,k)),e.tb(66,16384,null,0,s.k,[e.P,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,10,0,"/modules-list"),l(n,11,0,"/modules-list"),l(n,28,0,"block","outline"),l(n,32,0,"arrow-dropdown"),l(n,34,0,u.hideMe1),l(n,36,0,"block","outline"),l(n,40,0,"arrow-dropdown"),l(n,42,0,u.hideMe2),l(n,44,0,"block","outline"),l(n,48,0,"arrow-dropdown"),l(n,50,0,u.hideMe3),l(n,52,0,"block","outline"),l(n,56,0,"arrow-dropdown"),l(n,58,0,u.hideMe4),l(n,60,0,"block","outline"),l(n,64,0,"arrow-dropdown"),l(n,66,0,u.hideMe5)}),null)}function I(l){return e.Nb(0,[(l()(),e.ub(0,0,null,null,1,"app-module-five",[],null,null,null,L,m)),e.tb(1,114688,null,0,d,[p.a,b.a,f.m,a.Mb,f.a,a.Fb,h.a,g.h],null,null)],(function(l,n){l(n,1,0)}),null)}var M=e.qb("app-module-five",d,I,{},{},[]),P=function(){return function(){}}();u.d(n,"ModuleFivePageModuleNgFactory",(function(){return z}));var z=e.rb(t,[],(function(l){return e.Cb([e.Db(512,e.j,e.cb,[[8,[i.a,M]],[3,e.j],e.x]),e.Db(4608,s.m,s.l,[e.u,[2,s.t]]),e.Db(4608,r.g,r.g,[]),e.Db(4608,a.a,a.a,[e.z,e.g]),e.Db(4608,a.Fb,a.Fb,[a.a,e.j,e.q]),e.Db(4608,a.Ib,a.Ib,[a.a,e.j,e.q]),e.Db(1073742336,s.c,s.c,[]),e.Db(1073742336,r.f,r.f,[]),e.Db(1073742336,r.a,r.a,[]),e.Db(1073742336,a.Db,a.Db,[]),e.Db(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),e.Db(1073742336,P,P,[]),e.Db(1073742336,t,t,[]),e.Db(1024,f.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);