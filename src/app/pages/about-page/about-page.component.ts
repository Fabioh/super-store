import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../providers/pessoas.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
 export class AboutPageComponent implements OnInit {

  constructor(public pessoaService: PessoasService) { }

  ngOnInit() {
  }

}
