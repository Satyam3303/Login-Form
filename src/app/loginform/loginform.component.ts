import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
signupUsers: any[] = [];

signupObj:any ={
  loginid:'',
  password:'',
};


loginObj: any = {
  loginid:'',
  password:'',
}
constructor(){ }

ngOnInit(): void {
    
}
}
