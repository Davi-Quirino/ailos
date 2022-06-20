import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-footer-search',
  templateUrl: './footer-search.component.html',
  styleUrls: ['./footer-search.component.scss'],
})
export class FooterSearchComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  showButtons: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.checksExecutingAction();
  }

  checksExecutingAction(): void {
    this.appService.userCpf
      .pipe(takeUntil(this.destroy$))
      .subscribe((userCpf: number) => {
        this.showButtons = userCpf ? true : false;
      });
  }
}
