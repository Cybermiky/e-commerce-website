// const { range } = require("express/lib/request")



buttonController = document.getElementsByClassName("controller")
// closePayment = document.getElementById("close")
// closePayment.addEventListener("click", ()=>{
//     console.log("working")
// })
console.log(buttonController)
fullWrapper = document.querySelector(".sliderWrapper")

console.log(fullWrapper)

previousPosition = 1

// buttonController.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         console.log("clicked")
//     })
// })
for(button of buttonController){
    button.addEventListener("click", (e)=>{
                slideItem(e)
            })

}

function slideItem(e){


 console.log( "previously clicked:"+ previousPosition)
//   numberClicked = parseInt(e.target.textContent)
  numberClicked = parseInt(e.target.dataset.value) 
  
console.log(numberClicked)
if(numberClicked != previousPosition ){
    console.log("still in not equal")
    console.log("previousPosition was "+ previousPosition)
    if(numberClicked > previousPosition){

        range = numberClicked - previousPosition
        // rangePercentage = range * 100
        // console.log("range Percentage - " + rangePercentage)
        // previousPositionPercentage = previousPosition * 100
        // range =range * 100
        numberClickPercentage = numberClicked * 100
        numberAmend = numberClickPercentage-100

        

        // numberClickPercentage = numberClicked * 100
        // previousPositionPercentage = previousPosition * 100
        // rangeMovement =    numberClickPercentage  -    previousPositionPercentage
        // console.log("previous position is now "+ previousPosition)
        // previousPosition = numberClicked
        // fullWrapper.style.right =  rangeMovement + "%"
        // console.log("numberClickPercentage: " +numberClickPercentage) 
        // console.log("range movement: " +rangeMovement) 
        // console.log("previous position percentage:" +  previousPositionPercentage )
            //   fullWrapper.style.transform= `translateX(${-numberClickPercentage}vw)`;
            console.log("NUMBER AMEND "+ numberAmend)
                     fullWrapper.style.transform= `translateX(${-numberAmend}vw)`;
                    //  fullWrapper.style.right = numberAmend + "%"
                     previousPosition = numberClicked
                     console.log("previous position is now "+ previousPosition)
                     
                    
        // wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // console.log(rangeMovement)
        // previousPositionPercentage = previousPosition * 100 
        // numberClickPercentage = numberClicked * 100
        // rangeMovement =  numberClickPercentage - previousPositionPercentage
       
        // slide = previousPositionPercentage + rangeMovement
        // fullWrapper.style.right =   slide+ "vw" 
        // console.log("browser position sliderColumn at: "+ slide + "%" )
        // previousPosition = numberClicked
        // rangeMovement = previousPosition + numberClickPercentage
        // numberClickPercentage = numberClicked * 100
        // previousPositionPercentage = previousPosition * 100
        // rangeMovement =  numberClickPercentage - previousPositionPercentage
        // fullWrapper.style.right =  rangeMovement + "%"
        // previousPosition = numberClicked
        // console.log("previousPosition  now: "+ previousPosition)
        //  console.log("window must move " + rangeMovement + "to left")
        // newPositionScreen =  numberClicked * 100
        // console.log("move position to the right" + newPositionScreen)
    //     // sliderrange
    //     calcSlide = numberClicked -previousPosition
    //    console.log("calcSlide: "+ calcSlide)
    //     finalCalcSlide = calcSlide * 100
    //     console.log("finalCalcSlideBrowser: "+ finalCalcSlide)
    //     farLength = numberClicked * 100
    //     console.log("farlength:" + farLength)
    //     movement = farLength - finalCalcSlide
    //     console.log("movement: "+ movement)

    //     console.log("at " +movement + "now" )
    //     // console.log(finalCalcSlide + "% to the right")
    //     console.log("move to the left")

            // fullWrapper.style.right =   movement+ "vw" 
            // fullWrapper.style.right  =  newPositionScreen+ "vw" 
     
        }    
    else{   




        numberClickPercentage = numberClicked * 100
        numberAmend = numberClickPercentage-100
        console.log("NUMBER AMEND "+ numberAmend)
        fullWrapper.style.transform= `translateX(${-numberAmend}vw)`;
       //  fullWrapper.style.right = numberAmend + "%"
        previousPosition = numberClicked
        // console.log("previousPosition was "+ previousPosition)
        // slideBack =      numberClickPercentage  -    previousPositionPercentage
        // slide = previousPositionPercentage -slideBack
        // console.log("slide back is "+ slide)
        // fullWrapper.style.transform= `translateX(${ numberClickPercentage * 100}vw)`;
        // previousPosition = numberClicked
        // console.log("previousPosition is now "+ previousPosition)

        
        // numberClickPercentage = numberClicked * 100
        // previousPositionPercentage = previousPosition * 100
        // rangeMovement =    numberClickPercentage - previousPositionPercentage   
        // console.log("numberClickPercentage: " +numberClickPercentage) 
        // // // previousPosition = numberClicked
        // console.log("numberClickPercentage: " +rangeMovement)  
        // // console.log("previous position percentage:" +  previousPositionPercentage )
        // fullWrapper.style.transform= `translateX(${-previousPositionPercentage * 100}vw)`
        // previousPosition = numberClicked
        // console.log("previous position is now "+ previousPosition)
         
        // previousPosition = numberClicked  
        // fullWrapper.style.left  =  rangeMovement + "%"
        // previousPosition = numberClicked
        // console.log("previousPosition now "+ previousPosition)
        
        // console.log("window must move " + rangeMovement + "to right")
        // newPositionScreen =  numberClicked * 100
        // console.log("move position to the right" + newPositionScreen)
        // fullWrapper.style.left  =  newPositionScreen+ "vw" 
        //  calcSlide =  previousPosition +numberClicked
        //  console.log("calcSlide: "+ calcSlide)
        //  finalCalcSlide = calcSlide * 100
        //  console.log("finalCalcSlideBrowser: "+ finalCalcSlide)
        //  farLength = numberClicked * 100
        //  console.log("farlength:" + farLength)
        //  movement = farLength - finalCalcSlide
        //  console.log("movement: "+ movement)
        //  console.log("at " +movement + "now" )
        //  console.log("move to the left")
        //  fullWrapper.style.left =   movement+ "vw" 



        // previousPosition = numberClicked
        // calcSlide = previousPosition - numberClicked
        // finalCalcSlide = calcSlide * 100
        // console.log(finalCalcSlide + "% to the left")
        // console.log("move to the left")
        // fullWrapper.style.left   = finalCalcSlide + "vw"
    }
   


    // if(numberClicked == 1){
    //     // console.log("equal to 1")
        
        
    // }
    // if(numberClicked> 1 && numberClicked< 05){
    //     // console.log("greater  1 and less than 5")
    // }
    // if(numberClicked ==5){
    //     // console.log("equal to 5")
    
    // }
}
else{
    console.log("you clicked this same number")
}

// previousPosition = numberClicked
// console.log("newly clicked:"+ previousPosition)

}
