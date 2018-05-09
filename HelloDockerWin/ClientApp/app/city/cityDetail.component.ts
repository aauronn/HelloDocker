import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/dataService';
import { City, PointOfInterest } from '../shared/city';
import * as _ from 'lodash';

@Component({
    selector: 'city-detail',
    templateUrl: 'cityDetail.component.html',
    styleUrls: []
})
export class CityDetail implements OnInit {
    constructor(private data: DataService,
        private _Activatedroute: ActivatedRoute,
        private router: Router) {
        this.data.city = new City();
    }

    public city: City = new City();
    public id: string = '';

    sub;
    // Methods
    ngOnInit(): void {
        this.id = this._Activatedroute.snapshot.params['id'];

        this.sub = this._Activatedroute.params
            .subscribe(params => {
                this.getCity(params['id']);
  
                this.city = this.data.city;
            });      
    }

    onBack(): void {
        this.city = null;
        this.city = undefined;
    }

    ngOnDestroy() {
        //this.city.description = '';
        //this.city.id = '';
        //this.city.name = '';
        //this.city.pointsOfInterest = [];
        
        this.sub.unsubscribe();
    }

    getCity(id: string): void {
        if (this.data.loginRequired) {
            this.router.navigate(['/login', { returnUrl: '/' }]);
        }
        else {
            this.data.getCity(id, true)
                .subscribe(success => {
                    this.city = this.data.city;
                });
        }
    }


}