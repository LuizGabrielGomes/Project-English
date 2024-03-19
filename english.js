

function correction(id) {
    const getElement = document.getElementById(id);
    getElement.style.background = "green";
     
}




const questions = [
    "What is the meaning of find out?",
    "What is the mean of back up?", 
    "What is the mean of Carry on?",  
    "What is the mean of Get along/ Get on/ Get on with?"
]

function question(){
    let element = questions.map((item,index) => {
        console.log(item);
        const title = document.createElement("div")
        title.classList.add("title")
        const paragraph = document.createElement("p")
        paragraph.id = "title"
        title.appendChild(paragraph)
        paragraph.textContent = questions[index]
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