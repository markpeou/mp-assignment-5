$('#submit-btn').click(changeBackground);

function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  // if city is "nyc" or "new york" or "new york city.
  //Have allowed for Capitalisation as well as all caps for abbreviated forms in all cities.
  userInput = userInput.toLowerCase();
  if (userInput === 'nyc' || userInput === 'new york' || userInput === 'new york city') {
    clearBackground();
    $('body').addClass('nyc')
    $('#city-type').val('');

// If city is "sf" or "san francisco" or "bay area"
} else if (userInput === 'sf' || userInput === 'san francisco' || userInput === 'bay area' ) {
  clearBackground();
  $('body').addClass('sf')
  $('#city-type').val('');

  // if city is "LA" or "Los Angeles" or "LAX"
} else if (userInput === 'la' || userInput === 'los angeles' || userInput === 'lax' ) {
  clearBackground();
  $('body').addClass ('la')
  $('#city-type').val('');

  // if city is "Austin" or "ATX"
} else if(userInput === 'austin' || userInput === 'atx' ) {
  clearBackground();
  $('body').addClass('austin')
  $('#city-type').val('');

  //if city is "sydney" or "syd"
} else if (userInput === 'sydney' || userInput === 'syd' ) {
  clearBackground();
  $('body').addClass('sydney')
  $('#city-type').val('');
}
}

function clearBackground(){
  $('body').removeClass('nyc sf la austin sydney')
}
// $('.jq_noSpaces').on('change', function(){
//     $('#city-type').val($(this).val().replace(/\s+/g,""))}
