import { Directive,ElementRef,HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appArrowpre]'
})
export class ArrowpreDirective {

  constructor(private el: ElementRef) {
  }
  @HostListener('click')
  arrowprev(){
    var li = $('.list li.active').index();
    if(li > 0){
      var id = li-1;
      $('.arrow-next').removeClass('disaple');
      $('.list li.active').removeClass('active');
      $('.thumbnail-slick.active').removeClass('active');
      $(".list li[data-index="+ id +"]").addClass('active');
      $(".thumbnail-slick[data-index="+ id +"]").addClass('active');
      if(id == 0){
        $('.arrow-pre').addClass('disaple');
      }
    }
  }
}
