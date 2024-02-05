Webcam.set({
  width: 350,
  height: 300,
  image_format:"png",
  png_quality: 90
})
  camera= document.getElementById("camera")
Webcam.attach("#camera")
console.log(ml5.version)
function takeSnapshot(){
  Webcam.snap (function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
  })
}
function modelLoaded(){
  console.log("modelo carregado")
}
classifier = ml5.imageClassifier("",modelLoaded);
