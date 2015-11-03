var pulseLibrary;

pulseLibrary = [];

exports.createPulse = function(parentLayer, posX, posY) {
  var blip, blips, i, j, k, len, point, pulse, pulse_blip;
  pulse = new Layer({
    width: 12,
    height: 12,
    superLayer: parentLayer,
    backgroundColor: "none",
    clip: false
  });
  if (posX && posY) {
    pulse.x = posX - (pulse.width / 2);
    pulse.y = posY - (pulse.height / 2);
  } else {
    pulse.center();
  }
  point = new Layer({
    superLayer: pulse,
    width: pulse.width / 10,
    height: pulse.height / 10,
    backgroundColor: "#FE5F55",
    borderRadius: pulse.width / 2
  });
  point.center();
  blips = [];
  for (i = j = 0; j <= 2; i = ++j) {
    pulse_blip = new Layer({
      superLayer: pulse,
      width: pulse.width,
      height: pulse.height,
      backgroundColor: "#FE5F55",
      borderRadius: pulse.width / 2,
      borderWidth: 1,
      scale: 0,
      opacity: 1,
      borderColor: "#FE5F55"
    });
    pulse_blip.center();
    blips.push(pulse_blip);
  }
  for (k = 0, len = blips.length; k < len; k++) {
    blip = blips[k];
    i = blip.index - 1;
    blip.animate({
      properties: {
        scale: 1,
        opacity: 0
      },
      time: 1 + (0.5 * i),
      delay: 2 - (0.5 * i),
      repeat: 5000
    });
  }
  return pulseLibrary.push(pulse);
};

exports.library = pulseLibrary;
