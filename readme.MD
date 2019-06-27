# AR Boilerplate

### A collaboration by Roneilla Bumanlag and Harry Punia
Simplifying ARjs and THREEjs.
<br>
<br>
Other libraries used:
<br>
- ColladaLoader.js

# Documentation
#### Initalization
```Javascript
let lastTimeMsec = null;
let three = new Template();
let ar = new AR();

const init = () => {
    three.init();
    ar.init(three.renderer, three.scene, three.camera);
    animate();
    ar.setMarker(three.scene, 'coral.patt');
}

const animate = nowMsec => {
    requestAnimationFrame(animate);
    ar.update(nowMsec, lastTimeMsec);
}
init();
```
