import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../../services/user.service';
import { firestore } from 'firebase';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module-two',
  templateUrl: './module-two.page.html',
  styleUrls: ['./module-two.page.scss'],
})
export class ModuleTwoPage implements OnInit {

  exOne: string;
  date: "";

  constructor(
    public afstore: AngularFirestore,
    public user: UserService,
    private router: Router,
    private toastCtrl: ToastController,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  submitEx() {
    const exOne = this.exOne
    const date = this.date
    const id = firestore.FieldValue.serverTimestamp()

    console.log("clicked")

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      module02_timestamp: id 
    })
    
     this.afstore.doc(`exercises/${this.user.getUID()}`).set({
      module02: firestore.FieldValue.arrayUnion(`Exercise One: ${exOne}`),
      author: this.user.getUsername(),
      
      
		}) 
  
    this.showToast("This exercise has been submitted!");
    
  }

  showToast(message) {
    this.toastCtrl.create({
      message:message,
      duration: 5000
    }).then(toast => toast.present());
  }
}
