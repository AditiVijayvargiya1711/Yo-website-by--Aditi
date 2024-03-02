index=0;
setInterval(function1,1500)

function function1(){
    a=document.getElementsByClassName("a");
    b=window.getComputedStyle(slide);
    c=b.getPropertyValue("width");
    d=parseFloat(c);
    if(d<600){
        j=d*index*-1;
        k=j.toString();
        for(i=0;i<a.length;i++){
            a[i].style.transform="translateX("+k+"px)";
        }   
        if(index>=a.length-1){
            index=0;
        }
        else{
            index=index+1;
        }
    }
    else{
        e=d/5
        m=index*e*-1;
        x=m.toString();
        y="translateX("+x+"px)";
        for(i=0;i<a.length;i++){
            a[i].style.transform=y;
        }      
        if(index>=a.length-5){
            index=0;
        }
        else{
            index=index+1;
        }
    }
}
function function2(){
    let m=document.getElementsByClassName("photo");
    let o=document.getElementsByClassName("dot");
    let p=document.getElementsByClassName("in");
    for(i=0;i<m.length;i++){
        m[i].style.display="none";
        o[i].style.backgroundColor="rgb(172, 170, 170)";
        o[i].style.width="10px";
        o[i].style.borderRadius="50%";
        p[i].style.display="none";
    }
    m[n].style.display="block";
    o[n].style.backgroundColor="black";
    o[n].style.width="30px";
    o[n].style.borderRadius="10px";
    newa=document.getElementsByClassName("a");
    newb=window.getComputedStyle(slide);
    newc=newb.getPropertyValue("width");
    newd=parseFloat(newc);
    if(newd>=1000){
        p[n].style.display="flex";
    }
    if (n==2){
        n=0;
    }
    else{
        n=n+1;
    }
}
let n=0;
function2();
interval=setInterval(function2,1500);
