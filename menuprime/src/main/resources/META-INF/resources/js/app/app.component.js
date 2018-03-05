var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/router"], function (require, exports, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(router) {
            this.router = router;
            this.caption = 'Hello world!';
            router.navigate(['home'], { skipLocationChange: true });
        }
        AppComponent.prototype.ngOnInit = function () {
            this.items_tab = [
                { label: 'Stats', icon: 'fa-bar-chart' },
                { label: 'Calendar', icon: 'fa-calendar' },
                { label: 'Documentation', icon: 'fa-book' },
                { label: 'Support', icon: 'fa-support' },
                { label: 'Social', icon: 'fa-twitter' }
            ];
            this.items_slide = [
                {
                    label: 'File',
                    items: [{
                            label: 'New',
                            icon: 'fa-plus',
                            items: [
                                { label: 'Project' },
                                { label: 'Other' },
                            ]
                        },
                        { label: 'Open' },
                        { label: 'Quit' }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'fa-edit',
                    items: [
                        { label: 'Undo', icon: 'fa-mail-forward' },
                        { label: 'Redo', icon: 'fa-mail-reply' }
                    ]
                }
            ];
            this.items_menubar = [
                {
                    label: 'File',
                    items: [{
                            label: 'New',
                            icon: 'fa-plus',
                            items: [
                                { label: 'Project' },
                                { label: 'Other' },
                            ]
                        },
                        { label: 'Open' },
                        { label: 'Quit' }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'fa-edit',
                    items: [
                        { label: 'Undo', icon: 'fa-mail-forward' },
                        { label: 'Redo', icon: 'fa-mail-reply' }
                    ]
                }
            ];
            this.items_steps = [
                { label: 'Step 1' },
                { label: 'Step 2' },
                { label: 'Step 3' }
            ];
            this.items_panel = [
                {
                    label: 'File',
                    icon: 'fa-file-o',
                    items: [{
                            label: 'New',
                            icon: 'fa-plus',
                            items: [
                                { label: 'Project' },
                                { label: 'Other' },
                            ]
                        },
                        { label: 'Open' },
                        { label: 'Quit' }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'fa-edit',
                    items: [
                        { label: 'Undo', icon: 'fa-mail-forward' },
                        { label: 'Redo', icon: 'fa-mail-reply' }
                    ]
                },
                {
                    label: 'Help',
                    icon: 'fa-question',
                    items: [
                        {
                            label: 'Contents'
                        },
                        {
                            label: 'Search',
                            icon: 'fa-search',
                            items: [
                                {
                                    label: 'Text',
                                    items: [
                                        {
                                            label: 'Workspace'
                                        }
                                    ]
                                },
                                {
                                    label: 'File'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Actions',
                    icon: 'fa-gear',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'fa-refresh',
                            items: [
                                { label: 'Save', icon: 'fa-save' },
                                { label: 'Update', icon: 'fa-save' },
                            ]
                        },
                        {
                            label: 'Other',
                            icon: 'fa-phone',
                            items: [
                                { label: 'Delete', icon: 'fa-minus' }
                            ]
                        }
                    ]
                }
            ];
            this.items_menu = [
                { label: 'New', icon: 'fa-plus' },
                { label: 'Open', icon: 'fa-download' },
                { label: 'Undo', icon: 'fa-refresh' },
            ];
            this.items = [{
                    label: 'File',
                    items: [
                        { label: 'New', icon: 'fa-plus' },
                        { label: 'Open', icon: 'fa-download' }
                    ]
                },
                {
                    label: 'Edit',
                    items: [
                        { label: 'Undo', icon: 'fa-refresh' },
                        { label: 'Redo', icon: 'fa-repeat' }
                    ]
                }];
            this.items_context = [
                {
                    label: 'File',
                    icon: 'fa-file-o',
                    items: [{
                            label: 'New',
                            icon: 'fa-plus',
                            items: [
                                { label: 'Project' },
                                { label: 'Other' },
                            ]
                        },
                        { label: 'Open' },
                        { separator: true },
                        { label: 'Quit' }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'fa-edit',
                    items: [
                        { label: 'Undo', icon: 'fa-mail-forward' },
                        { label: 'Redo', icon: 'fa-mail-reply' }
                    ]
                },
                {
                    label: 'Help',
                    icon: 'fa-question',
                    items: [
                        {
                            label: 'Contents'
                        },
                        {
                            label: 'Search',
                            icon: 'fa-search',
                            items: [
                                {
                                    label: 'Text',
                                    items: [
                                        {
                                            label: 'Workspace'
                                        }
                                    ]
                                },
                                {
                                    label: 'File'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Actions',
                    icon: 'fa-gear',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'fa-refresh',
                            items: [
                                { label: 'Save', icon: 'fa-save' },
                                { label: 'Update', icon: 'fa-save' },
                            ]
                        },
                        {
                            label: 'Other',
                            icon: 'fa-phone',
                            items: [
                                { label: 'Delete', icon: 'fa-minus' }
                            ]
                        }
                    ]
                },
                { separator: true },
                {
                    label: 'Quit', icon: 'fa-minus'
                }
            ];
            this.items2 = [
                {
                    label: 'Next',
                    icon: 'fa-chevron-right'
                },
                {
                    label: 'Prev',
                    icon: 'fa-chevron-left'
                }
            ];
            this.items_mega = [
                {
                    label: 'TV', icon: 'fa-check',
                    items: [
                        [
                            {
                                label: 'TV 1',
                                items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                            },
                            {
                                label: 'TV 2',
                                items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'TV 3',
                                items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                            },
                            {
                                label: 'TV 4',
                                items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Sports', icon: 'fa-soccer-ball-o',
                    items: [
                        [
                            {
                                label: 'Sports 1',
                                items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                            },
                            {
                                label: 'Sports 2',
                                items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                            },
                        ],
                        [
                            {
                                label: 'Sports 3',
                                items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                            },
                            {
                                label: 'Sports 4',
                                items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Sports 5',
                                items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                            },
                            {
                                label: 'Sports 6',
                                items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                            }
                        ]
                    ]
                }
            ];
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/menuprime/js/app/app.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map