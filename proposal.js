const cname = document.getElementById('name1');

 const nameoutput = document.getElementById('nameoutput');
 const btn1 = document.getElementById('btnn');
 const cmail = document.getElementById('mail');
 const mailoutput = document.getElementById('nameoutput')
 const cnumber = document.getElementById('phone');
 const cnumberoutput = document.getElementById('numberoutput');

 

 function fun1(){
    console.log(cname)
    nameoutput.innerHTML = cname.value
    mailoutput.innerHTML=cmail.value
    cnumberoutput.innerHTML= cnumber.value


 }

 btn1.addEventListener('click' ,fun1)