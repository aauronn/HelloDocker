"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dataService_1 = require("../shared/dataService");
var router_1 = require("@angular/router");
var modal_1 = require("ngx-bootstrap/modal");
var _ = require("lodash");
var cityAdd_component_1 = require("./modals/cityAdd.component");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/combineLatest");
var CityList = /** @class */ (function () {
    // Constructor
    function CityList(data, router, modalService, changeDetection) {
        this.data = data;
        this.router = router;
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        // Variables
        this.title = 'Cities';
        this.cities = [];
        this.selectedCity = null;
        this.subscriptions = [];
    }
    //public city: City = new City();
    // Methods
    CityList.prototype.ngOnInit = function () {
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
    };
    CityList.prototype.deleteCity = function (theCity, template) {
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
    };
    CityList.prototype.deleteCityConfirm = function (theCity) {
        _.remove(this.cities, function (item) {
            return item == theCity;
        });
        this.bsModalRef.hide();
    };
    CityList.prototype.deleteCityDecline = function () {
        this.bsModalRef.hide();
    };
    CityList.prototype.openModal = function () {
        var _this = this;
        var _combine = Observable_1.Observable.combineLatest(
        //this.modalService.onShow,
        //this.modalService.onShown,
        this.modalService.onHide
        //this.modalService.onHidden
        ).subscribe(function () { return _this.changeDetection.markForCheck(); });
        this.subscriptions.push(this.modalService.onHide.subscribe(function (reason) {
            _this.getCities();
        }));
        var initialState = {
            title: 'Add City'
        };
        this.subscriptions.push(_combine);
        this.bsModalRef = this.modalService.show(cityAdd_component_1.CityAdd, { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    CityList.prototype.getCities = function () {
        var _this = this;
        this.data.loadCities()
            .subscribe(function (success) {
            _this.cities = _this.data.cities;
        }, function (fail) {
            if (fail.status === 401) {
            }
        });
    };
    CityList = __decorate([
        core_1.Component({
            selector: 'city-list',
            templateUrl: 'cityList.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService,
            router_1.Router,
            modal_1.BsModalService,
            core_1.ChangeDetectorRef])
    ], CityList);
    return CityList;
}());
exports.CityList = CityList;
//# sourceMappingURL=cityList.component.js.map