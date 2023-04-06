var button=document.createElement("button");
button.addEventListener=("click",foo);

async function foo(){
   
    var res=await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    var res1=await res.json();
    console.log(res1);
    for(var i=0;i<res1.length;i++){
        console.log(res1);
    }
    
}
