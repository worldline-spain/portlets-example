/* CORE */
import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

/* Services to share */
import { BrowserAnimationsModule } from './animations/src/animations';
import { TranslateModule, TranslateLoader } from './@ngx-translate/core/index'
import { TranslateHttpLoader } from './@ngx-translate/http-loader/index';

/* Providers */
import { LiferayService } from './LiferayService/Liferay.interface';
import { LiferayServiceImpl } from './LiferayService/Liferay.serviceImpl';

/* JS imports */
import 'chart.js/dist/Chart.min';
import * as Quill from 'quill';

/* Windows adds */
window['Quill'] = Quill;


const providers: Provider[] = [
    { provide: LiferayService, useValue: new LiferayServiceImpl() }
];

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http: Http) {
	return new TranslateHttpLoader(http, './o/porlet-test/js/assets/i18n/locale-', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        })
    ],
    exports: [TranslateModule]
})

/* Exports */
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [...providers]
        }
    };
}
export * from './@ngx-translate/core/index';
export * from './@ngx-translate/http-loader/index';
export * from './animations/src/animations';
export * from './LiferayService/Liferay.interface';
