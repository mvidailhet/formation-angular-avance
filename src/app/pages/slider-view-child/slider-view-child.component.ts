
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import ImageCompare from "image-compare-viewer";

@Component({
  selector: 'app-slider-view-child',
  templateUrl: './slider-view-child.component.html',
  styleUrls: ['./slider-view-child.component.scss']
})
export class SliderViewChildComponent implements AfterViewInit {
  @ViewChild('imageCompare') imageCompareElt!: ElementRef;

  ngAfterViewInit(): void {
    const element = this.imageCompareElt.nativeElement;
    new ImageCompare(element).mount();
  }

}
