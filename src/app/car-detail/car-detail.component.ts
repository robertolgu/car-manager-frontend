import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: Car = new Car;

  constructor(
    private route:ActivatedRoute,
    private carService:CarService
  ) { }

  ngOnInit(): void {
    this.loadCar();
  }

  loadCar(){
    const carId = this.route.snapshot.paramMap.get('id');
    this.carService.getById(carId)
    .subscribe(data => this.car = data)
  }

}
