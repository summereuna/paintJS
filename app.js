

const canvas = document.getElementById("jsCanvas");

let painting = false;

//페인팅 멈추게하는 펑션: 이거 호출하면 페인팅=false;됨
function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
    //여기에 나중에 페인팅 하는 것도 필요하니까 밑에 조건문에서 싸그리 바꾸지 않는 것
}

if (canvas) {
   //캔버스 위에 마우스가 있으면 감지하는 이벤트
    canvas.addEventListener("mousemove", onMouseMove);
    //마우스가 캔버스를 클릭할 때 감지하는 이벤트
    canvas.addEventListener("mousedown", onMouseDown);
    //클릭하고 놓을 때 까지를 감지하는 이벤트
    canvas.addEventListener("mouseup", onMouseUp);
    //마우스 떠나면 페인팅 안되게하는 이벤트
    canvas.addEventListener("mouseleave", stopPainting);
}