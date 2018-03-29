import { Component } from '@angular/core';
import { TranslateService, LiferayService } from '../../services/shared.module';


@Component({
	selector: 'app',
	templateUrl: '/o/porlet-test/js/app/app.html'
})
export class AppComponent {

	caption = 'Hello world!';

	constructor(
		private translate: TranslateService,
		private liferayService: LiferayService
	) {
		this.initTranslate();
	}

	initTranslate() {
		// Set the default language for translation strings, and the current language.
		this.translate.setDefaultLang(this.liferayService.getLanguageLiferay());

		// Set your language here
		this.translate.use(this.liferayService.getLanguageLiferay());
	}
}