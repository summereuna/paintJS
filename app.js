

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");


//pixel modifier에도 canvas사이즈 만큰 사이즈 줘야 그림 그려짐
canvas.width = 500;
canvas.height = 500;
/*
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;
*/

//default 설정
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){
    painting = true;
}
//페인팅 멈추게하는 펑션: 이거 호출하면 페인팅=false;됨
function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }

}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if (canvas) {
   //캔버스 위에 마우스가 있으면 감지하는 이벤트
    canvas.addEventListener("mousemove", onMouseMove);
    //마우스가 캔버스를 클릭할 때 감지하는 이벤트
    canvas.addEventListener("mousedown", startPainting);
    //클릭하고 놓을 때 까지를 감지하는 이벤트
    canvas.addEventListener("mouseup", stopPainting);
    //마우스 떠나면 페인팅 안되게하는 이벤트
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
    );