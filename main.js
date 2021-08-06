//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Give specific height and width to the car image
car_width = 75;
car_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x = 5;
car_y = 225;
function add() {
	//upload car, and background images on the canvas.
	background_imageTag  = new Image();
    background_imageTag.onload = uploadBackground;

    background_imageTag.src = background_image;

    car_imageTag  = new Image();
    car_imageTag.onload = uploadgreencar;
    car_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_imageTag, car_x, car_y, car_width, car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() 
{
    if(car_y >= 0) 
    {
        car_y = car_y - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function down() 
{
    if(car_y <= 350) 
    {
        car_y = car_y + 10;
        uploadBackground();
        uploadgreencar();
    }
}

function left() 
{
    if(car_x >= 0) 
    {
        car_x = car_x - 10;
		uploadBackground();
        uploadgreencar();
    }
}

function right() 
{
    if(car_x <= 750) 
    {
        car_x = car_x + 10;
		uploadBackground();
        uploadgreencar();
    }
}