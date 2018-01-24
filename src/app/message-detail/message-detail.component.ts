import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-message-detail',
    templateUrl: './message-detail.component.html',
    styleUrls: ['./message-detail.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MessageDetailComponent implements OnInit {

    message = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
        this.getMessageDetail(this.route.snapshot.params['id']);
    }

    getMessageDetail(id) {
        this.http.get('/message/'+id).subscribe(data => {
            this.message = data;
        });
    }

    deleteMessage(id) {
        this.http.delete('/message/'+id)
            .subscribe(res => {
                    this.router.navigate(['/messages']);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}