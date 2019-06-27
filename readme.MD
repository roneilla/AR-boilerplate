# AR Boilerplate

### A collaboration by Roneilla Bumanlag and Harry Punia
Simplifying ARjs and THREEjs.
<br>
<br>
Other libraries used:
<br>
- ColladaLoader.js

# Documentation

## Initalization
```Javascript
let lastTimeMsec = null;
let three = new Template();
let ar = new AR();

const init = () => {
    three.init();
    ar.init(three.renderer, three.scene, three.camera);
    animate();
    ar.setMarker(three.scene, 'path/to/patt');
}

const animate = nowMsec => {
    requestAnimationFrame(animate);
    ar.update(nowMsec, lastTimeMsec);
}
init();
```

## Features

#### Adding a Collada

```Javascript
let collada = new Collada();

const init = () => {
    //...init-code
    collada.load('path/to/file');
}
```

#### Setting Pattern Aspect Ratio

```HTML
    <title>AR-Boilter Plate</title>
    <script>var patternRatio = 0.9;</script> //Before Calling any libraries, give a value to patternRatio
    <script src="lib/three.min.js"></script>
```
