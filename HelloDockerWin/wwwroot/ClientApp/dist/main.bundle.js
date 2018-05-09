webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"6000\">\r\n    <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <div class=\"item active\">\r\n            <img src=\"../../images/banner1.svg\" alt=\"ASP.NET\" class=\"img-responsive\" />\r\n            <div class=\"carousel-caption\" role=\"option\">\r\n                <p>\r\n                    Learn how to build ASP.NET apps that can run anywhere.\r\n                    <a class=\"btn btn-default\" href=\"https://go.microsoft.com/fwlink/?LinkID=525028&clcid=0x409\">\r\n                        Learn More\r\n                    </a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img src=\"../../images/banner2.svg\" alt=\"Visual Studio\" class=\"img-responsive\" />\r\n            <div class=\"carousel-caption\" role=\"option\">\r\n                <p>\r\n                    There are powerful new features in Visual Studio for building modern web apps.\r\n                    <a class=\"btn btn-default\" href=\"https://go.microsoft.com/fwlink/?LinkID=525030&clcid=0x409\">\r\n                        Learn More\r\n                    </a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img src=\"../../images/banner3.svg\" alt=\"Package Management\" class=\"img-responsive\" />\r\n            <div class=\"carousel-caption\" role=\"option\">\r\n                <p>\r\n                    Bring in libraries from NuGet and npm, and automate tasks using Grunt or Gulp.\r\n                    <a class=\"btn btn-default\" href=\"https://go.microsoft.com/fwlink/?LinkID=525029&clcid=0x409\">\r\n                        Learn More\r\n                    </a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img src=\"../../images/banner4.svg\" alt=\"Microsoft Azure\" class=\"img-responsive\" />\r\n            <div class=\"carousel-caption\" role=\"option\">\r\n                <p>\r\n                    Learn how Microsoft's Azure cloud platform allows you to build, deploy, and scale web apps.\r\n                    <a class=\"btn btn-default\" href=\"https://go.microsoft.com/fwlink/?LinkID=525027&clcid=0x409\">\r\n                        Learn More\r\n                    </a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>-->\r\n<!--<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <h2>Luis</h2>\r\n        <ul>\r\n            <li>Sample pages using ASP.NET Core MVC</li>\r\n            <li>Theming using <a href=\"https://go.microsoft.com/fwlink/?LinkID=398939\">Bootstrap</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <h2>How to</h2>\r\n        <ul>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkID=398600\">Add a Controller and View</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkId=699315\">Manage User Secrets using Secret Manager.</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkId=699316\">Use logging to log a message.</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkId=699317\">Add packages using NuGet.</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkId=699319\">Target development, staging or production environment.</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <h2>Overview</h2>\r\n        <ul>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkId=518008\">Conceptual overview of what is ASP.NET Core</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkId=699320\">Fundamentals of ASP.NET Core such as Startup and middleware.</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkId=398602\">Working with Data</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkId=398603\">Security</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkID=699321\">Client side development</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkID=699322\">Develop on different platforms</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkID=699323\">Read more on the documentation site</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <h2>Run &amp; Deploy</h2>\r\n        <ul>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkID=517851\">Run your app</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkID=517853\">Run tools such as EF migrations and more</a></li>\r\n            <li><a href=\"https://go.microsoft.com/fwlink/?LinkID=398609\">Publish to Microsoft Azure Web Apps</a></li>\r\n        </ul>\r\n    </div>\r\n</div>-->\r\n\r\n<!--<city-list></city-list>-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var utils_1 = __webpack_require__("./node_modules/ngx-bootstrap/utils/index.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        utils_1.setTheme('bs3'); // or 'bs4'
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var ngx_bootstrap_1 = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var cityList_component_1 = __webpack_require__("./ClientApp/app/city/cityList.component.ts");
var cityDetail_component_1 = __webpack_require__("./ClientApp/app/city/cityDetail.component.ts");
var cityAdd_component_1 = __webpack_require__("./ClientApp/app/city/modals/cityAdd.component.ts");
var login_component_1 = __webpack_require__("./ClientApp/app/login/login.component.ts");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var routes = [
    { path: '', component: login_component_1.Login },
    { path: 'cities', component: cityList_component_1.CityList },
    //{ path: 'cities/add', component: CityAdd },
    { path: 'cities/:id', component: cityDetail_component_1.CityDetail },
    { path: '**', component: login_component_1.Login },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                cityList_component_1.CityList,
                cityDetail_component_1.CityDetail,
                cityAdd_component_1.CityAdd,
                login_component_1.Login
            ],
            imports: [
                //NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: true // for debugging routes
                }),
                ngx_bootstrap_1.ModalModule.forRoot(),
                ngx_bootstrap_1.AlertModule.forRoot()
            ],
            providers: [
                dataService_1.DataService,
                ngx_cookie_service_1.CookieService
            ],
            entryComponents: [
                cityAdd_component_1.CityAdd
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./ClientApp/app/city/cityDetail.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>{{city.name}}</h3>\r\n<p>{{city.description}}</p>\r\n<ul>\r\n    <li *ngFor=\"let poi of city.pointsOfInterest\">{{ poi.name }} - {{poi.description}}</li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/city/cityDetail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var router_2 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var city_1 = __webpack_require__("./ClientApp/app/shared/city.ts");
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
            template: __webpack_require__("./ClientApp/app/city/cityDetail.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService,
            router_2.ActivatedRoute,
            router_1.Router])
    ], CityDetail);
    return CityDetail;
}());
exports.CityDetail = CityDetail;


/***/ }),

/***/ "./ClientApp/app/city/cityList.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>Cities</h3>\r\n        \r\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"openModal()\"><i class=\"fa fa-plus\"></i></button>\r\n        <table class=\"table table-bordered table-condensed\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Description</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let c of cities\">\r\n                    <td>{{ c.name }}</td>\r\n                    <td>{{c.description}}</td>\r\n                    <td>\r\n                        <a [routerLink]=\"['/cities/', c.id]\" class=\"btn btn-info btn-sm\">Details</a>\r\n                        <button class=\"btn btn-danger btn-sm\" (click)=\"deleteCity(c, confirmationModal)\"><i class=\"fas fa-trash\"></i> Delete</button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        \r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<ng-template #confirmationModal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Delete {{selectedCity.name}}</h4>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <p>Do you want to delete {{selectedCity.name}}?</p>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"deleteCityConfirm(selectedCity)\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteCityDecline()\">No</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./ClientApp/app/city/cityList.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var modal_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var cityAdd_component_1 = __webpack_require__("./ClientApp/app/city/modals/cityAdd.component.ts");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
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
            template: __webpack_require__("./ClientApp/app/city/cityList.component.html"),
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


/***/ }),

/***/ "./ClientApp/app/city/css/city.styles.css":
/***/ (function(module, exports) {

module.exports = ".backdrop {\r\n    background-color: rgba(0,0,0,0.6);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.modal-header {\r\n    background-color: #33a1d9;\r\n    border-color: #33a1d9;\r\n    border-top-left-radius: 6px;\r\n    border-top-right-radius: 6px;\r\n    color:white;\r\n    font-weight:bold;\r\n}\r\n\r\nbutton.close {\r\n    \r\n    font-weight: bold;\r\n}\r\n\r\n.modal-footer {\r\n    background-color: #f4f4f4;\r\n    border-color: #f4f4f4;\r\n    border-bottom-left-radius: 6px;\r\n    border-bottom-right-radius: 6px;\r\n}"

/***/ }),

/***/ "./ClientApp/app/city/modals/cityAdd.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate #theForm=\"ngForm\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">{{title}}</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n            <!--<span aria-hidden=\"true\">&times;</span>-->\r\n            <i class=\"fa fa-times\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h2>{{title}}</h2>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': name.touched && name.invalid}\">\r\n                    <label class=\"control-label\" for=\"name\">Name</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"city.name\" #name=\"ngModel\" required />\r\n                    <span *ngIf=\"name.touched && name.invalid && name.errors.required\" class=\"text-danger\">Username is required!</span>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': description.touched && description.invalid}\">\r\n                    <label class=\"control-label\" for=\"description\">Description</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"city.description\" #description=\"ngModel\" required />\r\n                    <span *ngIf=\"description.touched && description.invalid && description.errors.required\" class=\"text-danger\">Password is required</span>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group pull-right\">\r\n                    \r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\r\n        <!--<a routerLink=\"/cities\" class=\"btn btn btn-default\">Cancel</a>-->\r\n        <input type=\"submit\" value=\"Add City\" class=\"btn btn-primary\" (click)=\"addItem(city)\" [disabled]=\"theForm.invalid\" />\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./ClientApp/app/city/modals/cityAdd.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var bs_modal_ref_service_1 = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
var city_1 = __webpack_require__("./ClientApp/app/shared/city.ts");
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
            template: __webpack_require__("./ClientApp/app/city/modals/cityAdd.component.html"),
            styles: [__webpack_require__("./ClientApp/app/city/css/city.styles.css")]
        }),
        __metadata("design:paramtypes", [bs_modal_ref_service_1.BsModalRef,
            dataService_1.DataService,
            router_1.Router])
    ], CityAdd);
    return CityAdd;
}());
exports.CityAdd = CityAdd;


/***/ }),

/***/ "./ClientApp/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <h1>Angular Login</h1>\r\n        <form novalidate (submit)=\"onLogin()\" #theForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label >Username</label>\r\n                <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required/>\r\n                <span *ngIf=\"username.touched && username.invalid && username.errors.required\" class=\"text-danger\">Username is required!</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label >Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required/>\r\n                <span *ngIf=\"password.touched && password.invalid && password.errors.required\" class=\"text-danger\">Password is required</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"checkbox\" class=\"checkbox-inline\" />\r\n                <label>Remember Me</label>\r\n                <span></span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" value=\"Login\" class=\"btn btn-success\" (click)=\"onLogin\" [disabled]=\"theForm.invalid\"/>\r\n                <a routerLink=\"/\" class=\"btn btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var dataService_1 = __webpack_require__("./ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Login = /** @class */ (function () {
    // Constructor
    function Login(data, _Activatedroute, router) {
        this.data = data;
        this._Activatedroute = _Activatedroute;
        this.router = router;
        this.returnUrl = "";
        this.creds = {
            username: "",
            password: ""
        };
        this.errorMessage = "";
    }
    // Methods
    Login.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.data.loginRequired) {
            this.router.navigate(['/cities']);
        }
        this._Activatedroute.queryParams
            .subscribe(function (params) {
            //this.getCity(params['id']);
            _this.returnUrl = decodeURIComponent(params['returnUrl']);
        });
    };
    Login.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (sucess) {
            if (_this.returnUrl !== 'undefined') {
                _this.router.navigate([_this.returnUrl]);
            }
            else if (_this.returnUrl !== _this.returnUrl) {
            }
            else {
                _this.router.navigate(["/cities"]);
            }
        }, function (error) {
            _this.errorMessage = "Failed to Login";
        });
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            template: __webpack_require__("./ClientApp/app/login/login.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ }),

/***/ "./ClientApp/app/shared/city.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CityToAdd = /** @class */ (function () {
    function CityToAdd() {
    }
    return CityToAdd;
}());
exports.CityToAdd = CityToAdd;
var City = /** @class */ (function (_super) {
    __extends(City, _super);
    function City() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointsOfInterest = new Array();
        return _this;
    }
    return City;
}(CityToAdd));
exports.City = City;
var PointOfInterest = /** @class */ (function () {
    function PointOfInterest() {
    }
    return PointOfInterest;
}());
exports.PointOfInterest = PointOfInterest;


/***/ }),

/***/ "./ClientApp/app/shared/dataService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var city_1 = __webpack_require__("./ClientApp/app/shared/city.ts");
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var moment = __webpack_require__("./node_modules/moment/moment.js");
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


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("./ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map