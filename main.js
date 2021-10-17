var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var last_pos_x,last_pos_y;
var color = "orange";
var width_of_line = 1;

canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);

function my_mousedown(e){
    mouseEvent = "mousedown";
}
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
function my_mouseup(e){
    mouseEvent = "mouseup";
}
function my_mousemove(e){
    current_pos_x = e.clientX-canvas.offsetLeft;
    current_pos_y= e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_pos_x,last_pos_y);
        ctx.lineTo(current_pos_x,current_pos_y);
        ctx.stroke();
    }
    last_pos_x=current_pos_x;
    last_pos_y=current_pos_y;
}
var last_pos_touch_x, last_pos_touch_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;
    new_width = screen.width-100;
    new_height = screen.height-300;

    if (width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").new_height=new_height;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart",my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        //color = document.getElementById("color").value;
        //width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        last_pos_touch_x = e.touches[0].clientX-canvas.offsetLeft;
        last_pos_touch_y = e.touches [0].clientY-canvas.offsetTop;
    }

    
    

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_pos_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_pos_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_pos_touch_x + "y = " + last_pos_touch_y);
        ctx.moveTo(last_pos_touch_x, last_pos_touch_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_pos_touch_x + "y = " + current_pos_touch_y);
        ctx.lineTo(current_pos_touch_x, current_pos_touch_y);
        ctx.stroke();
        

        last_pos_touch_x = current_pos_touch_x; 
        last_pos_touch_y = current_pos_touch_y;
    }