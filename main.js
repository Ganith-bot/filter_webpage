function preload(){ 

}

function setup(){
   canvas = createCanvas(350, 350);
   canvas.center();
   camera1 = createCapture(VIDEO);
   camera1.hide();
   filter_colour = "";
}

function draw(){
   image(camera1, 0, 0, 350, 350);
   tint(filter_colour);
}

function apply_filter1(){
    filter_colour = document.getElementById("input1").value;
}

function take_snapshot(){
    save("myImg.png");
}