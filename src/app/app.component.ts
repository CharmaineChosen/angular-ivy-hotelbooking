import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  rForm: FormGroup;
  post:any;
  surname:string = '';
  name:string = '';
  email:string = '';
  idnumber:string = '';
  contact:string = '';
  room:string = '';
  titleAlert:string = 'This field is required';
  cardnumber:string = '';
  expiry:string = '';
  cardholder:string = '';
  cvcnumber:string = '';

  constructor(private fb: FormBuilder){

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'surname': [null, Validators.required],
      'email': [null, Validators.required],
      'idnumber': [null, Validators.required],
      'contact' : [null, Validators.required],
      'room': [null, Validators.required],
      'cardholder': [null, Validators.required],
      'cardnumber': [null, Validators.required],
      'expiry': [null, Validators.required],
      'cvcnumber': [null, Validators.required],
      'validate': ''
    });
  }

addPost(post) {
  this.name = post.name;
  this.surname = post.surname;
  this.email = post.email;
  this.idnumber = post.idnumber;
  this.contact = post.contact;
  this.room = post.room;
  this.cardholder = post.cardholder;
  this.cardnumber = post.cardnumber;
  this.expiry = post.expiry;
  this.cvcnumber = post.cvcnumber;
}
}
