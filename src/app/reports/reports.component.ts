import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var baguetteBox: any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{
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

      //---------- Datatable ---------
      $(document).ready(function() {
          $('#reportDatatable').DataTable( {
          } );
      });

//--------- Baguette Lightbox ---------
baguetteBox.run('.tz-gallery');

    })(jQuery);

  }
}
