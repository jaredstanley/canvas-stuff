function Dot(_loc, _mass){
	this.location = {
		x:_loc.x,
		y:_loc.y
	};
	this.velocity = {
		x:0,
		y:0
	};
	this.acceleration = {
		x:0,
		y:0
	};

	this.mass = _mass;
	//
	function div(vector, mass){
		var tmpV = {
			x:vector.x,
			y:vector.y
		}
		tmpV.x = tmpV.x/mass;
		tmpV.y = tmpV.y/mass;
		return tmpV;
	}
}

Dot.prototype = {
	applyForce: function(force){
		var f = this.div(force, this.mass);
		// console.log(f);
		this.sum(this.acceleration, f);
	},
	addIt: function(force){
		// console.log(f);
		this.sum(this.acceleration, force);

	},
	sum: function(v1, v2){
		v1.x+=v2.x;
		v1.y+=v2.y;
	},
	div: function(vector, mass){
		var tmpV = {
			x:vector.x,
			y:vector.y
		}
		tmpV.x = tmpV.x/mass;
		tmpV.y = tmpV.y/mass;
		return tmpV;
	},
	updateValues: function(){
		this.sum(this.velocity, this.acceleration);
		this.sum(this.location, this.velocity);
		this.acceleration = {
			x:0,
			y:0
		};
	},
	gotoTgt: function(tgt){
		var dir = {};
		// console.log(tgt.x+" "+this.location.x);
		dir.x = tgt.location.x-this.location.x;
		dir.y = tgt.location.y-this.location.y;
		dir.x*=.05;
		dir.y*=.05;
		this.acceleration.x = dir.x/40;
		this.acceleration.y = dir.y/40;
	},
	draw: function(){
		main_ctx.beginPath();
		main_ctx.arc(this.location.x, this.location.y, size*this.mass, 0, Math.PI*2, true); 
		main_ctx.fill();
		// main_ctx.stroke();
	},
	checkBounds: function(w, h){
		if(this.location.x<0 || this.location.x>w){
			this.velocity.x*=-1;
		}
		if(this.location.y<0 || this.location.y>h){
			this.velocity.y*=-1;
		}
	}

}

// Dot.prototype.applyForce = function(force){
// 	var f = this.div(force, this.mass);
// 	// console.log(f);
// 	this.sum(this.acceleration, f);
// }

// Dot.prototype.addIt = function(force){
// 	// console.log(f);
// 	this.sum(this.acceleration, force);

// }

// Dot.prototype.updateValues = function(){
// 	this.sum(this.velocity, this.acceleration);
// 	this.sum(this.location, this.velocity);
// 	this.acceleration = {
// 		x:0,
// 		y:0
// 	};
// }
// Dot.prototype.gotoTgt = function(tgt){
// 	var dir = {};
// 	// console.log(tgt.x+" "+this.location.x);
// 	dir.x = tgt.location.x-this.location.x;
// 	dir.y = tgt.location.y-this.location.y;
// 	dir.x*=.05;
// 	dir.y*=.05;
// 	this.acceleration.x = dir.x/40;
// 	this.acceleration.y = dir.y/40;
// }

// Dot.prototype.draw = function(){
// 	main_ctx.beginPath();
// 	main_ctx.arc(this.location.x, this.location.y, size*this.mass, 0, Math.PI*2, true); 
// 	//
// 	main_ctx.fill();
// 	// main_ctx.stroke();
	
		
// }
// Dot.prototype.checkBounds = function(w, h){
// 	if(this.location.x<0 || this.location.x>w){
// 		this.velocity.x*=-1;
// 	}
// 	if(this.location.y<0 || this.location.y>h){
// 		this.velocity.y*=-1;
// 	}
// }
