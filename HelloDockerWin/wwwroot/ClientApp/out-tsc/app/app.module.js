"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var app_component_1 = require("./app.component");
var cityList_component_1 = require("./city/cityList.component");
var cityDetail_component_1 = require("./city/cityDetail.component");
var cityAdd_component_1 = require("./city/modals/cityAdd.component");
var login_component_1 = require("./login/login.component");
var dataService_1 = require("./shared/dataService");
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
//# sourceMappingURL=app.module.js.map