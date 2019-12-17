import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public pet : any = {}
  public errors : any = {}

  constructor(private _http: HttpService,  private _router: Router) { }

  ngOnInit() {
  }

  addPet(){
    console.log(this.pet);
    let observable : Observable<any> = this._http.createPet(this.pet);
    observable.subscribe(data => {
      console.log(data)
      if(data.errors){
        this.errors = data.errors;
      } else{
        this._router.navigate(['/']);
      }
    });
    this.pet = {};
    this.errors = {};
  }
}