var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "./app.component", "./animations/src/animations", "primeng-wl/primeng", "primeng-wl/growl", "primeng-wl/datagrid", "primeng-wl/dialog", "primeng-wl/panel", "./carousel-routing.module", "./datagrid-routing.module", "./datascroller-routing.module", "./orderlist-routing.module", "./gmap-routing.module", "./picklist-routing.module", "./schedule-routing.module", "chart.js/dist/Chart.min", "gmaps/gmaps.min", "fullcalendar/dist/fullcalendar.min"], function (require, exports, core_1, platform_browser_1, forms_1, app_component_1, animations_1, primeng_1, growl_1, datagrid_1, dialog_1, panel_1, carousel_routing_module_1, datagrid_routing_module_1, datascroller_routing_module_1, orderlist_routing_module_1, gmap_routing_module_1, picklist_routing_module_1, schedule_routing_module_1) {
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
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                primeng_1.InputTextModule,
                primeng_1.ButtonModule,
                primeng_1.RadioButtonModule,
                forms_1.FormsModule,
                primeng_1.ChartModule,
                primeng_1.AutoCompleteModule,
                primeng_1.CheckboxModule,
                primeng_1.CardModule,
                primeng_1.CalendarModule,
                primeng_1.ChipsModule,
                primeng_1.ColorPickerModule,
                primeng_1.DropdownModule,
                primeng_1.EditorModule,
                primeng_1.InputSwitchModule,
                primeng_1.InputTextareaModule,
                primeng_1.ListboxModule,
                primeng_1.InputMaskModule,
                primeng_1.MultiSelectModule,
                primeng_1.PasswordModule,
                primeng_1.RatingModule,
                primeng_1.SliderModule,
                primeng_1.SpinnerModule,
                primeng_1.SelectButtonModule,
                primeng_1.ToggleButtonModule,
                primeng_1.MessagesModule,
                primeng_1.MessageModule,
                primeng_1.CarouselModule,
                growl_1.GrowlModule,
                carousel_routing_module_1.CarouselRoutingModule,
                datagrid_1.DataGridModule,
                datagrid_routing_module_1.DataGridRoutingModule,
                dialog_1.DialogModule,
                panel_1.PanelModule,
                primeng_1.DataListModule,
                primeng_1.DataScrollerModule,
                datascroller_routing_module_1.DataScrollerRoutingModule,
                primeng_1.DataTableModule,
                primeng_1.OrganizationChartModule,
                primeng_1.OrderListModule,
                orderlist_routing_module_1.OrderListRoutingModule,
                primeng_1.GMapModule,
                gmap_routing_module_1.GmapRoutingModule,
                primeng_1.TabViewModule,
                primeng_1.PaginatorModule,
                primeng_1.PickListModule,
                picklist_routing_module_1.PickListRoutingModule,
                schedule_routing_module_1.ScheduleRoutingModule,
                primeng_1.ScheduleModule,
                primeng_1.TreeModule,
                primeng_1.TreeTableModule
            ],
            declarations: [app_component_1.AppComponent],
            entryComponents: [app_component_1.AppComponent],
            bootstrap: [] // Don't bootstrap any component statically (see ngDoBootstrap() below)
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map