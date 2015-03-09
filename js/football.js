for (var id = 1; id <= 40; id++) {
  $.ajax({
    url: "http://fantasy.premierleague.com/web/api/elements/" + id + "/",
    dataType: 'json'
    }).done(function(data) {
      if(data.type_name === "Goalkeeper") {
        $('.goalkeepers').append(
          $('<option></option>').html(data.web_name).val(data.now_cost)
          );
      } else if(data.type_name === "Defender") {
        $('.defenders').append(
          $('<option></option>').html(data.web_name).val(data.now_cost)
          );
      } else if(data.type_name === "Midfielder") {
        $('.midfielders').append(
          $('<option></option>').html(data.web_name).val(data.now_cost)
          );
      } else if(data.type_name === "Forward") {
        $('.forwards').append(
          $('<option></option>').html(data.web_name).val(data.now_cost)
          );
      } else {return false}
    });
};

function populateTeam(selectorClass, positionArray, positionClass, positionCode, positionMax){
   $(selectorClass).change(function() {
    var player = $('option:selected', $(this)).html();
    var cost = $('option:selected', $(this)).val();
    if(positionArray.indexOf(player) === -1 && positionArray.length < positionMax){
      positionArray.push(player);
      $(positionClass).append(positionCode + positionArray[positionArray.length-1] + cost +'<br />');
      } else {
        return false}
    });
};

goalkeeperArray = []; defenderArray = []; midfielderArray = []; forwardArray = []

populateTeam('.goalkeepers', goalkeeperArray, '.gk', 'GK: ', 2)
populateTeam('.defenders', defenderArray, '.def', 'DEF: ', 5)
populateTeam('.midfielders', midfielderArray, '.mid', 'MID: ', 5)
populateTeam('.forwards', forwardArray, '.fwd', 'FWD: ', 3)



// for (var id = 1; id <= 40; id++) {
//   $.ajax({
//     url: "http://fantasy.premierleague.com/web/api/elements/" + id + "/",
//     dataType: 'json'
//     }).done(function(data) {
//         function populateSelectors(Position, selectorClass) {
//           if(data.type_name === Position) {
//            $(selectorClass).append(
//             $('<option></option>').html(data.web_name).val(data.now_cost));
//         };
//       }
//     populateSelectors("Goalkeeper", '.goalkeepers')
//     populateSelectors("Defender", '.defenders')
//     populateSelectors("Midfielder", '.midfielders')
//     populateSelectors("Forward", '.forwards')
//   });
// }
