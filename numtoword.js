function helper() {
    var arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    var arr2 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var number = document.getElementById("number").value;
    if (number < 21) {
        document.getElementById("result").innerHTML = arr1[number];
    }
    else if (number < 100) {
        var num1 = number % 10;
        var num2 = parseInt(number / 10);
        var txt = arr2[num2 - 2] + " " + arr1[num1];
        if (num1 == 0) {
            document.getElementById("result").innerHTML = arr2[num2 - 2];
        }
        else {
            document.getElementById("result").innerHTML = txt;
        }
    }
    else if (number < 1000) {
        var num1 = number % 100;
        var num2 = parseInt(number / 100);
        var txt = arr1[num2] + " hundred";
        if (num1 > 0 && num1 < 21) {
            document.getElementById("result").innerHTML = txt + " " + arr1[num1];
        }
        if (num1 > 20 && num1 < 100) {
            var num3 = num1 % 10;
            var num4 = parseInt(num1 / 10);
            if (num3 == 0) {
                document.getElementById("result").innerHTML = txt + " " + arr2[num4 - 2];
            }
            else {
                document.getElementById("result").innerHTML = txt + " " + arr2[num4 - 2] + " " + arr1[num3];
            }
        }
    }
    else if (number < 10000) {
        var num1 = number % 1000;
        var num2 = parseInt(number / 1000);
        var num3 = parseInt(num1 / 100);       
        var txt = arr1[num2] + " thousand";
        if((num3 > 0) && (num3 <10)){
           var num4 = num1%100;
           if(num4 == 0){
                return document.getElementById("result").innerHTML = txt +" "+ arr1[num3] + " hundred";
           }          
           else if(num4>0 && num4<21){
                return document.getElementById("result").innerHTML = txt +" "+ arr1[num3] + " hundred" + " " + arr1[num4];
            }
           else if (num4 > 20 && num4 < 100) {
                var num5 = num4 % 10;
                var num6 = parseInt(num4 / 10);
                if (num5 == 0){
                    return document.getElementById("result").innerHTML = txt +" "+ arr1[num3] + " hundred" + " " + arr2[num6-2];
                } 
                else{
                   return document.getElementById("result").innerHTML = txt +" "+ arr1[num3] + " hundred" + " " + arr2[num6-2] + " " + arr1[num5];
                }
           
            }
                      
        }
        else if(num3==0){
            if(num1==0){
               return document.getElementById("result").innerHTML = txt;
            }
            else if(num1>0 && num1<21){
                 return document.getElementById("result").innerHTML = txt + " "+ arr1[num1];
            }
            else if(num1>20 && num1<99){
                var num7 = parseInt(num1/10);
                var num8 = num1 % 10;
                return document.getElementById("result").innerHTML = txt  + " " + arr2[num7-2] +" "+ arr1[num8];
            }
            
        }
        
    }
    else if(number<100000){
           var num1 = parseInt(number/1000);
           var num4 = number % 1000;
           var num5 =parseInt(num4/100); 
           var num6 = num4 %100;
           var num7 = parseInt(num6 /10);
           var num8 =  num6 %10;
        //    alert(num4)
        //    alert(num5)
        //    alert(num6)
        //    alert(num7)
        //    alert(num8)
           if(num1<21){
               if(num5===0){
                   if(num7===0){
                       if(num8===0){
                        return document.getElementById("result").innerHTML = arr1[num1] + " thousand " ;
                       }
                       else if(num8!==0){
                        return document.getElementById("result").innerHTML = arr1[num1] + " thousand " + arr1[num8];
                       }
                    
                   }
                   else if(num7!==0){
                    if(num8===0){
                        return document.getElementById("result").innerHTML = arr1[num1] + " thousand " + arr2[num7-2] + " ";
                       }
                       else if(num8!==0){
                        return document.getElementById("result").innerHTML = arr1[num1] + " thousand " + arr2[num7-2] + " " +arr1[num8];
                       }
                    
                   }

               }
               else if(num5!==0){
                if(num7===0){
                    if(num8===0){
                        return document.getElementById("result").innerHTML = arr1[num1] + " thousand " +arr1[num5] + " hundred " ;
                       }
                    else if(num8!==0){
                           return document.getElementById("result").innerHTML = arr1[num1] + " thousand " +arr1[num5] + " hundred " +arr2[num7-2] + " " +arr1[num8];
                       }
                   
                }
                else if(num7!==0){
                    if(num8===0){
                        return document.getElementById("result").innerHTML = arr1[num1] + " thousand " +arr1[num5] + " hundred " +arr2[num7-2];
                       }
                    else if(num8!==0){
                        return document.getElementById("result").innerHTML = arr1[num1] + " thousand " +arr1[num5] + " hundred " +arr2[num7-2] +" " + arr1[num8];
                       }
                   
                }
                
               }
             
           }
           else if(num1>20 && num1<100){
              var num2 = parseInt(num1/10)            
              var num3 = num1 % 10;
              if(num5===0){
                if(num7===0){
                    if(num8===0){
                     return document.getElementById("result").innerHTML = arr2[num2-2] + " " + arr1[num3]+ " thousand " ;
                    }
                    else if(num8!==0){
                     return document.getElementById("result").innerHTML = arr2[num2-2] + " " + arr1[num3]+ " thousand " +arr1[num8];
                    }
                 
                }
                else if(num7!==0){
                 if(num8===0){
                     return document.getElementById("result").innerHTML = arr2[num2-2] + " " + arr1[num3]+ " thousand " +arr2[num7-2];
                    }
                    else if(num8!==0){
                     return document.getElementById("result").innerHTML = arr2[num2-2] + " " + arr1[num3]+ " thousand " +arr2[num7-2] + " " +arr1[num8];
                    }
                 
                }

            }
            else if(num5!==0){
             if(num7===0){
                 if(num8===0){
                     return document.getElementById("result").innerHTML = arr2[num2-2] + " " + arr1[num3]+ " thousand " +arr1[num5] + " hundred ";
                    }
                 else if(num8!==0){
                        return document.getElementById("result").innerHTML = arr2[num2-2] + " " + arr1[num3]+ " thousand " +arr1[num5] + " hundred " +arr1[num8];
                    }
                
             }
             else if(num7!==0){
                 if(num8===0){
                     return document.getElementById("result").innerHTML = arr2[num2-2] + " " + arr1[num3]+ " thousand " +arr1[num5] + " hundred " +arr2[num7-2] ;
                    }
                 else if(num8!==0){
                     return document.getElementById("result").innerHTML = arr2[num2-2] + " " + arr1[num3]+ " thousand "  +arr1[num5] + " hundred " +arr2[num7-2] +" " + arr1[num8];
                    }
                
             }
             
            
               
            }
         
             

           }
      






    }
}