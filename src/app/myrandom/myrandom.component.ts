import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myrandom',
  templateUrl: './myrandom.component.html',
  styleUrls: ['./myrandom.component.css']
})
export class MyrandomComponent implements OnInit {
  randomno: number=0;

  constructor() { }

  ngOnInit(): void {
  }
  generateRandomRollNo =() => {
    this.randomno= Math.ceil(Math.random() * 69)   //random no. between 0 to 68
  }
}
