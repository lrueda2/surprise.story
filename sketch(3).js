let slider;
let input, button, greeting;



function setup() {
  createCanvas(windowWidth, windowHeight);//set the window size
  noStroke();
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');

  // create canvas
//createCanvas(710, 400);

input = createInput();
input.position(50, 725);

button = createButton('submit');
button.position(input.x + input.width, 725);
button.mousePressed(greet);

greeting = createElement('h2', 'what is your name?');
greeting.position(50, 625);

textAlign(CENTER);
textSize(80);


}

function draw() {
  let val = slider.value();
  background(val);

  //background(0);
  textSize(60);
  text('I SEE YOU', 400, 400);

}




function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
