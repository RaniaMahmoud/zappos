$(document).ready(function(){

  $( "#accordion" ).accordion({
    heightStyle: "fill",
    icons: false,
    collapsible: true, 
    active:2,
  });
  $('#accordion').accordion({
    collapsible:true,
    beforeActivate: function(event, ui) {
         // The accordion believes a panel is being opened
        if (ui.newHeader[0]) {
            var currHeader  = ui.newHeader;
            var currContent = currHeader.next('.ui-accordion-content');
         // The accordion believes a panel is being closed
        } else {
            var currHeader  = ui.oldHeader;
            var currContent = currHeader.next('.ui-accordion-content');
        }
         // Since we've changed the default behavior, this detects the actual status
        var isPanelSelected = currHeader.attr('aria-selected') == 'true';
        
         // Toggle the panel's header
        currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));
        
        // Toggle the panel's icon
        currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);
        
         // Toggle the panel's content
        currContent.toggleClass('accordion-content-active',!isPanelSelected)    
        if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }

        return false; // Cancels the default action
    }
  });

/*
  // $("#WomenSize").click(function(){
  //   Click(this);
  // })
  // $("#Brand").click(function(){
  //   Click(this);
  // })
  // $("#Category").click(function(){
  //   Click(this);
  // })
  */
  $(".filter").click(function(){
    //alert("#"+$(".slide").attr("id")+" > .fa-sort-up")
    Click(this);
  })

  function Click(val){
    if($(val).attr("data-click")==0){
      //alert("#"+$(val).attr("id")+" > .fa-sort-up")
      $("#"+$(val).attr("id")+" > .fa-sort-up").css("display", "none");
      $("#"+$(val).attr("id")+" > .fa-sort-down").css("display", "inline");
      $(val).attr("data-click", "1");
    }
    else{
      $("#"+$(val).attr("id")+" > .fa-sort-up").css("display", "inline");
      $("#"+$(val).attr("id")+" > .fa-sort-down").css("display", "none");
      $(val).attr("data-click", "0");
    }
  };

  $("#SearchCategory").focus(function (e) { 
    $(this).css("border","2px dotted #0d6efd")
  });

  $("#SearchCategory").blur(function (e) { 
    $(this).css("border","")
  });


  // $(".Product1 > .heart").mouseover(function (e) {
  //   animate_loop(); 
  // });

  // animate_loop = function animate_loop(){
  //   $( ".Product1 > .heart" ).animate({
  //     "font-size": "15px", 
  //     }, 1000,function(){
  //          $( ".Product1 > .heart").animate({ "font-size": "18px"},1000)
  //            animate_loop();
  //   });    
  // }
  animate_loop = function animate_loop(element){
    //$(element).attr("class");
    //console.log(element.attr("id"));
    element.animate({
      "font-size": "15px", 
      }, 1000,function(){
          element.animate({ "font-size": "18px"},1000)
          animate_loop(element);
    });    
  }
  // $(".Product1 > .heart").mouseout(function (e) {
  //   $(".Product1 > .heart").css("font-size", "16px")
  //   $(".Product1 > .heart").stop(true);
  //   //alert("s")
  // });
  function HeartAnimate(){
    for (let index = 1; index < 16; index++) {
      //console.log(Heart.attr("id"));
      $(".Product"+index+" > .heart").on("mouseover", function () {
        //console.log(Heart.attr("id")+"in");
        animate_loop($(".Product"+index+" > .heart"));
      });
      $(".Product"+index+" > .heart").on("mouseout", function () {
        $(".Product"+index+" > .heart").css("font-size", "16px")
        $(".Product"+index+" > .heart").stop(true);
      });        
    }
  }
  HeartAnimate();

  // $("#P1 img").click(function (e) { 
  //     var src= $(this).attr("src");
  //     $(".Product-Col1 .card-img-top").attr("src", src);
  //   //alert(src)
  // });

  function ProductEvent(){
    for (let index = 1; index < 16; index++) {
      Products=$("#P"+index+" img");
      Products.each(function(){
        $(this).on("mouseover", function () {
          var src= $(this).attr("src");
          //alert(src);
          $(".P"+index+" .card-img-top").attr("src", src);
        });
      })      
    }
  }
  ProductEvent();
  function ChangeProductImg(){
    for (let index = 1; index < 16; index++) {
      Products=$(".P"+index+" .card-img-top");
      Products.each(function(){
        $(this).on("mouseover", function () {
          var src= 'source/productImages/p'+index+'.jpg'
          $(this).attr("src", src);
        });
        $(this).on("mouseout", function () {
          var src= 'source/productImages/S'+index+'.jpg'
          $(this).attr("src", src);
        });
      })      
    }
  }
  ChangeProductImg();
  // $( function() {
  //   var availableTags = [
  //     "Infant",
  //     "Toddler",
  //     "Little Kid",
  //   ];
  //   $( "#SearchCategory" ).autocomplete({
  //     source: availableTags
  //   });
  // } );

 /* var slider = $("#lightSlider").lightSlider();
  slider.goToSlide(3);
  slider.goToPrevSlide();
  slider.goToNextSlide();
  slider.getCurrentSlideCount();
  slider.refresh();
  slider.play(); 
  slider.pause();*/
  // var availables = [
  //   "Infant",
  //   "Toddler",
  //   "Little Kid",
  // ]
  // $('#SearchCategory').autocomplete(
  //   {
    
  //       source : availables,
  //       autoFocus: true,
  //       append: `                                                
  //       <div class="form-check">
  //       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  //       <label class="form-check-label" for="flexCheckDefault">
  //         Infant(187)
  //       </label>
  //     </div>
  //     ` ,
  //       _renderItem: function( ul, item ) {
  //         return $( 
  //         )

  //       }
  //   })

    var availableTags = [
      "Infant(17)",
      "Infant(65)",
      "Toddler(27)",
      "Toddler(246)",
      "Toddler(66)",
      "Little Kid(120)",
      "Little Kid(770)",
      "Toddler(823)",
      "Toddler(93)",
      "Toddler(823)",
      "Toddler(93)",
      "Toddler(823)",
      "Toddler(93)"
    ];
  //   $.widget("custom.autocompleteheader", $.ui.autocomplete, {
  //     _renderMenu: function (ul, items) {
  //         var self = this;
  //         $.each(items, function (index, item) {
  //             self._renderItem(ul, item);
  //             return $( "<li></li>" )
  //             .append( '<input type="checkbox" ' +  '/>' + item.label )
  //             .appendTo( ul );          
  //           });

  //     }
  // });

  // $("#SearchCategory").autocompleteheader({
  //   source: availableTags,
  //   _renderItem = function( ul, item ) {
  //     return $( "<li></li>" )
  //     .data( "item.autocomplete", item )
  //     .append( '<input type="checkbox" ' +  '/>' + item.label)
  //     .appendTo( ul );
  //   }
  // });
  $("#SearchCategory").autocomplete({
    source: availableTags
  })
});

