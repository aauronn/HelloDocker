import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { City, PointOfInterest } from '../shared/city';
import * as _ from 'lodash';
import { CityAdd } from './modals/cityAdd.component';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/combineLatest';

@Component({
    selector: 'city-list',
    templateUrl: 'cityList.component.html',
    styleUrls: []
})
export class CityList implements OnInit {
    // Variables
    public title = 'Cities';
    public cities: City[] = [];
    public selectedCity: City = null;

    public bsModalRef: BsModalRef;
    public subscriptions: Subscription[] = [];

    // Constructor
    constructor(private data: DataService,
        private router: Router,
        private modalService: BsModalService,
        private changeDetection: ChangeDetectorRef) {
    }


    //public city: City = new City();

    // Methods
    ngOnInit(): void {

        if (this.data.loginRequired) {
            this.router.navigate(['/login', { returnUrl: '/' }]);
        }
        else {
            //this.data.loadCities()
            //    .subscribe(success => {
            //        this.cities = this.data.cities;
            //    }, fail => {
            //        if (fail.status === 401) {

            //        }
            //    });
            this.getCities();
        }
    }

    deleteCity(theCity: City, template: TemplateRef<any>): void {
        if (this.data.loginRequired) {
            this.router.navigate(['/login', { returnUrl: '/' }]);
        }
        else {
            //if (confirm("City " + theCity.name + " has been deleted")) {
            //    _.remove(this.cities, (item: City) => {
            //        return item == theCity;
            //    });
            //}
            //else {
            //}
            this.selectedCity = theCity;
            this.bsModalRef = this.modalService.show(template, { class: 'modal-sm' });
        }
    }

    deleteCityConfirm(theCity: City): void {
        _.remove(this.cities, (item: City) => {
            return item == theCity;
        });
        this.bsModalRef.hide();
    }

    deleteCityDecline(): void {
        this.bsModalRef.hide();
    }

    openModal(): void {
        const _combine = Observable.combineLatest(
            //this.modalService.onShow,
            //this.modalService.onShown,
            this.modalService.onHide
            //this.modalService.onHidden
        ).subscribe(() => this.changeDetection.markForCheck());

        this.subscriptions.push(
            this.modalService.onHide.subscribe((reason: string) => {
                this.getCities();
            })
        );

        const initialState = {
            title: 'Add City'
        };


        this.subscriptions.push(_combine);
        this.bsModalRef = this.modalService.show(CityAdd, { initialState });
        this.bsModalRef.content.closeBtnName = 'Close';


    }

    getCities(): void {
        this.data.loadCities()
            .subscribe(success => {
                this.cities = this.data.cities;
            }, fail => {
                if (fail.status === 401) {

                }
            });
    }
}
