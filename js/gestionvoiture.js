
afficher()
document.getElementsByClassName("but")[0].children[0].addEventListener("click",ajouter)
function ajouter(){
    var voiture = document.getElementById("add").textContent.trim()
    if(voiture!=""){
    localStorage.setItem(indice_suivant(),voiture)
    document.getElementById("add").textContent=""
    window.location.href=""
}
else{ 
    alert ("pas de voiture!!")
}}
function indice_suivant(){
   return localStorage.length+1
}
function afficher(){
    var tbody = document.getElementsByClassName("table")[0].children[1]

    for (var i =1; i<= localStorage.length;i++){
    tbody.innerHTML+='<tr><td>'+i+'</td><td>'+localStorage.getItem(i)+'</td><td><i onclick="supprimer(this)" class="fas fa-trash"></i></td></tr>' 
   } 
   console.log(localStorage.getItem(i))
   }
function supprimer(el){
    var x= el.parentElement.parentElement.children[0].textContent
    if(confirm("etes-vous sur de vouloir supprimer cette voiture ???")){
        localStorage.removeItem(x)
        window.location.href=""
    }
}
