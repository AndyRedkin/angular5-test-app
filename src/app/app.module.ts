import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';

const appRoutes: Routes = [
    {
        path: 'messages',
        component: MessageComponent,
        data: { title: 'Message List' }
    },
    {
        path: 'message-details/:id',
        component: MessageDetailComponent,
        data: { title: 'Message Details' }
    },
    {
        path: 'message-create',
        component: MessageCreateComponent,
        data: { title: 'Create Message' }
    },
    {
        path: 'message-edit/:id',
        component: MessageEditComponent,
        data: { title: 'Edit Message' }
    },
    { path: '',
        redirectTo: '/messages',
        pathMatch: 'full'
    }
];
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageDetailComponent,
        MessageCreateComponent,
        MessageEditComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }