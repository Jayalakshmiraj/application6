import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EMPLOYEES } from '../mockEmployee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
empArr=EMPLOYEES;
empObj:employee={id:0,name:""};
selectedEmployee:employee;
  constructor() { }

  ngOnInit() {
  }
  addButton(){
    localStorage.setItem('1',JSON.stringify({employee:this.empObj}))
    this.empArr.push(this.empObj)
  }
  deleteLastButton(){
    this.empArr.splice(this.empArr.length-1,1)
  }
  addDelete(i){
    this.empArr.splice(i,1)
  }
  editButton(emp){
    this.selectedEmployee=emp;
  }
}

