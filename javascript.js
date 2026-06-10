

if(type==="marumagal"){

content.innerHTML=`

<h2>💍 Amma... Unga Marumagal-ah Naane Kandupidichiten 😍</h2>

<br><br>

<h3 id="step1">🎁 Surprise...</h3>

<div id="step2" style="display:none;margin-top:20px;">
<h3>🤔 Ungaluku Yaarunu Theriyanuma?</h3>

<br>

<button onclick="showVideo()"
style="
padding:15px 30px;
border:none;
border-radius:30px;
background:#ff5e9c;
color:white;
font-size:18px;
cursor:pointer;
">
Seri Solren... Idha Click Pannunga ❤️
</button>

</div>

<div id="videoArea" style="display:none;margin-top:25px;">
<video width="100%" controls>
<source src="marumagal.mp4" type="video/mp4">
</video>
</div>

`;

setTimeout(()=>{
document.getElementById("step2").style.display="block";
},10000);

}
function showVideo(){

document.getElementById("videoArea").style.display="block";

}