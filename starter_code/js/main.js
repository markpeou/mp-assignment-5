$('#submit-btn').click(changeBackground);

function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  // if city is "nyc" or "new york" or "new york city.
  //Have allowed for Capitalisation as well as all caps for abbreviated forms in all cities.

  if (userInput === 'nyc' || userInput === 'new york' ||userInput === 'new york city'|| userInput === 'NYC' || userInput === 'New York' || userInput === 'New York City') {
    $('body').addClass('nyc')

// If city is "sf" or "san francisco" or "bay area"

} else if (userInput ==='sf' ||userInput ==='san francisco' ||userInput === 'bay area' || userInput === 'SF' || userInput === 'Bay Area' || userInput === 'San Francisco') {
  $('body').addClass('sf')

  // if city is "LA" or "Los Angeles" or "LAX"
} else if (userInput === 'LA' ||userInput ==='los angeles' || userInput === 'LAX' || userInput === 'la' ||userInput === 'Los Angeles' || userInput === 'lax' ) {
  $('body').addClass ('la')

  // if city is "Austin" or "ATX"
} else if(userInput === 'Austin' || userInput === 'ATX' || userInput === 'austin'|| userInput === 'atx') {
  $('body').addClass('austin')

  //if city is "sydney" or "syd"
} else if (userInput === 'sydney' || userInput === 'syd' || userInput === 'Sydney' || userInput === 'SYD') {
  $('body').addClass('sydney')
}
}
// $('.jq_noSpaces').on('change', function(){
//     $(this).val($(this).val().replace(/\s+/g,""))}
