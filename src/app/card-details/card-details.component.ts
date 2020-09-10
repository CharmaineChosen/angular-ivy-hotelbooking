import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  name:string = '';
  cardnumber:string = '';
  expiry:string = '';
  cardholder:string = '';
  cvcnumber:string = '';
  titleAlert:string = 'This is required';

  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'validate': ''
    });
  }

  ngOnInit() {
  }

  addPost(post){
    this.name = post.name;
  }

}