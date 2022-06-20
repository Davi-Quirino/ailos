import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-check-identity',
  templateUrl: './check-identity.component.html',
  styleUrls: ['./check-identity.component.scss'],
})
export class CheckIdentityComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  filtersForm: FormGroup = this.formBuilder.group({
    cpf: [null],
  });

  disableButton: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.checksExecutingAction();
  }

  checksExecutingAction(): void {
    this.appService.userCpf
      .pipe(takeUntil(this.destroy$))
      .subscribe((userCpf: number) => {
        console.log('bbb', userCpf);
        console.log('ccc', this.disableButton);
        this.disableButton = userCpf ? true : false;
        console.log('ddd', this.disableButton);
      });
  }

  isCPF(): boolean {
    if (
      !this.filtersForm.value ||
      this.filtersForm.value.cpf?.length !== 11 ||
      !this.filtersForm.value.cpf.match(/^[0-9]+$/)
    ) {
      alert('Por favor, digite um cpf válido!');
      return false;
    }
    return true;
  }

  onSearch(): void {
    var isCpf = this.isCPF();
    if (isCpf) {
      this.router.navigateByUrl('/user-infos');
      this.appService.userCpf.next(this.filtersForm.value.cpf);
    }
  }
}
