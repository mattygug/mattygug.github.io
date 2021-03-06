var Dot, bug, end, hover1, hover1_click, hover2, hover2_click, input, input2, pulse, searchpeople, select, test, timedot, timeselect, welcome, where;

Framer.Device.deviceType = "fullscreen";

timeselect = 0.2;

timedot = 0.1;

pulse = require('pulse');

test = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: true,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_test_addtocart.png"
});

welcome = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_welcome.png"
});

input = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_search.png"
});

input2 = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_search_addedtocoll.png"
});

hover1 = new Layer({
  x: 80,
  y: 330,
  width: 150,
  height: 100,
  visible: false,
  backgroundColor: "transparent"
});

hover1_click = new Layer({
  x: 225,
  y: 440,
  width: 70,
  height: 32,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_hover.png"
});

hover2 = new Layer({
  x: 880,
  y: 500,
  width: 150,
  height: 100,
  visible: false,
  backgroundColor: "transparent"
});

hover2_click = new Layer({
  x: 1015,
  y: 625,
  width: 70,
  height: 32,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_hover.png"
});

where = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_where.png"
});

bug = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_searchbug.png"
});

select = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_select_other.png"
});

searchpeople = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_search_people.png"
});

end = new Layer({
  x: 0,
  y: 0,
  width: 1440,
  height: 1024,
  visible: false,
  image: "https://s3-eu-west-1.amazonaws.com/dashmotelinks/prot/_end.png"
});

Dot = new Layer({
  x: 925,
  y: 503,
  width: 0,
  height: 0,
  clip: false,
  borderRadius: 25,
  visible: false,
  backgroundColor: "transparent"
});

test.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

welcome.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

Dot.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

input.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

hover1.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

hover1_click.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

hover2.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

hover2_click.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

where.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

input2.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

bug.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

select.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

searchpeople.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

end.states.add({
  visible: {
    visible: true
  },
  hidden: {
    visible: false
  }
});

Dot.states.animationOptions = {
  curve: "spring(250,25,0)"
};

pulse.createPulse(Dot);

test.on(Events.Click, function() {
  welcome.states["switch"]("visible");
  Dot.states["switch"]("visible");
  return test.states["switch"]("hidden");
});

welcome.on(Events.Click, function() {
  welcome.states["switch"]("hidden");
  input.states["switch"]("visible");
  hover1.states["switch"]("visible");
  return Dot.animate({
    properties: {
      x: 120,
      y: 360
    },
    curve: "ease-in-out"
  }, {
    time: timedot
  });
});

hover1.on(Events.MouseOver, function() {
  hover1.states["switch"]("hidden");
  hover1_click.states["switch"]("visible");
  return Dot.animate({
    properties: {
      y: 450,
      x: 227
    },
    curve: "ease-in-out"
  }, {
    time: timedot
  });
});

hover1_click.on(Events.Click, function() {
  hover1_click.states["switch"]("hidden");
  input.states["switch"]("hidden");
  where.states["switch"]("visible");
  return Dot.animate({
    properties: {
      y: 180,
      x: 1170
    },
    curve: "ease-in-out"
  }, {
    time: timedot
  });
});

where.on(Events.Click, function() {
  where.states["switch"]("hidden");
  input2.states["switch"]("visible");
  hover2.states["switch"]("visible");
  return Dot.animate({
    properties: {
      x: 920,
      y: 550
    },
    curve: "ease-in-out"
  }, {
    time: timedot
  });
});

hover2.on(Events.MouseOver, function() {
  hover2.states["switch"]("hidden");
  hover2_click.states["switch"]("visible");
  return Dot.animate({
    properties: {
      x: 1025,
      y: 635
    },
    curve: "ease-in-out"
  }, {
    time: timedot
  });
});

hover2_click.on(Events.Click, function() {
  hover2_click.states["switch"]("hidden");
  input2.states["switch"]("hidden");
  bug.states["switch"]("visible");
  return Dot.animate({
    properties: {
      y: 140,
      x: 1133
    },
    curve: "ease-in-out"
  }, {
    time: timedot
  });
});

bug.on(Events.Click, function() {
  bug.states["switch"]("hidden");
  select.states["switch"]("visible");
  return Dot.animate({
    properties: {
      y: 139,
      x: 1130
    },
    curve: "ease-in-out"
  }, {
    time: timedot
  });
});

select.on(Events.Click, function() {
  select.states["switch"]("hidden");
  searchpeople.states["switch"]("visible");
  return Dot.animate({
    properties: {
      y: 25,
      x: 100
    },
    curve: "ease-in-out"
  }, {
    time: timedot
  });
});

searchpeople.on(Events.Click, function() {
  searchpeople.states["switch"]("hidden");
  end.states["switch"]("visible");
  return Dot.animate({
    properties: {
      opacity: 0
    }
  });
});
