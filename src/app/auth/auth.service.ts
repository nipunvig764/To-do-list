import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
require('firebase/auth');

@Injectable()
export class AuthService{
    token:string;

    constructor(private router:Router){}
    signupUser(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(
                error => console.log(error)
            )
    }

    signinUser(email:string,password:string){
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response => {
                this.router.navigate(['/monday']);
                firebase.auth().currentUser.getIdToken()
                    .then(
                        (token:string) => this.token=token
                    )
            }
        )
        .catch(
            error => console.log(error)
        );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
            .then(
                (token:string) => this.token = token
            );
        return this.token;
    }

    logout(){
        firebase.auth().signOut();
        this.token=null;
    }

    isAuthenticated(){
        return this.token != null;
    }
    
}