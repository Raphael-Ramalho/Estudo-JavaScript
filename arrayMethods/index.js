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


//Some - determine if at least one array item meet a condition and return true or false based on the analisys

    //is at least one male caracter?
    const maleCharacter = characters.some(character => character.gender === "male")
    console.log(maleCharacter)
    //is there at least one character with blue eyes?
    const oneBlueEyes = characters.some(character => character.eye_color === "blue")
    console.log(oneBlueEyes)
    //is there at least one  character taller than 210?
    const oneTallerThan210 = characters.some(character => character.height > 210)
    console.log(oneTallerThan210)
    //is there at least one character with mass lower than 50?
    const oneMassLessThan50 = characters.some(character => character.mass < 50)
    console.log(oneMassLessThan50)

//Sort - let us order the array in some way by a compare function
    //function (A, B){return A - B}
        //if the result is negative, A is sorted before B
        //if the result is positive, B is sorted before A
        //if the result is 0, no changes are done with the sort order of the two values

    //sort by mass
    const byMass = characters.sort((a, b) => {
        return a.mass - b.mass //if the order resulted is the oposite of what you wanted, change A and B order (b.mass - a.mass)
    })
    console.log(byMass)
    //sort by height
    const byHeight = characters.sort((a, b) => a.height - b.height)
    console.log(byHeight)
    //sort by name
    const byName = characters.sort((a, b) => {
        if (a.name < b.name){//we cant use only subtraction as in the previous exemples because we are dealing with strings, but javascript is able to understand if A comes first or after B on the alphabet.
            return -1
        } else { return 1}//by using this format we are forcing the function to organize the elements based on their alphabetical order
    })

    console.log("raphael" > "isabela") //-> true
    console.log("raphael" < "isabela") //-> false
    console.log("a" < "bb") //-> true
    //sort by gender
    const byGender = characters.sort((a,b) => {
        if(a.gender ==="female"){
            return -1
        } else {return 1}//as on byName, here we are using a alternative way to reach our goal with the tools on our disposal. on this case, female characters will appear fist than male ones on the array
    })

//Reduce -  you iterate through each array's item in order to get some ending result. it is made by adding a acumulator pattern (acc) and a current value(cur) as function parameters.
    //get total mass of all characters
    const totalMass = characters.reduce((acc, cur) => {
        return acc + cur.mass
    }, 0)// 0 is the initial acumulator value
    console.log(totalMass)
    //get total height of all characters
    const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
    console.log(totalHeight)
    //get total number of characters by eye color
    const charactersByEyeColor = characters.reduce((acc, cur) => {
        const color = cur.eye_color
        if(acc[color]){
            acc[color]++
        } else {
            acc[color] = 1
        }
        return acc
    }, {})
    console.log(charactersByEyeColor)// result -> {blue: 2, yellow: 1, brown: 1}
    //get total number of characters(letters + spaces) in all the character names
    const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0)
    console.log(totalNameCharacters)

    //every - used to see if every item in the array meets a certain criteria. results in true or false 
        //Does every character have blue eyes?
        const allBlueEyes = characters.every((character) => {
            return character.eye_color === "blue"
        })
        console.log(allBlueEyes)// -> false
        //Does every characters have mass higher than 40?
        const allMassMoreThan40 = characters.every(character => character.mass > 40)
        console.log(allMassMoreThan40)// -> true
        //Is every character shorter than 200?
        const allShorterThan200 = characters.every(character => character.height < 200)
        console.log(allShorterThan200)// -> false
        //Is ever character male?
        const allMale = characters.every(character => character.gender === "male")
        console.log(allMale)// -> false