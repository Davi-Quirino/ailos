import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
  public userCpf: Subject<number> = new Subject();
}
