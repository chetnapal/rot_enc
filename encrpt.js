document.getElementById("button").addEventListener("click", showAns);
//it will execute show ans function by clicking.
function showAns(){
    var inNum=document.getElementById("in").value;
   // alert("enetered number is "+inNum);

   var m=13;

   


  
        



   l1=new Array();
   l1=inNum.split("");
   //alert(l1);
   l2=new Array();
   for (var i=0;i<l1.length;i++){
       l2[i]=(l1[i]).charCodeAt(0);
   }
  // alert(l2);



  //A 65+13 78=N
  //N=78+13 91 If value is greater than 90 sum-90=1+64

  for(var i=0;i<l2.length;i++){
      if((l2[i]>=65 && l2[i]<=90) || (l2[i]>=97 && l2[i]<=122)) {
        if(l2[i]>=65 && l2[i]<=90){
            l2[i]=l2[i]+m;
            if(l2[i]>90){
                l2[i]=64+l2[i]-90;
            }
        }
        if(l2[i]>=97 && l2[i]<=122){
            l2[i]=l2[i]+m;
            if(l2[i]>122){
                l2[i]=96+l2[i]-122;
            }
        }
      }
    
  }
  


  l3=new Array();
  for(var i=0;i<l2.length;i++){
      l3[i]=String.fromCharCode(l2[i]);
  }


  document.getElementById("out").textContent=(l3.join(""));
  


}