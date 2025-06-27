function cti(){
    const cm=Number(document.getElementById("input").value);
    const inch=cm/2.54;
    const ans=document.getElementById("ans");
    ans.innerHTML=inch.toFixed(2); 
}