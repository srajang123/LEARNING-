//document.onload(alert('Welcome'));
var a=document.querySelector('#DET');
console.log(a);
const but=document.querySelector('#btn');
but.addEventListener('click',(e)=>{
    e.preventDefault();
    a.style.backgroundColor="#707070";
    setTimeout((c)=>a.style.backgroundColor="505050",2000);
    const d1=document.querySelector('#name').value;
    const d2=document.querySelector('#age').value;
    if(d1=="" || d2=="")
    {
        document.querySelector('#error').innerHTML="<b>!!Fill All The Fields!!</b>";
        setTimeout((c)=>document.querySelector('#error').innerHTML="",3000);
    }
    else
    {
        const d3=Number(d2);
        if(!isNaN(d3))
        {
        const tb=document.querySelector('#text');
        const row=tb.insertRow(-1);
        const c1=row.insertCell(0);
        const c2=row.insertCell(1);
        c1.innerHTML=`<div id="chkl">${d1}</div>`;
        c2.innerHTML=`<div id="chkr">${d3}</div>`;
        }
        else
        {
            document.querySelector('#error').innerHTML="<b>!!Age should be a number!!</b>";
            setTimeout((c)=>document.querySelector('#error').innerHTML="",3000);
        }
    }
    document.querySelector('#name').value="";
    document.querySelector('#age').value="";
})