import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface EmployeeData {
  id: number;
  employeeName: string;
  department: string;
  salary: number;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  employeeForm = new FormGroup({
    id: new FormControl(null),
    employeeName: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required])
  })

  keyword: string = '';
  filterBy: string = 'employeeName';

  employeeData: Array<EmployeeData> = [
    { id: 1, employeeName: "Dimpy", department: "Front-end", salary: 12000 },
    { id: 2, employeeName: "Rahul", department: "Back-end", salary: 13000 },
    { id: 3, employeeName: "Akshat", department: "Back-end", salary: 14000 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
  saveAndUpdate(){
    if(this.employeeForm.get("id")?.value == null){
      this.employeeForm.get("id")?.setValue(this.employeeData.length == 0 ? 1 : this.employeeData[this.employeeData.length-1].id + 1);
      this.employeeData.push(this.employeeForm.value)
    } else{
      this.employeeData[this.employeeData.findIndex(e=>e.id == this.employeeForm.get("id")?.value)] = this.employeeForm.value
    }
    this.employeeForm.reset()
  }

  removeElement(id: number){
    this.employeeData.splice(this.employeeData.findIndex(e=> e.id == id), 1)
  }

  editEmployee(emp: EmployeeData){
    this.employeeForm.get("id")?.setValue(emp.id);
    this.employeeForm.get("employeeName")?.setValue(emp.employeeName);
    this.employeeForm.get("department")?.setValue(emp.department);
    this.employeeForm.get("salary")?.setValue(emp.salary);
  }
}
