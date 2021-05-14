const battleStations = {
    users: {

    Kenny: {
        processor: 'i7', 
    'Graphics Card': 'Asus 3060'
    },

    Aleah: {
        processor: 'i9',
        'Graphics Card': 'NVIDIA 2070'
    }
}
};


//console.log(battleStations.Aleah['Graphics Card']); //brackets are used around 'Graphics Card' since it is a multi word property, so it is a string
//console.log(battleStations.Kenny['Graphics Card']);

//console.log(battleStations.Aleah.processor); //dot notation (apparently dot nation lol) can be used here since the property is a single word
//console.log(battleStations.Kenny.processor);


for(let user in battleStations.users){
    console.log(`${user}'s Computer: ${battleStations.users[user]}`) //This logs undefined. Fix next time you see this. 