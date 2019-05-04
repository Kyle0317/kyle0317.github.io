window.onload = init;

function init(){
    document.querySelector("#save").onclick = save;
               
}


function save(){


    nm = document.querySelector("#NAME").value;
    pc = document.querySelector("#PRICE").value;
    
    
    
    tb = document.querySelector("#data");
    mtr = document.createElement("tr");
 
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");

    td2.innerText = nm;
    td3.innerText = pc;
  


    mtr.append(td1);
    mtr.append(td2);
    mtr.append(td3);

    tb.append(mtr);

}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0; table = document.getElementById("mytable"); 
      switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) { //Change i=0 if you have the header th a separate table.
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


$("#data").on('keydown', function(e) {  
  if(e.keyCode == 13)
  {
      //e.preventDefault();
      //e.stopPropagation();
      $(this).blur();   // 포커스 아웃
    }
});

$("#data").on('keydown', function(e) {  
  if(e.keyCode == 27)
  {

    
      //e.preventDefault();
      //e.stopPropagation();
      document.execCommand('undo'); //값 되돌리기
      $(this).blur();               //포커스 아웃
     
  
     
    }
});



/*
document.addEventListener('data', function (event) {
  var esc = event.which == 27,
      nl = event.which == 13,
      el = event.target,
      input = el.nodeName != 'INPUT' && el.nodeName != 'TEXTAREA',
      data = {};

  if (input) {
    if (esc) {
      // restore state
      document.execCommand('undo');
      el.blur();
    } else if (nl) {
      // save
      log(JSON.stringify(data));
      el.blur();
      event.preventDefault();
    }
  }
}, true);
    */

    /*
   $(document).ready(function(){
    $('#data').keypress(function(e){
        if(e.keyCode==13){
          if(isNaN(this.value)){
                this.select();   
            }
            else{
                $('#data').focus();
                $('#data').select();   
            }    
        }
    });
  })

  */