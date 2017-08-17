import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NodeStrService } from '../../providers/node-str.service';
import { ApiVersion } from '../../model/api-version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  public nodeStr: Observable<ApiVersion>;

  constructor(private nodeStrService: NodeStrService) {
    setTimeout(() => {
      this.nodeStr = this.nodeStrService.loadApiVersion();
    }, 5000);
  }

  ngOnInit() {
  }
}
