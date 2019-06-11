let lastTimeMsec = null;
let template = new Template();
let collada = new Collada();
let ar = new AR();

const init = () => {
    template.init();
    collada.load(''); //load collada here
    ar.init(template.renderer, template.scene, template.camera);
    animate();
    //init code extended below this
    
    ar.setMarker(scene, 'coral.patt');
}

const animate = nowMsec => {
    requestAnimationFrame(animate);
    ar.update(nowMsec, lastTimeMsec);
    //animate code extended below this
}

init();