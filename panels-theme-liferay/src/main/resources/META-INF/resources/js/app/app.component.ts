import { Component } from '@angular/core';
import {ConfirmDialogModule} from 'primeng-wl/confirmdialog';
import {ConfirmationService} from 'primeng-wl/api';

 
@Component({
	selector: 'app',
	templateUrl: '/o/test3-integracion-tema-liferay/js/app/app.html',
	providers: [ConfirmationService]
})
export class AppComponent {

	caption = 'hola mutual!';

	constructor() {
	}

}