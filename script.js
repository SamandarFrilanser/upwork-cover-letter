$(document).ready(function(){
  $('#title').focus();
    $('#text').autosize();

});

let str = document.querySelector('#text'),
  btn = document.querySelector('#button'),
  count = document.querySelector('.counter span'),
  copybtn = document.querySelector('.copy'),
  resetbtn = document.querySelector('.reset');

  str.addEventListener('keyup',(e)=>{
    
    count.textContent = `${e.target.value.length}/${str.getAttribute("maxlength")}`
   
    if(e.target.value.length == str.getAttribute("maxlength")){
      count.style.color = "red"
      setTimeout(() => {
        alert("any character after this length of text will not be visible to the client")
      }, 1000);
      str.disabled = "false"

      let copy = str.value;
    copybtn.addEventListener('click',() =>{
      navigator.clipboard.writeText(copy)
    })
    }
  })

  resetbtn.addEventListener("click",()=>{
    str.disabled = "true"
    str.value = ""
  })