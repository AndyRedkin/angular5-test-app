import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-message-edit',
    templateUrl: './message-edit.component.html',
    styleUrls: ['./message-edit.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MessageEditComponent implements OnInit {

    message = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getMessage(this.route.snapshot.params['id']);
    }

    getMessage(id) {
        this.http.get('/message/'+id).subscribe(data => {
            this.message = data;
        });
    }

    updateMessage(id, data) {
        this.http.put('/message/'+id, data)
            .subscribe(res => {
                    let id = res['_id'];
                    this.router.navigate(['/message-details', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }

}