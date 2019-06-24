var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendCheck);

function appendCheck() {
  var name = $('.name').val();

  cardContainer.append(`
    <p class= "name-card"> ♡ ${name} </p>
  `);

  $('.name').val("");
}
