# AR Boilerplate

### A collaboration by Roneilla Bumanlag and Harry Punia
Simplifying ARjs and THREEjs.
<br>
<br>
Other libraries used:
<br>
- Three.js
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

#### Flags

```Javascript
ar.isMarkerVisible //returns true, if the marker is visible
```

#### Adding an Image

```Javascript
let landscape = new MarkerImage('path/to/file');

const init = () => {
    //...init-code
    landscape.setSize(x, y, z);
    landscape.setPosition(x, y, z);
    landscape.setRotation(x, y, z);
    // Can also use 1 value for all three axis
}

const animate = () => {
    //...animate-code
    ar.addMedia(landscape.image);
}
//you can access image attributes by simply calling landscape.image.scale.x and so on
```

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
    <head>
        <title>AR-Boilter Plate</title>
        <!--Before Calling any libraries, give a value to patternRatio-->
        <script>var patternRatio = 0.9;</script>
        <script src="lib/three.min.js"></script>
    </head>
```