import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    let headers = new HttpHeaders({'secret-key': '$2b$10$nzhb3l1YHnuiu2pGZxAcIucc2jnSCtIViUQkvtHLx0Pf5EJ/dMvfG'});
    return this.http.get('https://api.jsonbin.io/b/5ebd73ef8284f36af7bb2587', {headers})
  }

  updateUser(amigo){
    let headers = new HttpHeaders({'secret-key': '$2b$10$nzhb3l1YHnuiu2pGZxAcIucc2jnSCtIViUQkvtHLx0Pf5EJ/dMvfG','versioning': 'false','Content-Type':'application/json'});
    this.http.put("https://api.jsonbin.io/b/5ebd73ef8284f36af7bb2587",amigo,{headers})
    .subscribe(
        (val) => {
            console.log("PUT call successful value returned in body",val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        });
}
  }



