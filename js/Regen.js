class Regen{
  constructor(current, speed, max){
    this.current = current;
    this.speed = speed;
    this.max = max;
  }

  update(){
    this.current += this.speed;
    if(this.current > this.max) this.current = this.max;
    return this;
  }
}
