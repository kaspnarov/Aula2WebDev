var index;

initialize();

function initialize() {
    document.body.innerHTML = "<center><h1> Hide Circles </h1> <br> <h2> Click any circle to make it disappear. </h2> <br> <div class='buttons'> <button id='reset'> reset </button> <button id='add'> add </button> <button id='showCircles'> show circles </button> </div> </center> <br>  <div class='circles'></div>"
    index = 0;

    document.getElementById("reset").onclick = function() {
        initialize();
    }
    
    document.getElementById("showCircles").onclick = function() {
        for (i = 0; i < index; i++) {
            document.getElementById("circle"+i).style.display = "initial";
        }
    }
            
    document.getElementById("add").onclick = function () {
        addCircle();
    }

    addCircle();
    addCircle();
    addCircle();
}

function addCircle() {
    color = "#" + ((1<<24)*Math.random() | 0).toString(16);
    document.getElementsByClassName("circles")[0].innerHTML += "<div class='circle' id='circle"+ index +"'></div>";    
    rule = "document.getElementById('circle"+index+"').style.display = 'none';"
    document.getElementById("circle"+index).setAttribute("onclick", "document.getElementById('circle"+index+"').style.display = 'none';");
    document.getElementById("circle"+index++).style.backgroundColor = color;
}   

function randomColor() {
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
    while(color == ''){
        alert(color);
        color = "#" + Math.floor(Math.random()*16777215).toString(16);
        alert(color);
    }
    return color;
}


