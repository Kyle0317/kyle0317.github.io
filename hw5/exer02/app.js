window.onload = function(){

        document.querySelector("#numberOnly").onkeypress=function(ev){
            //0 - 48 to 9 - 57
            if(!ev)
            ev = window.event;  //to make sure you have an event


            console.log(ev.keyCode);
            if(ev.keyCode<48 || ev.keyCode >57)
            ev.preventDefault();
        }


}