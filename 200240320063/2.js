function readvalue()
{
    let name1=document.querySelector("#nm").value;
    let pass1=document.querySelector("#pass").value;
    let email1=document.querySelector("#eml").value;
    let outputblock=document.querySelector("#opblock");
   
    let n=document.querySelector("#uname");
        n.innerHTML=name1;
        n.style.background="red";
        n.style.marginTop="5px";
        n.style.color="white";

        let p=document.querySelector("#upass");
        p.innerHTML=pass1;
        p.style.background="red";
        p.style.marginTop="5px";
        p.style.color="white";

        let e=document.querySelector("#uemail");
        e.innerHTML=email1;
        e.style.background="red";
        e.style.marginTop="5px";
        e.style.color="white";

        document.querySelector("#nm").value=" ";
       document.querySelector("#pass").value=" ";
       document.querySelector("#eml").value=" ";

        outputblock.children[0].append(n);
        outputblock.children[1].append(p);
        outputblock.children[2].append(e);  

    

   /*  if(name1!==" " && pass1!==" " &&  email1!==" ")
    {
        let n=document.querySelector("#uname");
        n.innerHTML=name1;
        //console.log(name1);
        outputblock.children[0].append(n);
   
    //console.log(pass1);
    let p=document.querySelector("#upass");
        p.innerHTML=pass1;
        outputblock.children[1].append(p);
    
        //console.log(email1)
        let e=document.querySelector("#uemail");
        e.innerHTML=email1;
        outputblock.children[2].append(e);
    }
    document.querySelector("#nm").value=" ";
    document.querySelector("#pass").value=" ";
    document.querySelector("#eml").value=" ";
 */  
}

function resetdata()
{
    document.querySelector("#nm").value=" ";
    document.querySelector("#pass").value=" ";
    document.querySelector("#eml").value=" ";
}