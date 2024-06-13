window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script18 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='7309681.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	
 	
var Group1 = document.querySelectorAll("[data-acc-text='avatar3.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	 	

var Group1 = document.querySelectorAll("[data-acc-text='avatar2.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	
 	
}

window.Script19 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='7309681.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	
 	
var Group1 = document.querySelectorAll("[data-acc-text='avatar3.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	 	

var Group1 = document.querySelectorAll("[data-acc-text='avatar2.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1,
 	ease: "bounce.out",
 	});
 	
 	
}

window.Script20 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='avatar2.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script21 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='avatar2.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script22 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='avatar3.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script23 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='avatar3.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script24 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='7309681.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script25 = function()
{
  var Group1 = document.querySelectorAll("[data-acc-text='7309681.jpg']");

gsap.to(Group1, {
 	duration:3,
 	scale: 1.1,
 	ease: "bounce.out",
 	});
}

window.Script26 = function()
{
  
var bankAccount = 3205;

var player = GetPlayer();
var bankAccount = player.GetVar("bankAccount");

console.log(bankAccount);

var thousandValue = 0;

var quotient = 0;
var remainder = 0;
var quotient1 = 0;
var remainder1 = 0;
var quotient2 = 0;
var remainder2 = 0;
var quotient3 = 0;
var remainder3 = 0;

quotient = Math.floor(bankAccount/1000);
remainder = bankAccount % 1000;

quotient1 = Math.floor(remainder/100);
remainder1 = remainder % 100;

quotient2 = Math.floor(remainder1/10);
remainder2 = remainder1 % 10;

quotient3 = Math.floor(remainder2/10);
remainder3 = remainder2 % 1;

console.log(quotient, quotient1, quotient2, quotient3);

thousandValue = mapping(quotient);
hundredValue = mapping(quotient1);
tenValue = mapping(quotient2);
oneValue = mapping(quotient3);

console.log(thousandValue, hundredValue, tenValue, oneValue);


BA = new String(bankAccount)
var th = BA[0]
var h = BA[1]
var t = BA[2]
var o = BA[3]

console.log(th,h,t,o)
var th1 = mapping(Number(th))
var h1 = mapping(Number(h))
var t1 = mapping(Number(t))
var o1 = mapping(Number(o))

//o1 = 5

console.log(th1,h1,t1,o1)


var Ones = document.querySelectorAll("[data-acc-text='Ones']");

gsap.to(Ones, {
//	y: "-="+oneValue,
	y: "-="+o1,
	duration:5,
	ease: "bounce.out",
	});
	
var Tens = document.querySelectorAll("[data-acc-text='Tens']");
	
gsap.to(Tens, {
	y: "-="+tenValue,
	duration:6,
	delay: 3,
	ease: "bounce.out",
	});
	
var Hundreds = document.querySelectorAll("[data-acc-text='Hundreds']");
	
gsap.to(Hundreds, {
	y: "-="+hundredValue,
	duration:7,
	delay: 3,
	ease: "bounce.out",
	});
	
var Thousands = document.querySelectorAll("[data-acc-text='Thousands']");
	
gsap.to(Thousands, {
	y: "-="+thousandValue,
	duration:8,
	delay: 3,
	ease: "bounce.out",
	});
	
	
function mapping(p1) {
	var p2 = 0;
	if (p1 == 0) {p2 = 0}
	if (p1 == 1) {p2 = 72}
	if (p1 == 2) {p2 = 142}
	if (p1 == 3) {p2 = 214}
	if (p1 == 4) {p2 = 284}
	if (p1 == 5) {p2 = 356}
	if (p1 == 6) {p2 = 428}
	if (p1 == 7) {p2 = 500}
	if (p1 == 8) {p2 = 570}
	if (p1 == 9) {p2 = 642}
	return p2;
	}

}

window.Script27 = function()
{
  
// Tried using the CustomEase but seems like not so simple. Need to link to CDN and register the plugin.
// The following didn't work for me.

// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/CustomEase.min.js"></script>

// gsap.registerPlugin(CustomEase);

// 	gsap.to(Group1, {
// 		duration:3,
// 		ease: CustomEase.create("custom", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.354,0.963,0.362,1,0.37,0.985,0.414,0.873,0.455,0.811,0.51,0.726,0.573,0.753,0.586,0.762,0.662,0.812,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1"),
// 		x: 240
// 	});

// Available only for members
// gsap.to(Group1, {
// 	duration:3,
// 	ease: CustomBounce.create("myBounce", {
// 	strength:0.7,
// 	endAtStart:false,
// 	squash:1,
// 	squashID: "myBounce-squash"
// 	}),
// 	x: 240
// 	});

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");

gsap.to(Group1, {
 	x: 150,
 	duration:3,
 	ease: "bounce.out",
 	});
	
var Lily = document.querySelectorAll("[data-acc-text='Lily']");
	
gsap.to(Lily, {
	y: "-=150",
	duration:2,
	delay: 2
	});

gsap.to(Lily, {
	y: "+=200",
	duration:2,
	delay: 6
	});
	
// gsap.to(Lily, {
// 	y: 650,
// 	duration:3,
// 	delay: 4
// 	});
	
// gsap.to(Lily, {
// 	y: 1050,
// 	duration:2,
// 	delay: 8
// 	});

gsap.to(Group1, {
 	x: -1140,
 	duration:1,
 	delay: 8
 	});
	

	
	
	
}

window.Script28 = function()
{
  
console.log('HERE');

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");
var Lily = document.querySelectorAll("[data-acc-text='Lily']");

gsap.to(Lily, {
	y: "+=200",
	duration:2,
//	delay: 6
	});
	
gsap.to(Group1, {
 	x: -1140,
 	duration:1,
// 	delay: 8
 	});
	

	
	
	
}

window.Script29 = function()
{
  
var bankAccount = 3205;

var player = GetPlayer();
var bankAccount = player.GetVar("bankAccount");

console.log(bankAccount);

var thousandValue = 0;

var quotient = 0;
var remainder = 0;
var quotient1 = 0;
var remainder1 = 0;
var quotient2 = 0;
var remainder2 = 0;
var quotient3 = 0;
var remainder3 = 0;

quotient = Math.floor(bankAccount/1000);
remainder = bankAccount % 1000;

quotient1 = Math.floor(remainder/100);
remainder1 = remainder % 100;

quotient2 = Math.floor(remainder1/10);
remainder2 = remainder1 % 10;

quotient3 = Math.floor(remainder2/10);
remainder3 = remainder2 % 1;

console.log(quotient, quotient1, quotient2, quotient3);

thousandValue = mapping(quotient);
hundredValue = mapping(quotient1);
tenValue = mapping(quotient2);
oneValue = mapping(quotient3);

console.log(thousandValue, hundredValue, tenValue, oneValue);


BA = new String(bankAccount)
var th = BA[0]
var h = BA[1]
var t = BA[2]
var o = BA[3]

console.log(th,h,t,o)
var th1 = mapping(Number(th))
var h1 = mapping(Number(h))
var t1 = mapping(Number(t))
var o1 = mapping(Number(o))

//o1 = 5

console.log(th1,h1,t1,o1)


var Ones = document.querySelectorAll("[data-acc-text='Ones']");

gsap.to(Ones, {
//	y: "-="+oneValue,
	y: "-="+o1,
	duration:5,
	ease: "bounce.out",
	});
	
var Tens = document.querySelectorAll("[data-acc-text='Tens']");
	
gsap.to(Tens, {
	y: "-="+tenValue,
	duration:6,
	delay: 3,
	ease: "bounce.out",
	});
	
var Hundreds = document.querySelectorAll("[data-acc-text='Hundreds']");
	
gsap.to(Hundreds, {
	y: "-="+hundredValue,
	duration:7,
	delay: 3,
	ease: "bounce.out",
	});
	
var Thousands = document.querySelectorAll("[data-acc-text='Thousands']");
	
gsap.to(Thousands, {
	y: "-="+thousandValue,
	duration:8,
	delay: 3,
	ease: "bounce.out",
	});
	
	
function mapping(p1) {
	var p2 = 0;
	if (p1 == 0) {p2 = 0}
	if (p1 == 1) {p2 = 72}
	if (p1 == 2) {p2 = 142}
	if (p1 == 3) {p2 = 214}
	if (p1 == 4) {p2 = 284}
	if (p1 == 5) {p2 = 356}
	if (p1 == 6) {p2 = 428}
	if (p1 == 7) {p2 = 500}
	if (p1 == 8) {p2 = 570}
	if (p1 == 9) {p2 = 642}
	return p2;
	}

}

window.Script30 = function()
{
  
// Tried using the CustomEase but seems like not so simple. Need to link to CDN and register the plugin.
// The following didn't work for me.

// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/CustomEase.min.js"></script>

// gsap.registerPlugin(CustomEase);

// 	gsap.to(Group1, {
// 		duration:3,
// 		ease: CustomEase.create("custom", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.354,0.963,0.362,1,0.37,0.985,0.414,0.873,0.455,0.811,0.51,0.726,0.573,0.753,0.586,0.762,0.662,0.812,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1"),
// 		x: 240
// 	});

// Available only for members
// gsap.to(Group1, {
// 	duration:3,
// 	ease: CustomBounce.create("myBounce", {
// 	strength:0.7,
// 	endAtStart:false,
// 	squash:1,
// 	squashID: "myBounce-squash"
// 	}),
// 	x: 240
// 	});

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");

gsap.to(Group1, {
 	x: 150,
 	duration:3,
 	ease: "bounce.out",
 	});
	
var Lily = document.querySelectorAll("[data-acc-text='Lily']");
	
gsap.to(Lily, {
	y: "-=150",
	duration:2,
	delay: 2
	});

gsap.to(Lily, {
	y: "+=200",
	duration:2,
	delay: 6
	});
	
// gsap.to(Lily, {
// 	y: 650,
// 	duration:3,
// 	delay: 4
// 	});
	
// gsap.to(Lily, {
// 	y: 1050,
// 	duration:2,
// 	delay: 8
// 	});

gsap.to(Group1, {
 	x: -1140,
 	duration:1,
 	delay: 8
 	});
	

	
	
	
}

window.Script31 = function()
{
  
// Tried using the CustomEase but seems like not so simple. Need to link to CDN and register the plugin.
// The following didn't work for me.

// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/CustomEase.min.js"></script>

// gsap.registerPlugin(CustomEase);

// 	gsap.to(Group1, {
// 		duration:3,
// 		ease: CustomEase.create("custom", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.354,0.963,0.362,1,0.37,0.985,0.414,0.873,0.455,0.811,0.51,0.726,0.573,0.753,0.586,0.762,0.662,0.812,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1"),
// 		x: 240
// 	});

// Available only for members
// gsap.to(Group1, {
// 	duration:3,
// 	ease: CustomBounce.create("myBounce", {
// 	strength:0.7,
// 	endAtStart:false,
// 	squash:1,
// 	squashID: "myBounce-squash"
// 	}),
// 	x: 240
// 	});

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");

gsap.to(Group1, {
 	x: 150,
 	duration:3,
 	ease: "bounce.out",
 	});
	
var Lily = document.querySelectorAll("[data-acc-text='Lily']");
	
gsap.to(Lily, {
	y: "-=150",
	duration:2,
	delay: 2
	});

gsap.to(Lily, {
	y: "+=200",
	duration:2,
	delay: 6
	});
	
// gsap.to(Lily, {
// 	y: 650,
// 	duration:3,
// 	delay: 4
// 	});
	
// gsap.to(Lily, {
// 	y: 1050,
// 	duration:2,
// 	delay: 8
// 	});

gsap.to(Group1, {
 	x: -1140,
 	duration:1,
 	delay: 8
 	});
	

	
	
	
}

window.Script32 = function()
{
  
console.log('HERE');

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");
var Lily = document.querySelectorAll("[data-acc-text='Lily']");

gsap.to(Lily, {
	y: "+=200",
	duration:2,
//	delay: 6
	});
	
gsap.to(Group1, {
 	x: -1140,
 	duration:1,
// 	delay: 8
 	});
	

	
	
	
}

window.Script33 = function()
{
  
// Tried using the CustomEase but seems like not so simple. Need to link to CDN and register the plugin.
// The following didn't work for me.

// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/CustomEase.min.js"></script>

// gsap.registerPlugin(CustomEase);

// 	gsap.to(Group1, {
// 		duration:3,
// 		ease: CustomEase.create("custom", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.354,0.963,0.362,1,0.37,0.985,0.414,0.873,0.455,0.811,0.51,0.726,0.573,0.753,0.586,0.762,0.662,0.812,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1"),
// 		x: 240
// 	});

// Available only for members
// gsap.to(Group1, {
// 	duration:3,
// 	ease: CustomBounce.create("myBounce", {
// 	strength:0.7,
// 	endAtStart:false,
// 	squash:1,
// 	squashID: "myBounce-squash"
// 	}),
// 	x: 240
// 	});

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");

gsap.to(Group1, {
 	x: 150,
 	duration:3,
 	ease: "bounce.out",
 	});
	
var Lily = document.querySelectorAll("[data-acc-text='Lily']");
	
gsap.to(Lily, {
	y: "-=150",
	duration:2,
	delay: 2
	});

gsap.to(Lily, {
	y: "+=200",
	duration:2,
	delay: 6
	});
	
// gsap.to(Lily, {
// 	y: 650,
// 	duration:3,
// 	delay: 4
// 	});
	
// gsap.to(Lily, {
// 	y: 1050,
// 	duration:2,
// 	delay: 8
// 	});

gsap.to(Group1, {
 	x: -1140,
 	duration:1,
 	delay: 8
 	});
	

	
	
	
}

window.Script34 = function()
{
  
console.log('HERE');

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");
var Lily = document.querySelectorAll("[data-acc-text='Lily']");

gsap.to(Lily, {
	y: "+=200",
	duration:2,
//	delay: 6
	});
	
gsap.to(Group1, {
 	x: -1140,
 	duration:1,
// 	delay: 8
 	});
	

	
	
	
}

window.Script35 = function()
{
  var front = document.querySelector("[data-acc-text='front1A']");
var back = document.querySelector("[data-acc-text='back1A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script36 = function()
{
  var front = document.querySelector("[data-acc-text='front1B']");
var back = document.querySelector("[data-acc-text='back1B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script37 = function()
{
  var front = document.querySelector("[data-acc-text='front2A']");
var back = document.querySelector("[data-acc-text='back2A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script38 = function()
{
  var front = document.querySelector("[data-acc-text='front2B']");
var back = document.querySelector("[data-acc-text='back2B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script39 = function()
{
  var front = document.querySelector("[data-acc-text='front3A']");
var back = document.querySelector("[data-acc-text='back3A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script40 = function()
{
  var front = document.querySelector("[data-acc-text='front3B']");
var back = document.querySelector("[data-acc-text='back3B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script41 = function()
{
  var front = document.querySelector("[data-acc-text='front4A']");
var back = document.querySelector("[data-acc-text='back4A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script42 = function()
{
  var front = document.querySelector("[data-acc-text='front4B']");
var back = document.querySelector("[data-acc-text='back4B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script43 = function()
{
  var front = document.querySelector("[data-acc-text='front5A']");
var back = document.querySelector("[data-acc-text='back5A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script44 = function()
{
  var front = document.querySelector("[data-acc-text='front5B']");
var back = document.querySelector("[data-acc-text='back5B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script45 = function()
{
  var front = document.querySelector("[data-acc-text='front6A']");
var back = document.querySelector("[data-acc-text='back6A']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script46 = function()
{
  var front = document.querySelector("[data-acc-text='front6B']");
var back = document.querySelector("[data-acc-text='back6B']");

let back_timeline = gsap.timeline();

back_timeline.set(front,{rotateY:90});
back_timeline.to(back,{rotateY:90, duration:0.5});
back_timeline.to(front,{rotateY:0, duration:0.5});

}

window.Script47 = function()
{
  var front = document.querySelector("[data-acc-text='front1A']");
var back = document.querySelector("[data-acc-text='back1A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});

}

window.Script48 = function()
{
  var front = document.querySelector("[data-acc-text='front1B']");
var back = document.querySelector("[data-acc-text='back1B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});

}

window.Script49 = function()
{
  var front = document.querySelector("[data-acc-text='front2A']");
var back = document.querySelector("[data-acc-text='back2A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});

}

window.Script50 = function()
{
  var front = document.querySelector("[data-acc-text='front2B']");
var back = document.querySelector("[data-acc-text='back2B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});

}

window.Script51 = function()
{
  var front = document.querySelector("[data-acc-text='front3A']");
var back = document.querySelector("[data-acc-text='back3A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script52 = function()
{
  var front = document.querySelector("[data-acc-text='front3B']");
var back = document.querySelector("[data-acc-text='back3B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script53 = function()
{
  var front = document.querySelector("[data-acc-text='front4B']");
var back = document.querySelector("[data-acc-text='back4B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script54 = function()
{
  var front = document.querySelector("[data-acc-text='front4A']");
var back = document.querySelector("[data-acc-text='back4A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script55 = function()
{
  var front = document.querySelector("[data-acc-text='front5A']");
var back = document.querySelector("[data-acc-text='back5A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script56 = function()
{
  var front = document.querySelector("[data-acc-text='front5B']");
var back = document.querySelector("[data-acc-text='back5B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script57 = function()
{
  var front = document.querySelector("[data-acc-text='front6B']");
var back = document.querySelector("[data-acc-text='back6B']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script58 = function()
{
  var front = document.querySelector("[data-acc-text='front6A']");
var back = document.querySelector("[data-acc-text='back6A']");

let front_timeline = gsap.timeline();

front_timeline.set(back,{rotateY:-90});
front_timeline.to(front,{rotateY:-90, duration:0.5});
front_timeline.to(back,{rotateY:0, duration:0.5});
}

window.Script59 = function()
{
  
// Tried using the CustomEase but seems like not so simple. Need to link to CDN and register the plugin.
// The following didn't work for me.

// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/CustomEase.min.js"></script>

// gsap.registerPlugin(CustomEase);

// 	gsap.to(Group1, {
// 		duration:3,
// 		ease: CustomEase.create("custom", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.354,0.963,0.362,1,0.37,0.985,0.414,0.873,0.455,0.811,0.51,0.726,0.573,0.753,0.586,0.762,0.662,0.812,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1"),
// 		x: 240
// 	});

// Available only for members
// gsap.to(Group1, {
// 	duration:3,
// 	ease: CustomBounce.create("myBounce", {
// 	strength:0.7,
// 	endAtStart:false,
// 	squash:1,
// 	squashID: "myBounce-squash"
// 	}),
// 	x: 240
// 	});

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");

gsap.to(Group1, {
 	x: 150,
 	duration:3,
 	ease: "bounce.out",
 	});
	
var Lily = document.querySelectorAll("[data-acc-text='Lily']");
	
gsap.to(Lily, {
	y: "-=150",
	duration:2,
	delay: 2
	});

gsap.to(Lily, {
	y: "+=200",
	duration:2,
	delay: 6
	});
	
// gsap.to(Lily, {
// 	y: 650,
// 	duration:3,
// 	delay: 4
// 	});
	
// gsap.to(Lily, {
// 	y: 1050,
// 	duration:2,
// 	delay: 8
// 	});

gsap.to(Group1, {
 	x: -1140,
 	duration:1,
 	delay: 8
 	});
	

	
	
	
}

window.Script60 = function()
{
  
console.log('HERE');

var Group1 = document.querySelectorAll("[data-acc-text='Group1']");
var Lily = document.querySelectorAll("[data-acc-text='Lily']");

gsap.to(Lily, {
	y: "+=200",
	duration:2,
//	delay: 6
	});
	
gsap.to(Group1, {
 	x: -1140,
 	duration:1,
// 	delay: 8
 	});
	

	
	
	
}

};
