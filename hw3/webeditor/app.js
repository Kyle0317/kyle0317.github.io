window.onload = function(){
   
        document.querySelector("#run").addEventListener("click",function(){
            let mf = document.getElementById("myframe").contentWindow.document.value;
            let t_html = document.getElementById("html").value;
            let t_css = document.getElementById("css").value;
            let t_js = document.getElementById("js").value;
//          var code = document.getElementById("code").contentWindow.document;


            mf.open();
            mf.writeln(
                t_html );
            mf.clsoe();

            
            //d = mf.contentWindow.document;
            //d.write("t_html");
            //d.close();

        });
    
}
