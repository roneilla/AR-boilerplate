let lastTimeMsec = null;
let three = new Template();
let ar = new AR();

const init = () => {
    three.init();
    ar.init(three.renderer, three.scene, three.camera);
    animate();
    ar.setMarker(three.scene, 'data/patt.hiro');
}

const animate = nowMsec => {
    requestAnimationFrame(animate);
    ar.update(nowMsec, lastTimeMsec);
}

init();