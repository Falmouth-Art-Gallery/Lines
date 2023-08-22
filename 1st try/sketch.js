let particles = []; // An array to store the particles

function setup() {
  createCanvas(640, 480); // Set up the canvas size
  pixelDensity(1); // Set pixel density to 1
  video = createCapture(VIDEO); // Create a video capture from webcam
  video.size(width, height); // Set the video size to canvas size
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(random(width), random(height))); // Create particles
      background(51); // Clear the background 

  }
}

function draw() {

  video.loadPixels(); // Load video pixels

  for (let particle of particles) {
    particle.update(); // Update particle position
    particle.show(); // Display the particle
  }
}

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(1, 6);
  this.prevX = this.x; // Store previous x position
  this.prevY = this.y; // Store previous y position

  this.update = function() {
    this.prevX = this.x; // Update previous x position
    this.prevY = this.y; // Update previous y position
    this.x += random(-15, 15);
    this.y += random(-15, 15);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  };

this.show = function() {
  video.loadPixels(); // Load video pixels
  
  var px = floor(this.x);
  var py = floor(this.y);
  var col = video.get(px, py); // Get color from video at particle's position

  stroke(col[0], col[1], col[2], 255); // Set stroke color based on video color
  strokeWeight(this.r); // Set stroke weight based on particle size
  line(this.prevX, this.prevY, this.x, this.y); // Draw a line between previous and current positions
};
}

// Lines to tweak
// 8: Howm many scribbles
// 10: Background stickyness 
// 28: Stroke thickness range
