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
//# sourceMappingURL=city.js.map