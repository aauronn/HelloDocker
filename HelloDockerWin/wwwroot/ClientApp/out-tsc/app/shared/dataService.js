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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var city_1 = require("../shared/city");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var moment = require("moment");
var DataService = /** @class */ (function () {
    function DataService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.token = "";
        this.tokenCookie = 'UNKNOWN';
        this.cities = [];
        this.city = new city_1.City();
    }
    Object.defineProperty(DataService.prototype, "loginRequired", {
        // Methods
        get: function () {
            //return this.token.length === 0 || this.tokenExpiration > new Date();
            this.token = this.cookieService.get('authtoken');
            return this.cookieService.get('authtoken').length === 0;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http
            .post('/api/account/createtoken', creds)
            .map(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            _this.cookieService.set('authtoken', _this.token, moment(_this.tokenExpiration).toDate());
            return true;
        });
    };
    DataService.prototype.loadCities = function () {
        var _this = this;
        return this.http.get('/api/cities', { headers: new http_1.HttpHeaders().set("Authorization", "Bearer " + this.token) })
            .map(function (data) {
            _this.cities = data;
            return true;
        });
    };
    DataService.prototype.getCity = function (cityId, withpoi) {
        var _this = this;
        if (withpoi === void 0) { withpoi = false; }
        return this.http.get('/api/cities/' + cityId + '?includePointsOfInterest=' + withpoi, { headers: new http_1.HttpHeaders().set("Authorization", "Bearer " + this.token) })
            .map(function (data) {
            _this.city = data;
            return true;
        });
    };
    DataService.prototype.addCity = function (city) {
        var _this = this;
        var cityToAdd = new city_1.CityToAdd();
        cityToAdd.description = city.description;
        cityToAdd.name = city.name;
        return this.http.post('/api/cities', city, { headers: new http_1.HttpHeaders().set("Authorization", "Bearer " + this.token) })
            .map(function (data) {
            _this.city = data;
            return true;
        });
    };
    DataService.prototype.deleteCity = function (city) {
        return this.http.delete('/api/cities' + city.id, { headers: new http_1.HttpHeaders().set("Authorization", "Bearer " + this.token) })
            .map(function (response) {
            response.json();
            return true;
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, ngx_cookie_service_1.CookieService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map