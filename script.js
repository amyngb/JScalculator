//Calculate//
$(document).ready(function ()
{
    var temp = '';  //what's displayed in #screen-num (current operation)
    var curr = '';  //current key pressed (to be displayed)
    var hist = '';  //what's displayed in #screen-text (past operations)
    var result = '';  //answer when '=' is pressed
    var l = '';  //length of hist
    
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
        //define terms
        temp = $("#screen-num").html();
        hist = $("#screen-text").html();        

        //reset after calculating a result
        if (hist.indexOf('=') != -1) {
            temp = '0';
            hist = '';
        }

        if (curr != "CE") 
        {
            
            //first time
            if (temp === "0" && !isNaN(curr && hist == "")) 
            {
                displayNum(curr);
                displayText(curr);
                return;
            }

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
                        else if (isNaN(curr) || isNaN(hist.charAt(l-1)))
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

            //when '=' is pressed (yay!)
            else 
            {
                result = eval(hist);
                displayNum(result);
                hist = hist.concat("=" + result);
                displayText(hist);      
            }
        }    
        // handle case if CE was pushed
        else 
        {
            //remove from screen-text, keep functionality
            var n = hist.search(temp);
            console.log(temp, hist, n);
            hist = hist.slice(0, n);
            l = hist.length;

            displayText(hist);
            displayNum('0');
            
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
        curr="CE";
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
        curr = "*";
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
    //change display (text and num)
    //keep functionality
//decimal function
//3+0= =?
//fix mobile view (why so small??)
//fractions that never end 1/3 = .33333333333 etc.






