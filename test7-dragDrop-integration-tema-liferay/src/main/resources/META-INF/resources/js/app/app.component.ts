import { Component } from '@angular/core';
import { Car } from './car';

@Component({
	selector: 'app',
	templateUrl: '/o/test7-integration-tema-liferay/js/app/app.html'
})
export class AppComponent {

	availableCars: Car[];
    
    selectedCars: Car[];
    
	draggedCar: Car;
	
	constructor() {
		
	}
	ngOnInit() {
		this.selectedCars = [];
		
		this.availableCars =  
			[
				{"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
				{"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
				{"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
				{"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
				{"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
				{"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
				{"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
				{"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
				{"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
				{"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
			];
    }
    
    dragStart(event:any,car: Car) {
        this.draggedCar = car;
    }
    
    drop(event:any) {
        if(this.draggedCar) {
            let draggedCarIndex = this.findIndex(this.draggedCar);
            this.selectedCars = [...this.selectedCars, this.draggedCar];
            this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);
            this.draggedCar = null;
        }
    }
    
    dragEnd(event:any) {
        this.draggedCar = null;
    }
    
    findIndex(car: Car) {
        let index = -1;
        for(let i = 0; i < this.availableCars.length; i++) {
            if(car.vin === this.availableCars[i].vin) {
                index = i;
                break;
            }
        }
        return index;
    }
}