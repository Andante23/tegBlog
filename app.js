import sectionDisplay from "./LIB/sectionDisplay.js"; 


document.addEventListener("DOMContentLoaded",function(){
document.getElementById("all-link").addEventListener('click',function(event){
    event.preventDefault(); 
   sectionDisplay('block','block','block');
 });
document.getElementById("post-link").addEventListener('click',function(event){
   event.preventDefault(); 
  sectionDisplay('block','none','none');
});


document.getElementById("home-link").addEventListener('click',function(event){
    event.preventDefault();
    sectionDisplay('none','none','block');
 });



 document.getElementById("about-link").addEventListener('click',function(event){
    event.preventDefault();
    sectionDisplay('none','block','none');
 });

});