import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {

    (function ($) {
      //---------- Tooltip ------------
      $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        'placement': 'top'
      });
      $('[data-toggle="popover"]').popover({
        trigger: 'hover',
        'placement': 'top'
      });
      $('[data-toggle-second="tooltip"]').tooltip({
        trigger: 'hover',
        'placement': 'top'
      });
      $('[data-toggle-second="popover"]').popover({
        trigger: 'hover',
        'placement': 'top'
      });

      //--------- Same Div Height ---------
      $(document).ready(function(){
            //alert("ready");
            changeDivHeight();
        });
        /*whenever browser window size changes, this function is being called
          and it fixed div height.*/
        $(window).resize(function(){
            //alert("resize");
            changeDivHeight();
        });
        /*here we place our logic
          we take each sizes, compares which one is largest and then
          set other's height.*/
        function changeDivHeight() {
            // .innerHeight() returns height of an element
            var a = $("#div_a").innerHeight();
            var b = $("#div_b").innerHeight();
            //alert(a + " " + b);
            // .height() sets height of an element
            // we can pass an integer value, which will be converted into px
            // otherwise we can pass a string, mentioning the unit such as px or in or cm or dp
            if( a > b ) {
                $("#div_b").height( a );
            } else {
                $("#div_a").height( b );
            }
        }

    })(jQuery);
  }
}
