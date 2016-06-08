class Shapes {
    
    protected name: string;
    protected soundfile: string;   
    
    constructor(){
        
    }

    public getImage() {
        return this.createImage(); 
    }

    private createImage() {
        let image = document.createElement(this.name);
        return image;

    }

    public playSound() {
         var sound = new Howl({
        urls: [this.soundfile],
        volume: 1.0,
        autoplay: true
    }).play;
    }

}