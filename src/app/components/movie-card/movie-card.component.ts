import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() title: string;
  @Input() imgSrc: string;
  @Input() router: string;
  @Input() isAddBtn: boolean;

  constructor() {}

  ngOnInit() {}
}
