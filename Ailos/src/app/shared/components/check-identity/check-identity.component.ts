import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-check-identity',
  templateUrl: './check-identity.component.html',
  styleUrls: ['./check-identity.component.scss'],
})
export class CheckIdentityComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  @Output() onSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  cpfControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(11),
    Validators.minLength(11),
  ]);

  filtersForm: FormGroup = this.formBuilder.group({
    cpf: this.cpfControl,
  });

  disableButton: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) //private appService: AppService
  {}

  ngOnInit(): void {}

  search(): void {
    if (this.filtersForm.valid) {
      this.onSearch?.emit(true);
      //this.router.navigateByUrl('/user-infos');
    } else {
      alert('Por favor, digite um cpf válido!');
    }
  }
}
