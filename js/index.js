//scrollspy
$(window).on('scroll', function () {
   var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight()
    , cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $(".sidebar-item").toggleClass("active");
    $(".sidebar").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});