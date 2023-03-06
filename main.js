Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100,
    flip_horiz:true
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version- ', ml5.version);

function modelLoaded()
{
    console.log('model is loaded');
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);