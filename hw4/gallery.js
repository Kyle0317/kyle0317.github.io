//alert("ok");

var images = [];
images.push("images/10.jpg")
images.push("images/9.jpg")
images.push("images/8.jpg")
images.push("images/1.jpg")
images.push("images/2.jpg")
images.push("images/3.jpg")
images.push("images/4.jpg")
images.push("images/5.jpg")
images.push("images/6.jpg")
images.push("images/7.jpg")

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