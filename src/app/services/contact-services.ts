import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServices {
  private http = inject(HttpClient)

  // Functions
  list(){
    return this.http.get(`http://localhost:8080/api/contacts`)
  }
  get(id: number){
    return this.http.get(`http://localhost:8080/api/contacts/${id}`)
  }
  create(contact : any ){
    return this.http.post(`http://localhost:8080/api/contacts`, contact)
  }
  update(id: number, contact : any ){
    return this.http.put(`http://localhost:8080/api/contacts/${id}`, contact)
  }
  delete(id : number){
    return this.http.delete(`http://localhost:8080/api/contacts/${id}`)
  }


}
