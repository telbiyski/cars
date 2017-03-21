import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CarsService} from 'app/services/cars-service.service';

@Component({
  templateUrl: './cars.component.html',
  providers: [CarsService]
})

export class CarsComponent {

  constructor(private carsService: CarsService, private modalService: NgbModal) {}

  get data() {
    return this.carsService.getCars();
  }

  open(e, id, content) {
    e.preventDefault();
    this.modalService.open(content).result
    .then((result) => {
      if (result === 'delete') {
        this.deleteCar(id);
      }
    });
  }

  private deleteCar(id: number): void {
    this.carsService.deleteCar(id);
  }
}
