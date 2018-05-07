function MoveIt (){

	//didn't get to finish this up...

	let l= 'pixelLeft', t= 'pixelTop';
	let arr = [ [l,50], [l,-50], [t,50], [t, -50] ];
	let n= Math.round(Math.random() * arr.length);

	document.getElementById("clicky")[arr[n][0]]= arr[n][1];
}