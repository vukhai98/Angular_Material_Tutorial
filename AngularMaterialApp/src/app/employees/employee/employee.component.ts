import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/share/employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service:EmployeeService) { }

  ngOnInit(): void {
    this.service.getEmployees();
  }
  departments =[
    {id: 1 , value:'Dep 1'},
    {id: 2 , value:'Dep 2'},
    {id: 3 , value:'Dep 3'}
  ];


  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onSubmit(){
    if(this.service.form.valid){
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }

}
