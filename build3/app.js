var Bg, CheckoutArrows, CheckoutArrows2, CheckoutDetailsPrice1, CheckoutDetailsPrice2, CheckoutDetailsText, CheckoutImage1, CheckoutImage1Details1, CheckoutImage1Details2, CheckoutImage2, CheckoutImageText, CheckoutOverview, CheckoutPaid, CheckoutSelect, CheckoutSelect2, CheckoutSelector1, CheckoutSelector11, CheckoutSelector2, CheckoutSelector22, CheckoutSeparator, CheckoutSizeText, CheckoutSizeText2, CheckoutSlash, CheckoutSubtotal, CollectionBG, Dot, Filter, FilterGroupA, HoverHelp, HoverHelp2, HoverHelp3, HoverHelp4, HoverImage, HoverImage2, HoverImage3, HoverImage4, HoverInfo, HoverInfo2, HoverInfo3, HoverInfo4, IconBuy, IconCollection, IconMore, IconSearch, IconSelector, IconSeparator1, IconSeparator2, IconSeparator3, IconSeparator4, IconSeparator5, IconSeparator6, IconSettings, Menu, MenuTriangle, MenuTriangleb, Menugray, More, MoreCover, MoreText1, MoreText2, MoreText3, Profile, SearchActive, SearchActiveA, SearchActiveB, SearchBG, SearchBar, SearchFilter, SearchFilters, SearchInput, checkoutoff, checkouton, collectionoff, collectionon, filteroff, filteron, morebigscreen, moreoff, price1, pulse, searchin, searchoff, searchon, timedot, timefilter, timeselect, timeslider, triangleblack, trianglewhite;

Framer.Device.deviceType = "fullscreen";

timeselect = 0.2;

timeslider = 0.4;

searchin = 0.4;

timedot = 0.4;

timefilter = 0.5;

price1 = 50;

pulse = require('pulse');

Bg = new Layer({
  backgroundColor: "transparent",
  width: 1280,
  height: 700
});

Menu = new Layer({
  x: 0,
  y: 0,
  width: 50,
  height: 700,
  backgroundColor: "#000000"
});

Menugray = new Layer({
  x: 48,
  y: 0,
  width: 2,
  height: 700,
  opacity: 0.4,
  backgroundColor: "#535e65"
});

Profile = new Layer({
  x: 12,
  y: 12,
  width: 25,
  height: 25,
  borderRadius: 15,
  image: "images/profile.jpg"
});

IconSearch = new Layer({
  x: 14,
  y: 65,
  width: 25,
  height: 25,
  image: "images/search.svg"
});

IconCollection = new Layer({
  x: 12,
  y: 112,
  width: 25,
  height: 25,
  image: "images/collection.svg"
});

IconBuy = new Layer({
  x: 12,
  y: 162,
  width: 25,
  height: 25,
  image: "images/cart.svg"
});

IconSettings = new Layer({
  x: 12,
  y: 1712,
  width: 25,
  height: 25,
  image: "images/settings.svg"
});

IconMore = new Layer({
  x: 14,
  y: 665,
  width: 20,
  height: 20,
  image: "images/more.svg",
  backgroundColor: "transparent"
});

IconSeparator1 = new Layer({
  x: 0,
  y: 50,
  width: 50,
  height: 1,
  opacity: 0.4,
  backgroundColor: "#535e65"
});

IconSeparator2 = new Layer({
  x: 0,
  y: 100,
  width: 50,
  height: 1,
  opacity: 0.4,
  backgroundColor: "#535e65"
});

IconSeparator3 = new Layer({
  x: 0,
  y: 150,
  width: 50,
  height: 1,
  opacity: 0.4,
  backgroundColor: "#535e65"
});

IconSeparator4 = new Layer({
  x: 0,
  y: 200,
  width: 50,
  height: 1,
  opacity: 0.4,
  backgroundColor: "#535e65"
});

IconSeparator5 = new Layer({
  x: 0,
  y: 150,
  width: 50,
  height: 1,
  opacity: 0,
  backgroundColor: "#535e65"
});

IconSeparator6 = new Layer({
  x: 0,
  y: 650,
  width: 50,
  height: 1,
  opacity: 0,
  backgroundColor: "#535e65"
});

IconSelector = new Layer({
  x: 0,
  y: 50,
  width: 50,
  height: 50,
  backgroundColor: "#0072ff"
});

MenuTriangle = new Layer({
  x: 0,
  y: 50,
  width: 50,
  height: 50,
  image: "images/triangle_white.png"
});

MenuTriangleb = new Layer({
  x: 0,
  y: 50,
  width: 50,
  height: 50,
  opacity: 0,
  image: "images/triangle.png"
});

SearchBar = new Layer({
  x: 50,
  y: 0,
  opacity: 0,
  width: 1180,
  height: 50,
  backgroundColor: "#ffffff"
});

SearchInput = new Layer({
  x: 70,
  y: 12,
  opacity: 0,
  width: 250,
  height: 50,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 24px'>Amsterdam</span>"
});

SearchBG = new Layer({
  x: 50,
  y: 50,
  width: 1230,
  height: 650,
  opacity: 0,
  image: "images/bg.png"
});

SearchFilter = new Layer({
  x: 18,
  y: 118,
  width: 15,
  height: 15,
  opacity: 0.6,
  image: "images/filter.svg",
  visible: false
});

SearchFilters = new Layer({
  x: 18,
  y: 118,
  opacity: 1,
  width: 15,
  height: 15,
  image: "images/filter.svg",
  visible: false
});

HoverInfo = new Layer({
  x: 544,
  y: 53,
  visible: false,
  width: 242,
  height: 145,
  backgroundColor: "transparent"
});

HoverImage = new Layer({
  x: 544,
  y: 53,
  opacity: 0,
  width: 242,
  height: 145,
  image: "images/imageinfo.png"
});

HoverHelp = new Layer({
  x: 789,
  y: 53,
  opacity: 0,
  width: 242,
  height: 145,
  image: "images/number1.png"
});

HoverInfo2 = new Layer({
  x: 544,
  y: 203,
  visible: false,
  width: 242,
  height: 145,
  backgroundColor: "transparent"
});

HoverImage2 = new Layer({
  x: 544,
  y: 203,
  opacity: 0,
  width: 242,
  height: 145,
  image: "images/imageinfo2.png"
});

HoverHelp2 = new Layer({
  x: 789,
  y: 203,
  opacity: 0,
  width: 242,
  height: 145,
  image: "images/number2.png"
});

HoverInfo3 = new Layer({
  x: 544,
  y: 353,
  visible: false,
  width: 242,
  height: 145,
  backgroundColor: "transparent"
});

HoverImage3 = new Layer({
  x: 544,
  y: 353,
  opacity: 0,
  width: 242,
  height: 145,
  image: "images/imageinfo3.png"
});

HoverHelp3 = new Layer({
  x: 789,
  y: 353,
  opacity: 0,
  width: 242,
  height: 145,
  image: "images/number3.png"
});

HoverInfo4 = new Layer({
  x: 544,
  y: 501,
  visible: false,
  width: 242,
  height: 145,
  backgroundColor: "transparent"
});

HoverImage4 = new Layer({
  x: 544,
  y: 501,
  opacity: 0,
  width: 242,
  height: 145,
  image: "images/imageinfo4.png"
});

HoverHelp4 = new Layer({
  x: 789,
  y: 501,
  opacity: 0,
  width: 242,
  height: 145,
  image: "images/number4.png"
});

Filter = new Layer({
  x: -300,
  y: 0,
  opacity: 1,
  width: 200,
  height: 700,
  backgroundColor: "#000000"
});

FilterGroupA = new Layer({
  x: -300,
  y: 0,
  width: 200,
  height: 600,
  image: "images/filters.png"
});

SearchActive = new Layer({
  x: 50,
  y: 50,
  width: 1230,
  height: 650,
  opacity: 0,
  backgroundColor: "#ffffff"
});

SearchActiveA = new Layer({
  x: 50,
  y: 50,
  width: 1230,
  height: 280,
  opacity: 0,
  image: "images/searchsuggest.png"
});

SearchActiveB = new Layer({
  x: 50,
  y: 380,
  width: 1230,
  height: 280,
  opacity: 0,
  image: "images/mycollections.png"
});

CheckoutOverview = new Layer({
  x: 150,
  y: 60,
  width: 1030,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 20px'>Unpaid</span>"
});

CheckoutSlash = new Layer({
  x: 260,
  y: 60,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 20px'>|</span>"
});

CheckoutPaid = new Layer({
  x: 300,
  y: 60,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 20px'>Paid</span>"
});

CheckoutImageText = new Layer({
  x: 150,
  y: 125,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 14px'>Images</span>"
});

CheckoutDetailsText = new Layer({
  x: 450,
  y: 125,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 14px'>Details</span>"
});

CheckoutDetailsText = new Layer({
  x: 750,
  y: 125,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 14px'>Select</span>"
});

CheckoutDetailsText = new Layer({
  x: 1160,
  y: 125,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 14px'>Price</span>"
});

CheckoutImage1 = new Layer({
  x: 150,
  y: 150,
  width: 250,
  height: 160,
  opacity: 1,
  image: "images/newyork1.png"
});

CheckoutImage1Details1 = new Layer({
  x: 450,
  y: 150,
  width: 250,
  height: 120,
  opacity: 1,
  image: "images/details.png"
});

CheckoutImage2 = new Layer({
  x: 150,
  y: 350,
  width: 250,
  height: 160,
  opacity: 1,
  image: "images/newyork2.png"
});

CheckoutImage1Details2 = new Layer({
  x: 450,
  y: 350,
  width: 250,
  height: 120,
  opacity: 1,
  image: "images/details.png"
});

CheckoutDetailsPrice1 = new Layer({
  x: 1150,
  y: 152,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 20px'>50 €</span>"
});

CheckoutDetailsPrice2 = new Layer({
  x: 1150,
  y: 352,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 20px'>50 €</span>"
});

CheckoutSelect = new Layer({
  x: 750,
  y: 150,
  width: 250,
  height: 30,
  opacity: 1,
  borderRadius: 4,
  backgroundColor: "#334e5d"
});

CheckoutArrows = new Layer({
  x: 752,
  y: 146,
  width: 250,
  height: 30,
  opacity: 1,
  image: "images/arrows.png"
});

CheckoutSizeText = new Layer({
  x: 830,
  y: 155,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>500 x 339</span>"
});

CheckoutSelect2 = new Layer({
  x: 750,
  y: 350,
  width: 250,
  height: 30,
  opacity: 1,
  borderRadius: 4,
  backgroundColor: "#334e5d"
});

CheckoutArrows2 = new Layer({
  x: 752,
  y: 346,
  width: 250,
  height: 30,
  opacity: 1,
  image: "images/arrows.png"
});

CheckoutSizeText2 = new Layer({
  x: 830,
  y: 355,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>500 x 339</span>"
});

CheckoutSelector1 = new Layer({
  x: 750,
  y: 150,
  width: 50,
  height: 30,
  backgroundColor: "transparent"
});

CheckoutSelector2 = new Layer({
  x: 950,
  y: 150,
  width: 50,
  height: 30,
  backgroundColor: "transparent"
});

CheckoutSelector11 = new Layer({
  x: 750,
  y: 350,
  width: 50,
  height: 30,
  backgroundColor: "transparent"
});

CheckoutSelector22 = new Layer({
  x: 950,
  y: 350,
  width: 50,
  height: 30,
  backgroundColor: "transparent"
});

CheckoutSeparator = new Layer({
  x: 50,
  y: 550,
  width: 1200,
  height: 2,
  opacity: 0.6,
  borderRadius: 4,
  backgroundColor: "#000000"
});

CheckoutSeparator = new Layer({
  x: 50,
  y: 552,
  width: 1060,
  height: 130,
  image: "images/footer.png"
});

CheckoutSubtotal = new Layer({
  x: 1150,
  y: 552,
  width: 100,
  height: 50,
  opacity: 1,
  backgroundColor: "transparent",
  html: price1
});

CollectionBG = new Layer({
  x: 50,
  y: 0,
  width: 1200,
  height: 700,
  opacity: 0,
  image: "images/collection.png"
});

More = new Layer({
  x: -250,
  y: 650,
  width: 200,
  height: 50,
  opacity: 0,
  backgroundColor: "#000000"
});

MoreCover = new Layer({
  x: 50,
  y: 0,
  width: 1200,
  height: 200,
  opacity: 0,
  image: "images/morecover.png"
});

MoreText1 = new Layer({
  x: 70,
  y: 325,
  width: 1030,
  height: 50,
  opacity: 0,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 24px'>Terms of service</span>"
});

MoreText2 = new Layer({
  x: 70,
  y: 275,
  width: 1030,
  height: 50,
  opacity: 0,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 24px'>Privacy Policy</span>"
});

MoreText3 = new Layer({
  x: 70,
  y: 225,
  width: 1030,
  height: 50,
  opacity: 0,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 24px'>FAQ</span>"
});

Dot = new Layer({
  x: 25,
  y: 175,
  width: 0,
  height: 0,
  clip: false,
  borderRadius: 25,
  opacity: 0,
  backgroundColor: "transparent"
});

Menu.index = 10;

Profile.index = 1;

Menugray.index = 2;

IconSelector.index = 3;

IconSearch.index = 4;

IconCollection.index = 5;

IconBuy.index = 6;

IconSettings.index = 7;

IconMore.index = 8;

Filter.index = 9;

FilterGroupA.index = 9;

Menu.placeBefore(Filter);

Menugray.placeBefore(Menu);

Profile.placeBefore(Menu);

IconSearch.placeBefore(Menu);

IconCollection.placeBefore(Menu);

IconBuy.placeBefore(Menu);

IconMore.placeBefore(Menu);

IconSelector.placeBefore(Menu);

MenuTriangle.placeBefore(IconSelector);

MenuTriangle.placeBefore(Menugray);

MenuTriangleb.placeBefore(Menugray);

SearchFilter.placeBefore(Menu);

SearchFilters.placeBefore(Menu);

IconSeparator1.placeBefore(Menu);

IconSeparator2.placeBefore(Menu);

IconSeparator3.placeBefore(Menu);

IconSeparator4.placeBefore(Menu);

FilterGroupA.placeBefore(Filter);

SearchFilter.placeBefore(SearchInput);

SearchFilters.placeBefore(SearchInput);

More.placeBefore(CollectionBG);

More.placeBefore(SearchBG);

SearchActive.placeBefore(SearchBG);

SearchActiveA.placeBefore(SearchActive);

SearchActiveB.placeBefore(SearchActive);

HoverInfo.placeBefore(HoverImage);

IconCollection.states.add({
  one: {
    y: 112
  },
  two: {
    y: 162
  }
});

IconSeparator3.states.add({
  one: {
    y: 150
  },
  two: {
    y: 200
  }
});

IconBuy.states.add({
  one: {
    y: 162
  },
  two: {
    y: 212
  }
});

IconSeparator4.states.add({
  one: {
    y: 200
  },
  two: {
    y: 250
  }
});

IconSeparator5.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 0.4
  }
});

MenuTriangle.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

MenuTriangleb.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

SearchBar.states.add({
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

SearchInput.states.add({
  one: {
    opacity: 0
  },
  two: {
    opacity: 1,
    y: 12,
    x: 70
  },
  three: {
    x: 310
  }
});

SearchBG.states.add({
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

SearchFilter.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

SearchFilters.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

Filter.states.add({
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

FilterGroupA.states.add({
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

SearchActive.states.add({
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

SearchActiveA.states.add({
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

SearchActiveB.states.add({
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

CollectionBG.states.add({
  one: {
    opacity: 0
  },
  two: {
    opacity: 1
  }
});

CheckoutSizeText.states.add({
  one: {
    html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>800 x 450</span>"
  },
  two: {
    html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>1000 x 678</span>"
  },
  three: {
    html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>3824 x 2592</span>"
  }
});

CheckoutSelect.states.add({
  one: {
    backgroundColor: '#37b29d'
  },
  two: {
    backgroundColor: '#f0c94c'
  },
  three: {
    backgroundColor: '#e37a3b'
  }
});

CheckoutDetailsPrice1.states.add({
  one: {
    html: "<span style='font-family: sans-serif; color: black; font-size: 18px'>75 €</span>"
  },
  two: {
    html: "<span style='font-family: sans-serif; color: black; font-size: 18px'>100 €</span>"
  },
  three: {
    html: "<span style='font-family: sans-serif; color: black; font-size: 18px'>125 €</span>"
  }
});

CheckoutSizeText2.states.add({
  one: {
    html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>800 x 450</span>"
  },
  two: {
    html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>1000 x 678</span>"
  },
  three: {
    html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>3824 x 2592</span>"
  }
});

CheckoutSelect2.states.add({
  one: {
    backgroundColor: '#37b29d'
  },
  two: {
    backgroundColor: '#f0c94c'
  },
  three: {
    backgroundColor: '#e37a3b'
  }
});

CheckoutDetailsPrice2.states.add({
  one: {
    html: "<span style='font-family: sans-serif; color: black; font-size: 18px'>75 €</span>"
  },
  two: {
    html: "<span style='font-family: sans-serif; color: black; font-size: 18px'>100 €</span>"
  },
  three: {
    html: "<span style='font-family: sans-serif; color: black; font-size: 18px'>125 €</span>"
  }
});

More.states.add({
  one: {
    x: -250
  },
  two: {
    x: 50
  }
});

Dot.states.add({
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

MoreCover.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

MoreText1.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

MoreText2.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

MoreText3.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

HoverInfo.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

HoverInfo2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

HoverInfo3.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

HoverInfo4.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

HoverImage.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

HoverHelp.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

HoverImage2.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

HoverHelp2.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

HoverImage3.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

HoverHelp3.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

HoverImage4.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

HoverHelp4.states.add({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
});

SearchBar.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

SearchInput.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

SearchBG.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

SearchFilter.states.animationOptions = {
  curve: "ease-in-out",
  time: timefilter
};

SearchFilters.states.animationOptions = {
  curve: "ease-in-out",
  time: timefilter
};

Filter.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

FilterGroupA.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

SearchActive.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

SearchActiveA.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

SearchActiveB.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

CollectionBG.states.animationOptions = {
  curve: "ease-in-out",
  time: timeslider
};

More.states.animationOptions = {
  curve: "ease-in-out",
  time: timeselect
};

MoreText1.states.animationOptions = {
  curve: "ease-in-out",
  time: timeselect
};

MoreText2.states.animationOptions = {
  curve: "ease-in-out",
  time: timeselect
};

MoreText3.states.animationOptions = {
  curve: "ease-in-out",
  time: timeselect
};

Dot.states.animationOptions = {
  curve: "spring(250,25,0)"
};

pulse.createPulse(Dot);

IconSearch.on(Events.Click, function() {
  trianglewhite();
  searchon();
  collectionoff();
  checkoutoff();
  return moreoff();
});

SearchFilter.on(Events.Click, function() {
  triangleblack();
  return filteron();
});

SearchFilters.on(Events.Click, function() {
  trianglewhite();
  return filteroff();
});

SearchInput.on(Events.Click, function() {
  SearchActive.states.next("visible", "hidden");
  SearchActiveA.states.next("visible", "hidden");
  SearchActiveB.states.next("visible", "hidden");
  return Dot.animate({
    properties: {
      y: 125,
      x: 15,
      curve: "ease-in-out",
      time: timedot
    }
  });
});

IconCollection.on(Events.Click, function() {
  moreoff();
  searchoff();
  trianglewhite();
  collectionon();
  return checkoutoff();
});

IconBuy.on(Events.Click, function() {
  moreoff();
  searchoff();
  collectionoff();
  trianglewhite();
  checkouton();
  return CollectionBG.states["switch"]("one");
});

IconMore.on(Events.Click, function() {
  morebigscreen();
  searchoff();
  searchoff();
  collectionoff();
  return checkoutoff();
});

searchon = function() {
  SearchBar.states["switch"]("two");
  SearchInput.states["switch"]("two");
  SearchBG.states["switch"]("two");
  SearchFilter.states["switch"]("visible");
  IconSeparator5.states["switch"]("visible");
  IconCollection.states["switch"]("two");
  IconSeparator3.states["switch"]("two");
  IconBuy.states["switch"]("two");
  IconSeparator4.states["switch"]("two");
  HoverInfo.states["switch"]("visible");
  HoverInfo2.states["switch"]("visible");
  HoverInfo3.states["switch"]("visible");
  HoverInfo4.states["switch"]("visible");
  IconSelector.animate({
    properties: {
      y: 50
    },
    curve: "ease-in-out",
    time: timeselect
  });
  MenuTriangle.animate({
    properties: {
      y: 50
    },
    curve: "ease-in-out",
    time: timeselect
  });
  return Dot.animate({
    properties: {
      y: 100,
      x: 600
    },
    curve: "ease-in-out",
    time: timedot
  });
};

searchoff = function() {
  SearchBar.states.next("one");
  SearchInput.states.next("one");
  SearchFilter.states["switch"]("hidden");
  SearchFilters.states["switch"]("hidden");
  SearchBG.states.next("one");
  Filter.states["switch"]("one");
  FilterGroupA.states["switch"]("one");
  SearchActive.states["switch"]("hidden");
  SearchActiveA.states["switch"]("hidden");
  SearchActiveB.states["switch"]("hidden");
  IconSeparator5.states["switch"]("hidden");
  IconCollection.states["switch"]("one");
  IconSeparator3.states["switch"]("one");
  IconBuy.states["switch"]("one");
  return IconSeparator4.states["switch"]("one");
};

filteron = function() {
  SearchBar.states["switch"]("three");
  SearchInput.states["switch"]("three");
  SearchBG.states["switch"]("three");
  SearchFilter.states["switch"]("hidden");
  SearchFilters.states["switch"]("visible");
  IconSeparator5.states["switch"]("visible");
  SearchActive.states["switch"]("two");
  SearchActiveA.states["switch"]("two");
  SearchActiveB.states["switch"]("two");
  Filter.states["switch"]("two");
  FilterGroupA.states["switch"]("two");
  Dot.animate({
    properties: {
      y: 18,
      x: 275
    },
    curve: "ease-in-out",
    time: timedot
  });
  return MenuTriangle.animate({
    properties: {
      images: "images/triangle.png"
    }
  });
};

filteroff = function() {
  SearchBar.states["switch"]("two");
  SearchInput.states["switch"]("two");
  SearchBG.states["switch"]("two");
  SearchFilters.states["switch"]("hidden");
  SearchFilter.states["switch"]("visible");
  SearchActive.states["switch"]("one");
  SearchActiveA.states["switch"]("one");
  SearchActiveB.states["switch"]("one");
  Filter.states["switch"]("one");
  FilterGroupA.states["switch"]("one");
  return Dot.animate({
    properties: {
      y: 18,
      x: 105
    },
    curve: "ease-in-out",
    time: timedot
  });
};

collectionon = function() {
  CollectionBG.states["switch"]("two");
  IconSelector.animate({
    properties: {
      y: 100
    },
    curve: "ease-in-out",
    time: timeselect
  });
  MenuTriangle.animate({
    properties: {
      y: 100
    },
    curve: "ease-in-out",
    time: timeselect
  });
  return Dot.animate({
    properties: {
      y: 175,
      x: 15
    },
    curve: "ease-in-out",
    time: timedot
  });
};

collectionoff = function() {
  return CollectionBG.states["switch"]("one");
};

checkouton = function() {
  IconSelector.animate({
    properties: {
      y: 150
    },
    curve: "ease-in-out",
    time: timeselect
  });
  MenuTriangle.animate({
    properties: {
      y: 150
    },
    curve: "ease-in-out",
    time: timeselect
  });
  return Dot.animate({
    properties: {
      y: 775,
      x: 15
    },
    curve: "ease-in-out",
    time: timedot
  });
};

checkoutoff = function() {};

trianglewhite = function() {
  MenuTriangle.states["switch"]("visible");
  return MenuTriangleb.states["switch"]("hidden");
};

triangleblack = function() {
  MenuTriangle.states["switch"]("hidden");
  return MenuTriangleb.states["switch"]("visible");
};

morebigscreen = function() {
  MoreCover.states["switch"]("visible");
  MoreText1.states["switch"]("visible");
  MoreText2.states["switch"]("visible");
  return MoreText3.states["switch"]("visible");
};

moreoff = function() {
  MoreCover.states["switch"]("hidden");
  MoreText1.states["switch"]("hidden");
  MoreText2.states["switch"]("hidden");
  return MoreText3.states["switch"]("hidden");
};

HoverInfo.on(Events.MouseOver, function() {
  HoverImage.states["switch"]("visible");
  HoverHelp.states["switch"]("visible");
  return Dot.animate({
    properties: {
      y: 250,
      x: 600
    },
    curve: "ease-in-out",
    time: timedot
  });
});

HoverInfo.on(Events.MouseOut, function() {
  HoverImage.states["switch"]("hidden");
  return HoverHelp.states["switch"]("hidden");
});

HoverInfo2.on(Events.MouseOver, function() {
  HoverImage2.states["switch"]("visible");
  HoverHelp2.states["switch"]("visible");
  return Dot.animate({
    properties: {
      y: 400,
      x: 600
    },
    curve: "ease-in-out",
    time: timedot
  });
});

HoverInfo2.on(Events.MouseOut, function() {
  HoverImage2.states["switch"]("hidden");
  return HoverHelp2.states["switch"]("hidden");
});

HoverInfo3.on(Events.MouseOver, function() {
  HoverImage3.states["switch"]("visible");
  HoverHelp3.states["switch"]("visible");
  return Dot.animate({
    properties: {
      y: 550,
      x: 600
    },
    curve: "ease-in-out",
    time: timedot
  });
});

HoverInfo3.on(Events.MouseOut, function() {
  HoverImage3.states["switch"]("hidden");
  return HoverHelp3.states["switch"]("hidden");
});

HoverInfo4.on(Events.MouseOver, function() {
  HoverImage4.states["switch"]("visible");
  HoverHelp4.states["switch"]("visible");
  return Dot.animate({
    properties: {
      opacity: 0
    },
    curve: "ease-in-out",
    time: timedot
  });
});

HoverInfo4.on(Events.MouseOut, function() {
  HoverImage4.states["switch"]("hidden");
  return HoverHelp4.states["switch"]("hidden");
});

CheckoutSelector2.on(Events.Click, function() {
  CheckoutSizeText.states.next("one", "two", "three");
  CheckoutDetailsPrice1.states.next("one", "two", "three");
  return CheckoutSelect.states.next("one", "two", "three");
});

CheckoutSelector1.on(Events.Click, function() {
  CheckoutSizeText.states.next("three", "two", "one");
  CheckoutDetailsPrice1.states.next("three", "two", "one");
  return CheckoutSelect.states.next("three", "two", "one");
});

CheckoutSelector22.on(Events.Click, function() {
  CheckoutSizeText2.states.next("one", "two", "three");
  CheckoutDetailsPrice2.states.next("one", "two", "three");
  return CheckoutSelect2.states.next("one", "two", "three");
});

CheckoutSelector11.on(Events.Click, function() {
  CheckoutSizeText2.states.next("three", "two", "one");
  CheckoutDetailsPrice2.states.next("three", "two", "one");
  return CheckoutSelect2.states.next("three", "two", "one");
});
