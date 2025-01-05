let result=document.getElementById('input');
let buttons=document.querySelectorAll('button');
let str="";
let arr=Array.from(buttons);
arr.forEach(button=>
{
    button.addEventListener('click',(a)=>{
        if(a.target.innerHTML==='='){
            try{
                str=eval(str);
                result.value=str;
            }
            catch(err){
                result.value="error";
                str=" ";
            }
        }
        else if(a.target.innerHTML==='DEL'){
            str=str.substring(0,str.length-1);
            result.value=str;
        }
        else if(a.target.innerHTML==='AC'){
            str=" ";
            result.value=str;
        }
        else{
            str+=a.target.innerHTML;
            result.value=str;
        }
        
    });
});