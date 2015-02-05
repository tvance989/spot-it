var files = [
  'apron.jpg',
  'austin.jpg',
  'bacon_and_eggs.png',
  'bat.png',
  'beach.jpg',
  // 'bible.jpg',
  'bookshelf.png',
  'bread.png',
  'canoe.jpg',
  'capitol.jpg',
  'chick_fil_a.jpg',
  'christmas_tree.png',
  'flower.png',
  'goggles.jpg',
  'jeep.jpg',
  'shuttlecock.jpg',
  'spot_it.jpg',
  'texas.png'
];

var canvas = new fabric.Canvas('canvas');

var radius = 250;

// Draw card border
canvas.add(new fabric.Circle({
  top: 0,
  left: 0,
  radius: radius,
  fill: 'white',
  stroke: 'purple',
  strokeWidth: 4,
}));

// Specify where to draw the symbols on the card
var coords = [];
coords.push({x:radius, y:radius}); // Start in the middle

var angles = [];
for (var i = 0; i < 7; i++) {
  angles.push(i * 2*Math.PI / 7);
}
console.log(angles);

for (i in angles) {
  x = radius + radius*.7 * Math.cos(angles[i]);
  y = radius + radius*.7 * Math.sin(angles[i]);
  coords.push({x, y});
  console.log(angles[i], {x,y});
}

for (i in coords) {
  canvas.add(new fabric.Rect({
    originX:'center',
    originY:'center',
    left: coords[i].x,
    top: coords[i].y,
    width: 75,
    height: 75,
    fill: '#f33'
  }));
  continue;

  fabric.Image.fromURL('img/'+files[1], function(img) {
    canvas.add(img.set({
      originX: 'center',
      originY: 'center',
      left: coords[i].x,
      top: coords[i].y,
      // angle: 45,
    }).scale(0.15));
  });
  console.log(coords[i].x, coords[i].y);
}

for (i in files) {
  break;//.del
  if (i >= 8) {
    break;
  }

  var angle = Math.random()*360;
  console.log(angle);

  fabric.Image.fromURL('img/'+files[i], function(img) {
    canvas.add(img.set({
      originX: 'center',
      originY: 'center',
      top: Math.random()*250+100,
      left: Math.random()*250+100,
      angle: angle,
    }).scale(0.25));
  });
}
