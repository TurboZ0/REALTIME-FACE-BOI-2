

function setup() {
canvas=createCanvas(400,400);    
canvas.position(750, 400);
video=createCapture(VIDEO);
video.hide();
}

hold= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HM9YT3iof/model.json", modelloadnow);

function modelloadnow() {
console.log("Models can be cool for your info")
}

function draw() {
    image(video, 0, 0, 400, 400);
    hold.classify(video, foundresult);
      
}
function foundresult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("object").innerHTML= result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}