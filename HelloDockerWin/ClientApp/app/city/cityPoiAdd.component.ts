import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';
import { City, PointOfInterest } from '../shared/city';
import * as _ from 'lodash';


@Component({
    selector: 'city-poi',
    templateUrl: 'cityPoiAdd.component.html',
})
export class CityPoi implements OnInit {
    // Constructor
    constructor(private data: DataService) {
    }

    protected title: string = "Add Point of Interest";
    protected pointOfInterest: PointOfInterest = new PointOfInterest();

    ngOnInit(): void { }
}
