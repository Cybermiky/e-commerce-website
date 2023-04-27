Btn = document.querySelectorAll(".buyButton")
paymentModal = document.getElementById("payment")
console.log(paymentModal)
// close = document.getElementById("close")

console.log(Btn)

close = document.getElementById("close")
close.addEventListener("click", ()=>{
    paymentModal.style.display = "none"
})
console.log(close)
for(myButtons of Btn){
    myButtons.addEventListener("click", (e)=>{
                fireButtons(e)
            })

}
function fireButtons(){
    console.log(paymentModal)
    paymentModal.style.display = "block"
    
}