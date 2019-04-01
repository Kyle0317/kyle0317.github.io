//alert("ok");

var images = [];
images.push("images/ballon.jpg")
images.push("images/ballon2.jpg")
images.push("images/ballon3.jpg")

currentImage = 0;

document.querySelector("#prevButton").addEventListener("click",function(){
    //alert("ok");
    currentImage --;
    if(currentImage<0)
        currentImage = images.length -1;

    showImage();

});

document.querySelector("#nextButton").addEventListener("click",function(){
        currentImage ++;
        if(currentImage>=images.length)
            currentImage = 0;

        showImage();


});

function showImage(){
    pc = document.getElementById('pic');
    pc.src = images[currentImage];
    //console.log(images[currentImage]);
    
}