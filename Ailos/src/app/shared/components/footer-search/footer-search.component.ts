import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-footer-search',
  templateUrl: './footer-search.component.html',
  styleUrls: ['./footer-search.component.scss'],
})
export class FooterSearchComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() showButtons: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
