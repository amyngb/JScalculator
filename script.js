//Calculate//
$(document).ready(function ()
{
    var temp = '';  //what's displayed in #screen-num (current operation)
    var curr = '';  //current key pressed (to be displayed)
    var hist = '';  //what's displayed in #screen-text (past operations)
    var result = '';  //answer when '=' is pressed
    var l = '';  //length of hist

    var histAfterCE = '';  //to help functionality after CE is pressed
    var tempAfterCE = '';  //to help functionality after CE is pressed
    var lastChar = ''; //last char of histAfterCE
    
    
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
    //if there is only one decimal point, return true
    function findDecimal (str) {
        var count = str.match(/\./g);
        console.log(count.length);
        if (count.length != 1) {
            return false;
        }
        return true;     
    }
   

//******* Calculate function ***********//

    function calculate (curr)
    {
        //define terms
        temp = $("#screen-num").html();
        hist = $("#screen-text").html();        
        l = hist.length;
        lastChar =  hist.charAt(l-1);
       
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
                        //if curr key is a number               
                        if ( (!isNaN(curr) || curr == ".")  )  
                        {
                            temp = temp.concat(curr);                     
                            displayNum(temp);
                            hist = hist.concat(curr);
                            displayText(hist);   
                        }
                      
                        //if curr key is a decimal
                        if (curr === ".") 
                          console.log(hist);
                        {
                            //if there is only one decimal
                          if (findDecimal(hist)) 
                          {
                            temp = temp.concat(curr);                     
                            displayNum(temp);
                            hist = hist.concat(curr);
                            displayText(hist); 
                          }
                          else 
                          {
                            //handle other case
                          }
                        }

                        //if curr is an operation
                        if (isNaN(curr) && curr != ".")
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

                //if screen displays an operation and curr is a number  (|| handle case after CE is pressed)
                if ( (isNaN(temp) && !isNaN(curr) && curr != ".") || (tempAfterCE == "0" && isNaN(lastChar) ) )
                {
                    hist = hist.concat(curr);       
                    displayNum(curr);
                    displayText(hist);

                }
            }

            //when '=' is pressed (yay!)
            else 
            {
                hist = $("#screen-text").html();

                //so that = can't be pressed twice
                if (hist.indexOf("=") == -1) {

                    result = eval(hist);
                    result = result.toString();
                    console.log(hist);

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
        }   

        // handle case if CE was pushed
        else 
        {
            //case to fix UI when toggling btw AC and CE 
            if ($("#screen-num").html() == "0" && $("#screen-text").html() == "0") {
              displayNum(0);
              displayText(0);
              return;
            }
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



//fixed issues
//fix CE
    //change display (text and num)
    //keep functionality
//fractions that never end 1/3 = .33333333333 etc.
//decimal function
//3+0= =?







