import { allGames } from './script.js';
let keyValPairs = {
    "Baseball": "#baseballcontainer",
    "Basketball": "#basketballcontainer",
    "Football" : "#footballcontainer",
    "Soccer" : "#soccercontainer",
    "Hockey" : "#hockeycontainer",
    "Combat" : "#combatcontainer",
}
// function sort () {
//     return usort() - usort();
// }
//let sortedDates = allGames[i].sort((g1,g2) => (g1.utcDate > g2.utcDate) ? 1: (g1.utcDate <  g2.utcDate) ? -1 : 0);
//let sortedDates = allGames[0].sort((g1,g2) => (g1.utcDate > g2.utcDate) ? 1: (g1.utcDate <  g2.utcDate) ? -1 : 0);
console.log('Games sorted by dates are: ');
;

allGames.forEach((elem, i) => {

    let sportContainerName = elem.sport;
    let gameContainer = elem.games;
    console.log('Game Container: ', gameContainer);

    gameContainer.sort((g1,g2) => (g1.utcDate > g2.utcDate) ? -1: (g1.utcDate <  g2.utcDate) ? 1 : 0);
    
        gameContainer.forEach((game, i)=>{
                if (game.homeTeam && game.awayTeam  === 'TBD'){
                    console.log(game.homeTeam, game.awayTeam);
                    } else{
                        let writeHTML = document.querySelector(keyValPairs[`${sportContainerName}`]);
                        writeHTML.insertAdjacentHTML("afterbegin",`<div class="activegamecard">
                        <!-- title--><h4 class="m-cardh4"><span >${game.title}</span></h4>
                                    <h5>Date: <span class="m-card">${game.startDate}</span></h5>
                                    <h5>Time: <span class="m-card">${game.startTime}</span></h5>
                                    <h5>Channel: <span class="m-card"></span></h5>
                                    <h5>Sat: <span class ="m-card"></span></h5>
                                </div>` )
                    }
           
                
                })


 
})
// let satAssignValues = [
//     {'Sat 101', 'Sat 102', 'Sat 103', 'Sat 104', 'Sat 115', 'Sat 116', 'Sat 117', 'Sat 118' }
// ]; 

function satAssign(){


}