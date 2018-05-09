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
            templateUrl: 'login.component.html',
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.component.js.map