define(["require", "exports", "@angular/core/testing", "@angular/platform-browser-dynamic/testing", "@angular/forms", "@angular/http", "../../services/shared.module", "./app.component", "@angular/platform-browser"], function (require, exports, testing_1, testing_2, forms_1, http_1, shared_module_1, app_component_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('AppComponent', function () {
        var component;
        var fixture;
        /**
         * Initialize TestBed for browser testing
         */
        beforeAll(function () {
            testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
        });
        /**
         * Initialize a testing module with all required imports/declarations
         * to test desired component.
         *
         * In this example many imports are required because we are using AppComponent,
         * so test module initialization is a subset of AppModule initialization.
         */
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [app_component_1.AppComponent],
                imports: [
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    shared_module_1.SharedModule.forRoot()
                ],
                providers: [
                    { provide: shared_module_1.LiferayService, useClass: MockLiferayService }
                ]
            })
                .compileComponents();
        }));
        /**
         * Instantiate the fixture and components
         */
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            component = fixture.componentInstance;
            // Perform data binding
            fixture.detectChanges();
        });
        /**
         * Example of unit test involving only the component controller
         */
        it('Initially numClicks is zero', function () {
            expect(component.numClicks).toBe(0);
        });
        /**
         * Example of unit test invoking UI event handlers manually
         */
        it('Increments counter by 1', function () {
            component.clicked();
            expect(component.numClicks).toBe(1);
            component.clicked();
            expect(component.numClicks).toBe(2);
        });
        /**
         * Example of integration test involving DOM
         */
        it('Contains an increment button', function () {
            var el = fixture.nativeElement.querySelector('#clicker');
            console.log('Element', el);
            expect(el).not.toBeNull();
        });
        /**
         * Example of integration test involving data binding, UI event handling and DOM checking
         */
        it('Pressing the button increments counter', function () {
            var el = fixture.nativeElement.querySelector('#clicker');
            el.click();
            // See changes in controller
            expect(component.numClicks).toBe(1);
            // See changes in HTML
            fixture.detectChanges();
            var span = fixture.debugElement.query(platform_browser_1.By.css('span'));
            expect(span.nativeElement.textContent).toContain('1 clicks.');
        });
    });
    /**
     * Mock class as an example of overriding component dependencies with mock classes.
     */
    var MockLiferayService = (function () {
        function MockLiferayService() {
        }
        MockLiferayService.prototype.getLanguageLiferay = function () { return 'es_ES'; };
        return MockLiferayService;
    }());
});
//# sourceMappingURL=app.component.spec.js.map