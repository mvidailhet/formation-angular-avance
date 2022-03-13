import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies = [
    { name: 'Batman Begins', rating: 8.2 },
    { name: 'Insomnia', rating: 7.1 },
    { name: 'Doodlebug', rating: 7.1 },
    { name: 'Test', rating: 2 },
  ];

  constructor() {
    const movieExist = !!_.find(this.movies, { name: 'Batman Begins' });
    console.log(movieExist);
  }

  ngOnInit(): void {}
}
