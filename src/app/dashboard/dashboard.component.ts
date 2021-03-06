import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImsService } from '../ims.service';

@Component({
  selector: 'app-dashboard',
 
  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loginform!:FormGroup;
  userName!:String;
  constructor(private route:Router, private service:ImsService) { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      user:new FormControl("",Validators.required),
      pass:new FormControl("",Validators.required)
      });
    }
  OnSubmit(): void{
    this.userName=this.loginform.value.user;
    this.service.findEmployeebyID(this.userName).subscribe((data)=>{
      console.log(data);
     
      if(data!=null)
      {
        console.log("inside")
        sessionStorage.setItem("employeeId",this.userName.toString());
        console.log(this.loginform.value);
     if(data.role=="admin")     {
        this.route.navigate(["/ims/adminform"]);
     } 
     else if(data.role=="hr")
     {
      this.route.navigate(["/ims/jobopening"]);
     }
     else if(data.role=="panel")
     {
      this.route.navigate(["/ims/panel"]);
     }
      }
      else{
        alert("user is not valid");
        this.ngOnInit();
      }

    })
    
  
  }

}
