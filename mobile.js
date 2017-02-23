var TREK = {};

TREK.isRequired = function(){
    var system = window.navigator.platform
    switch(system){
        case "iPod":
            return true;
        case "iPhone":
            return true;
        case "iPad":
            return true;
        case "iPhone Simulator":
            return true;
        case "iPod Simulator":
            return true;
        case "iPad Simulator":
            return true;
        default:
            return false;
    }
}

TREK.viewport = document.createElement("meta");
TREK.viewport.name = "viewport";
document.head.appendChild(TREK.viewport);

TREK.setWidth = function(w){
    TREK.viewport.content += " width = " + w;
}

TREK.setHeight = function(h){
    TREK.viewport.content += " height = " + h;
}

TREK.setScale = function(s){
    TREK.viewport.content += " initial-scale = " + s;    
}

TREK.setScalable = function(s){
    if(s) TREK.viewport.content += " user-scalable = yes";    
    if(!s) TREK.viewport.content += " user-scalable = no";    
}

TREK.setVisible = function(state){
    if(!state) document.head.innerHTML += '<meta name="apple-mobile-web-app-capable" content="yes">';
    else document.head.innerHTML += '<meta name="apple-mobile-web-app-capable" content="no">';
}

TREK.setStatusColor = function(color){
    document.head.innerHTML += '<meta name="apple-mobile-web-app-status-bar-style" content="' + color + '">';
}

TREK.setTitle = function(title){
    document.head.innerHTML += '<meta name="apple-mobile-web-app-title" content="' + title + '">';
}

TREK.addIcon = function(path, size){
    if(size == null) document.head.innerHTML += '<link rel="apple-touch-icon" href="' + path + '">';
    else document.head.innerHTML += '<link rel="apple-touch-icon" sizes="' + size + '" href="' + path + '">';
}