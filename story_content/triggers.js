function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nmEr5iYVIG":
        Script1();
        break;
      case "5a6byyeeWP7":
        Script2();
        break;
      case "62z38LnUWQ3":
        Script3();
        break;
      case "6dVnX1Aw1ba":
        Script4();
        break;
      case "6OE6l6R9Bg2":
        Script5();
        break;
      case "6bsdP5Y858X":
        Script6();
        break;
      case "5oj26Qs1DDE":
        Script7();
        break;
      case "6VDMJT3gv6Y":
        Script8();
        break;
      case "62RG8FUKwAk":
        Script9();
        break;
      case "5wRKThaa1WO":
        Script10();
        break;
      case "69gmGnxz5tR":
        Script11();
        break;
      case "6383Z60bYbM":
        Script12();
        break;
      case "6ZxpV5jrQNk":
        Script13();
        break;
      case "6TvHSUn3BIH":
        Script14();
        break;
      case "6lIr5Tm2B7A":
        Script15();
        break;
      case "6iV6QMZrqis":
        Script16();
        break;
      case "5lreyAUlvRj":
        Script17();
        break;
      case "69vxlzfICtN":
        Script18();
        break;
      case "6TjeP7fh1hX":
        Script19();
        break;
      case "6SbdGNGIy8t":
        Script20();
        break;
      case "6Izs3dY8RYk":
        Script21();
        break;
      case "6kBk22mMP1X":
        Script22();
        break;
      case "5WoRKNNBDcx":
        Script23();
        break;
      case "64qVUWvApcT":
        Script24();
        break;
      case "5YDFQ6tAbGD":
        Script25();
        break;
      case "6jvZG2NvIjX":
        Script26();
        break;
      case "6Kr5muKTGKd":
        Script27();
        break;
      case "6NQWxhdELfy":
        Script28();
        break;
      case "6E18gcwKKVQ":
        Script29();
        break;
      case "6RuZ3qFTYNG":
        Script30();
        break;
      case "69ut3vxOEXC":
        Script31();
        break;
      case "6NBWwbaHavK":
        Script32();
        break;
      case "6ZwjwWc8ZmA":
        Script33();
        break;
      case "6ovfpValBC5":
        Script34();
        break;
      case "5gkXHqE0hpO":
        Script35();
        break;
      case "5imeJKsR3x9":
        Script36();
        break;
      case "5dtbsqhpwh0":
        Script37();
        break;
      case "5ue4BhGpj6W":
        Script38();
        break;
      case "6WaKnZIT8QI":
        Script39();
        break;
      case "6Q3feSZZ3Y4":
        Script40();
        break;
      case "63SbZOokvby":
        Script41();
        break;
      case "5bqDYHmTCuT":
        Script42();
        break;
      case "6Ljh2Ba7TO5":
        Script43();
        break;
      case "62ovlJMiXtd":
        Script44();
        break;
      case "5qxpyIPWQos":
        Script45();
        break;
      case "5igkacg1Jp1":
        Script46();
        break;
      case "6hRpRkSo2zD":
        Script47();
        break;
      case "5kpyjfFWtx4":
        Script48();
        break;
      case "5i5zr3Ayh47":
        Script49();
        break;
      case "6TAOAdmmzln":
        Script50();
        break;
      case "5iudLz2v13o":
        Script51();
        break;
      case "5VBpeJaFiTT":
        Script52();
        break;
      case "6bkCsFXZ44J":
        Script53();
        break;
      case "5ihl2FZQaDs":
        Script54();
        break;
      case "5ZtLo6XCaOE":
        Script55();
        break;
      case "5wIfKheMz8V":
        Script56();
        break;
      case "5j3IEjV0RGp":
        Script57();
        break;
      case "65szA3iDCRc":
        Script58();
        break;
      case "6C5seXiRok0":
        Script59();
        break;
      case "61n7yFOdtjg":
        Script60();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6NOVPb8Gdrf');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6c1OWHpcU0T';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '6WqpUhXimFK';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '65iDGqJNrQm';
const teeterAmount = 10;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5jZYkxNtHKo');
const duration = 1000;
const easing = 'ease-out';
const id = '67OLepqS5yM';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6St7g1WZCyJ');
const duration = 1000;
const easing = 'ease-out';
const id = '5Wo6yK09rGR';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('6St7g1WZCyJ');
const duration = 1000;
const easing = 'ease-out';
const id = '5Wo6yK09rGR';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6aVwvk2iRLy');
const duration = 1000;
const easing = 'ease-out';
const id = '6W6l26AfBuW';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6aVwvk2iRLy');
const duration = 1000;
const easing = 'ease-out';
const id = '6W6l26AfBuW';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6I38FqlkoQD');
const duration = 1000;
const easing = 'ease-out';
const id = '63gEoze1xIJ';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('6I38FqlkoQD');
const duration = 1000;
const easing = 'ease-out';
const id = '63gEoze1xIJ';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  player.once(() => {
const target = object('5X65KfbrmXZ');
const duration = 1000;
const easing = 'ease-out';
const id = '6KGqHGPNeeh';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('5X65KfbrmXZ');
const duration = 1000;
const easing = 'ease-out';
const id = '6KGqHGPNeeh';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('67ebEyNPvWW');
const duration = 1000;
const easing = 'ease-out';
const id = '6qx2JccdJ1M';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('67ebEyNPvWW');
const duration = 1000;
const easing = 'ease-out';
const id = '6qx2JccdJ1M';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('5VUm13s6LTF');
const duration = 1000;
const easing = 'ease-out';
const id = '5Xdeqvdg5Pn';
const shakeAmount = 5;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('5VUm13s6LTF');
const duration = 1000;
const easing = 'ease-out';
const id = '5Xdeqvdg5Pn';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6aY7SWb3R5m');
const duration = 750;
const easing = 'ease-out';
const id = '6dDriqt6ub1';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
