import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '../../libs/animations/src/animations';
import 'chart.js/dist/Chart.min'
import { InputTextModule, ButtonModule, RadioButtonModule,ChartModule } from 'primeng-wl/primeng';
import { MessagesModule } from 'primeng-wl/messages';
import { MessageModule } from 'primeng-wl/message';
import { CardModule } from 'primeng-wl/card';
import { GrowlModule } from 'primeng-wl/growl';

@NgModule({
	imports: [
		BrowserModule,
		MessageModule,
		GrowlModule,
		MessagesModule,
		BrowserAnimationsModule,
		CardModule,
		InputTextModule,
		ButtonModule,
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