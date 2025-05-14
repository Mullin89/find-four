



  //Get all 16 words in one array

  export default function shuffleArray(arr){

    let newArr = []

    arr.map((words) => words.map((word) => newArr.push(word)))

    let shuffledArr = []

    for (let i = 0; i < 16; i++){

        let randomElement = Math.floor(Math.random() * newArr.length)

        shuffledArr.push(newArr[randomElement])
        newArr.splice(randomElement, 1)
    }



    return shuffledArr
  }

  //Pick one at random


  //Put it in new array
  //Delete from array