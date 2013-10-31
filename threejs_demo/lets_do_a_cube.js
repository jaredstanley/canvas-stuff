// This source is the javascript needed to build a simple moving
// cube in **three.js** based on this
// [example](https://raw.github.com/mrdoob/three.js/r44/examples/canvas_geometry_cube.html)
// It is the source about this [blog post](/blog/2011/08/06/lets-do-a-cube/).

// ## Now lets start

// declare a bunch of variable we will need later
var startTime	= Date.now();
var container;
var camera, scene, renderer, stats;
var cube;
var cubeArr = [];

// ## bootstrap functions
// initialiaze everything
init();
// make it move			
animate();

// ## Initialize everything
function init() {
	// test if webgl is supported
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	// create the camera
	camera = new THREE.Camera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 650;

	// create the Scene
	scene = new THREE.Scene();

	var material = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('crate.jpg')
      });

	// create the Cube
	for(var i=0; i<10;i++){
		cube = new THREE.Mesh( new THREE.CubeGeometry( 100, 100, 100 ), material );
		cube.position.x = (Math.random()-Math.random())*350;
		cube.position.y = (Math.random()-Math.random())*350;
		cubeArr.push(cube);
	
	// add the object to the scene
	scene.addObject( cube );
}
	// create the container element
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	// init the WebGL renderer and append it to the Dom
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	
	// init the Stats and append it to the Dom - performance vuemeter
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );
}

// ## Animate and Display the Scene
function animate() {
	// render the 3D scene
	render();
	// relaunch the 'timer' 
	requestAnimationFrame( animate );
	// update the stats
	// stats.update();
}


// ## Render the 3D Scene
function render() {
	// animate the cube
	for (var i = 0; i < 10; i++) {
	
		var tmp = cubeArr[i];
		//console.log(tmp);
		tmp.rotation.x += Math.random()*.04;
		tmp.rotation.y += (Math.random()-Math.random())*0.002;
		tmp.rotation.z += (Math.random()-Math.random())*0.075;

		tmp.position.x += 5*(Math.random()-Math.random());
		tmp.position.y += 5*(Math.random()-Math.random());
		tmp.position.z += 5*(Math.random()-Math.random());
	
	// make the cube bounce
	// var dtime	= Date.now() - startTime;
	// cube.scale.x	= 1.0 + 0.3*Math.sin(dtime/300);
	// cube.scale.y	= 1.0 + 0.3*Math.sin(dtime/300);
	// cube.scale.z	= 1.0 + 0.3*Math.sin(dtime/300);
	// actually display the scene in the Dom element
	renderer.render( scene, camera );

}
}
