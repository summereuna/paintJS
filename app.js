

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "black";
const CANVAS_SIZE = 500;
//pixel modifier에도 canvas사이즈 만큰 사이즈 줘야 그림 그려짐
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
/*
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;
*/
//default 설정
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const lineSize = event.target.value;
    ctx.lineWidth = lineSize;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(){
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "paintJS[💜]";
    link.click();
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
    //fill로 캔버스 채우는 이벤트
    canvas.addEventListener("click", handleCanvasClick);
    //오른쪽 마우스 클릭 금지
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
    );


if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}