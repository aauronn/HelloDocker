import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { AlertModule, ModalModule } from 'ngx-bootstrap';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CityList } from './city/cityList.component';
import { CityDetail } from './city/cityDetail.component';
import { CityAdd } from './city/modals/cityAdd.component';
import { Login } from './login/login.component';


import { DataService } from './shared/dataService';

let routes = [
    { path: '', component: Login },
    { path: 'cities', component: CityList},
    //{ path: 'cities/add', component: CityAdd },
    { path: 'cities/:id', component: CityDetail },
    { path: '**', component: Login },
];

@NgModule({
    declarations: [
        AppComponent,
        CityList,
        CityDetail,
        CityAdd,
        Login
    ],
    imports: [
        //NgbModule.forRoot(),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: true // for debugging routes

        }),
        ModalModule.forRoot(),
        AlertModule.forRoot()
    ],
    providers: [
        DataService,
        CookieService
    ],
    entryComponents: [
        CityAdd
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
