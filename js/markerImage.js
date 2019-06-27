class markerImage {
    constructor(src) {
        this.spriteMap = new THREE.TextureLoader().load(src);
        this.spriteMaterial = new THREE.SpriteMaterial({
            map: this.spriteMap,
            color: 0xffffff
        });
        this.sprite = new THREE.Sprite(this.spriteMaterial);
    }
    //open methods
    setSize(x, y, z) {
        this.setStyle(size, x, y, z);
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
        this.sprite.which.set(x, y, z);
    }
}