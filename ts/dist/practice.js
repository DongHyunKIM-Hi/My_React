"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class React {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const react = new React(4, 5);
const shapes = [circle, react];
shapes.forEach(me => {
    console.log(me.getArea());
});
