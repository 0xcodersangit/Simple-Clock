  const minuteEl = document.querySelector('.minute');
 const secondEl = document.querySelector('.second');
 const hourEl      = document.querySelector('.hour');
 setInterval(()=>{
    const date = new Date;
    const seconddeg =date.getSeconds()/60 * 360  -90;
    const minutedeg =date.getMinutes()/60  *360  -90;
    const hourdeg =date.getHours()/12    *360  -90;
    secondEl.style.transform =`rotate(${seconddeg}deg)`
    minuteEl.style.transform =`rotate(${minutedeg}deg)`
    hourEl.style.transform =`rotate(${hourdeg}deg)`
 },1000)
