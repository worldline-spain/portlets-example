var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent() {
        }
        AppComponent.prototype.ngOnInit = function () {
            this.selectedCars = [];
            this.availableCars =
                [
                    { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
                    { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
                    { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
                    { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
                    { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
                    { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
                    { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
                    { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
                    { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
                    { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
                ];
        };
        AppComponent.prototype.dragStart = function (event, car) {
            this.draggedCar = car;
        };
        AppComponent.prototype.drop = function (event) {
            if (this.draggedCar) {
                var draggedCarIndex_1 = this.findIndex(this.draggedCar);
                this.selectedCars = this.selectedCars.concat([this.draggedCar]);
                this.availableCars = this.availableCars.filter(function (val, i) { return i != draggedCarIndex_1; });
                this.draggedCar = null;
            }
        };
        AppComponent.prototype.dragEnd = function (event) {
            this.draggedCar = null;
        };
        AppComponent.prototype.findIndex = function (car) {
            var index = -1;
            for (var i = 0; i < this.availableCars.length; i++) {
                if (car.vin === this.availableCars[i].vin) {
                    index = i;
                    break;
                }
            }
            return index;
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/test7-integration-tema-liferay/js/app/app.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map