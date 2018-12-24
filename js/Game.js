class Game{
  cosntructor(objects){
    this.name = 'username';
    this.objects = objects;
    this.paused = false;
    this.ended = false;
    this.frame = 0;
    this.context = 1;
  }

  addObject(object){
    this.objects.add(object);
  }

  start(){
    this.render();
  }

  render(){
    if(this.ended)return;
    if(!this.paused){
      this.objects.update(this);
      this.ojbects.draw(this.context);
      this.frame++;
      requestAnimationFrame(()=>this.render());
    }
  }
}
