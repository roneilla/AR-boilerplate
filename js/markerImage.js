class markerImage {
    constructor(src) {
        this.imageMap = new THREE.TextureLoader().load(src);
        this.imageMaterial = new THREE.SpriteMaterial({
            map: this.imageMap,
            color: 0xffffff
        });
        this.image = new THREE.Sprite(this.imageMaterial);
    }
    //open methods
    setSize(x, y, z) {
        x != undefined && y == undefined && z == undefined ? (y=x, z=x) : 0;
        this.image.scale.set(x, y, z);
    }

    setPosition(x, y, z) {
        this.setStyle(position, x, y, z);
    }

    setRotation(x, y, z) {
        this.setStyle(rotation, x, y, z);
    }
    
    //dev methods
    setStyle(which, x, y, z) {
        x != undefined && y == undefined && z == undefined ? (y=x, z=x) : 0;
        this.image.which.set(x, y, z);
    }
}