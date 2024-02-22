var arr = [
    {dp:"https://i.ibb.co/MMNMgZM/Whats-App-Image-2024-02-22-at-23-34-02-15b8f2bd.jpg",story:"https://i.ibb.co/pQQhBWs/IMG-20230327-045019.jpg"},
    {dp:"https://i.ibb.co/JCR3C3P/spershdp.jpg",story:"https://i.ibb.co/ThXqwhB/Whats-App-Image-2024-02-22-at-21-41-26-37b39dfd.jpg"},
    {dp:"https://i.ibb.co/tCQHb4b/mayankdp1.jpg",story:"https://i.ibb.co/k9n8wdC/mayankstory.jpg"},
    {dp:"https://i.ibb.co/MpNjsCt/rajbhangidp.jpg",story:"https://i.ibb.co/fDcv7Rx/rajbhangistory.jpg"},
    {dp:"https://i.ibb.co/3pk8v5r/sanudp.jpg",story:"https://i.ibb.co/kQp4xkH/sanustory.jpg"},
    {dp:"https://i.ibb.co/Hq91zpz/shubhdp2.jpg",story:"https://i.ibb.co/YZq8pwc/shubhstory2.jpg"},
    {dp:"https://i.ibb.co/vVZ0mzs/groupdp.jpg",story:"https://i.ibb.co/4K0N2wc/groupstory.jpg"}
]
var clutter=""
var storiyan= document.querySelector("#storiyan")
arr.forEach(function(elem,idex){
  clutter += `<div class="story">
  <img id="${idex}" src="${elem.dp}" alt="">
 </div>`
})
storiyan.innerHTML=clutter;
storiyan.addEventListener("click",function(dets){
document.querySelector("#full-screen").style.display="block"
document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"
},3000)
});
