import { NgModule } from "@angular/core";



import { RouterModule } from "@angular/router";



import { userRoutes } from "./user.route";



import { FormsModule, ReactiveFormsModule } from "@angular/forms";



import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";









@NgModule({



    declarations:[



      ProfileComponent,
      
      LoginComponent


    ],



    imports:[



        ReactiveFormsModule,



    CommonModule,



    RouterModule.forChild(userRoutes),



    FormsModule



    ],





providers:[],



 



})



export class UserModule{}