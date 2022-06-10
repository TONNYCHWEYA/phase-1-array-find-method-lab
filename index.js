// code your solution here


function superbowlWin(array){
  

   function findW(item){
  
     return item.result === "W"
   }

   const winningYear =array.find(findW)
   if(winningYear == undefined){
     return undefined;
   }
   
   return winningYear.year;
   
}
