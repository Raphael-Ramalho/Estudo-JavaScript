const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//Filter - take a array of items and select which one you want based on some sort of filter

    //Get characters with mass greater than 100
    const greater100Characters = characters.filter(character => {
        return character.mass > 100
    })
    console.log(greater100Characters) //only darth vader should be returned 
    //Get characters with height less than 200
    const shorterCharacters = characters.filter(character => character.height < 200)
    console.log(shorterCharacters)
    //Get all male characters
    const maleCharacters = characters.filter(character => character.gender === "male")
    console.log(maleCharacters)
    //Get all female characters
    const femaleCharacters = characters.filter(character => character.gender ==="female")
    console.log("female")


//Map - will iterate through each item in the array and will alow us to transform each item is some way. the result will be another array with a transformed item for each item in the orininal array.

    //get array of all names
    const allNames = characters.map(character => {
        return character.name
    })
    console.log(allNames)
    //Get array of heights
    const heights = characters.map(character => character.height)
    console.log(heights)
    //get array of objects with just name and height properties
    const minifyRecord = characters.map(character => ({
        name: character.name,
        height: character.height
    }))
    console.log(minifyRecord)
    //Get array of all first names
    const fisrtNames = characters.map(character => character.name.split(" ")[0]) //o split vai quebrar a string original em duas ao atingir o primeiro espaço, enquanto o [0] vai selecionar a primeira string criada
    console.log(fisrtNames)
