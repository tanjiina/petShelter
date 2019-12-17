import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  public pets : any = [];

  constructor(private _http : HttpService) { }

  ngOnInit() {
    let observable : Observable<any> = this._http.getPets();
    observable.subscribe(data => {
      console.log("Data received!", data);
      this.pets = data;
    })
	}

}
