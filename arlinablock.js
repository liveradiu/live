!function(){function f(){var a=document.createElement("div");a.id="arlinablock";a.innerHTML='<div class="inner"> <div class="header"> <h2>تم الكشف عن مانع الإعلانات :(</h2> </div> <div class="isi"> <p>من فضلك قم بتعطيل أداة مانع الأعلانات أدبلوك AdBlock من المتصفح، ادعمنا لنستطيع المواصلة :)</p> <div class="tombol"></div>';
document.body.append(a);document.body.style.overflow="hidden";var b=a.querySelectorAll("button");a.querySelector(".close");var d=a.querySelectorAll(".fixblock > div");for(a=0;a<b.length;a++)b[a].addEventListener("click",function(a){a.preventDefault();a=this.getAttribute("class").split(" ")[0];for(var c=0;c<d.length;c++)d[c].classList.remove("active"),b[c].classList.remove("active");b[a-1].classList.add("active");d[a-1].classList.add("active")})}var b=document.createElement("script");b.type="text/javascript";
b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";b.onerror=function(){f();window.adblock=!0};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,e)}();
$(document).ready(function(){
 var stream = {
  title: "",
  mp3: ""
 },
 ready = false;
 $("#jquery_jplayer_1").jPlayer({
  ready: function (event) {
   ready = true;
   $(this).jPlayer("setMedia", stream).jPlayer("play");

  },
  pause: function() {
   $(this).jPlayer("clearMedia");
  },
  error: function(event) {
   if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
    $(this).jPlayer("setMedia", stream).jPlayer("play");
   }
  },
  autoPlay: "none",
  swfPath: "js",
  supplied: "mp3",
  preload: "none",
  wmode: "window",
  solution:"html,flash"
 });
 $("#jquery_jplayer_1").jPlayer.event.loadstart();
});