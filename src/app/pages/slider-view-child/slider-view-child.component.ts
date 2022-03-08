
import { AfterViewInit, Component } from '@angular/core';
import ImageCompare from "image-compare-viewer";

@Component({
  selector: 'app-slider-view-child',
  templateUrl: './slider-view-child.component.html',
  styleUrls: ['./slider-view-child.component.scss']
})
export class SliderViewChildComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log('ici');
    const element = document.getElementById("image-compare");
    console.log(element);
    const viewer = new ImageCompare(element).mount();
  }

}
