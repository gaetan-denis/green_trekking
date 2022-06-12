var slide = new Array("img/portfolio/image1.jpg", "img/portfolio/image2.jpg", "img/portfolio/image3.jpg", "img/portfolio/image4.jpg","img/portfolio/image5.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}