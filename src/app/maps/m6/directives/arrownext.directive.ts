import { Directive,ElementRef,HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appArrownext]'
})
export class ArrownextDirective {

  constructor(private el: ElementRef) {
  }
  @HostListener('click')
  arrownext(){
    var li = $('.list li.active').index();
    if(li+1 < $('.list li').length){
      var id = li+1;
      $('.arrow-pre').removeClass('disaple');
      $('.list li.active').removeClass('active');
      $('.thumbnail-slick.active').removeClass('active');
      $(".list li[data-index="+ id +"]").addClass('active');
      $(".thumbnail-slick[data-index="+ id +"]").addClass('active');
      if(id == $('.list li').length - 1){
        $('.arrow-next').addClass('disaple');
      }
    }
  }
}
