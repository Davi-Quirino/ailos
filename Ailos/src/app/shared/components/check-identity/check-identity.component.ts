import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-identity',
  templateUrl: './check-identity.component.html',
  styleUrls: ['./check-identity.component.scss'],
})
export class CheckIdentityComponent implements OnInit {
  filtersForm: FormGroup = this.formBuilder.group({
    cpf: [null],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  isCPF(): boolean {
    if (!this.filtersForm.value || this.filtersForm.value.cpf.length !== 11)
      return false;
    return true;
  }

  onSearch(event: any): void {
    event.preventDefault();

    var isCpf = this.isCPF();
    if (isCpf) this.router.navigateByUrl('/user-infos');
  }
}
