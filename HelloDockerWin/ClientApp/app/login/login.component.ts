import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: []
})

export class Login implements OnInit {
    // Constructor
    constructor(private data: DataService,
        private _Activatedroute: ActivatedRoute,
        private router: Router) {
    }

    public returnUrl: string = "";

    public creds = {
        username: "",
        password: ""
    };
    errorMessage: string = "";

    // Methods
    ngOnInit(): void {
        if (!this.data.loginRequired) {
            this.router.navigate(['/cities']);
        }

        this._Activatedroute.queryParams
            .subscribe(params => {
                //this.getCity(params['id']);
                this.returnUrl = decodeURIComponent(params['returnUrl']);
            });  
    }

    onLogin() {
        this.data.login(this.creds)
            .subscribe(sucess => {
                if (this.returnUrl !== 'undefined') {
                    this.router.navigate([this.returnUrl])
                } else if (this.returnUrl !== this.returnUrl) {

                }
                else {
                    this.router.navigate(["/cities"])
                }
            }, error => {
                this.errorMessage = "Failed to Login";
            })
    }
}
