
function generateCard(){
    document.getElementById("outputCard").innerHTML='';
    document.getElementById("cardSave").innerHTML='';
    document.getElementById("cardSave").style.display="block"
    let inputWeaponName=document.getElementById("inputWeaponName").value 
    let inputWeaponRarity=document.getElementById("inputWeaponRarity").value 
    let inputWeaponText=document.getElementById("inputWeaponText").value 
    let inputWeaponType=document.getElementById("inputWeaponType").value 
    cardGenerator()
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
    document.getElementById("cardSave").style.display="none"
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
function cardGenerator(){
    
    var divToSet=document.getElementById("cardSave");
    var cardElement=document.createElement("div");
    var frontDiv=document.createElement("div");
    var cardBody=document.createElement("div")
    var weaponCardName=document.createElement("h3");
    var weaponBodyList=document.createElement("ul");
    var weaponBodyListItem=document.createElement("li");
    var weaponBodyListBr=document.createElement("br");
    var weaponCardTextP=document.createElement("p");
    var weaponCardTypeB=document.createElement("b");
    cardElement.setAttribute("class","card card-left cardBlock class-1 select");
    cardElement.setAttribute("id","spellCard")
    frontDiv.setAttribute("class","front");
    cardBody.setAttribute("class","body")
    weaponCardName.setAttribute("class","srname")
    weaponCardName.setAttribute("id","weaponName")
    weaponCardName.innerHTML="Weapon Name"
    weaponBodyList.setAttribute("class","status lined")
    weaponBodyListItem.setAttribute("id","weaponRarity")
    weaponBodyListItem.innerHTML="Weapon Rarity"
    weaponBodyListBr.setAttribute("clear","all")
    weaponCardTextP.setAttribute("id","weaponText")
    weaponCardTextP.setAttribute("class","text")
    weaponCardTextP.innerHTML="Weapon Text Description"
    weaponCardTypeB.setAttribute("class","srclass")
    weaponCardTypeB.setAttribute("id","weaponType")
    weaponCardTypeB.innerHTML="Weapon Type"
    divToSet.appendChild(cardElement)
    cardElement.appendChild(frontDiv)
    frontDiv.appendChild(cardBody)
    cardBody.appendChild(weaponCardName)
    cardBody.appendChild(weaponBodyList)
    weaponBodyList.appendChild(weaponBodyListItem)
    weaponBodyList.appendChild(weaponBodyListBr)
    cardBody.appendChild(weaponCardTextP)
    frontDiv.appendChild(weaponCardTypeB)
}
