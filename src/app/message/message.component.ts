import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit {

    messages: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('/message').subscribe(data => {
            console.log(data);
            this.messages = data;
        });
    }

}