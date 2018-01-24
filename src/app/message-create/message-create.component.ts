import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-message-create',
    templateUrl: './message-create.component.html',
    styleUrls: ['./message-create.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MessageCreateComponent implements OnInit {

    message = {};

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
    }

    saveMessage() {
        this.http.post('/message', this.message)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/message-details', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}