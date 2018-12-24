class GameObjects{
  constructor(objects = []){
    this.objects = objects;
  }

  add(object){
    this.objects.push(object);
    return this;
  }

  remove(object){
    let index = this.objects.findIndex(object);
    this.objects.splice(index, 1);
  }

  update(game){
    for(let objects of this.objects)
      object.update(game);
  }

  draw(context){
    for(let objects of this.objects)
      object.update(context);
  }
}
