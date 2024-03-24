let memorizeTime = 30;
let testTime = 60;
let prepareTime = 5;
let tempTime;
let intervalId;
let on = 0;

const h1 = document.querySelector("h1");
const timer = document.querySelector("#timer");
const btn = document.querySelector("button");

const handleMemorizeTimer = () => {
  h1.innerText = "암기 시간";
  tempTime = memorizeTime;
  timer.innerText = tempTime;
  intervalId = setInterval(() => {
    tempTime -= 1;
    timer.innerText = tempTime;
    if (tempTime < 0) {
      clearInterval(intervalId);
      handlePrepareTestTimer();
    }
  }, 1000);
};

const handleTestTimer = () => {
  h1.innerText = "시험 시간";
  tempTime = testTime;
  timer.innerText = tempTime;
  intervalId = setInterval(() => {
    tempTime -= 1;
    timer.innerText = tempTime;
    if (tempTime < 0) {
      clearInterval(intervalId);
      handleMemorizeTimer();
    }
  }, 1000);
};

const handlePrepareMemoirzeTimer = () => {
  h1.innerText = "준비 시간";
  tempTime = prepareTime;
  timer.innerText = tempTime;
  intervalId = setInterval(() => {
    tempTime -= 1;
    timer.innerText = tempTime;
    if (tempTime < 0) {
      clearInterval(intervalId);
      handleMemorizeTimer();
    }
  }, 1000);
};

const handlePrepareTestTimer = () => {
  h1.innerText = "준비 시간";
  tempTime = prepareTime;
  timer.innerText = tempTime;
  intervalId = setInterval(() => {
    tempTime -= 1;
    timer.innerText = tempTime;
    if (tempTime < 0) {
      clearInterval(intervalId);
      handleTestTimer();
    }
  }, 1000);
};

const handleClick = () => {
  if (on == 0) {
    on = 1;
    btn.innerText = "STOP";
    handlePrepareMemoirzeTimer();
  } else {
    on = 0;
    btn.innerText = "START";
    h1.innerText = "30-60\n타이머";
    timer.innerText = "0";
    clearInterval(intervalId);
  }
};

btn.addEventListener("click", handleClick);
