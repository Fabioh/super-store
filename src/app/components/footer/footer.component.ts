import { Component, OnInit } from '@angular/core';
import { NodeStrService } from '../../providers/node-str.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  public nodeStr: any = {};
  public loading: boolean = true;

  constructor(private nodeStrService: NodeStrService) {
    this.nodeStrService.loadApiVersion().then((result: any) => {
      this.loading = false
      this.nodeStr = result;
    });
  }

  ngOnInit() {
  }

}
