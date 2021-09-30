
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


//  sNew  


const new1 = document.querySelector(".formmain");

const newbtn = document.querySelector("#submitbtn");

const correctanswers = ["90","right angled"];
/* 3rd line is used for comparing the correct answers at last. */


 newbtn.addEventListener("click", calculatescore );


  function calculatescore()
{
   let score = 0;    /* 1st one is used as initializer  */
   let moveinsider = 0;   /* 2nd is used as go through or passer in looop  */
   
   const formresults = new FormData(new1);  
   /* This is used to get access form API  and value is stored in new var  */
    for(let value of formresults.values())
    /*  for & of is used to get input-value pair data 
      .entries is  used as  special method
    */
    {
    
       if( value === correctanswers[moveinsider])
       {
              
            score = score + 1;
       
       }
       
       moveinsider = moveinsider + 1 ;  
    
    }
     console.log(score);
}




const  new1 = document.querySelector("#firstmove");

const  new2 = document.querySelector("#secondmove");

calculatebtn = document.querySelector("#cal-btn");

calculatebtn.addEventListener("click", calculatesum);

   function calculatesum()
{
    const firstpart =  calculatesumofsquare  (Number (new1.value), Number (new2.value));
       const calculatefinalsquare = Math.sqrt(firstpart);
        console.log(calculatefinalsquare);
      
};

     function calculatesumofsquare(a,b)
   {
         const calculatenumber = a*a + b*b ;
         return calculatenumber ;
   }

