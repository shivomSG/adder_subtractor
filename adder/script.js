console.log("Hello World!");
var a, b, cin, cout, sum;

const calc = document.querySelector("#calc");


function calculate() {
    a = parseInt(document.getElementById("A").value);
    b = parseInt(document.getElementById("B").value);
    cin = parseInt(document.getElementById("Cin").value);

    function isBinary(input) {
        return /^[01]+$/.test(input);
    }

    if( isBinary(a) == true && isBinary(b) == true && isBinary(cin) == true ){
        if( Math.floor(a/10)== 0 && Math.floor(b/10)==0 && Math.floor(cin/10)==0 ){
            sum = cin^(a^b);
        cout = a*b + cin*(a^b);
        document.getElementById("Cout").value = cout;
        document.getElementById("S").value = sum;
        }
        else{
            alert("Please Enter a Single Digit number.");
        }
    }
    else {
        alert("Please enter a binary number");
        document.getElementById("A").value = "";
        document.getElementById("B").value = "";
        document.getElementById("Cin").value = "";
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
    document.getElementById("Cin").value = "";
    document.getElementById("Cout").value = "";
    document.getElementById("S").value = "";
});


