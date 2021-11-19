import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Userservice } from '../services/userservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User
  
  myForm:FormGroup;
 
  constructor(private userservice:Userservice,private router:Router) { 
    this.user=new User();
    
    this.myForm=new FormGroup({
      "id":new FormControl(null,[Validators.required]),
      "pass":new FormControl(null,[Validators.required]),
      
     
    });
  }
  public get id():any{
    return this.myForm.get("id");
  }

 
  public get pass():any{
    return this.myForm.get("pass");
  }
 

  ngOnInit(): void {
  }
  register(){
    console.log("From the register component")
    console.log(this.user);
    console.log("----------------------------");
    if(this.myForm.valid)
    {
      this.user.id=this.id.value;
      this.user.password=this.pass.value;
   
    this.userservice.loginUsingAPI(this.user).subscribe((data)=>{
      var user:User = data as User;
      console.log(user.jwtToken);
      localStorage.setItem("token",user.jwtToken)
      this.router.navigate(["flower"])  
    });
  }
  }
}
