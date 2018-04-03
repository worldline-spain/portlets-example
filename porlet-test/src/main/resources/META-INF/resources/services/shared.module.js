var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/http", "./@ngx-translate/core/index", "./@ngx-translate/http-loader/index", "./LiferayService/Liferay.interface", "./LiferayService/Liferay.serviceImpl", "quill", "./@ngx-translate/core/index", "./@ngx-translate/http-loader/index", "./animations/src/animations", "./LiferayService/Liferay.interface", "chart.js/dist/Chart.min"], function (require, exports, core_1, common_1, http_1, index_1, index_2, Liferay_interface_1, Liferay_serviceImpl_1, Quill, index_3, index_4, animations_1, Liferay_interface_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    /* Windows adds */
    window['Quill'] = Quill;
    var providers = [
        { provide: Liferay_interface_1.LiferayService, useValue: new Liferay_serviceImpl_1.LiferayServiceImpl() }
    ];
    // The translate loader needs to know where to load i18n files
    // in Ionic's static asset pipeline.
    function HttpLoaderFactory(http) {
        return new index_2.TranslateHttpLoader(http, './o/porlet-test/js/assets/i18n/locale-', '.json');
    }
    var SharedModule = SharedModule_1 = (function () {
        /* Exports */
        function SharedModule() {
        }
        SharedModule.forRoot = function () {
            return {
                ngModule: SharedModule_1,
                providers: providers.slice()
            };
        };
        ;
        return SharedModule;
    }());
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                index_1.TranslateModule.forRoot({
                    loader: {
                        provide: index_1.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.Http]
                    }
                })
            ],
            exports: [index_1.TranslateModule]
        })
        /* Exports */
    ], SharedModule);
    exports.SharedModule = SharedModule;
    __export(index_3);
    __export(index_4);
    __export(animations_1);
    __export(Liferay_interface_2);
    var SharedModule_1;
});
//# sourceMappingURL=shared.module.js.map