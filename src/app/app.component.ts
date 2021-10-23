import {Component, OnInit} from '@angular/core';
import {WorkerService} from './workers/worker.service';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    title = 'tic-tac-toe';
    result!: number;

    constructor(private workerService: WorkerService,
                private appService: AppService) {
        this.appService.subject.subscribe(value => this.result = value);
    }

    ngOnInit() {
        this.workerService.calcCounter(this.result, (value: number) => {
            this.result = value;
        });
    }

}
