let lastTimeMsec = null;
let three = new Template();
let collada = new Collada();
let ar = new AR();

const init = () => {
    three.init();
    collada.load(''); //load collada here
    ar.init(three.renderer, three.scene, three.camera);
    animate();
    //init code extended below this
    ar.setMarker(three.scene, 'coral.patt');
}

const animate = nowMsec => {
    requestAnimationFrame(animate);
    ar.update(nowMsec, lastTimeMsec);
    //animate code extended below this
}

init();