class Collada {
    constructor() {
        this.loader = new THREE.ColladaLoader();      
    }
    load(ar, src) {
        this.loader.load(src, collada => {
            ar.addObject(collada.scene);
            const details = model.getObjectByName("details", true);
        })
    }
}