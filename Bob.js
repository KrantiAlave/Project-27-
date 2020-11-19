class Bob{
	constructor(x,y,r){
	var options = {
	isStatic:true,
    friction:0.4,
    density:3,
	restitution:1.2
	}
    this.r = r;
    this.x = x;
    this.y = y;

	this.body = Bodies.circle(this.x,this.y,this.r/2,options);
	World.add(world,this.body);
	}
	display() {
		var pos = this.body.position;
		push();
		translate(pos.x,pos.y);
		rotate(this.body.angle);
		strokeWeight(1.5);
		fill("blue");
		ellipseMode(CENTER);
		ellipse(0,0,this.r,this.r);
		pop();
		}
	}