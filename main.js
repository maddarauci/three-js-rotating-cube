// the js code.
// rendering
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

// the cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial(
  {color: 0x00ff00} // color -> green
);
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// rednering the scene
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  // animating the cube
  /*
  this runs every frame (normally 60 times per second ) and rotates the cube
  */
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
animate();// this creates a loop that causes the renderer to draw a scene every refresh
