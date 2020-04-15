
var app = document.getElementById('typeWrite');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('And I am a, web developer.')
  .pauseFor(1000)
  .deleteChars(14)
  .pauseFor(150)
  .typeString('dog lover.')
  .pauseFor(1000)
  .deleteChars(10)
  .pauseFor(150)
  .typeString('coffee addict.')
  .pauseFor(1000)
  .deleteChars(14)
  .pauseFor(150)
  .typeString('problem solver.')
  .start();

  
