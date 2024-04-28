console.log("Hello World!");
var a, b, bin, bout, sum;

const calc = document.querySelector("#calc");


function calculate() {
    a = parseInt(document.getElementById("A").value);
    b = parseInt(document.getElementById("B").value);
    bin = parseInt(document.getElementById("Bin").value);

    function isBinary(input) {
        return /^[01]+$/.test(input);
    }

    if( isBinary(a) == true && isBinary(b) == true && isBinary(bin) == true ){
        if( Math.floor(a/10)== 0 && Math.floor(b/10)==0 && Math.floor(bin/10)==0 ){
            d = bin^(a^b);
            bout = ~a&bin | ~a&b | b&bin;
            document.getElementById("Bout").value = bout;
            document.getElementById("D").value = d;
        }
        else{
            alert("Please Enter a Single Digit number.");
        }
    }
    else {
        alert("Please enter a binary number");
        document.getElementById("A").value = "";
        document.getElementById("B").value = "";
        document.getElementById("Bin").value = "";
        return;
    }

};
    
addEventListener("keypress", function(event) {
    if (event.key === "Enter" ) {
        console.log("enter fired!");
        calculate();
    }
});

calc.addEventListener("click", function(){
    console.log("button fired!")
    calculate();
});

const reset = document.getElementById("reset");

reset.addEventListener("click", function() {
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
    document.getElementById("Bin").value = "";
    document.getElementById("Bout").value = "";
    document.getElementById("D").value = "";
});


