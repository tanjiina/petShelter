import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public pet: any = {};
  public errors: any= {};

  constructor(private _http: HttpService, private _router: Router, private _route : ActivatedRoute){ }

  ngOnInit() {
   this._route.params.subscribe((params: Params) => {
      console.log(params['_id']);
      const observable : Observable<any> = this._http.getOne(params['_id']);
      observable.subscribe( data => this.pet = data );
    });
  }

  editPet(_id){
    console.log("activated edit");
		let observable = this._http.updatePet(_id, this.pet);
		observable.subscribe(data => {
		  console.log(data)
      if(data.errors){
        this.errors = data.errors;
      } else{
        this._router.navigate([`pet/${_id}`]);
      }
    });
  }
}
