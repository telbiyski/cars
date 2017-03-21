export class Car {
  id: number;
  brand: string = '';
  model: string = '';
  description: string = '';
  registration_number: string = '';
  fuelType: string = '';
  transmission: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
