import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  getUsers(): Promise<User[]> {
    const promise = (resolve, reject) => {
      let next = (response) => {
        let users: User[] = response as User[];
        resolve(users);
      }
      let error = (error) => {
        reject(error);
      }
      
      this.http.get(environment.apiUrl+'/users.json').subscribe(next, error);
    }
    return new Promise(promise);
  }
  getUser(id: string): Promise<User> {
    const promise = (resolve, reject) => {
      let next = (response) => {
        let user: User = response as User;
        resolve(user);
      }
      let error = (error) => {
        reject(error);
      }
      this.http.get(environment.apiUrl+'/users.json/'+id).subscribe(next, error);
    }
    return new Promise(promise);
  }
}
