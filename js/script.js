console.log('Hello, front end');
document.addEventListener('DOMContentLoaded', ()=>{
    console.log("Hi")
    document.querySelector("input[type=submit]")
    submitButton.addEventListener("click", (e)=>{
        e.preventDefault();
        //let res= document.getElementById("temp").value;
        let conv=document.getElementById("F").checked;
        let tempValue=document.getElementById("submitText").value
        var temp=0
        if(conv){
            temp = (tempValue -32)*(5/9);
            document.getElementById("output").innerText=temp;
        } else {
            temp = tempValue*9/5+32;
        }
        
        //document.getElementById("feedback").innerText=res
        
        console.log(temp);
        
    })
    
})