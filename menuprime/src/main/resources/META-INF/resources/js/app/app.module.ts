import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoopAnimationsModule,BrowserAnimationsModule } from './animations/src/animations';
import 'chart.js/dist/Chart.min';
import { MenuModule } from 'primeng-wl/menu';
import { CardModule } from 'primeng-wl/card';
import { InputTextModule, ButtonModule, RadioButtonModule,ChartModule } from 'primeng-wl/primeng';
import { ContextMenuModule } from 'primeng-wl/contextmenu';
import { PanelMenuModule } from 'primeng-wl/panelmenu';
import { StepsModule } from 'primeng-wl/steps';
import { TieredMenuModule } from 'primeng-wl/tieredmenu';
import { BreadcrumbModule } from 'primeng-wl/breadcrumb';
import { MegaMenuModule } from 'primeng-wl/megamenu';
import { MenubarModule } from 'primeng-wl/menubar';
import { SlideMenuModule } from 'primeng-wl/slidemenu';
import { TabMenuModule } from 'primeng-wl/tabmenu';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
	imports: [
		BrowserModule,
		NoopAnimationsModule,
		RouterModule.forRoot([{ path: "home", component: AppComponent}]),
		TabMenuModule,
		SlideMenuModule,
		MenubarModule,
		BrowserAnimationsModule,
		BreadcrumbModule,
		MegaMenuModule,
		TieredMenuModule,
		PanelMenuModule,
		StepsModule,
		InputTextModule,
		ContextMenuModule,
		ButtonModule,
		CardModule,
		MenuModule,
		RadioButtonModule,
		FormsModule,
		ChartModule
	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [],
	exports: []
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() { }
}