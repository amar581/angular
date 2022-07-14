import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

// Create User

createUser(user : any) {
  return this._http.post("http://localhost:3000/users", user)
}

// Get All users

getAllUsers() {
  return this._http.get("http://localhost:3000/users")
}


// Update User

updateUser() {}

// Delete User
deleteUser() {}







}
