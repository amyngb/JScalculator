//Calculate//
$(document).ready(function ()
{
    var temp = '';  //what's displayed in #screen-num (current operation)
    var curr = '';  //current key pressed (to be displayed)
    var hist = '';  //what's displayed in #screen-text (past operations)
    var result = '';  //answer when '=' is pressed
    var l = '';  //length of hist

    var histAfterCE = '';
    var tempAfterCE = '';
    var lastChar = ''; //last char of histAfterCE
    var fixCE = '';
    
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
        l = hist.length;
        lastChar =  hist.charAt(l-1);
        //console.log(isNaN(.3));
        //console.log("curr = " + curr, "temp = " + temp, "hist = " + hist);

        //reset after calculating a result
        if (hist.indexOf('=') != -1) {
            temp = '0';
            hist = '';
        }

        if (curr != "CE") 
        {
            
            //first time
            if ( (temp === "0" && !isNaN(curr) && (hist == "" || hist == "0") ) )
            {
                
                displayNum(curr);
                displayText(curr);
                return;
            }

            //as long as '=' isn't pressed
            if (curr != '=') 
            {     
                //if screen displays a number
                if (!isNaN(temp) && temp != 0) 
                {
                    if (temp.length < 7) 
                    {   
                        //if curr key is a number or decimal
                        if (!isNaN(curr) || curr == ".") 
                        {
                            temp = temp.concat(curr);                     
                            displayNum(temp);
                            hist = hist.concat(curr);
                            displayText(hist);   
                        }

                        //if curr is an operation
                        else if (isNaN(curr) && curr != ".")
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

                //if screen displays an operation and curr is a number  (and handle case after CE is pressed)
                if ( (isNaN(temp) && !isNaN(curr)) || (tempAfterCE == "0" && isNaN(lastChar) ) )
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
                result = result.toString();

                //round infinitely repeating decimals and drop trailing zeros
                if (result.indexOf('.') != -1) 
                {
                    var decIndex = result.indexOf(".");
                    result = eval(result);

                    result = result.toFixed(7-decIndex); 
                    result = result.split("");

                    //drop trailing zeros
                    for (var i = result.length - 1; i >= 1; i--) {
                        if (result[i] == "0") {
                            result.pop(i);                            
                        }
                    }

                    result = result.join("");     
                }

                //handle too long numbers that aren't decimals
                if (result.length > 7 && result.indexOf('.') == -1) 
                {
                    limitReached();
                    return;
                }

                displayNum(result);
                hist = hist.concat("=" + result);
                displayText(hist);      
            }
        }   

        // handle case if CE was pushed
        else 
        {
                       
            //find temp in hist 
            var n = hist.search(temp);            

           //prevent multiple CE presses
           if (n != -1) {

               //remove temp from display
                hist = hist.slice(0, n); 
           }

            displayText(hist);

            //define terms to allow next number to be input
            histAfterCE = $("#screen-text").html();  
            tempAfterCE = 0;   
            lastChar =  histAfterCE[histAfterCE.length - 1];   
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

//3+0= =?
//fix mobile view (why so small??)


//done
//fix CE
    //change display (text and num)
    //keep functionality
//fractions that never end 1/3 = .33333333333 etc.
//decimal function







