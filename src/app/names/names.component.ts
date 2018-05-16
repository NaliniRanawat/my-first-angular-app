import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
// name:string = "Angular 4";
nameList = ["John", "Cina", "Ho" , "Ho", "Kai"];
  constructor() { }

  ngOnInit() {
  }

}
