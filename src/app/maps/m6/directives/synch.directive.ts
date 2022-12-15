import { Directive,ElementRef,HostListener} from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appSynch]'
})
export class SynchDirective {

  constructor(private el: ElementRef) {
  }
  @HostListener('click')
  prevFunc(){
    $('.slide-item-v.active').removeClass('active');
    this.el.nativeElement.parentElement.parentElement.classList.add('active');
    var elm = this.el.nativeElement.getAttribute('data-index');
        var count = $('.slide-item.item').length
        for (let i = 0; i < count; i++){
          var item = $(".slider-wrap  .item[data-index="+ i +"]");
          $('.slider-main').append(item);
        }
        for(let i = 0; i < elm ; i++){
          var item = $(".slider-wrap  .item[data-index="+ i +"]");
          $('.slider-main').append(item);
        }
  }
}
