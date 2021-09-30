
const new1 = document.querySelector("#triangle-1");
const new2 = document.querySelector("#triangle-2");
const new3 = document.querySelector("#triangle-3");

const  button  =  document.querySelector("#tribtn");

 button.addEventListener("click", sumofangles );																																																																				

    function sumofangles()
{
  
       const calculate = calculatesumofangles(Number(new1.value), Number(new2.value), Number(new3.value)); 
       
        if(calculate === 180)
        {
          
          output.innerText = " Great the Sum is 180 degree ";
         
        }
        
        else
        {
         
          output.innerText = "Oh! The Sum is not 180 degree ";
        
        }
     
     /* here we store the value of function in variable  and parameter are passed   */
 
}

/* function is called here and shows that whatever is there in function will be a */

 function calculatesumofangles(new1,new2,new3)
  {
  
      const player = new1 + new2 + new3;
      return player;
      
  }