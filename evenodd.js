let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

// ...more code below

function updateWord(element) {
      usersWord = element.value

      console.log(usersWord)
    }
   
      function handleSubmit() {
        // this line creates a new LI Element. We'll do this every time a word is submitted so this should stay the same
        let newListItem = document.createElement('LI')
    
        // this line sticks the user's word into the newly create LI Element so we'll keep this the same, as well.
        newListItem.innerText = usersWord

        if(usersWord.length % 2 === 0) {
            /*put word in even lists*/
            evenList.appendChild(newListItem)
          } else {
            /*put word in odd list*/
            oddList.appendChild(newListItem)
            }
        // this line attaches/appends the element to the Odd List !!!THIS IS WHERE THE PROGRAM SHOULD DECIDE IF IT'S EVEN OR ODD!!!
        // these two lines will be the same
        usersWord = ""
        document.getElementById("even-odd-form").reset()
          
      }
