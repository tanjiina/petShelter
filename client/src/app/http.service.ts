import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){ }

  getPets() : Observable<any> {
    return this._http.get('/pets');
  }
  createPet(pet) : Observable<any> {
    return this._http.post('/pets', pet);
  }
  getOne(_id) : Observable<any> {
    return this._http.get('/pets/'+_id);
  }
  updatePet(_id, pet) : Observable<any> {
    return this._http.put('/pets/'+_id, pet);
  }
  deletePet(_id) : Observable<any> {
    return this._http.delete('/pets/'+_id);
  }
}
