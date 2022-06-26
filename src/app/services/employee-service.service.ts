import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private _http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this.baseApiUrl + "/api/Employee");
  }

  addEmployees(addEmployeeRquest: Employee): Observable<Employee> {
    addEmployeeRquest.id = '00000000-0000-0000-0000-000000000000';
    return this._http.post<Employee>(this.baseApiUrl + "/api/Employee", addEmployeeRquest);
  }

  getById(id: string): Observable<Employee> {
    return this._http.get<Employee>(this.baseApiUrl + "/api/Employee/" + id);
  }

  editEmployees(id: string, updateEmployee: Employee): Observable<Employee> {
    return this._http.put<Employee>(this.baseApiUrl + "/api/Employee/" + id, updateEmployee);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this._http.delete<Employee>(this.baseApiUrl + "/api/Employee/" + id);
  }
}
