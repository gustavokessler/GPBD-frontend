import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = [47, 200, 50, 255];
  label = ['Horas concluídas', 'Horas necessárias', 'teste', 'trav'];


  title = 'GPBD-frontend';
}
