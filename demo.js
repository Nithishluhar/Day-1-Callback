
var result1 = createlabel("h1","id","result");


document.body.append(result1);
function createlabel(tagname, attrname, attrvalue,content ){
    var result = document.createElement(tagname); 
    result.setAttribute(attrname,attrvalue);          
    return result;
   }


var res =document.getElementById("result");
console.log(res.value);

    count1();

    function count1() {
        setTimeout(()=>res.innerHTML='1',1000)
        count2();
      function count2(){
        setTimeout(()=>res.innerHTML='2',2000)
    
        count3();
      }
      function count3(){
        setTimeout(()=>res.innerHTML='3',3000)
        count4();
     }
     function count4(){
        setTimeout(()=>res.innerHTML='4',4000)
        count5();
     }
     function count5(){
        setTimeout(()=>res.innerHTML='5',5000)
        count6();
     }  function count6(){
        setTimeout(()=>res.innerHTML='6',6000)
        count7();
     }  function count7(){
        setTimeout(()=>res.innerHTML='7',7000)
        count8();
     }  function count8(){
        setTimeout(()=>res.innerHTML='8',8000)
        count9();
     }  function count9(){
        setTimeout(()=>res.innerHTML='9',9000)
        count10();
     }  function count10(){
        setTimeout(()=>res.innerHTML='10',10000)
        count11();
     }
     function count11(){
        setTimeout(()=>res.innerHTML='Happy Independence Day',11000)
     }
    }
    


