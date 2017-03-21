import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CarsService} from 'app/services/cars-service.service';
import {Car} from 'app/models/car';
import {Fuels, Transmissions} from 'app/mocks/mock-cars';
import {Router} from '@angular/router';

@Component({
  templateUrl: './car.component.html',
  providers: [CarsService]
})

export class CarComponent {
  id = null;
  car = new Car();
  fuels = Fuels;
  transmissions = Transmissions;

  constructor(private carsService: CarsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.id = +this.route.snapshot.params['id'];
      this.car = this.carsService.getCar(this.id);
    }
  }

  saveForm(value: any):void{
    if (this.car.id) {
      this.carsService.updateCar(this.car.id, this.car);
    } else {
      this.carsService.addCar(this.car);
    }
    this.router.navigateByUrl('/cars');
  }
}
