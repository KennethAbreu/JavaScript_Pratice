const monsterFactory = (name, age, energySource, catchPhrase) =>{
    return{
        name: name,
        age: age,
        energySource: energySource,
        boo(){
            console.log(catchPhrase)
        }
    }
}

goblin = monsterFactory('Grimbles', 222, 'Rocket Fuel', 'Boi do i have a deal for you!');

console.log(goblin.boo());