(function ($) {
 $('.edit-meal').on('click', function (e) {
  e.preventDefault();
  const inputs = $(this).parents().children('.form-control-plaintext');
  const select = $(this).parents().children('.form-select');
  $(this).hide();
  $(this).next().show();
  inputs
   .addClass('form-control pe-2')
   .removeClass('form-control-plaintext pe-none');
  select.removeClass('form-invisible pe-none').addClass('pe-2');
  $('.food-type-visual').hide();
  $('.food-type').show();
 });
 $('.save-meal').on('click', function (e) {
  e.preventDefault();
  const id = $(this).attr('data-id');
  console.log(id);
  const editedMeal = {
   food_name: $(this).parents().children('.food-name').val(),
   food_type: $(this).parents().children('.food-type').val(),
   calories: $(this).parents().children('.calories').val(),
  };
  console.log(editedMeal);
  fetch(`/api/meal/${id}`, {
   method: 'PUT',
   body: JSON.stringify(editedMeal),
   headers: {
    'Content-Type': 'application/json',
   },
  });
    document.location.replace('/dashboard');
 });
})(jQuery);
