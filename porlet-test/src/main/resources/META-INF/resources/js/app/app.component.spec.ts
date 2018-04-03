import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { TranslateService, LiferayService } from '../../services/shared.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeAll(() => {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: LiferayService, useClass: MockLiferayService },
        { provide: TranslateService, useClass: MockTranslateService }
      ]
    })
      .compileComponents();
  }));

  it('Initially numClicks is zero', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.numClicks).toBe(0);
  });

  it('Increments counter by 1', () => {
    component.clicked();
    expect(component.numClicks).toBe(1);
    component.clicked();
    expect(component.numClicks).toBe(2);
  });

  it('Contains an increment button', () => {
    var el = fixture.nativeElement.querySelector('#clicker');
    expect(el).not.toBeNull();
  });
});

class MockTranslateService {
  setDefaultLang(lang: string) { }
  use(lang: string) { }
}

class MockLiferayService {
  getLanguageLiferay(): string { return 'es'; }
}
