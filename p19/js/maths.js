//pass in the average, and the standard deviation
function randomNorm(mean, stdev) {
  return Math.round(rnd_snd()*stdev+mean);
}
function rnd_snd() {
  return randSeed();
  // return randSeed()+randSeed()+randSeed();
}
function randSeed(){
  return ((Math.random() + Math.random() + Math.random()) - 1.5) / 1.5;
}
//taken from protonfish.com
//Box-Muller Transform
//This function generates pairs of standard normal distribution random numbers 
//from uniform distribution random numbers.
function randomBMT() {
  var x = 0, y = 0, rds, c;

  // Get two random numbers from -1 to 1.
  // If the radius is zero or greater than 1, throw them out and pick two new ones
  // Rejection sampling throws away about 20% of the pairs.
  do {
  x = randSeed();
  y = randSeed();
  rds = x*x + y*y;
  }
  while (rds == 0 || rds > 1)

  // This magic is the Box-Muller Transform
  c = Math.sqrt(-2*Math.log(rds)/rds);

  // It always creates a pair of numbers. I'll return them in an array. 
  // This function is quite efficient so don't be afraid to throw one away if you don't need both.
  return [x*c, y*c];
}