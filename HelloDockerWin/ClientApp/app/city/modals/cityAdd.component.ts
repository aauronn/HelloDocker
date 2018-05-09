import { Component, OnInit } from "@angular/core";
import { DataService } from "../../shared/dataService";
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { City } from "../../shared/city";



@Component({
    selector: 'city-add',
    templateUrl: 'cityAdd.component.html',
    styleUrls: ['../css/city.styles.css']
})
export class CityAdd implements OnInit {
    public closeBtnName: string;
    public list: any[] = [];

    public city: City = new City();


    constructor(public bsModalRef: BsModalRef,
        private data: DataService,
        private router: Router) { }

    ngOnInit(): void {
        if (this.data.loginRequired) {
            this.router.navigate(['/login', { returnUrl: '/cities/add' }]);
        }
    }

    addItem(city): void {
        
        this.data.addCity(city).subscribe(sucess => {
            //alert('Name: ' + city.name + '. Description: ' + city.description);
            this.bsModalRef.hide();
        });
    }

}