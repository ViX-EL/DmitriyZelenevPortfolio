
let diplomImages = [
           "images/menu1.png",
           "images/menu2.png",
           "images/portal_in_room.png",
           "images/portal_in_room2.png",
           "images/portal_in_room3.png",
           "images/portal_in_room4.png",
           "images/pictures.png",
           "images/portal.png",
           "images/portal2.png",
           "images/portal_on_landscape.png",
           "images/landscape.png",
           "images/passage_aloritm.png",
           "images/passage_aloritm2.png"
           ];

let engineImages = [
           "images/crates1.png",
           "images/lamp1.png",
           "images/light1.png",
           "images/light2.png",
           "images/light3.png",
           "images/light4.png",
           "images/lantern.png",
           "images/nanosuit1.png",
           "images/nanosuit2.png",
           "images/reflections1.png",
           "images/reflections2.png",
           "images/nanoSuit3.png",
           "images/emissionMap.png",
           "images/emissionMap2.png",
           "images/gui1.png",
           "images/transformations1.png",
           "images/transformations2.png"
           ];  

// let video = [
//            "video/models_and_light.mp4",
//             "video/texture_anim_and_light.mp4",
//             "video/GenEngineOpenGL3.3.mp4"
//            ];         

let diplomVideo = document.getElementById("diplomVideo");
let engineVideo = document.getElementById("engineVideo");    

let magnifiedDiplomImg = document.getElementById("magnifiedDiplomImg");  
let magnifiedEngineImg = document.getElementById("magnifiedEngineImg");

let diplomVideoMiniature = document.getElementById("diplomVideoMiniature");
let miniatureModelsAndLight = document.getElementById("miniatureModelsAndLight");
let miniatureTextureAnimAndLight = document.getElementById("miniatureTextureAnimAndLight");
let miniatureGenEngineOpenGL33 = document.getElementById("miniatureGenEngineOpenGL33");

let prevPickedDiplomImg  = document.getElementById("diplomVideoMiniature");
let prevPickedEngineImg  = document.getElementById("miniatureModelsAndLight");

prevPickedDiplomImg.style.border = '4px solid green';
prevPickedEngineImg.style.border = '4px solid green';

let overlayMagnifiedImg = document.getElementById("overlayMagnifiedImg");

let currOverlayGallery;

const DIPLOMOVERLAYGALLERY = 0;
const ENGINEOVERLAYGALLERY = 1;

let comparedImg = new Image(100,100);

let imgOrdinalNumber = document.getElementById("imgOrdinalNumber");

$('.closeOverlay').click(function(event) 
{
  $('.overlay').css({display: 'none'});
});

$('.magnifiedImg').click(function(event) 
{
  $('.overlay').css({display: 'block'});
  overlayMagnifiedImg.src = this.src;
  if (this == magnifiedDiplomImg) 
  {
    currOverlayGallery = DIPLOMOVERLAYGALLERY;
    for (var i = diplomImages.length - 1; i >= 0; i--) 
    {
      comparedImg.src = diplomImages[i];
      if(comparedImg.src == overlayMagnifiedImg.src)
      {
        imgOrdinalNumber.innerHTML = (i + 1) + " / " + diplomImages.length;
        break;
      }
    }
  }
   else
  if (this == magnifiedEngineImg)
  {
    currOverlayGallery = ENGINEOVERLAYGALLERY;
    for (var i = engineImages.length - 1; i >= 0; i--) 
    {
      comparedImg.src = engineImages[i];
      if(comparedImg.src == overlayMagnifiedImg.src)
      {
        imgOrdinalNumber.innerHTML = (i + 1) + " / " + engineImages.length;
        break;
      }
    }
  }
});

$("#overlayButtonLeft").on("click", function() 
{ 
  if (currOverlayGallery == DIPLOMOVERLAYGALLERY)
  {
    for (var i = diplomImages.length - 1; i >= 0; i--) 
    {
      comparedImg.src = diplomImages[i];
      if(comparedImg.src == overlayMagnifiedImg.src)
      {
        if (i != 0)
        {
          overlayMagnifiedImg.src = diplomImages[i - 1];
          imgOrdinalNumber.innerHTML = i + " / " + diplomImages.length;
        }
         else
        {
          overlayMagnifiedImg.src = diplomImages[diplomImages.length - 1];
          imgOrdinalNumber.innerHTML = diplomImages.length + " / " + diplomImages.length;
        }
        break;
      }
    }
  }
   else
  if (currOverlayGallery == ENGINEOVERLAYGALLERY)
  {
    for (var i = engineImages.length - 1; i >= 0; i--) 
    {
      comparedImg.src = engineImages[i];
      if(comparedImg.src == overlayMagnifiedImg.src)
      {
        if (i != 0)
        {

          overlayMagnifiedImg.src = engineImages[i - 1];
          imgOrdinalNumber.innerHTML = i + " / " + engineImages.length;
        }
         else
        {
          overlayMagnifiedImg.src = engineImages[engineImages.length - 1];
          imgOrdinalNumber.innerHTML = engineImages.length + " / " + engineImages.length;
        }
        break;
      }
    }
  }
});

$("#overlayButtonRight").on("click", function() 
{ 
 if (currOverlayGallery == DIPLOMOVERLAYGALLERY)
  {
    for (var i = diplomImages.length - 1; i >= 0; i--) 
    {
      comparedImg.src = diplomImages[i];
      if(comparedImg.src == overlayMagnifiedImg.src)
      {
        if (i != diplomImages.length - 1)
        {
          overlayMagnifiedImg.src = diplomImages[i + 1];
          imgOrdinalNumber.innerHTML = (i + 2) + " / " + diplomImages.length;
        }
         else
        {
          overlayMagnifiedImg.src = diplomImages[0];
          imgOrdinalNumber.innerHTML = "1 / " + diplomImages.length;
        }
        break;
      }
    }
  }
   else
  if (currOverlayGallery == ENGINEOVERLAYGALLERY)
  {
    for (var i = engineImages.length - 1; i >= 0; i--) 
    {
      comparedImg.src = engineImages[i];
      if(comparedImg.src == overlayMagnifiedImg.src)
      {
        if (i != engineImages.length - 1)
        {
         overlayMagnifiedImg.src = engineImages[i + 1];
         imgOrdinalNumber.innerHTML = (i + 2) + " / " + engineImages.length;
        }
         else
        {
          overlayMagnifiedImg.src = engineImages[0];
          imgOrdinalNumber.innerHTML = "1 / " + engineImages.length;
        }
        break;
      }
    }
  }
});

$('.miniatures img').click(function(event) 
{
  this.style.border = '4px solid green';

  if (this.className == "videoMiniature") 
  {
    if (this == diplomVideoMiniature) 
    {
      magnifiedDiplomImg.style.display = 'none';
      diplomVideo.style.display = 'block';
      if (this != prevPickedDiplomImg) 
      {
        this.style.border = '4px solid green';
        prevPickedDiplomImg.style.border = 'none';
        prevPickedDiplomImg = this;
      }
    }
     else
    if (this == miniatureModelsAndLight) 
    {
      magnifiedEngineImg.style.display = 'none';
      engineVideo.style.display = 'block';
      engineVideo.src = "video/models_and_light.mp4";
      if (this != prevPickedEngineImg) 
      {
        this.style.border = '4px solid green';
        prevPickedEngineImg.style.border = 'none';
        prevPickedEngineImg = this;
      }
    }
     else
    if (this == miniatureTextureAnimAndLight) 
    {
      magnifiedEngineImg.style.display = 'none';
      engineVideo.style.display = 'block';
      engineVideo.src = "video/texture_anim_and_light.mp4";
      if (this != prevPickedEngineImg) 
      {
        this.style.border = '4px solid green';
        prevPickedEngineImg.style.border = 'none';
        prevPickedEngineImg = this;
      }
    }
     else
    if (this == miniatureGenEngineOpenGL33) 
    {
      magnifiedEngineImg.style.display = 'none';
      engineVideo.style.display = 'block';
      engineVideo.src = "video/GenEngineOpenGL3.3.mp4";
      if (this != prevPickedEngineImg) 
      {
        this.style.border = '4px solid green';
        prevPickedEngineImg.style.border = 'none';
        prevPickedEngineImg = this;
      }
    }
  }

  if ((this.className == "diplomImg") || (this.className == "engineImg")) 
  {
    if (this.className == "diplomImg") 
    {
     diplomVideo.style.display = 'none';
     magnifiedDiplomImg.style.display = 'block';
     magnifiedDiplomImg.src = this.src;
     if (this != prevPickedDiplomImg) 
     {
        this.style.border = '4px solid green';
        prevPickedDiplomImg.style.border = 'none';
        prevPickedDiplomImg = this;
     }
    }
     else
    {
      engineVideo.style.display = 'none';
      magnifiedEngineImg.style.display = 'block';
      magnifiedEngineImg.src = this.src;
      if (this != prevPickedEngineImg) 
      {
        this.style.border = '4px solid green';
        prevPickedEngineImg.style.border = 'none';
        prevPickedEngineImg = this;
      }
    }
  }

  //console.log('x: ' + this.naturalWidth + ', y: ' + this.naturalHeight);
});