var layerBg, layerCheckoutBG, layerCollectionBG, layerDot, layerFilter, layerFilterGroupA, layerIconBuy, layerIconCollection, layerIconMore, layerIconSearch, layerIconSelector, layerIconSeparator1, layerIconSeparator2, layerIconSeparator3, layerIconSeparator4, layerIconSeparator5, layerIconSeparator6, layerIconSettings, layerMenu, layerMenuTriangle, layerMenugray, layerMore, layerMoreText, layerProfile, layerSearchActive, layerSearchActiveA, layerSearchActiveB, layerSearchBG, layerSearchBar, layerSearchFilter, layerSearchFilters, layerSearchInput, pulse, searchin, timedot, timefilter, timeselect, timeslider;

timeselect = 0.2;

timeslider = 0.4;

searchin = 0.4;

timedot = 0.4;

timefilter = 0.5;

pulse = require("pulse");

layerBg = new Layer;

layerMenu = new Layer;

layerMenugray = new Layer;

layerMenuTriangle = new Layer;

layerProfile = new Layer;

layerIconSearch = new Layer;

layerIconCollection = new Layer;

layerIconBuy = new Layer;

layerIconSettings = new Layer;

layerIconMore = new Layer;

layerIconSelector = new Layer;

layerIconSeparator1 = new Layer;

layerIconSeparator2 = new Layer;

layerIconSeparator3 = new Layer;

layerIconSeparator4 = new Layer;

layerIconSeparator5 = new Layer;

layerIconSeparator6 = new Layer;

layerSearchBar = new Layer;

layerSearchInput = new Layer;

layerSearchBG = new Layer;

layerSearchFilter = new Layer;

layerSearchFilters = new Layer;

layerSearchActive = new Layer;

layerSearchActiveA = new Layer;

layerSearchActiveB = new Layer;

layerFilter = new Layer;

layerFilterGroupA = new Layer;

layerCollectionBG = new Layer;

layerCheckoutBG = new Layer;

layerMore = new Layer;

layerMoreText = new Layer;

layerDot = new Layer;

layerMenu.index = 10;

layerProfile.index = 1;

layerMenugray.index = 2;

layerIconSelector.index = 3;

layerIconSearch.index = 4;

layerIconCollection.index = 5;

layerIconBuy.index = 6;

layerIconSettings.index = 7;

layerIconMore.index = 8;

layerFilter.index = 9;

layerFilterGroupA.index = 9;

layerMenu.placeBefore(layerFilter);

layerMenugray.placeBefore(layerMenu);

layerProfile.placeBefore(layerMenu);

layerIconSearch.placeBefore(layerMenu);

layerIconCollection.placeBefore(layerMenu);

layerIconBuy.placeBefore(layerMenu);

layerIconMore.placeBefore(layerMenu);

layerIconSelector.placeBefore(layerMenu);

layerMenuTriangle.placeBefore(layerIconSelector);

layerMenuTriangle.placeBefore(layerMenugray);

layerSearchFilter.placeBefore(layerMenu);

layerSearchFilters.placeBefore(layerMenu);

layerIconSeparator1.placeBefore(layerMenu);

layerIconSeparator2.placeBefore(layerMenu);

layerIconSeparator3.placeBefore(layerMenu);

layerIconSeparator4.placeBefore(layerMenu);

layerFilterGroupA.placeBefore(layerFilter);

layerSearchFilter.placeBefore(layerSearchInput);

layerSearchFilters.placeBefore(layerSearchInput);

layerMore.placeBefore(layerCollectionBG);

layerMore.placeBefore(layerSearchBG);

layerMore.placeBefore(layerCheckoutBG);

layerMoreText.placeBefore(layerCollectionBG);

layerMoreText.placeBefore(layerSearchBG);

layerMoreText.placeBefore(layerCheckoutBG);

layerMoreText.placeBefore(layerMore);

layerSearchActive.placeBefore(layerSearchBG);

layerSearchActiveA.placeBefore(layerSearchActive);

layerSearchActiveB.placeBefore(layerSearchActive);

layerBg.backgroundColor = "#ffffff";

layerBg.width = 1280;

layerBg.height = 700;

layerMenu.x = 0;

layerMenu.y = 0;

layerMenu.width = 50;

layerMenu.height = 700;

layerMenu.backgroundColor = "#000000";

layerMenugray.x = 48;

layerMenugray.y = 0;

layerMenugray.width = 2;

layerMenugray.height = 700;

layerMenugray.opacity = 0.4;

layerMenugray.backgroundColor = "#535e65";

layerProfile.x = 12;

layerProfile.y = 12;

layerProfile.width = 25;

layerProfile.height = 25;

layerProfile.borderRadius = 15;

layerProfile.image = "images/profile.jpg";

layerIconSearch.x = 14;

layerIconSearch.y = 65;

layerIconSearch.width = 25;

layerIconSearch.height = 25;

layerIconSearch.image = "images/search.svg";

layerIconCollection.x = 12;

layerIconCollection.y = 112;

layerIconCollection.width = 25;

layerIconCollection.height = 25;

layerIconCollection.image = "images/collection.svg";

layerIconBuy.x = 12;

layerIconBuy.y = 162;

layerIconBuy.width = 25;

layerIconBuy.height = 25;

layerIconBuy.image = "images/cart.svg";

layerIconSettings.x = 12;

layerIconSettings.y = 1712;

layerIconSettings.width = 25;

layerIconSettings.height = 25;

layerIconSettings.image = "images/settings.svg";

layerIconMore.x = 14;

layerIconMore.y = 665;

layerIconMore.width = 20;

layerIconMore.height = 20;

layerIconMore.image = "images/more.svg";

layerIconSeparator1.x = 0;

layerIconSeparator1.y = 50;

layerIconSeparator1.width = 50;

layerIconSeparator1.height = 1;

layerIconSeparator1.opacity = 0.4;

layerIconSeparator1.backgroundColor = "#535e65";

layerIconSeparator2.x = 0;

layerIconSeparator2.y = 100;

layerIconSeparator2.width = 50;

layerIconSeparator2.height = 1;

layerIconSeparator2.opacity = 0.4;

layerIconSeparator2.backgroundColor = "#535e65";

layerIconSeparator3.x = 0;

layerIconSeparator3.y = 150;

layerIconSeparator3.width = 50;

layerIconSeparator3.height = 1;

layerIconSeparator3.opacity = 0.4;

layerIconSeparator3.backgroundColor = "#535e65";

layerIconSeparator4.x = 0;

layerIconSeparator4.y = 200;

layerIconSeparator4.width = 50;

layerIconSeparator4.height = 1;

layerIconSeparator4.opacity = 0.4;

layerIconSeparator4.backgroundColor = "#535e65";

layerIconSeparator6.x = 0;

layerIconSeparator6.y = 650;

layerIconSeparator6.width = 50;

layerIconSeparator6.height = 1;

layerIconSeparator6.opacity = 0.4;

layerIconSeparator6.backgroundColor = "#535e65";

layerIconSeparator5.x = 0;

layerIconSeparator5.y = 150;

layerIconSeparator5.width = 50;

layerIconSeparator5.height = 1;

layerIconSeparator5.opacity = 0;

layerIconSeparator5.backgroundColor = "#535e65";

layerIconSelector.x = 0;

layerIconSelector.y = 50;

layerIconSelector.width = 50;

layerIconSelector.height = 50;

layerIconSelector.backgroundColor = "#0072ff";

layerMenuTriangle.x = 0;

layerMenuTriangle.y = 50;

layerMenuTriangle.width = 50;

layerMenuTriangle.height = 50;

layerMenuTriangle.image = "images/triangle_white.png";

layerSearchBar.x = 50;

layerSearchBar.y = 0;

layerSearchBar.opacity = 0;

layerSearchBar.width = 1030;

layerSearchBar.height = 50;

layerSearchBar.backgroundColor = "#edf6fd";

layerSearchInput.x = 70;

layerSearchInput.y = 12;

layerSearchInput.width = 1030;

layerSearchInput.height = 50;

layerSearchInput.opacity = 0;

layerSearchInput.backgroundColor = "transparent";

layerSearchInput.html = "<span style='font-family: sans-serif; font-size: 24px'>Amsterdam</span>";

layerSearchInput.classList.add('text');

layerSearchFilter.x = 18;

layerSearchFilter.y = 118;

layerSearchFilter.width = 15;

layerSearchFilter.height = 15;

layerSearchFilter.visible = false;

layerSearchFilter.opacity = 0.7;

layerSearchFilter.image = "images/filter.svg";

layerSearchFilters.x = 18;

layerSearchFilters.y = 118;

layerSearchFilters.width = 15;

layerSearchFilters.height = 15;

layerSearchFilters.opacity = 1;

layerSearchFilters.visible = false;

layerSearchFilters.image = "images/filter.svg";

layerSearchBG.x = 50;

layerSearchBG.y = 50;

layerSearchBG.opacity = 0;

layerSearchBG.width = 1230;

layerSearchBG.height = 650;

layerSearchBG.image = "images/search.png";

layerMore.backgroundColor = "transparent";

layerFilter.y = 0;

layerFilter.x = -300;

layerFilter.width = 200;

layerFilter.height = 700;

layerFilter.backgroundColor = "#000000";

layerFilterGroupA.x = -300;

layerFilterGroupA.y = 0;

layerFilterGroupA.width = 200;

layerFilterGroupA.height = 600;

layerFilterGroupA.image = "images/filters.png";

layerSearchActive.x = 50;

layerSearchActive.y = 50;

layerSearchActive.width = 1230;

layerSearchActive.height = 650;

layerSearchActive.opacity = 0;

layerSearchActive.backgroundColor = "#ffffff";

layerSearchActiveA.x = 50;

layerSearchActiveA.y = 50;

layerSearchActiveA.width = 1230;

layerSearchActiveA.height = 280;

layerSearchActiveA.opacity = 0;

layerSearchActiveA.image = "images/searchsuggest.png";

layerSearchActiveB.x = 50;

layerSearchActiveB.y = 380;

layerSearchActiveB.width = 1230;

layerSearchActiveB.height = 280;

layerSearchActiveB.opacity = 0;

layerSearchActiveB.image = "images/mycollections.png";

layerCheckoutBG.y = 0;

layerCheckoutBG.x = 50;

layerCheckoutBG.width = 1200;

layerCheckoutBG.height = 630;

layerCheckoutBG.opacity = 0;

layerCheckoutBG.image = "images/checkout.png";

layerCollectionBG.y = 0;

layerCollectionBG.x = 50;

layerCollectionBG.width = 1230;

layerCollectionBG.height = 700;

layerCollectionBG.opacity = 0;

layerCollectionBG.image = "images/collection.png";

layerMore.y = 650;

layerMore.x = -250;

layerMore.width = 200;

layerMore.height = 50;

layerMore.backgroundColor = "#000000";

layerMoreText.y = 650;

layerMoreText.x = -250;

layerMoreText.width = 200;

layerMoreText.height = 50;

layerMoreText.image = "images/more.png";

layerDot.y = 75;

layerDot.x = 25;

layerDot.width = 0;

layerDot.height = 0;

layerDot.clip = false;

layerDot.borderRadius = 25;

layerDot.opacity = 0;

layerDot.backgroundColor = "transparent";

layerIconCollection.states.add({
  one: {
    y: 112
  },
  two: {
    y: 162
  }
});

layerIconSeparator3.states.add({
  one: {
    y: 150
  },
  two: {
    y: 200
  }
});

layerIconBuy.states.add({
  one: {
    y: 162
  },
  two: {
    y: 212
  }
});

layerIconSeparator4.states.add({
  one: {
    y: 200
  },
  two: {
    y: 250
  }
});

layerIconSeparator5.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 0.4
  }
});

layerSearchBar.states.add({
  one: {
    opacity: 0
  },
  two: {
    opacity: 1,
    y: 0,
    x: 50
  },
  three: {
    x: 250
  }
});

layerSearchInput.states.add({
  one: {
    opacity: 0
  },
  two: {
    opacity: 1,
    y: 12,
    x: 100
  },
  three: {
    x: 310
  }
});

layerSearchBG.states.add({
  one: {
    opacity: 0
  },
  two: {
    opacity: 1,
    y: 50,
    x: 50
  },
  three: {
    x: 250
  }
});

layerSearchFilter.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

layerSearchFilters.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

layerFilter.states.add({
  one: {
    x: -300
  },
  two: {
    x: 50
  },
  three: {
    x: -300
  }
});

layerFilterGroupA.states.add({
  one: {
    x: -300
  },
  two: {
    x: 50
  },
  three: {
    x: -300
  }
});

layerSearchActive.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 0.8
  },
  one: {
    x: 50
  },
  two: {
    x: 250
  }
});

layerSearchActiveA.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  one: {
    x: 50
  },
  two: {
    x: 250
  }
});

layerSearchActiveB.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  one: {
    x: 50
  },
  two: {
    x: 250
  }
});

layerCheckoutBG.states.add({
  one: {
    opacity: 0
  },
  two: {
    opacity: 1
  }
});

layerCollectionBG.states.add({
  one: {
    opacity: 0
  },
  two: {
    opacity: 1
  }
});

layerMore.states.add({
  one: {
    x: -250
  },
  two: {
    x: 50
  }
});

layerMoreText.states.add({
  one: {
    x: -250
  },
  two: {
    x: 50
  }
});

layerDot.states.add({
  one: {
    x: 275,
    y: 25
  },
  two: {
    x: 75,
    y: 25
  },
  three: {
    x: 175,
    y: 25
  }
});

layerSearchBar.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerSearchInput.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerSearchBG.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerSearchFilter.states.animationOptions = {
  curve: "ease-in-out",
  time: timefilter
};

layerSearchFilters.states.animationOptions = {
  curve: "ease-in-out",
  time: timefilter
};

layerFilter.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerFilterGroupA.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerSearchActive.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerSearchActiveA.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerSearchActiveB.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerCollectionBG.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerCheckoutBG.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

layerMore.states.animationOptions = {
  curve: "ease-in-out",
  time: timeselect
};

layerMoreText.states.animationOptions = {
  curve: "ease-in-out",
  time: timeselect
};

layerDot.states.animationOptions = {
  curve: "spring(250,25,0)"
};

pulse.createPulse(layerDot);

layerIconSearch.on(Events.Click, function() {
  layerSearchBar.states["switch"]("two");
  layerSearchInput.states["switch"]("two");
  layerSearchBG.states["switch"]("two");
  layerSearchFilter.states["switch"]("visible");
  layerIconSeparator5.states["switch"]("visible");
  layerCheckoutBG.states["switch"]("one");
  layerCollectionBG.states["switch"]("one");
  layerIconCollection.states["switch"]("two");
  layerIconSeparator3.states["switch"]("two");
  layerIconBuy.states["switch"]("two");
  layerIconSeparator4.states["switch"]("two");
  layerIconSelector.animate({
    properties: {
      y: 50
    },
    curve: "ease-in-out",
    time: timeselect
  });
  layerMenuTriangle.animate({
    properties: {
      y: 50
    },
    curve: "ease-in-out",
    time: timeselect
  });
  return layerDot.animate({
    properties: {
      y: 18,
      x: 75
    },
    curve: "ease-in-out",
    time: timedot
  });
});

layerSearchFilter.on(Events.Click, function() {
  layerSearchBar.states["switch"]("three");
  layerSearchInput.states["switch"]("three");
  layerSearchBG.states["switch"]("three");
  layerSearchFilter.states["switch"]("hidden");
  layerSearchFilters.states["switch"]("visible");
  layerIconSeparator5.states["switch"]("visible");
  layerSearchActive.states["switch"]("two");
  layerSearchActiveA.states["switch"]("two");
  layerSearchActiveB.states["switch"]("two");
  layerFilter.states["switch"]("two");
  layerFilterGroupA.states["switch"]("two");
  layerDot.animate({
    properties: {
      y: 18,
      x: 275
    },
    curve: "ease-in-out",
    time: timedot
  });
  return layerMenuTriangle.animate({
    properties: {
      images: "images/triangle.png"
    }
  });
});

layerSearchFilters.on(Events.Click, function() {
  layerSearchBar.states["switch"]("two");
  layerSearchInput.states["switch"]("two");
  layerSearchBG.states["switch"]("two");
  layerSearchFilters.states["switch"]("hidden");
  layerSearchFilter.states["switch"]("visible");
  layerSearchActive.states["switch"]("one");
  layerSearchActiveA.states["switch"]("one");
  layerSearchActiveB.states["switch"]("one");
  layerFilter.states["switch"]("one");
  layerFilterGroupA.states["switch"]("one");
  return layerDot.animate({
    properties: {
      y: 18,
      x: 105
    },
    curve: "ease-in-out",
    time: timedot
  });
});

layerSearchInput.on(Events.Click, function() {
  layerSearchActive.states.next("visible", "hidden");
  layerSearchActiveA.states.next("visible", "hidden");
  layerSearchActiveB.states.next("visible", "hidden");
  return layerDot.animate({
    properties: {
      y: 125,
      x: 15
    },
    curve: "ease-in-out",
    time: timedot
  });
});

layerIconCollection.on(Events.Click, function() {
  layerCollectionBG.states["switch"]("two");
  layerSearchBar.states.next("one");
  layerSearchInput.states.next("one");
  layerSearchBG.states.next("one");
  layerSearchFilter.states["switch"]("hidden");
  layerSearchFilters.states["switch"]("hidden");
  layerIconSeparator5.states["switch"]("hidden");
  layerFilter.states["switch"]("one");
  layerFilterGroupA.states["switch"]("one");
  layerCheckoutBG.states["switch"]("one");
  layerSearchActive.states["switch"]("hidden");
  layerSearchActiveA.states["switch"]("hidden");
  layerSearchActiveB.states["switch"]("hidden");
  layerIconCollection.states["switch"]("one");
  layerIconSeparator3.states["switch"]("one");
  layerIconBuy.states["switch"]("one");
  layerIconSeparator4.states["switch"]("one");
  layerIconSelector.animate({
    properties: {
      y: 100
    },
    curve: "ease-in-out",
    time: timeselect
  });
  layerMenuTriangle.animate({
    properties: {
      y: 100
    },
    curve: "ease-in-out",
    time: timeselect
  });
  return layerDot.animate({
    properties: {
      y: 175,
      x: 15
    },
    curve: "ease-in-out",
    time: timedot
  });
});

layerIconBuy.on(Events.Click, function() {
  layerCheckoutBG.states["switch"]("two");
  layerCollectionBG.states["switch"]("one");
  layerSearchBar.states.next("one");
  layerSearchInput.states.next("one");
  layerSearchFilter.states["switch"]("hidden");
  layerSearchFilters.states["switch"]("hidden");
  layerIconSeparator5.states["switch"]("hidden");
  layerSearchBG.states.next("one");
  layerFilter.states["switch"]("one");
  layerFilterGroupA.states["switch"]("one");
  layerSearchActive.states["switch"]("hidden");
  layerSearchActiveA.states["switch"]("hidden");
  layerSearchActiveB.states["switch"]("hidden");
  layerIconCollection.states["switch"]("one");
  layerIconSeparator3.states["switch"]("one");
  layerIconBuy.states["switch"]("one");
  layerIconSeparator4.states["switch"]("one");
  layerIconSelector.animate({
    properties: {
      y: 150
    },
    curve: "ease-in-out",
    time: timeselect
  });
  layerMenuTriangle.animate({
    properties: {
      y: 150
    },
    curve: "ease-in-out",
    time: timeselect
  });
  return layerDot.animate({
    properties: {
      y: 775,
      x: 15
    },
    curve: "ease-in-out",
    time: timedot
  });
});

layerIconMore.on(Events.MouseOver, function() {
  layerMore.states.next("two", "one");
  layerMoreText.states.next("two", "one");
  return layerDot.animate({
    properties: {
      opacity: 0
    },
    curve: "ease-in-out",
    time: timedot
  });
});

layerIconMore.on(Events.MouseOut, function() {
  layerMore.states.next("two", "one");
  return layerMoreText.states.next("two", "one");
});
