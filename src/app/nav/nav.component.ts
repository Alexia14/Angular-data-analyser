import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuth: boolean;
  emailAuth: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
          this.emailAuth = user.email;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
