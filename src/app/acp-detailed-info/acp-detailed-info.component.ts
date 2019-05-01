import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acp-detailed-info',
  templateUrl: './acp-detailed-info.component.html',
  styleUrls: ['./acp-detailed-info.component.css']
})
export class AcpDetailedInfoComponent implements OnInit {

  @Input() tempContent: string;

  constructor() { }

  ngOnInit() {
  }

}
