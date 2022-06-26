import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [

  ];
  constructor(private employeesService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().
      subscribe({
        next: (employees) => {
          this.employees = employees
        },
        error: (err) => {
          console.log(err);
        },
      })

  }

}


/*
{
      id: '123-abc',
      name: 'ravi',
      email: 'ravi@gmail.com',
      phone: 7040471760,
      salary: 10000,
      department: 'Development'
    },
    {
      id: '124-abc',
      name: 'shweta',
      email: 'shweta@gmail.com',
      phone: 7040471760,
      salary: 10000,
      department: 'Development'
    },
    {
      id: '125-abc',
      name: 'pawan',
      email: 'pawan@gmail.com',
      phone: 7040471760,
      salary: 20000,
      department: 'Tech'
    },
    {
      id: '125-abc',
      name: 'shri',
      email: 'shri@gmail.com',
      phone: 7040471760,
      salary: 10000,
      department: 'UI'
    },
*/