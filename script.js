//Calculate//
$(document).ready(function ()
{
    var temp = '';  //what's displayed in #screen-num (current operation)
    var curr = '';  //current key pressed (to be displayed)
    var hist = '';  //what's displayed in #screen-text (past operations)
    var result = '';
    
    function resetScreen () 
    {
        $("#screen-num").html("0");
        $("#screen-text").html("0");
    }

    function limitReached () 
    {
        $("p").html("Digit Limit Reached");
        $("#screen-num").html("0");        
    }

    function displayNum (num) 
    {
        $("#screen-num").html(num);
    }

    function displayText (text) 
    {
        $("#screen-text").html(text);
    }

    function calculate (curr)
    {
        //first time
        if ($("#screen-num").html() === "0" && !isNaN(curr)) 
        {
            displayNum(curr);
            displayText(curr);
            return;
        }

        //define terms
        temp = $("#screen-num").html();
        hist = $("#screen-text").html();

        //as long as '=' isn't pressed
        if (curr != '=') 
        {
            //if screen displays a number
            if (!isNaN(temp) && temp != 0) {
                if (temp.length < 7) 
                {   
                    console.log(temp);               
                    //if curr key is a number
                    if (!isNaN(curr)) 
                    {
                        temp = temp.concat(curr);                     
                        displayNum(temp);
                        hist = hist.concat(curr);
                        displayText(hist);   
                    }

                    //if curr is an operation
                    else 
                    {
                        hist = hist.concat(curr);                     
                        displayNum(curr);
                        displayText(hist);     
                    }
                }
                //if display is too long
                else 
                {
                    limitReached(); 
                    return;               
                }
            }

            //if screen displays an operation and curr is a number
            if (isNaN(temp) && !isNaN(curr)) 
            {
                hist = hist.concat(curr);                           
                displayNum(curr);
                displayText(hist);

            }
        }
        //when '=' is pressed
        else 
        {
            result = eval(hist);
            displayNum(result);
            hist = hist.concat("=" + result);
            displayText(hist);
        }

        

    }    
        
       


    //****** Set up event listeners *******//

    //0 
    $("#k0").click(function(){
        curr = "0";
        calculate(curr);
    });

    //1
    $("#k1").click(function(){
        curr = "1";
        console.log(curr);
        calculate(curr);
    });

    //2
    $("#k2").click(function(){
        curr = "2";
        calculate(curr);
    });

    //3
    $("#k3").click(function(){
        curr = "3";
        calculate(curr);
    });

    //4
    $("#k4").click(function(){
        curr = "4";
        calculate(curr);
    });

    //5
    $("#k5").click(function(){
        curr = "5";
        calculate(curr);
    });

    //6
    $("#k6").click(function(){
        curr = "6";
        calculate(curr);
    });

    //7
    $("#k7").click(function(){
        curr = "7";
        calculate(curr);

    });

    //8
    $("#k8").click(function(){
        curr = "8";
        calculate(curr);
    });

    //9
    $("#k9").click(function(){
        curr = "9";
        calculate(curr);
    });

    //CE
    $("#CE").click(function(){
        curr = "0";
        calculate(curr);
    });

    //AC
    $("#AC").click(function(){
        resetScreen();
    }); 

    //+
    $("#plus").click(function(){
        curr = "+";
        calculate(curr);
    });

    //-
    $("#minus").click(function(){
        curr = "-";
        calculate(curr);
    });

    //%
    $("#divide").click(function(){
        curr = "/";
        calculate(curr);
    });

    //x
    $("#times").click(function(){
        curr = "x";
        calculate(curr);
    });

    //.
    $("#decimal").click(function(){
        curr = ".";
        calculate(curr);
    });

    //=
    $("#equals").click(function(){
        curr = "="
        calculate(curr);
    }); 

});

//todo
//fix CE
//decimal function






