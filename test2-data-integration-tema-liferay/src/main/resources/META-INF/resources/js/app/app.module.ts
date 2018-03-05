import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import 'chart.js/dist/Chart.min'
import 'gmaps/gmaps.min';   
import 'fullcalendar/dist/fullcalendar.min';

import { NoopAnimationsModule,BrowserAnimationsModule } from './animations/src/animations';

import { InputTextModule, ButtonModule, RadioButtonModule, ChartModule, AutoCompleteModule, 
	CheckboxModule, CardModule, CalendarModule, ChipsModule, ColorPickerModule, DropdownModule, 
	EditorModule, InputSwitchModule, InputTextareaModule, ListboxModule, InputMaskModule, MultiSelectModule,
	PasswordModule, RatingModule, SliderModule, SpinnerModule, SelectButtonModule, ToggleButtonModule,
	MessagesModule, MessageModule, CarouselModule, DataListModule, DataScrollerModule, DataTableModule,
	OrganizationChartModule, OrderListModule, GMapModule, TabViewModule, PaginatorModule,
	PickListModule, ScheduleModule, TreeModule, TreeTableModule } from 'primeng-wl/primeng';

import { GrowlModule } from 'primeng-wl/growl';   
import { DataGridModule } from 'primeng-wl/datagrid';
import { DialogModule } from 'primeng-wl/dialog';
import {PanelModule} from 'primeng-wl/panel';


import { CarouselRoutingModule } from './carousel-routing.module';
import { DataGridRoutingModule } from './datagrid-routing.module';
import { DataScrollerRoutingModule } from './datascroller-routing.module';
import { OrderListRoutingModule } from './orderlist-routing.module';
import { GmapRoutingModule } from './gmap-routing.module';
import { PaginatorRoutingModule } from './paginator-routing.module';
import { PickListRoutingModule } from './picklist-routing.module';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		NoopAnimationsModule,
		BrowserAnimationsModule,
		FormsModule,
		InputTextModule,
		ButtonModule,
		RadioButtonModule,
		FormsModule,
		ChartModule,
		AutoCompleteModule,
		CheckboxModule,
		CardModule,
		CalendarModule,
		ChipsModule,
		ColorPickerModule,
		DropdownModule,
		EditorModule,
		InputSwitchModule,
		InputTextareaModule,
		ListboxModule,
		InputMaskModule,
		MultiSelectModule,
		PasswordModule,
		RatingModule,
		SliderModule,
		SpinnerModule,
		SelectButtonModule,
		ToggleButtonModule,		
		MessagesModule, 
		MessageModule,
		CarouselModule,
		GrowlModule,
		CarouselRoutingModule,
		DataGridModule,
		DataGridRoutingModule,
		DialogModule,
		PanelModule,
		DataListModule,
		DataScrollerModule,
		DataScrollerRoutingModule,
		DataTableModule,
		OrganizationChartModule,
		OrderListModule,
		OrderListRoutingModule,
		GMapModule,
		GmapRoutingModule,
		TabViewModule,
		PaginatorModule,
		PickListModule,
		PickListRoutingModule,
		ScheduleRoutingModule,
		ScheduleModule,
		TreeModule,
		TreeTableModule
		 
	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [ ]// Don't bootstrap any component statically (see ngDoBootstrap() below)
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() { }
}