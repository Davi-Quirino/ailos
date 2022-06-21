import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-check-identity',
  templateUrl: './check-identity.component.html',
  styleUrls: ['./check-identity.component.scss'],
})
export class CheckIdentityComponent implements OnInit {
  @Output() showCards: EventEmitter<boolean> = new EventEmitter<boolean>();

  cpfControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(11),
    Validators.minLength(11),
  ]);

  filtersForm: FormGroup = this.formBuilder.group({
    cpf: this.cpfControl,
  });

  disableButton: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  search(): void {
    if (this.filtersForm.valid) {
      this.showCards?.emit(true);
    } else {
      alert('Por favor, digite um cpf válido!');
    }
  }
}
