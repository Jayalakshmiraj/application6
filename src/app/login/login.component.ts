import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
 
  constructor(private router:Router) { }


  ngOnInit() {
    alert(localStorage.getItem("as"));
    localStorage.setItem("as",'[]');
  }

  addButton(){

    if(this.username==this.password){
      localStorage.setItem('as',JSON.stringify({name:this.username}))
     this.router.navigate(['./dashboard']);
    }
    else{
      alert("incorrect");
    }
    
  }
  onclick1():void{
    this.router.navigate(['./login']);
  }
 
}
