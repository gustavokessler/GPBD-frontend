import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosql',
  templateUrl: './nosql.component.html',
  styleUrls: ['./nosql.component.css']
})
export class NosqlComponent implements OnInit {

  data = [47, 200, 50, 255];
  label = ['Horas concluídas', 'Horas necessárias', 'teste', 'trav'];

  constructor() { }

  ngOnInit() {
  }

}
