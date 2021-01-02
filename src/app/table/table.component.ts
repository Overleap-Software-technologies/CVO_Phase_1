import { Component, OnInit } from '@angular/core';
declare const test:any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    alert("Hello")
    test()
  }

}
