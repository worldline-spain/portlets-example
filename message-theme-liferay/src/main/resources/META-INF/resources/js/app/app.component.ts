import { Component } from '@angular/core';
import {Message} from 'primeng-wl/components/common/api';
import {MessageService} from 'primeng-wl/components/common/messageservice';


@Component({
	selector: 'app',
	templateUrl: '/o/messageprime/js/app/app.html',
	providers: [MessageService]
})
export class AppComponent {

	caption = 'Hello world!';
	msgs: Message[] = [];
	msgs_growl: Message[] = [];

	constructor() {
		
	}

	show() {
		this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
	}
	
	hide() {
		this.msgs = [];
	}

	show_growl() {
		this.msgs_growl.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
	}
	
	hide_growl() {
		this.msgs_growl = [];
	}
	
}