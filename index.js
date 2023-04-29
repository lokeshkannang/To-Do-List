let myForm = document.getElementById("myForm")

let myInput =document.getElementById("myInput")
let myItem =document.getElementById("myItem")
myForm.addEventListener("submit",
                        (data) => {
                        data.preventDefault()
                        createItem(myInput.value)})
createItem = (d) =>{
  let myTemplate =`<li>${d}<button onclick ="deleteItem(this)" >Delete</button></li>` 
  myItem.insertAdjacentHTML("beforeend",myTemplate)
  myInput.value = " "
  myInput .focus()
}
function deleteItem(x){
   x.parentElement.remove()
 }