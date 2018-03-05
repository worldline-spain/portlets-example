var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "./app.component", "./animations/src/animations", "primeng-wl/menu", "primeng-wl/card", "primeng-wl/primeng", "primeng-wl/contextmenu", "primeng-wl/panelmenu", "primeng-wl/steps", "primeng-wl/tieredmenu", "primeng-wl/breadcrumb", "primeng-wl/megamenu", "primeng-wl/menubar", "primeng-wl/slidemenu", "primeng-wl/tabmenu", "@angular/router", "chart.js/dist/Chart.min"], function (require, exports, core_1, platform_browser_1, forms_1, app_component_1, animations_1, menu_1, card_1, primeng_1, contextmenu_1, panelmenu_1, steps_1, tieredmenu_1, breadcrumb_1, megamenu_1, menubar_1, slidemenu_1, tabmenu_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModule = (function () {
        function AppModule() {
        }
        // Avoid bootstraping any component statically because we need to attach to
        // the portlet's DOM, which is different for each portlet instance and,
        // thus, cannot be determined until the page is rendered (during runtime).
        AppModule.prototype.ngDoBootstrap = function () { };
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.NoopAnimationsModule,
                router_1.RouterModule.forRoot([{ path: "home", component: app_component_1.AppComponent }]),
                tabmenu_1.TabMenuModule,
                slidemenu_1.SlideMenuModule,
                menubar_1.MenubarModule,
                animations_1.BrowserAnimationsModule,
                breadcrumb_1.BreadcrumbModule,
                megamenu_1.MegaMenuModule,
                tieredmenu_1.TieredMenuModule,
                panelmenu_1.PanelMenuModule,
                steps_1.StepsModule,
                primeng_1.InputTextModule,
                contextmenu_1.ContextMenuModule,
                primeng_1.ButtonModule,
                card_1.CardModule,
                menu_1.MenuModule,
                primeng_1.RadioButtonModule,
                forms_1.FormsModule,
                primeng_1.ChartModule
            ],
            declarations: [app_component_1.AppComponent],
            entryComponents: [app_component_1.AppComponent],
            bootstrap: [],
            providers: [],
            exports: []
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map