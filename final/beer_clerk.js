//GETTING RESTO DATA
var xhr_get = new XMLHttpRequest();
//POSTING DATA
var xhr_post = new XMLHttpRequest();
var soju = null;


window.onload = init();


function init(){
    xhr_get.open("GET","http://localhost/prac/api/beer.php");
    xhr_get.send(null);

}


function beer_soju(){
    let name = document.querySelector("#name");
    let alchol_volume = document.querySelector("#alchol_volume");
    let size = document.querySelector("#size");
    let price = document.querySelector("#price");
    let region = document.querySelector("#region");
    let photo = document.querySelector("#photo");

    console.log(name.value)
    console.log(alchol_volume.value)
    console.log(size.value)
    console.log(price.value)
    console.log(region.value)
    console.log(photo.value)
    
    xhr_post.open("POST","http://localhost/prac/api/beer_save.php",true);
    xhr_post.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    data = " &name=" + name.value 
           + "&alchol_volume=" + alchol_volume.value
           + "&size=" + size.value
           + "&price=" + price.value
           + "&region=" + region.value
           + "&photo=" + photo.value
    
    console.log(data);
    xhr_post.send(data);
   
    name.value="";
    alchol_volume.value="";
    size.value="";
    price.value="";
    region.value="";
    photo.value="";

}

xhr_get.onreadystatechange = function(){
    var DONE = 4;
    var OK = 200;
    if(xhr_get.readyState = DONE){
        if(xhr_get.status == OK){
                data  = xhr_get.responseText;
                beer =  JSON.parse(data);
               console.log(beer);
                updateTable();
        }
        else{
            console.log("Error");
        }
    }
}

function updateTable(){
    let  lst = document.querySelector("#list");
    if(beer == null ) return;
    lst.innerHTML = "<tr><th>ID</th><th>Name</th><th>alcohol</th><th>More Info</th></tr>";

    for(i = 0; i<beer.length; i++){
        let row  = document.createElement("tr");
        let id = document.createElement("td");
        let name = document.createElement("td");
        let alchol_volume = document.createElement("td");
        let info = document.createElement("td");
        let sid =  beer[i].id;
        id.innerText =  beer[i].id;
        name.innerText = beer[i].name;
        alchol_volume.innerText = beer[i].alchol_volume +'%';
        info.innerHTML = "<a href='beer_view.php?id="+ sid  +"'>Click</a>";
       
        row.append(id);
        row.append(name);
        row.append(alchol_volume);
        row.append(info);
        lst.append(row);
    }
}


