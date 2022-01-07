import { IngressoModel} from './ingresso.model';
import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.scss']
})

export class IngressoComponent implements OnInit {


  filmes = [
    {
      id: 1,
      nome:  "Batman"
    },
    {
    id: 2,
    nome: "Batman"
    }
  ]


 ingresso: IngressoModel = new IngressoModel();




  constructor() { }

  ngOnInit(): void {
  }

}
