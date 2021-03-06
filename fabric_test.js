var files = [
  'apron.jpg',
  'austin.jpg',
  'bacon_and_eggs.png',
  'bat.png',
  'beach.jpg',
  'bible.jpg',
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

var radius = 200;
var imgSize = radius/2;

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
  angles.push(2*Math.PI * i / 7);
}

for (i in angles) {
  x = radius + radius*.65 * Math.cos(angles[i]);
  y = radius + radius*.65 * Math.sin(angles[i]);
  coords.push({x, y});
}

// Draw
for (i in coords) {
  if (false) {
    canvas.add(new fabric.Rect({
      originX:'center',
      originY:'center',
      left: coords[i].x,
      top: coords[i].y,
      width: imgSize,
      height: imgSize,
      angle: 360*Math.random(),
      fill: '#f33'
    }).scale(Math.random() * .5 + .75));
  }

  drawImg(files[i], coords[i]);
}

function drawImg(file, coords) {
  fabric.Image.fromURL('img/'+file, function(img) {
    // Proportionally fit the imgSize box
    w = img.getWidth();
    h = img.getHeight();
    if (w > h) {
      newWidth = imgSize;
      newHeight = imgSize - imgSize * (h/w);
    } else if (w < h) {
      newWidth = imgSize - imgSize * (w/h);
      newHeight = imgSize;
    } else {
      newWidth = newHeight = imgSize;
    }
    canvas.add(img.set({
      originX: 'center',
      originY: 'center',
      left: coords.x,
      top: coords.y,
      width: newWidth,
      height: newHeight,
      angle: 360*Math.random()
    }).scale(Math.random() * .5 + .75));
  });
}
