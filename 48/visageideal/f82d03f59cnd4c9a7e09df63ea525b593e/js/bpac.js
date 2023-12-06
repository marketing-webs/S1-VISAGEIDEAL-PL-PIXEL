document.oncopy=new Function("return false");
document.onpaste = new Function("return false");
var xBody=document.getElementsByTagName("body")[0]
var xDisplay = xBody.style.display
var mediaQueryList = window.matchMedia('print');
mediaQueryList.addListener(function(mql) {
    if (mql.matches) {
        xBody.style.display="none"
    } else {
        xBody.style.display=xDisplay
    }
});
var isNS = (navigator.appName == "Netscape") ? 1 : 0;
if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
function mischandler(){ return false; }
function mousehandler(e){
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
xBody.setAttribute("oncopy", "return false")
xBody.setAttribute("oncut", "return false")
xBody.setAttribute("onpaste", "return false")
window.print = function(){};