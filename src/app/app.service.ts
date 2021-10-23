import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {

    subject = new BehaviorSubject<number>(7);

}
