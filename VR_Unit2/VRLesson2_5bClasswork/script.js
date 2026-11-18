let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new Snowman(x,z);
    snowmen.push(snowman);
  }

  //Challenge 1: Create an array to store 20 clouds in random positions
  cloud = new Cloud(-5,10,-1);

  //Challenge 3: Create an array to store 100 snowflakes in random positions

  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }
  cloud.fly();
  //Challenge 2: Traverse your array of clouds and make each cloud fly

  //Challenge 4: Traverse your array of snowflakes and make each snowflake fall
  
  window.requestAnimationFrame( loop );

class UFO{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(0.02, 0.08);


    this.obj = document.createElement("a-entity");


    let saucer = document.createElement("a-cylinder");
    saucer.setAttribute("radius", "1.5");
    saucer.setAttribute("height", "0.3");
    saucer.setAttribute("position", "0 0.2 0");
    saucer.setAttribute("color", "silver");


    let dome = document.createElement("a-sphere");
    dome.setAttribute("radius", "0.7");
    dome.setAttribute("scale", "1 0.5 1");
    dome.setAttribute("position", "0 0.5 0");
    dome.setAttribute("color", "green");


    this.obj.append(saucer);
    this.obj.append(dome);
    this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
    scene.append(this.obj);
  }


  invade(){
    if(this.y > 0){
      this.y -= this.dy;
      if(this.y < 0){
        this.y = 0;
      }
      this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
    }
  }
}




for(let i = 0; i < 20; i++){
    ufos.push(new UFO(rnd(-20, 20), rnd(10, 25), rnd(-20, 20)));
  }






 for(let ufo of ufos){
    ufo.invade();
  }

}
