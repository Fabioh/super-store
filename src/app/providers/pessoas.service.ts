import { Injectable } from '@angular/core';

@Injectable()
export class PessoasService {

  private listaPessoas: any = [
  {
      nome: 'Beatriz',
      idade: 22
    },
    {
      nome: 'Fábio',
      idade: 30
    },
    {
      nome: 'Roberto',
      idade: 31
    },
    {
      nome: 'Francisco',
      idade: 32
    },
    {
      nome: 'Helder',
      idade: 33
    },
    {
      nome: 'Fabricio',
      idade: 34
    }
  ];

  constructor() { }

  public getPessoas(): any[] {
    return this.listaPessoas;
  }
}
