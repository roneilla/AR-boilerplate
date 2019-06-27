class Collada {
    constructor() {
        this.loader = new THREE.ColladaLoader();       
    }
    load(src) {
        this.loader.load(src, collada => {
            ar.add(collada.scene);
            const details = model.getObjectByName("details", true);
        })
    }
}