
//initial value set to 0
let count = 0;

// using the querySelector to get elements (values and btn) in the html
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const circle = document.querySelector(".circle");

//
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    
            if (styles.contains("decrease")) {
            count--;
            } 
            else if (styles.contains("increase")){
                count++;
            }
            else{
                count = 0;
            }

    if(count > 0 ){
        value.style.color = "green";
        circle.style.color = "red";
    }
    else if (count < 0){
         value.style.color = "red";
         circle.style.color = "green";
    }
    else{
        value.style.color = "black";
         circle.style.color = "purple";
    }
    value.textContent = count;
  });
});

