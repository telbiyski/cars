import {Injectable} from '@angular/core';
import {Car} from 'app/models/car';
import {mockCars} from 'app/mocks/mock-cars';

@Injectable()
export class CarsService {
  lastId: number = localStorage.getItem('lastId') ? JSON.parse(localStorage.getItem('lastId')) : mockCars.length;
  cars: Car[] = localStorage.getItem('cars') ? JSON.parse(localStorage.getItem('cars')) : mockCars;

  constructor() {}

  addCar(car: Car): CarsService {
    if (!car.id) car.id = ++this.lastId;
    this.cars.push(car);
    localStorage.setItem('cars', JSON.stringify(this.cars));
    localStorage.setItem('lastId', JSON.stringify(this.lastId));
    return this;
  }

  deleteCar(id: number): CarsService {
    this.cars = this.cars.filter(car => car.id !== id);
		localStorage.setItem('cars', JSON.stringify(this.cars));
    return this;
  }

  updateCar(id: number, values: Object = {}): Car {
    let car = this.getCar(id);
    if (!car) return null;
    Object.assign(car, values);
		localStorage.setItem('cars', JSON.stringify(this.cars));
    return car;
  }

  getCars(): Car[] {
    return this.cars;
  }

  getCar(id: number): Car {
    return this.cars.filter(car => car.id === id).pop();
  }
}
