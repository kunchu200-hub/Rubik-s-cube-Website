function showSection(section, el){

    document.querySelectorAll(".section")
    .forEach(s => s.style.display = "none");

    document.getElementById(section + "Section")
    .style.display = "block";

    document.querySelectorAll(".nav-item")
    .forEach(n => n.classList.remove("active"));

    el.classList.add("active");
}

function showStep(step){

const steps = {

1:{
title:"White Cross",
text:"Create a white cross.",
img:"steps img/step1.png"
},

2:{
title:"White Corners",
text:"Solve white corners.",
img:"steps img/step2.png"
},

3:{
title:"Middle Layer",
text:"Solve middle edges.",
img:"steps img/step3.png"
},

4:{
title:"Yellow Cross",
text:"Make yellow cross.",
img:"steps img/step4.png"
},

5:{
title:"Position Corners",
text:"Place yellow corners.",
img:"steps img/step5.png"
},

6:{
title:"Final Layer",
text:"Finish solving the cube.",
model:"rubik.glb"
}

};

const d = steps[step];

if(d.model){

document.getElementById("stepContent").innerHTML = `

<div class="step6-container">

<h3>${d.title}</h3>

<model-viewer
src="${d.model}"
auto-rotate
camera-controls
class="center-model">
</model-viewer>

<p>${d.text}</p>

</div>
`;

}else{

document.getElementById("stepContent").innerHTML = `

<h3>${d.title}</h3>

<img class="step-img" src="${d.img}">

<p>${d.text}</p>
`;
}

}

function toggleRotation(){
    cube.autoRotate = !cube.autoRotate;
}

function zoomIn(){
    cube.cameraOrbit = "0deg 75deg 2m";
}

function zoomOut(){
    cube.cameraOrbit = "0deg 75deg 5m";
}