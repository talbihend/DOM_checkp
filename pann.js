const btnplusArray=document.getElementsByClassName("plus")

for(var i=0;i<btnplusArray.length;i++){
     btnplusArray[i].addEventListener("click", increment)
}
function increment(event){
    const btnplus=event.target
    const divelmnt=btnplus.parentElement
    const quantitytag=divelmnt.querySelector("p")
    var quantityvalue=parseInt(quantitytag.innerHTML)
    quantityvalue++
    quantitytag.innerHTML=quantityvalue

    const tdElt=divelmnt.parentElement
    const trElt=tdElt.parentElement
    //console.log(trElt)
    const unitPriceValue=Number(trElt.querySelector(".unite-price").innerHTML)
    //console.log(unitPriceValue)
    var quantityprice=trElt.querySelector(".quantity-price")
    //console.log(quantityprice)
    var priceValue=Number(quantityprice.innerHTML)
    //console.log(priceValue)
    priceValue=quantityvalue*unitPriceValue
    quantityprice.innerHTML=priceValue
    console.log(priceValue)
    

}


const btnminusArray=document.getElementsByClassName("minus")
const checkboxs=document.querySelectorAll("input")
const btndelete=document.getElementsByClassName("delete")
const btnlike=document.getElementsByClassName("like")

for (var j=0;j<btnminusArray.length;j++) {
    btnminusArray[j].addEventListener("click", decrement)
    checkboxs[j].addEventListener("click", totalprice)
    btndelete[j].addEventListener("click",remove)
    btnlike[j].addEventListener("click",likeprod)
}
function decrement(event){
   const btnminus=event.target
   const divelmnt=btnminus.parentElement
   const quantitytag=divelmnt.querySelector("p")
   var quantityvalue=parseInt(quantitytag.innerHTML)
   quantityvalue--
   quantitytag.innerHTML=quantityvalue


const tdElt=divelmnt.parentElement
const trElt=tdElt.parentElement
//console.log(trElt)
const unitPriceValue=Number(trElt.querySelector(".unite-price").innerHTML)
//console.log(unitPriceValue)
var quantityprice=trElt.querySelector(".quantity-price")
//console.log(quantityprice)
var priceValue=Number(quantityprice.innerHTML)
//console.log(priceValue)
priceValue=quantityvalue*unitPriceValue
quantityprice.innerHTML=priceValue
console.log(priceValue)

}

function totalprice(e){

    const checkBox=e.target
    var price=Number(checkBox.parentElement.parentElement.querySelector(".quantity-price").innerHTML)
    var totalTag=document.getElementById("total")
    var totalValue=parseInt(totalTag.innerHTML)
    //console.log(totalValue)
    const bntplus=checkBox.parentElement.parentElement.querySelector(".plus")
    const bntminus=checkBox.parentElement.parentElement.querySelector(".minus")
    if(checkBox.checked===true){
        totalValue+=price
        bntplus.setAttribute("disabled",true)
        bntminus.setAttribute("disabled",true)
    }
    else{
        totalValue-=price
        bntplus.removeAttribute("disabled")
        bntminus.removeAttribute("disabled")
    }
    totalTag.innerHTML=totalValue
    //console.log(totalTag)
}

function remove(e){
const buttondel=e.target
const divElt=buttondel.parentElement.parentElement.parentElement.parentElement
divElt.remove()

}
function likeprod(e){
const buttonlik=e.target
const divElt=buttonlik.parentElement.parentElement.parentElement.parentElement
 //console.log(divElt)
if (buttonlik.style.color=="blue"){
    buttonlik.style.color= "grey" }
else {
    buttonlik.style.color= "blue"
}


}
