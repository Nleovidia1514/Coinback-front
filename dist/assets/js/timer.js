function getTimeRemaining(e){const t=Date.parse(e)-Date.parse(new Date),s=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60),n=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:n,minutes:o,seconds:s}}function showTime(){const e=getTimeRemaining("August 29 2020 23:59:59 GMT-0300");var t=new Date,s=t.getHours();t.getMinutes(),t.getSeconds();0==s&&(s=12),s>12&&(s-=12),e.hours=e.hours<10?"0"+e.hours:e.hours,e.minutes=e.minutes<10?"0"+e.minutes:e.minutes,e.seconds=e.seconds<10?"0"+e.seconds:e.seconds;var o=e.days+":"+e.hours+":"+e.minutes+":"+e.seconds;document.getElementById("clock").innerText=o,document.getElementById("clock").textContent=o,setTimeout(showTime,1e3)}showTime();