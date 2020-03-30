
var box=document.getElementById("t_num"),can=true; 
box.innerHTML+=box.innerHTML; 
box.onmouseover=function(){can=false}; 
box.onmouseout=function(){can=true}; 
new function (){ 
var stop=box.scrollTop%30==0&&!can; 
if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++; 
setTimeout(arguments.callee,box.scrollTop%30?10:1500); 
}; 


var ind=document.getElementById("demo-list_1"),can=true; 
ind.innerHTML+=ind.innerHTML; 
ind.onmouseover=function(){can=false}; 
ind.onmouseout=function(){can=true}; 
new function (){ 
var stop=ind.scrollTop%30==0&&!can; 
if(!stop)ind.scrollTop==parseInt(ind.scrollHeight/2)?ind.scrollTop=0:ind.scrollTop++; 
setTimeout(arguments.callee,ind.scrollTop%30?10:1500); 
}; 