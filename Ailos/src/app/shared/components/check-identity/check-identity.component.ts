import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-identity',
  templateUrl: './check-identity.component.html',
  styleUrls: ['./check-identity.component.scss'],
})
export class CheckIdentityComponent implements OnInit {
  filtersForm: FormGroup = this.formBuilder.group({
    cpf: [null],
  });
  cpf_cnpj = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  isCPF(): boolean {
    return this.cpf_cnpj == null
      ? true
      : this.cpf_cnpj.length < 12
      ? true
      : false;
  }

  getCpfCnpjMask(): string {
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }

  onSearch(): void {
    console.log(this.filtersForm.value);
  }
}
