let allGames = [
    {
        sport: "Baseball",
        games:[],
    },
    {
        sport: "Basketball",
        games:[],
    },
    {
        sport: "Football",
        games:[],
    },
    {
        sport: "Soccer",
        games:[],
    },
    {
        sport: "Hockey",
        games:[],
     },
    {
        sport: "Combat",
        games:[],
    }
];


let res = await fetch("data.json").then(res=> {
    
    return res.json(res);
})



allGames.forEach((elem, i) => {
    let sportContainerName = elem.sport;
    let gameContainer = elem.games;
    // console.log(sportContainerName, gameContainer)
    
    res.forEach((sportsGame) => {
        const sport = sportsGame.sport.title;
        const homeTeam  =sportsGame.home_team.display_name_full;
        const awayTeam = sportsGame.away_team.display_name_full;
        // const channelId = sportsGame.showings[0].channel.number_major;
        
        const utcDate = sportsGame.starts_at;
        const localDate = new Date(utcDate).toLocaleString("en-US",{
            localeMatcher: "best fit",
            timeZoneName: "short"
        })
       
        const date =  new Date(utcDate);
        const year = date.getFullYear();

        const game = { 
            //insert all relevant game information here.....
            sport: `${sport}`, 
            homeTeam: `${homeTeam}`,
            awayTeam: `${awayTeam}`, 
            title: `${homeTeam} vs ${awayTeam}`,
            
            utcDate: `${utcDate}`,
            startTime: date.toLocaleTimeString(),
            startDate: date.toLocaleDateString(),
            year: `${year}`,

        }

        if (sport === sportContainerName) {
            gameContainer.push(game);
        }
    });   
})
        
        


export { allGames }; 
