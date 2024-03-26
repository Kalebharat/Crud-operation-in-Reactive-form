import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postEmpoylee(data:any){
 return  this.http.post(' http://localhost:3000/posts',data)
  }

  getEmpolyee(){
    return this.http.get('http://localhost:3000/posts');
  }

  deleteEmpoylee(id:number){
    return this.http.delete('http://localhost:3000/posts/'+ id)
  }

  updateEmpoylee(data:any,id:number){
    return this.http.put('http://localhost:3000/posts/'+id,data)
  }
}
