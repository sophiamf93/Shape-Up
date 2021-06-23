document.addEventListener('DOMContentLoaded', function () {

    const inputContainter = document.getElementById('input-container');
    const canvas = document.getElementById('canvas');

    let rectangleBtn = document.getElementById('rectangle-btn'),
        squareBtn = document.getElementById('square-btn'),
        circleBtn = document.getElementById('circle-btn'),
        triangleBtn = document.getElementById('triangle-btn');

    let shapesArray = [];

    let shapeOutput = document.getElementById('shape-output'),
        heightOutput = document.getElementById('height-output'),
        widthOutput = document.getElementById('width-output'),
        areaOutput = document.getElementById('area-output'),
        perimeterOutput = document.getElementById('perimeter-output'),
        radiusOutput = document.getElementById('radius-output');
    
    rectangleBtn.addEventListener('click', function () {

        let height = document.getElementById("rect-height").value;
        let width = document.getElementById("rect-width").value;
        new Rectangle(height, width);
    });
  
    squareBtn.addEventListener('click', function () {
        let sideLength = document.getElementById("squ-length").value;
        new Square(sideLength, sideLength, sideLength);
    });
     
    circleBtn.addEventListener('click', function () {
        let radius = document.getElementById("cir-radius").value;
        new Circle((radius * 2), (radius * 2), radius);
    });
     
    triangleBtn.addEventListener('click', function () {
        let height = document.getElementById("tri-height").value;
        new Triangle(height, height, height);
    });


    class Shape {
        constructor(height, width) {
            this.height = height;
            this.width = width;
            this.canvas_x = canvas.offsetWidth;
            if (this.canvas_x <= this.width || 600 <= this.height) {
                alert(`Dimensions too large. Must be under ${this.canvas_x}px`)
            } else {
                this.createShape();
            };
        };

        createShape() {
            this.div = document.createElement('div');
            this.div.style.position = 'absolute'
            this.div.style.opacity = `60%`;
            this.div.style.top = `${Math.floor(Math.random() * (600 - this.height))}px`;
            this.div.style.left = `${Math.floor(Math.random() * (this.canvas_x - this.width))}px`;
            this.div.addEventListener('dblclick', function () {
                this.parentNode.removeChild(this)
            });
        };
    };

    class Rectangle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.height = height;
            this.width = width;
            this.createRectangle();
            shapesArray.push(this);
        }

        createRectangle() {
            this.div.className = 'rectangle';
            this.div.style.height = `${this.height}px`;
            this.div.style.width = `${this.width}px`;
            canvas.appendChild(this.div);
            this.div.addEventListener('click', () => {
                this.aboutShape();
            });
        }

        aboutShape() {
            let shapeVal = this.div.className
            shapeOutput.value = shapeVal
            let heightVal = this.div.style.height
            heightOutput.value = heightVal
            let widthVal = this.div.style.width
            widthOutput.value = widthVal
            let areaVal = `${Math.floor(this.height * this.width)}px`
            areaOutput.value = areaVal
            let perimeterVal = `${Math.floor((this.height * 2) + (this.width * 2))}px`
            perimeterOutput.value = perimeterVal
            radiusOutput.value = 'N/A'
        }
    };

    class Square extends Shape {
        constructor(height, width, sideLength) {
            super(height, width);
            this.sideLength = sideLength;
            this.createSquare();
            shapesArray.push(this);
        }

        createSquare() {
            this.div.className = 'square';
            this.div.style.width = `${this.sideLength}px`;
            this.div.style.height = `${this.sideLength}px`
            canvas.appendChild(this.div);

            this.div.addEventListener('click', () => {
                this.aboutShape();
            });
        }

        aboutShape() {
            let shapeVal = this.div.className
            shapeOutput.value = shapeVal
            let heightVal = this.div.style.height
            heightOutput.value = heightVal
            let widthVal = this.div.style.width
            widthOutput.value = widthVal
            let areaVal = `${Math.floor(Math.pow(this.sideLength, 2))}px`
            areaOutput.value = areaVal
            let perimeterVal = `${Math.floor(this.sideLength * 4)}px`
            perimeterOutput.value = perimeterVal
            radiusOutput.value = 'N/A'
        }
    };

    class Circle extends Shape {
        constructor(height, width, radius) {
            super(height, width);
            this.radius = radius;
            this.createCircle();
            shapesArray.push(this);
        }

        createCircle() {
            this.div.className = 'circle';
            this.div.style.radius = `${this.radius}px`;
            this.div.style.height = `${this.radius * 2}px`;
            this.div.style.width = `${this.radius * 2}px`;
            canvas.appendChild(this.div);

            this.div.addEventListener('click', () => {
                this.aboutShape();
            });
        }

        aboutShape() {
            let shapeVal = this.div.className
            shapeOutput.value = shapeVal
            heightOutput.value = 'N/A'
            widthOutput.value = 'N/A'
            let areaVal = `${Math.floor(Math.PI * Math.pow(this.radius, 2))}px`
            areaOutput.value = areaVal
            let perimeterVal = `${Math.floor(2 * Math.PI * this.radius)}px`
            perimeterOutput.value = perimeterVal
            let radiusVal = this.div.style.radius
            radiusOutput.value = radiusVal
        }
    };

    class Triangle extends Shape {
        constructor(height, width, triangle_height) {
            super(height, width)
            this.tri_height = triangle_height;
            this.createTriangle();
            shapesArray.push(this);
        }

        createTriangle() {
            this.div.className = 'triangle';
            this.div.style.height = `0px`;
            this.div.style.width = `0px`;
            this.div.style.borderRight = `${this.tri_height}px solid transparent`
            this.div.style.borderBottom = `${this.tri_height}px solid blue`
            canvas.appendChild(this.div);
            this.div.addEventListener('click', () => {
                this.aboutShape();
            });
        }

        aboutShape() {
            let shapeVal = this.div.className
            shapeOutput.value = shapeVal
            let heightVal = `${this.tri_height}px`
            heightOutput.value = heightVal
            let widthVal = `${this.tri_height}px`
            widthOutput.value = widthVal
            let areaVal = `${Math.floor(0.5 * Math.pow(this.height, 2))}px`
            areaOutput.value = areaVal
            let perimeterVal = `${Math.floor(2 * this.height + (Math.sqrt(2)) * this.height)}px`
            perimeterOutput.value = perimeterVal
            radiusOutput.value = 'N/A'
        }
    };
});

