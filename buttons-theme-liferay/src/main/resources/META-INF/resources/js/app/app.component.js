var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router"], function (require, exports, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(router) {
            this.router = router;
            this.clicks = 0;
            this.msgs = [];
        }
        AppComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.items = [
                { label: 'Update', icon: 'fa-refresh', command: function () {
                        _this.update();
                    } },
                { label: 'Delete', icon: 'fa-close', command: function () {
                        _this.delete();
                    } },
                { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
                { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
            ];
        };
        AppComponent.prototype.count = function () {
            this.clicks++;
        };
        AppComponent.prototype.save = function () {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
        };
        AppComponent.prototype.update = function () {
            this.msgs = [];
            this.msgs.push({ severity: 'warning', summary: 'Success', detail: 'Data Updated' });
        };
        AppComponent.prototype.delete = function () {
            this.msgs = [];
            this.msgs.push({ severity: 'danger', summary: 'Success', detail: 'Data Deleted' });
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/buttons-theme-liferay/js/app/app.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map