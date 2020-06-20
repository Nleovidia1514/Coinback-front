const debounce = fn => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  if (window.scrollY === 0) {
    document.querySelector('header').classList.add('opaque');
  } else {
    document.querySelector('header').classList.remove('opaque');
  }
};


document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();

function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}


function showTime(){
  const deadline = 'July 29 2020 23:59:59 GMT-0300';
  const remaining = getTimeRemaining(deadline);
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  remaining.hours = (remaining.hours < 10) ? "0" + remaining.hours : remaining.hours;
  remaining.minutes = (remaining.minutes < 10) ? "0" + remaining.minutes :remaining.minutes;
  remaining.seconds = (remaining.seconds < 10) ? "0" + remaining.seconds : remaining.seconds;
  
  var time = remaining.days + "d " + remaining.hours + ":" +  remaining.minutes + ":" +  remaining.seconds;
  if (window.innerWidth >= 768 && window.outerWidth >= 768) {
    document.getElementById("MyClockDisplay-md").innerText = time;
    document.getElementById("MyClockDisplay-md").textContent = time;
  } else {
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
  }
  
  
  setTimeout(showTime, 1000);
  
}

showTime();