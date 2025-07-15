let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
  let item = document.createElement("li");
  item.innerText = inp.value;

  let dltBtn = document.createElement("button");
  dltBtn.innerText ="Delete";
  dltBtn.classList.add("Delete");

  item.appendChild(dltBtn);

  ul.appendChild(item);
  // console.log(item);
  inp.value = "";
})

ul.addEventListener("click", function(event) {
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
  }
})

// let dltBtns = document.querySelectorAll(".delete");
// for(dltBtn of dltBtns){
//   dltBtn.addEventListener("click", function() {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   })
// }