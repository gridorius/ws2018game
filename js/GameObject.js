class GameObject{
  constructor(name, mover){
    this.name = name;
    this.mover = mover;

    this.health = null;
    this.mana = null;
    this.animation = null;
  }

  setAnimation(animation){
    this.animation = animation;
  }

  setHealth(regen){
    this.health = regen;
  }

  setMana(regen){
    this.mana = regen;
  }

  update(game){
    this.mover.update();
    this.health.update();
    this.mana.update();
  }

  draw(context){
    this.animation.draw(context, this);
  }
}
