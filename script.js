//Calculate//
$(document).ready(function (){
    
    var curr = '';
    var prev = '';
    var result = '';
    var operation = '';
    
    //reset();

    function reset () {
        $("#screen-num").html("0");
        $("#screen-text").html("0");
    }

    function limitReached () {
        $("#screen-text").html("Digit Limit Reached");
    }

    function displayCurr(curr){
        //read screen
        var temp = $("#screen-num").html();
        
        if (temp === "0" || temp == null) {
            //display screen
            $("#screen-num").html(curr);
            $("#screen-text").html(curr);
        }

        else if (temp > 0 && temp.length < 7) {

            //if temp and curr are both numbers
            if (curr != "+" && curr != "-" && curr != "/" && curr != "x" && temp != "+" && temp != "-" && temp != "/" && temp != "x") {
                //display screen
                temp = temp.concat(curr);
                $("#screen-num").html(temp);
                $("#screen-text").html(temp);
            }

            //if current key pressed is an operation
            else if (curr == "+" || curr == "-" || curr == "x" || curr == "/") {
                //display screen
                $("#screen-num").html(curr);
                temp = temp.concat(curr);
                $("#screen-text").html(temp);  

            } 
        }

            //if previous key pressed was an operation
        else if (temp == "+" || temp == "-" || temp == "/" || temp == "x") {
            var num1 = $("#screen-text").html();
            num1 = num1.split(""); 
            num1.pop();
            num1 = num1.join("");
            console.log(num1);
            //add
            if (temp == "+") {
                result = num1 + curr;
                $("#screen-num").html(result);
            }
            //subtract
            else if (temp == "+") {
                
            }
            //multiply
            else if (temp == "+") {
                
            }
            //divide 
            else if (temp == "/") {

            }
                
        }
    

        else {
            limitReached();
            reset();
        }
    }


    //****** Set up event listeners *******//

    //0 
    $("#k0").click(function(){
        curr = "0";
        displayCurr(curr);
    });

    //1
    $("#k1").click(function(){
        curr = "1";
        console.log(curr);
        displayCurr(curr);
    });

    //2
    $("#k2").click(function(){
        curr = "2";
        displayCurr(curr);
    });

    //3
    $("#k3").click(function(){
        curr = "3";
        displayCurr(curr);
    });

    //4
    $("#k4").click(function(){
        curr = "4";
        displayCurr(curr);
    });

    //5
    $("#k5").click(function(){
        curr = "5";
        displayCurr(curr);
    });

    //6
    $("#k6").click(function(){
        curr = "6";
        displayCurr(curr);
    });

    //7
    $("#k7").click(function(){
        curr = "7";
        displayCurr(curr);

    });

    //8
    $("#k8").click(function(){
        curr = "8";
        displayCurr(curr);
    });

    //9
    $("#k9").click(function(){
        curr = "9";
        displayCurr(curr);
    });

    //CE
    $("#CE").click(function(){
        curr = "0";
        displayCurr(curr);
    });

    //AC
    $("#AC").click(function(){
            reset();
    }); 

    //+
    $("#plus").click(function(){
        curr = "+";
        displayCurr(curr);
    });

    //-
    $("#minus").click(function(){
        curr = "-";
        displayCurr(curr);
    });

    //%
    $("#divide").click(function(){
        curr = "/";
        displayCurr(curr);
    });

    //.
    $("#decimal").click(function(){
        curr = ".";
        displayCurr(curr);
    });


        
        
    

});






