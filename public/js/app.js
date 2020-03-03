$(function() {
  $.get('/load', {}, function(data) {
    console.log(data);
  })
    .done(function() {})
    .error(function() {
      alert('Something wrong ');
    });
});
