class Mover{
  constructor(location, velocity, acceleration){
    this.location = location;
    this.velocity = velocity;
    this.acceleration = acceleration;
  }

  appendForce(force){
    this.acceleration.add(force);
  }

  update(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.zero();
  }
}
