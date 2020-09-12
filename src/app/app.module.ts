import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SharedService } from './shared/shared.service';


const appRoutes: Routes = [
  {path: 'card-details', component: CardDetailsComponent}
  
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, CardDetailsComponent, PersonalInfoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SharedService]
})
export class AppModule { 

}
