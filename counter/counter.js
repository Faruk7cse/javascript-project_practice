let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        var styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count --;
        }
        else if(styles.contains("increase")){
             count ++;
        }
        else{
            count=0;
        }
        if(count < 0){
            value.style.color ="red";
        }
        if(count > 0){
            value.style.color ="green";
        }
        if(count == 0){
            value.style.color ="blue";
        }
        
        value.textContent=count;
    });
    
})