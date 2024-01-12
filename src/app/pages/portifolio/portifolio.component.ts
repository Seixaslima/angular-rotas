import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css'
})
export class PortifolioComponent {
  id: string = ""

  constructor(private route: ActivatedRoute) {

    console.log(this.route.snapshot.paramMap)
    console.log(this.route.snapshot.queryParamMap)

  }

}
