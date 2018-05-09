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
var dataService_1 = require("../../shared/dataService");
var router_1 = require("@angular/router");
var bs_modal_ref_service_1 = require("ngx-bootstrap/modal/bs-modal-ref.service");
var city_1 = require("../../shared/city");
var CityAdd = /** @class */ (function () {
    function CityAdd(bsModalRef, data, router) {
        this.bsModalRef = bsModalRef;
        this.data = data;
        this.router = router;
        this.list = [];
        this.city = new city_1.City();
    }
    CityAdd.prototype.ngOnInit = function () {
        if (this.data.loginRequired) {
            this.router.navigate(['/login', { returnUrl: '/cities/add' }]);
        }
    };
    CityAdd.prototype.addItem = function (city) {
        var _this = this;
        this.data.addCity(city).subscribe(function (sucess) {
            //alert('Name: ' + city.name + '. Description: ' + city.description);
            _this.bsModalRef.hide();
        });
    };
    CityAdd = __decorate([
        core_1.Component({
            selector: 'city-add',
            templateUrl: 'cityAdd.component.html',
            styleUrls: ['../css/city.styles.css']
        }),
        __metadata("design:paramtypes", [bs_modal_ref_service_1.BsModalRef,
            dataService_1.DataService,
            router_1.Router])
    ], CityAdd);
    return CityAdd;
}());
exports.CityAdd = CityAdd;
//# sourceMappingURL=cityAdd.component.js.map