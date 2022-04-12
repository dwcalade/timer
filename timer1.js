const timer = function(timerArr) {

  if (!timerArr.length) return;

  for (let timeStr of timerArr) {
    const timeNum = Number(timeStr);

    if (isNaN(timeNum)) continue;
    if (timeNum < 0) continue;

    setTimeout(() => {
      console.log(`Beep at ${timeNum} seconds!`);
      process.stdout.write('\x07');
    }, timeNum * 1000);
  }

};

const timerArr = process.argv.slice(2);
timer(timerArr);