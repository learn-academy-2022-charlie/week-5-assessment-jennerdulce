// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should replace characters within a string, encrypting the string
    // expect: Invoke the function "encryption" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("encryption Method", () => {
        it("should replace characters within a string, encrypting the string", () => {
            const secretCodeWord1 = "Lackadaisical"
            const secretCodeWord2 = "Gobbledygook"
            const secretCodeWord3 = "Eccentric"
            expect(encryption(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
            expect(encryption(secretCodeWord2)).toEqual("G0bbl3dyg00k")
            expect(encryption(secretCodeWord3)).toEqual("3cc3ntr1c")
        })
    })


// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "encryption"
    // Has 1 parameter that will accept an string, will name this parameter str
// Within the function
    // Create a variable named encryptedWord and set its value to and empty string. Will use this to create the new encrypted word
    // Use a for loop to iterate through each of the characters of a string
        // Use conditional statements to check and see if the current character at the index is either a, e, i o, and the Uppercase versions of these characters
            // Swap out out the characters by concatentating the corresponding number(3, 4, 1, or 0) to the 'encryptedWord' variable
        // Else add the value at the current index to the encryptedWord variable
    // return the encryptedWord

const encryption = (str) => {
    let encryptedWord = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'e' || str[i] == 'E'){
            encryptedWord = encryptedWord +'3'
        } else if(str[i] == 'a' || str[i] == 'A'){
            encryptedWord = encryptedWord +'4'
        } else if(str[i] == 'i' || str[i] == 'I'){
            encryptedWord = encryptedWord +'1'
        } else if(str[i] == 'o' || str[i] == 'O'){
            encryptedWord = encryptedWord +'0'
        } else {
            encryptedWord = encryptedWord + str[i]
        }
        
    }
    return encryptedWord
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return all the words that contain that particular letter”
    // expect: Invoke the function "findWords" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("findWords Method", () => {
        it("should return all the words that contain that particular letter", () => {
            const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
            const letterA = "a"
            const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
            const letterE = "e"
            expect(findWords(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
            expect(findWords(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
        })
    })

// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "findWords"
    // Has 2 parameters that will accept an array, will name this parameter arr, and a singular character of the alphabet, will name this parameter letter
// Within the function
    // Use the higher order function .filter() on the given array  (arr) that is passed in as an argument
        // Filter out the array
        // For each iteration, check to see if the word includes the given letter
            // return the value
        // return the newly created array that was made by the .filter() method

const findWords = (arr, letter) => {
    let newArr = arr.filter(value => {
        if(value.toLowerCase().includes(letter)){
            return value
        }
    })
    return newArr
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
// const and2 = [5, 5, 3, 3, 4]
// Expected output: false
// //  hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should determine whether or not the array is a “full house”
    // expect: Invoke the function "isFullHouse" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

describe("isFullHouse Method", () => {
    it("should determine whether or not the array is a “full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
        expect(isFullHouse(hand1)).toEqual(true)
        expect(isFullHouse(hand2)).toEqual(false)
        expect(isFullHouse(hand3)).toEqual(false)
    })
})

// Create a function
    // Will name the function "isFullHouse"
    // Has 1 parameter that will accept an array, will name this parameter arr
// Within the function
    // Create an object that will hold key and value pairs for the numbers within the array
    // Use the .forEach() method on the array that is passed in as an argument
    // For each of the values in the array, use conditional statements to determine whether to add the card to the object of cards or to increment the value of the key by 1
        // If the object already contains the current number as a key
            // Increment the key's value by 1
        // Else
            // Add a new key to the object, this key will be the number, and set its value to 1
    // Use a conditional to check if the object containing the cards has only two keys
        // Retrieve the values of these keys
            // If the values of the object contains 2 AND 3
                // return true
            // else
                // return false
    // Else
        // Return false

// b) Create the function that makes the test pass.

const isFullHouse = arr => {
    let cards = {}
    arr.forEach(value => {
        if(cards[value]){
            cards[value] += 1
        } else {
            cards[value] = 1
        }
    })
    if(Object.keys(cards).length == 2){
        if(Object.values(cards).includes(2) && Object.values(cards).includes(3)){
            return true
        } else {
            return false
        }
    }
    return false
}