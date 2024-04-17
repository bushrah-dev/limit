var myText = document.getElementById("my-text");
var result = document.getElementById("result");
var limit = 60;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLength = myText.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        myText.style.borderColor = "red";
        result.style.color = "red";
    }
    else{
        myText.style.borderColor = "grey";
        result.style.color = "grey";
    }
});