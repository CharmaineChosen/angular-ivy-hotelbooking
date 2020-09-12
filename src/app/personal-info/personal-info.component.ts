import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  rForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, 
        private sharedService: SharedService) { }

  ngOnInit() {
    this.editPersonal();
  }
  editPersonal(){
    this.rForm = this.fb.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      idnumber: ['', [Validators.required, Validators.maxLength(13)]],
      contact: ['', [Validators.required, Validators.maxLength(10)]],
      room: ['',Validators.required ]

      
    })
  }
   addPost(){
      if(this.rForm.valid){

        this.sharedService.setData(this.rForm.value);
        this.router.navigate(['/card-details'])
      }
    }
}