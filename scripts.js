function MoveIt (){

	let l= 'pixelLeft', t= 'pixelTop';
	let arr = [ [l,50], [l,-50], [t,50], [t, -50] ];
	let n= Math.round(Math.random() * arr.length);

	document.getElementById("move")[arr[n][0]]= arr[n][1];
}