//Calculate//
$(document).ready(function (){
    
    var curr = '';
    var prevs = [];
    var oper = '';
    var decimal = '';
    
    reset();

    function reset () {
        $("#screen").html("0");
    }

    function displayCurr(curr){
        //read screen
        var temp = $("#screen").html();
        temp.split("");
        
        
        console.log(typeof(temp));
        if (temp == 0) {
            $("#screen").html(curr);
        }

        else if (temp > 0 && temp.length < 8) {
            temp = temp.push(curr);
            $("#screen").html(temp);
        }
        else {
            //say the digit limit has been reached, reset();
        }
    }

    //****** Set up event listeners *******//

    //0 
    $("#k0").click(function(){
        curr = 0;
        displayCurr(curr);
    });

    //1
    $("#k1").click(function(){
        curr = 1;
        console.log(curr);
        displayCurr(curr);
    });

    //2
    $("#k2").click(function(){
        curr = 2;
        displayCurr(curr);
    });

    //3
    $("#k3").click(function(){
        curr = 3;
        displayCurr(curr);
    });

    //4
    $("#k4").click(function(){
        curr = 4;
        displayCurr(curr);
    });

    //5
    $("#k5").click(function(){
        curr = 5;
        displayCurr(curr);
    });

    //6
    $("#k6").click(function(){
        curr = 6;
        displayCurr(curr);
    });

    //7
    $("#k7").click(function(){
        curr = 7;
        displayCurr(curr);

    });

    //8
    $("#k8").click(function(){
        curr = 8;
        displayCurr(curr);
    });

    //9
    $("#k9").click(function(){
        curr = 9;
        displayCurr(curr);
    });

    //CE
    $("#CE").click(function(){
        curr = 0;
        displayCurr(curr);
    });

    //AC
    $("#AC").click(function(){
            reset();
    }); 
        
        
    

});






