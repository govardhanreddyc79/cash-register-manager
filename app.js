const bill = document.querySelector("#bill-amount")
const cash = document.querySelector("#cash-given")
const btnCheck = document.querySelector("#btn-check")
const message = document.querySelector("#error-message")
const numberOfNotes = document.querySelectorAll(".no-of-notes")

var availableNotes = [2000,500,100,20,10,5,1]

btnCheck.addEventListener("click",function clickEventHandler(){
    hideMessage();
    billAmount = Number(bill.value)
    cashGiven = Number(cash.value)
    if (billAmount != '' & cashGiven != '')
    {
        if(billAmount >0 & cashGiven >0){
            if(cashGiven < billAmount){
                showMessage("Do you wanna wash plates ?")
            }else{
                var amountLeft = cashGiven-billAmount
                calculateChange(amountLeft)
            }

        }
        else {
            showMessage("The input values should be positive")
            }
    }
    else{
        alert("Please fill out all Fields")
    }

    }
)
 
function hideMessage(){
    message.style.display = "none";
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg
}

function calculateChange(amount){
    for(let i=0; i < availableNotes.length; i++){
        var notes = Math.floor(amount / availableNotes[i])
        console.log("notes :",notes)
        amount = amount % availableNotes[i]
        numberOfNotes[i].innerText = notes;
    }

}


