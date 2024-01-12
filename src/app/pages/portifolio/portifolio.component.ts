import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css'
})
export class PortifolioComponent implements OnInit{
  id: string = ""

  constructor(private route: ActivatedRoute, private navegador: Router) {

    console.log("Parametros: ", this.route.snapshot.paramMap)
    console.log("Parametros filhos: ", this.route.snapshot.firstChild?.paramMap)

    console.log("Query: ", this.route.snapshot.queryParamMap)

  }
  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate([''])
    // }, 5000)
  }

}
