import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit{
  ngOnInit(): void {

    (function ($) {

      //---------- Map Tool Onclick Function ----------
      $('.showlayersMap').click(function () {
        $('#mapShowlayersMap').toggle();
      });
      $('.showfilterMap').click(function () {
        $('#mapShowfilterMap').toggle();
      });

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

      //---------- Draggable ---------
      $(document).ready(function () {
        $('#mapShowlayersMap, #mapShowfilterMap').drags({ handle: ".layer-header" });
      });

      //---------- Toast ---------
      $(document).ready(function () {
        $("#showToast").click(function () {
          $('.toast').toast('show');
        });

      });

    })(jQuery);
   

  }

}
