class KeyHandler{
  constructor(key, handler){
    this.key = key;
    this.handler = handler;
  }

  check(key){
    return this.key.equals(key);
  }

  invoke(){
    this.handler();
  }
}
