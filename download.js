function generateCard(){
    document.getElementById("outputCard").innerHTML='';
    let inputWeaponName=document.getElementById("inputWeaponName").value 
    let inputWeaponRarity=document.getElementById("inputWeaponRarity").value 
    let inputWeaponText=document.getElementById("inputWeaponText").value 
    let inputWeaponType=document.getElementById("inputWeaponType").value 

    let weaponName=document.getElementById("weaponName")
    weaponName.innerHTML=inputWeaponName
    
    let weaponRarity=document.getElementById("weaponRarity")
    weaponRarity.innerHTML=inputWeaponRarity

    let weaponText=document.getElementById("weaponText")
    weaponText.innerHTML=inputWeaponText

    let weaponType=document.getElementById("weaponType")
    weaponType.innerHTML=inputWeaponType

    html2canvas(document.querySelector("#spellCard")).then(canvas => {
        document.getElementById("outputCard").appendChild(canvas)
        canvas.setAttribute('id', weaponName.innerHTML);
    });
    document.getElementById("outputCard").style.display="block"
    document.getElementById("saveCard").style.display="block"
    document.getElementById("previewImg").style.display="block"
}
function saveCard(){
    var dataURL = document.getElementById(weaponName.innerHTML).toDataURL("image/png")
    downloadImage(dataURL, weaponName.innerHTML+'.jpeg');
}


function downloadImage(data, filename =weaponName.innerHTML+'.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}

