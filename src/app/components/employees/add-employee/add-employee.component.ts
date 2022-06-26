import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  addEmployeeRquest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployees(this.addEmployeeRquest).
      subscribe({
        next: (employee) => {
          //console.log(employee)
          this.router.navigate(['employees'])
        },
        error: (err) => {
          console.log(err)
        },
      })
  }
}
