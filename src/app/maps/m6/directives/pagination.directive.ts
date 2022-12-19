import { Directive,ElementRef,HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appPagination]'
})
export class PaginationDirective {

  constructor(private el: ElementRef) {
  }
  @HostListener('click')
  pagination(){
    var elm = this.el.nativeElement;
    Array.from(document.querySelectorAll('.list li.active')).forEach(function(elem) {
      elem.classList.remove('active');
    });
    Array.from(document.querySelectorAll('.thumbnail-slick')).forEach(function(elem) {
      elem.classList.remove('active');
    });
    // .classList.remove('active');
    elm.classList.add('active');
    var index = elm.getAttribute('data-index');
    $(".thumbnail-slick[data-index="+ index +"]").addClass('active');
    if(index == $('.list li').length - 1){
      $('.arrow-next').addClass('disaple');
      $('.arrow-pre').removeClass('disaple');
    }
    if(index == 0){
      $('.arrow-pre').addClass('disaple');
      $('.arrow-next').removeClass('disaple');
    }
    if(index != 0 && index != $('.list li').length - 1 ){
      $('.arrow-pre').removeClass('disaple');
      $('.arrow-next').removeClass('disaple');
    }
  }
}
