(function(d){
var pvt = {};
pvt.ws = d.getElementById("workshop");
pvt.r=0;pvt.g=0;pvt.b=0;pvt.mod=25;
setInterval(function() { 
pvt.ws.style.backgroundColor= "rgb("+ Math.floor( Math.random()*pvt.mod)+","+Math.floor(Math.random()*pvt.mod)+","+Math.floor(Math.random()*pvt.mod)+")";

},1000);
})(document);