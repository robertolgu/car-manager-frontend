import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';
import {Sort} from '@angular/material/sort';
import {compare} from '../utils/DataUtils';

@Component({
  selector: 'app-car',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(
    private carService: CarService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data : Car[]) => {
      this.cars = data;
    })
  }

  loadCar(): void {
    const carId = this.route.snapshot.paramMap.get('id')
  }

  sortData(sort: any) {
    const data = this.cars.slice();
    if (!sort.active || sort.direction === '') {
      this.cars = data;
      return;
    }

    this.cars = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'code':
          return compare(a.code, b.code, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'intake':
          return compare(a.intake, b.intake, isAsc);
        case 'maxSpeed':
          return compare(a.maxSpeed, b.maxSpeed, isAsc);
        case 'purchaseDate':
          return compare(a.purchaseDate, b.purchaseDate, isAsc);
        case 'carType':
          return compare(a.carType, b.carType, isAsc);
        default:
          return 0;
      }
    });
  }
}
