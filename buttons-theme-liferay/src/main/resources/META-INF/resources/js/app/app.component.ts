import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng-wl/primeng';
import { MenuItem } from 'primeng-wl/components/common/api';
import { Message } from 'primeng-wl/components/common/api';
import { Router } from '@angular/router';

@Component({
	selector: 'app',
	templateUrl: '/o/buttons-theme-liferay/js/app/app.html'
})
export class AppComponent {
	clicks: number = 0
	msgs: Message[] = [];
	items: MenuItem[];

	constructor(private router: Router) { }

	ngOnInit() {
        this.items = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'fa-close', command: () => {
                this.delete();
            }},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
        ];
    }

	count() {
		this.clicks++;
	}

	save() {
		this.msgs = [];
		this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
	}

	update() {
        this.msgs = [];
        this.msgs.push({severity:'warning', summary:'Success', detail:'Data Updated'});
    }
    
    delete() {
        this.msgs = [];
        this.msgs.push({severity:'danger', summary:'Success', detail:'Data Deleted'});
    }


}