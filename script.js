function Car(make, model) {
	this.make=make;
	this.model=model;
}
Car.prototype.getMakeModel= function(){
	return ${this.make} ${this.model};
}

function SportsCar(make, model, topSpeed) {
	this.make= make;
	this.model= model;
	this.topSpeed= topSpeed;
}
SportsCar.prototype._proto_= Car.prototype;
SportsCar.prototype.getTopSpeed= function(){
	return this.topSpeed;
}