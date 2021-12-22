let fname1=document.getElementById('fname')

let lname1=document.getElementById('lname')
let rad1=document.getElementById('g1')
let rad2=document.getElementById('g2')
let rad3=document.getElementById('g3')
let ql1=document.getElementById("veg")
let ql2=document.getElementById("Non-veg")
let ql3=document.getElementById("egg")
let date=document.getElementById("date1")
let num1=document.getElementById('num1')
let mail=document.getElementById('mail')

let erro1=document.getElementById("error1")
let erro2=document.getElementById("error2")
let erro3=document.getElementById("error3")
let erro4=document.getElementById("error4")
let erro5=document.getElementById("error5")
let erro6=document.getElementById("error6")
let erro7=document.getElementById("error7")
let border1="red 3px solid";
let border2='green 3px solid';

let err='*Required'
let erralpha='must have alphabets'


function validate1(){
    erro1.textContent="";
    let fvalue=fname1.value;
    let reg=new RegExp("^[A-Za-z]*$")
    console.log(reg.test(fvalue))
    if (fvalue==''){
        erro1.textContent=err;
        erro1.style.color="red"
        fname1.style.border=border1;
        return false;
    }
    else if (reg.test(fvalue)==false){
        erro1.textContent=erralpha;
        fname1.style.border=border1;
        erro1.style.color="red"
        return false;
    }
    else{
        fname1.style.border=border2
        erro1.textContent='';
        return true;
    }
}
function validate2(){
    if (date.value==''){
        erro2.textContent=err;
        date.style.border=border1;
        erro2.style.color="red"
    }else{
        erro2.textContent='';
        date.style.border=border2;
        erro2.style.color="red"
    }
}
function validate3(){
    erro1.textContent=''
    let lvalue=lname1.value;
    let reg=new RegExp('^[A-Za-z]*$')
    console.log(reg.test(lvalue))
    if (lvalue==''){
        erro3.textContent='Required';
        lname1.style.border=border1;
        erro3.style.color="red"
        return false;
    }
    else if (reg.test(lvalue)==false){
        erro3.textContent=erralpha;
        lname1.style.border=border1;
        erro3.style.color="red"
        return false;
    }
    else{
        lname.style.border=border2
        erro3.textContent='';
        return true;
    }
}
function validate4(){
    if (rad1.checked || rad2.checked || rad3.checked){
        erro4.textContent='';
        return true
    }else{
        erro4.textContent=err;
        erro4.style.color="red"
        return false
    }
}
function validate5(){
    if (ql1.checked||ql2.checked||ql3.checked){
        erro5.textContent='';
        return true
    }else{
        erro5.textContent=err;
        ql1.style.color="red"
        return false
    }
}
function validate6(){
    let numvalue=num1.value;
    let reg=new RegExp('^[0-9]*$')
    console.log(reg.test(numvalue))
    if (numvalue==''){
        erro6.textContent='Required';
        num1.style.border=border1;
        erro6.style.color="red"
        return false;
    }
    else if (reg.test(numvalue)==false){
        erro6.textContent='the number should contain only numbers';
        num1.style.border=border1;
        return false;
    }
    else if (numvalue.length>10 || numvalue.length<10){
        erro6.textContent='the phone number should be valid';
        num1.style.border=border1;
        erro6.style.color="red"
        return false;
    }
    else{
        num1.style.border=border2
        erro6.textContent='';
        return true;
    }
    
}
function validate7(){
    erro7.innerHtml=''
    let mailvalue=mail.value;
    let sub=mailvalue.substring(mailvalue.indexOf('@')+1);
    console.log(sub)
    if (mailvalue==''){
        erro7.textContent='Required';
        mail.style.border=border1;
        erro7.style.color="red"
        return false;
    }else if(!mailvalue.includes('@')||sub=='') {
        erro7.textContent='Enter valid Email';
        mail.style.border=border1;
        erro7.style.color="red"
        return false;
       
    }
    else{
        mail.style.border=border2
        erro7.textContent='';
        return true;
    }
    
}
let showp=document.getElementById("showpass")
function show(){
    if (showp.checked){
        pass1.type='text';
        pass2.type='text'
    }
    else{
        pass1.type='password';
        pass2.type='password';
    }
}

function validation(){
     var sp1=validate1()
     var sp2=validate2();
     var sp3=validate3();
     var sp4=validate4();
     var sp5=validate5();
     var sp6=validate6();
     var sp7=validate7();
     return sp1 && sp2 && sp3 && sp4 && sp5 && sp6 && sp7;
}