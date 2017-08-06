import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../providers/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  modal: boolean = false;

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.addFixScrollEvent();
  }

  public showSearch(): void {
    this.modal = true;
  }

  public hideSearch(): void {
    this.modal = false;
  }

  private addFixScrollEvent(): void {
    document.addEventListener('scroll', (e) => {
      this.menuService.fix();
    }, true);
  }

}
