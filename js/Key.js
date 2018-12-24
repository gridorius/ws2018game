class Key{
  constructor(code, key){
    this.code = code;
    this.key = key;
  }

  keyFromEvent(e){
    return new Key(e.keyCode, e.key);
  }

  equals(key){
    return this.code == key.code && this.key == key.key;
  }

  static addDownListener(key, handler){
    this.downList.push(new KeyHandler(key, handler));
  }

  static addUpListener(key, handler){
    this.upList.push(new KeyHandler(key, handler));
  }

  static Down(e){
    let key = keyFromEvent(e);
    for(let handler of this.downList)
      if(handler.check(key)) handler.invoke();
  }

  static Up(e){
    let key = keyFromEvent(e);
    for(let handler of this.upList)
      if(handler.check(key)) handler.invoke();
  }
}

Key.downList = [];
Key.upList = [];
