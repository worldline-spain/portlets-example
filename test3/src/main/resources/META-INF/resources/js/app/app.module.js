var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "./app.component", "primeng-wl/accordion", "primeng-wl/card", "./animations/src/animations", "primeng-wl/fieldset", "primeng-wl/scrollpanel", "primeng-wl/tabview", "primeng-wl/panel", "primeng-wl/toolbar", "primeng-wl/splitbutton", "primeng-wl/button", "@angular/router", "chart.js/dist/Chart.min"], function (require, exports, core_1, platform_browser_1, forms_1, app_component_1, accordion_1, card_1, animations_1, fieldset_1, scrollpanel_1, tabview_1, panel_1, toolbar_1, splitbutton_1, button_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule.prototype.ngDoBootstrap = function () { };
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                button_1.ButtonModule,
                forms_1.FormsModule,
                splitbutton_1.SplitButtonModule,
                toolbar_1.ToolbarModule,
                card_1.CardModule,
                accordion_1.AccordionModule,
                animations_1.NoopAnimationsModule,
                fieldset_1.FieldsetModule,
                scrollpanel_1.ScrollPanelModule,
                tabview_1.TabViewModule,
                panel_1.PanelModule,
                animations_1.BrowserAnimationsModule
            ],
            declarations: [app_component_1.AppComponent],
            entryComponents: [app_component_1.AppComponent],
            bootstrap: []
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map