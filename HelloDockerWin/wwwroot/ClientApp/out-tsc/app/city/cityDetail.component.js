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
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var dataService_1 = require("../shared/dataService");
var city_1 = require("../shared/city");
var CityDetail = /** @class */ (function () {
    function CityDetail(data, _Activatedroute, router) {
        this.data = data;
        this._Activatedroute = _Activatedroute;
        this.router = router;
        this.city = new city_1.City();
        this.id = '';
        this.data.city = new city_1.City();
    }
    // Methods
    CityDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this._Activatedroute.snapshot.params['id'];
        this.sub = this._Activatedroute.params
            .subscribe(function (params) {
            _this.getCity(params['id']);
            _this.city = _this.data.city;
        });
    };
    CityDetail.prototype.onBack = function () {
        this.city = null;
        this.city = undefined;
    };
    CityDetail.prototype.ngOnDestroy = function () {
        //this.city.description = '';
        //this.city.id = '';
        //this.city.name = '';
        //this.city.pointsOfInterest = [];
        this.sub.unsubscribe();
    };
    CityDetail.prototype.getCity = function (id) {
        var _this = this;
        if (this.data.loginRequired) {
            this.router.navigate(['/login', { returnUrl: '/' }]);
        }
        else {
            this.data.getCity(id, true)
                .subscribe(function (success) {
                _this.city = _this.data.city;
            });
        }
    };
    CityDetail = __decorate([
        core_1.Component({
            selector: 'city-detail',
            templateUrl: 'cityDetail.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService,
            router_2.ActivatedRoute,
            router_1.Router])
    ], CityDetail);
    return CityDetail;
}());
exports.CityDetail = CityDetail;
//# sourceMappingURL=cityDetail.component.js.map