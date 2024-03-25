

function correction(id) {
    const getElement = document.getElementById(id);
    getElement.style.background = "green";
     
}


const questions = [
    { 
        _id: 1,
        title: "What is the meaning of find out?",
        alternatives: [  
            "Discover a fact or piece of information",
            "Means to eventually decide something",  
            "To have a good relationship with someone",  
        ]
    },
    { 
        _id: 2, 
        title: "What is the mean of back up?",
        alternatives: [  
            "Return to the place",
            "Do a review",  
            "Support or defend someone",  
        ]
    },
    { 
        _id: 3,
        title: "What is the mean of Carry on?",
        alternatives: [  
            "To Cancel something",
            "Continue",  
            "discover or learn",  
        ]
    },
    { 
        _id: 4,
        title: "What is the mean of Get along/ Get on/ Get on with?",
        alternatives: [  
            "stay for a long time",
            "take a long time",  
            "To have a good relationship",  
        ]
    },

]

function question(){
    let element = questions.map((item, index) => {
        console.log(item);

        const title = document.createElement("div")
        title.classList.add("title")
        const paragraph = document.createElement("p")
        paragraph.id = "title"
        paragraph.textContent = item.title
        
        const containerAlternatives = document.createElement("div")

        const alternatives = item.alternatives.map((alternative, index) => {
          console.log(alternative)  

          const alternatives = document.createElement("p")
          alternatives.textContent = alternative 
          return alternatives 
        })
        console.log(alternatives)
        containerAlternatives.appendChild(alternatives)

        console.log(containerAlternatives);
        title.appendChild(paragraph)
        
        return title
        
    })
    
    console.log(element)



// {/* <div id="title" class="title">
//             <p>
//                  1) What is the meaning of find out?
//             </p>
//         </div>

//         <div id="alternatives" class="alternatives">
//             <p class="paragraph" id="correct-1">
//                 <input type="radio" class="input-radio" name="question">
//                  A- Discover a fact or piece of information 
//             </p>

//             <p class="paragraph">
//                 <input type="radio" class="input-radio" name="question"> 
//                  B- Means to eventually decide something    
            
//             </p>
//             <p class="paragraph">
//                 <input type="radio" class="input-radio" name="question">
//                  C- To have a good relationship with someone    
//             </p>
//         </div> */}













}

question()