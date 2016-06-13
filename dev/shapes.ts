abstract class Shapes {
    
    protected name: string;
    protected soundfile: string;   
    
    constructor(){
        
    }

    public getImage(): HTMLElement {
        return this.createImage(); 
    }

    private createImage(): HTMLElement {
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