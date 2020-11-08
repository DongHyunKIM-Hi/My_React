interface Shape{
    getArea(): number;
}

class Circle implements Shape{
    radius: number;

    constructor(radius: number){
        this.radius = radius;
    }
    getArea(){
        return this.radius * this.radius* Math.PI;
    }
}

class React implements Shape{
    width: number;
    height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const react = new React(4,5);
const shapes: Shape[] = [circle, react];

shapes.forEach(me=>{
    console.log(me.getArea());
})