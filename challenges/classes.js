// 1. Copy and paste your prototype in here and refactor into class syntax.
/*
function CuboidMaker(cuboidAttrs) {
    this.length = cuboidAttrs.length;
    this.width = cuboidAttrs.width;
    this.height = cuboidAttrs.height;
  }
  CuboidMaker.prototype.volume = function() {
    return this.length * this.width * this.height;
  };
  CuboidMaker.prototype.surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
*/

class CuboidMaker {
    constructor(cuboidAttrs) {
        this.length = cuboidAttrs.length;
        this.width = cuboidAttrs.width;
        this.height = cuboidAttrs.height;          
    }
    volume() {
        return this.length * this.width * this.height;        
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(cubeAttrs) {
        super(cubeAttrs);
        }
/*    isCube() {
        return this.length === this.width && this.length === this.height;
    } */
    volume() {
        return this.length ** 3;
    }
    surfaceArea() {
        return 6 * this.length ** 2;
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

const cube = new CubeMaker({
    length: 5,
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.volume());
console.log(cube.surfaceArea());