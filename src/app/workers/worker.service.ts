import {Injectable} from '@angular/core';
import {AppService} from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class WorkerService {

    constructor(private appService: AppService) {
    }

    calcCounter(initValue: number, updateCounter: (value: number) => void): void {
        if (typeof Worker !== 'undefined') {
            const worker = new Worker(new URL('./app.worker', import.meta.url));
            worker.postMessage(initValue);

            /** Solution 1: pass the data through service */
            worker.onmessage = ({data}) => this.appService.subject.next(data);

            /** Solution 2: pass the data through callback */
            worker.onmessage = ({data}) => updateCounter(data);
        } else {
            console.warn('Web Workers are not supported in this environment.');
        }

    }


}
