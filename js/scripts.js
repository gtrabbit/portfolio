window.onload = function(){
	console.log(window.innerHeight)
	makeScrolly();
}



const makeScrolly = function(){
	let height = window.innerHeight;
	let faders = Array.from(document.getElementsByClassName('fader'));
	let paraEls = Array.from(document.getElementsByClassName('parallax'));
	window.onscroll = ()=>{
		faders.forEach(function(a){
	 		a.style.opacity =  1 - Math.pow( Math.abs( ( ( (window.innerHeight - (a.scrollHeight *1.5 ) )  /2) - (a.offsetTop - window.scrollY ) ) / (window.innerHeight/2)  ), 3 )
	 		})
		paraEls.forEach(el=>{

			if ((document.body.scrollTop  > el.offsetTop - window.innerHeight) 
				&& (document.body.scrollTop  < (el.offsetTop + el.scrollHeight)) ){
					let value = (el.offsetTop - document.body.scrollTop) / window.innerHeight / 4  //makes a number from 0.25 to -1
					let paraOffset = value * window.innerHeight;
					let coords = "50% " + paraOffset / 1.5  + 'px';
					el.style.backgroundPosition = coords;
					let colorValue;
					if (el.dataset.hasOwnProperty('first') && el.dataset.first === "true"){
						colorValue = Math.round((255 * .75) + (255 * value)) + 65;
					} else {
						colorValue = Math.round((255 * .75) + (255 * value));
					}

					if (el.dataset.hasOwnProperty('inverse') && el.dataset.inverse === "true"){
						colorValue = 255 - colorValue;
					}


					let color = "rgb(" + colorValue + ", " + colorValue + ", " + colorValue + ")";
					el.style.backgroundColor = color;
			}
		})
	}
}