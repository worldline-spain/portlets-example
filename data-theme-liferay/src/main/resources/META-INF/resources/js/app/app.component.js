var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // declare var google: any;
    var AppComponent = (function () {
        function AppComponent() {
            this.msgs = [];
            this.carsC = [
                { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
                { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
                { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
                { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
                { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
                { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
                { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
                { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
                { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
            ];
            this.cars = [
                { "vin": "a1653d4d", "brand": "VW", "year": 1998, "color": "White", "price": 10000 },
                { "vin": "ddeb9b10", "brand": "Mercedes", "year": 1985, "color": "Green", "price": 25000 },
                { "vin": "d8ebe413", "brand": "Jaguar", "year": 1979, "color": "Silver", "price": 30000 },
                { "vin": "aab227b7", "brand": "Audi", "year": 1970, "color": "Black", "price": 12000 },
                { "vin": "631f7412", "brand": "Volvo", "year": 1992, "color": "Red", "price": 15500 },
                { "vin": "7d2d22b0", "brand": "VW", "year": 1993, "color": "Maroon", "price": 40000 },
                { "vin": "50e900ca", "brand": "Fiat", "year": 1964, "color": "Blue", "price": 25000 },
                { "vin": "4bbcd603", "brand": "Renault", "year": 1983, "color": "Maroon", "price": 22000 },
                { "vin": "70214c7e", "brand": "Renault", "year": 1961, "color": "Black", "price": 19000 },
                { "vin": "ec229a92", "brand": "Audi", "year": 1984, "color": "Brown", "price": 36000 },
                { "vin": "1083ee40", "brand": "VW", "year": 1984, "color": "Silver", "price": 215000 },
                { "vin": "6e0da3ab", "brand": "Volvo", "year": 1987, "color": "Silver", "price": 32000 },
                { "vin": "5aee636b", "brand": "Jaguar", "year": 1995, "color": "Maroon", "price": 20000 },
                { "vin": "7cc43997", "brand": "Jaguar", "year": 1984, "color": "Orange", "price": 14000 },
                { "vin": "88ec9f66", "brand": "Honda", "year": 1989, "color": "Maroon", "price": 36000 },
                { "vin": "f5a4a5f5", "brand": "BMW", "year": 1986, "color": "Blue", "price": 28000 },
                { "vin": "15b9a5c9", "brand": "Mercedes", "year": 1986, "color": "Orange", "price": 14000 },
                { "vin": "f7e18d01", "brand": "Mercedes", "year": 1991, "color": "White", "price": 25000 },
                { "vin": "cec593d7", "brand": "VW", "year": 1992, "color": "Blue", "price": 36000 },
                { "vin": "d5bac4f0", "brand": "Renault", "year": 2001, "color": "Blue", "price": 25000 },
                { "vin": "56b527c8", "brand": "Jaguar", "year": 1990, "color": "Yellow", "price": 52000 },
                { "vin": "1ac011ff", "brand": "Audi", "year": 1966, "color": "Maroon", "price": 45000 },
                { "vin": "fc074185", "brand": "BMW", "year": 1962, "color": "Blue", "price": 54000 },
                { "vin": "606ba663", "brand": "Honda", "year": 1982, "color": "Blue", "price": 22000 },
                { "vin": "d05060b8", "brand": "Mercedes", "year": 2003, "color": "Silver", "price": 15000 },
                { "vin": "46e4bbe8", "brand": "Mercedes", "year": 1986, "color": "White", "price": 18000 },
                { "vin": "c29da0d7", "brand": "BMW", "year": 1983, "color": "Brown", "price": 32000 },
                { "vin": "24622f70", "brand": "VW", "year": 1973, "color": "Maroon", "price": 36000 },
                { "vin": "7f573d2c", "brand": "Mercedes", "year": 1991, "color": "Red", "price": 21000 },
                { "vin": "b69e6f5c", "brand": "Jaguar", "year": 1993, "color": "Yellow", "price": 16000 }
            ];
            this.carsList = [
                { "vin": "a1653d4d", "brand": "VW", "year": 1998, "color": "White", "price": 10000 },
                { "vin": "ddeb9b10", "brand": "Mercedes", "year": 1985, "color": "Green", "price": 25000 },
                { "vin": "d8ebe413", "brand": "Jaguar", "year": 1979, "color": "Silver", "price": 30000 },
                { "vin": "aab227b7", "brand": "Audi", "year": 1970, "color": "Black", "price": 12000 },
                { "vin": "631f7412", "brand": "Volvo", "year": 1992, "color": "Red", "price": 15500 },
                { "vin": "7d2d22b0", "brand": "VW", "year": 1993, "color": "Maroon", "price": 40000 },
                { "vin": "50e900ca", "brand": "Fiat", "year": 1964, "color": "Blue", "price": 25000 },
                { "vin": "4bbcd603", "brand": "Renault", "year": 1983, "color": "Maroon", "price": 22000 },
                { "vin": "70214c7e", "brand": "Renault", "year": 1961, "color": "Black", "price": 19000 },
                { "vin": "ec229a92", "brand": "Audi", "year": 1984, "color": "Brown", "price": 36000 },
                { "vin": "1083ee40", "brand": "VW", "year": 1984, "color": "Silver", "price": 215000 },
                { "vin": "6e0da3ab", "brand": "Volvo", "year": 1987, "color": "Silver", "price": 32000 },
                { "vin": "5aee636b", "brand": "Jaguar", "year": 1995, "color": "Maroon", "price": 20000 },
                { "vin": "7cc43997", "brand": "Jaguar", "year": 1984, "color": "Orange", "price": 14000 }
            ];
            this.carsScroll = [{ "vin": "a1653d4d", "brand": "VW", "year": 1998, "color": "White", "price": 10000 },
                { "vin": "ddeb9b10", "brand": "Mercedes", "year": 1985, "color": "Green", "price": 25000 },
                { "vin": "d8ebe413", "brand": "Jaguar", "year": 1979, "color": "Silver", "price": 30000 },
                { "vin": "aab227b7", "brand": "Audi", "year": 1970, "color": "Black", "price": 12000 },
                { "vin": "631f7412", "brand": "Volvo", "year": 1992, "color": "Red", "price": 15500 },
                { "vin": "7d2d22b0", "brand": "VW", "year": 1993, "color": "Maroon", "price": 40000 },
                { "vin": "50e900ca", "brand": "Fiat", "year": 1964, "color": "Blue", "price": 25000 },
                { "vin": "4bbcd603", "brand": "Renault", "year": 1983, "color": "Maroon", "price": 22000 },
                { "vin": "70214c7e", "brand": "Renault", "year": 1961, "color": "Black", "price": 19000 },
                { "vin": "ec229a92", "brand": "Audi", "year": 1984, "color": "Brown", "price": 36000 },
                { "vin": "1083ee40", "brand": "VW", "year": 1984, "color": "Silver", "price": 215000 },
                { "vin": "6e0da3ab", "brand": "Volvo", "year": 1987, "color": "Silver", "price": 32000 },
                { "vin": "5aee636b", "brand": "Jaguar", "year": 1995, "color": "Maroon", "price": 20000 },
                { "vin": "7cc43997", "brand": "Jaguar", "year": 1984, "color": "Orange", "price": 14000 },
                { "vin": "88ec9f66", "brand": "Honda", "year": 1989, "color": "Maroon", "price": 36000 },
                { "vin": "f5a4a5f5", "brand": "BMW", "year": 1986, "color": "Blue", "price": 28000 },
                { "vin": "15b9a5c9", "brand": "Mercedes", "year": 1986, "color": "Orange", "price": 14000 },
                { "vin": "f7e18d01", "brand": "Mercedes", "year": 1991, "color": "White", "price": 25000 },
                { "vin": "cec593d7", "brand": "VW", "year": 1992, "color": "Blue", "price": 36000 },
                { "vin": "d5bac4f0", "brand": "Renault", "year": 2001, "color": "Blue", "price": 25000 },
                { "vin": "56b527c8", "brand": "Jaguar", "year": 1990, "color": "Yellow", "price": 52000 },
                { "vin": "1ac011ff", "brand": "Audi", "year": 1966, "color": "Maroon", "price": 45000 },
                { "vin": "fc074185", "brand": "BMW", "year": 1962, "color": "Blue", "price": 54000 },
                { "vin": "606ba663", "brand": "Honda", "year": 1982, "color": "Blue", "price": 22000 },
                { "vin": "d05060b8", "brand": "Mercedes", "year": 2003, "color": "Silver", "price": 15000 },
                { "vin": "46e4bbe8", "brand": "Mercedes", "year": 1986, "color": "White", "price": 18000 },
                { "vin": "c29da0d7", "brand": "BMW", "year": 1983, "color": "Brown", "price": 32000 },
                { "vin": "24622f70", "brand": "VW", "year": 1973, "color": "Maroon", "price": 36000 },
                { "vin": "7f573d2c", "brand": "Mercedes", "year": 1991, "color": "Red", "price": 21000 },
                { "vin": "b69e6f5c", "brand": "Jaguar", "year": 1993, "color": "Yellow", "price": 16000 }
            ];
            this.carsOrder = [
                { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
                { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
                { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
                { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
                { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
                { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
                { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
                { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
                { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
            ];
            this.sourceCars = [
                { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
                { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
                { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
                { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
                { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
                { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
                { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
                { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
                { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
            ];
            this.targetCars = [];
            this.filesTree = [
                {
                    "label": "Documents",
                    "data": "Documents Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [{
                            "label": "Work",
                            "data": "Work Folder",
                            "expandedIcon": "fa-folder-open",
                            "collapsedIcon": "fa-folder",
                            "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
                        },
                        {
                            "label": "Home",
                            "data": "Home Folder",
                            "expandedIcon": "fa-folder-open",
                            "collapsedIcon": "fa-folder",
                            "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
                        }]
                },
                {
                    "label": "Pictures",
                    "data": "Pictures Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
                        { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
                        { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }
                    ]
                },
                {
                    "label": "Movies",
                    "data": "Movies Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [{
                            "label": "Al Pacino",
                            "data": "Pacino Movies",
                            "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
                        },
                        {
                            "label": "Robert De Niro",
                            "data": "De Niro Movies",
                            "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
                        }]
                }
            ];
            this.files = [
                {
                    "data": {
                        "name": "Documents",
                        "size": "75kb",
                        "type": "Folder"
                    },
                    "children": [
                        {
                            "data": {
                                "name": "Work",
                                "size": "55kb",
                                "type": "Folder"
                            },
                            "children": [
                                {
                                    "data": {
                                        "name": "Expenses.doc",
                                        "size": "30kb",
                                        "type": "Document"
                                    }
                                },
                                {
                                    "data": {
                                        "name": "Resume.doc",
                                        "size": "25kb",
                                        "type": "Resume"
                                    }
                                }
                            ]
                        },
                        {
                            "data": {
                                "name": "Home",
                                "size": "20kb",
                                "type": "Folder"
                            },
                            "children": [
                                {
                                    "data": {
                                        "name": "Invoices",
                                        "size": "20kb",
                                        "type": "Text"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "data": {
                        "name": "Pictures",
                        "size": "150kb",
                        "type": "Folder"
                    },
                    "children": [
                        {
                            "data": {
                                "name": "barcelona.jpg",
                                "size": "90kb",
                                "type": "Picture"
                            }
                        },
                        {
                            "data": {
                                "name": "primeui.png",
                                "size": "30kb",
                                "type": "Picture"
                            }
                        },
                        {
                            "data": {
                                "name": "optimus.jpg",
                                "size": "30kb",
                                "type": "Picture"
                            }
                        }
                    ]
                }
            ];
        }
        AppComponent.prototype.ngOnInit = function () {
            this.data = [{
                    label: 'Jane Doe',
                    expanded: true,
                    children: [
                        {
                            label: 'John Doe',
                            expanded: true,
                            children: [
                                {
                                    label: 'Johnny Doe'
                                },
                                {
                                    label: 'Janie Doe'
                                }
                            ]
                        },
                        {
                            label: 'Jane Poe',
                            expanded: true,
                            children: [
                                {
                                    label: 'Richard Roe'
                                },
                                {
                                    label: 'Paula Poe'
                                }
                            ]
                        }
                    ]
                }];
            //Gmap
            // this.options = {
            //     center: {lat: 36.890257, lng: 30.707417},
            //     zoom: 12
            // };
            // this.initOverlays();
            // this.infoWindow = new google.maps.InfoWindow();
            //fin Gmap
            //schedule
            this.events = [
                {
                    "id": 1,
                    "title": "All Day Event",
                    "start": "2017-02-01"
                },
                {
                    "id": 2,
                    "title": "Long Event",
                    "start": "2017-02-07",
                    "end": "2017-02-10"
                },
                {
                    "id": 3,
                    "title": "Repeating Event",
                    "start": "2017-02-09T16:00:00"
                },
                {
                    "id": 4,
                    "title": "Repeating Event",
                    "start": "2017-02-16T16:00:00"
                }
            ];
            this.header = {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            };
        };
        AppComponent.prototype.selectCarC = function (car) {
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: 'Brand:' + car.brand + ' Vin:' + car.vin });
        };
        AppComponent.prototype.selectCar = function (car) {
            this.selectedCar = car;
            this.displayDialog = true;
        };
        AppComponent.prototype.onDialogHide = function () {
            this.selectedCar = null;
        };
        return AppComponent;
    }());
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/o/test2-integracion-tema/js/app/app.html',
            styles: ["\n        .car-item {\n            padding: 1.5em;\n            border-bottom: 1px solid #d9d9d9;\n        }\n                \n        .ui-g > div {\n            padding: .4em;\n        }\n        \n        .ui-g .ui-g-10 {\n            font-weight: bold;\n        }\n        \n        @media (max-width: 40em) {\n            .car-details {\n                text-align:center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    exports.AppComponent = AppComponent;
    var MyEvent = (function () {
        function MyEvent() {
            this.allDay = true;
        }
        return MyEvent;
    }());
    exports.MyEvent = MyEvent;
});
//# sourceMappingURL=app.component.js.map