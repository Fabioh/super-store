import { Injectable } from '@angular/core';
// import * as $ from 'jquery';

@Injectable()
export class MenuService {

  private opened:boolean = false;

  private options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      route: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Produtos',
      route: '/products'
    }
  ];

  constructor() { }

  public open(): void {
    this.opened = true;
    setTimeout(() => {
      this.fix();
    });
  }

  public close(): void {
    this.opened = false;
  }

  public isMenuOpened(): boolean {
    return this.opened;
  }

  public changeOpened(): void {
    if (this.isMenuOpened()) {
      this.close();
    } else {
      this.open();
    }
  }

 public fix(): void {
    if (document.body.scrollTop > 65 // For Chrome, Safari and Opera
      || document.documentElement.scrollTop > 65 // For IE and Firefox
    ) {
      // $('section.outer').addClass('margin-fix');
      document.querySelector('section.outer').classList.add('margin-fix');
    } else {
      // $('section.outer').removeClass('margin-fix');
      document.querySelector('section.outer').classList.remove('margin-fix');
    }
  }

  public getOptions(): any[] {
    return this.options;
  }

}
