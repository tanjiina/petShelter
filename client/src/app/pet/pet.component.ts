import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public pet : any = [];
  public liked : any = false;

  constructor(private _http: HttpService, private _router: Router, private _route : ActivatedRoute){ }

  ngOnInit() {
    this._route.params.subscribe((params : Params) => {
      console.log(params['_id']);
      let observable = this._http.getOne(params['_id']);
      observable.subscribe(data => this.pet = data);
    });
  }

  adoptPet(_id){
    console.log("activated delete");
		let observable = this._http.deletePet(_id);
		observable.subscribe(data => {
      console.log("pet deleted", data)
      this._router.navigate(['/']);
		});
  }

  likePet(_id){
    this.pet.likes++;
    let observable = this._http.updatePet(_id, this.pet);
    observable.subscribe(data => {
      console.log(data);
    })
    this.liked = true;
  }

}
