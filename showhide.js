$(document).ready(function() {
  $('.elementcontainer, p').hide();
  $('.category-title').click(function() {
    // hide all other categories except the clicked one
    $('.category-title').not($(this)).siblings('.elementcontainer, p').slideUp();
    // toggle the clicked category
    $(this).siblings('.elementcontainer, p').slideToggle();
  });
});
