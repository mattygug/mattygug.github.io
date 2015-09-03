var Bg, CheckoutAdyen, CheckoutAdyenBack, CheckoutAdyenProceed, CheckoutArrows, CheckoutArrows2, CheckoutBilling, CheckoutBillingBack, CheckoutBillingProceed, CheckoutDetailsPrice1, CheckoutDetailsPrice2, CheckoutDetailsText, CheckoutDownload, CheckoutDownloadBack, CheckoutFooter, CheckoutGotocart, CheckoutImage1, CheckoutImage1Details1, CheckoutImage1Details2, CheckoutImage2, CheckoutImageText, CheckoutPriceText, CheckoutProgress1, CheckoutProgress2, CheckoutProgress3, CheckoutProgress4, CheckoutSelect, CheckoutSelect2, CheckoutSelectText, CheckoutSelector1, CheckoutSelector11, CheckoutSelector2, CheckoutSelector22, CheckoutSeparator, CheckoutSizeText, CheckoutSizeText2, CheckoutSummaryBack, CollectionBG, Dot, Filter, FilterGroupA, IconBuy, IconCollection, IconMore, IconSearch, IconSelector, IconSeparator1, IconSeparator2, IconSeparator3, IconSeparator4, IconSeparator5, IconSeparator6, IconSettings, Menu, MenuTriangle, MenuTriangleb, Menugray, More, MoreCover, MoreText1, MoreText2, MoreText3, Profile, SearchActive, SearchActiveA, SearchActiveB, SearchBG, SearchBar, SearchBuyOverlay, SearchFilter, SearchFilters, SearchFsAddtocart, SearchFsArrowsLeft, SearchFsArrowsRight, SearchFsBG, SearchFsBG2, SearchFsGotocart, SearchFsImage, SearchFsInfo, SearchFsLicense, SearchFsLicense2, SearchFsLicense3, SearchFsLicensePrice, SearchFsLicensePriceLabel, SearchFsLicenseText, SearchFsLicenseText2, SearchFsLicenseText3, SearchFsMore, SearchFsSelect, SearchFsSeparator, SearchFsText, SearchInput, SearchMouseover, SearchOverlay, adyenoff, adyenon, billingoff, billingon, checkoutprgressoff, chprogress1on, chprogress2on, chprogress3on, chprogress4on, collectionoff, collectionon, downloadoff, downloadon, filteroff, filteron, fsimagemore, fullscreenoff, fullscreenon, imageoff, morebigscreen, moreoff, price1, pulse, searchin, searchoff, searchon, summaryoff, summaryon, timedot, timefilter, timeselect, timeslider, triangleblack, trianglewhite;

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

SearchMouseover = new Layer({
  x: 299,
  y: 351,
  opacity: 1,
  width: 242,
  height: 145,
  visible: false,
  backgroundColor: "transparent"
});

SearchBuyOverlay = new Layer({
  x: 299,
  y: 351,
  opacity: 1,
  width: 242,
  height: 145,
  visible: false,
  image: "images/imageinfo2.png"
});

SearchOverlay = new Layer({
  x: 50,
  y: 0,
  opacity: 0.85,
  width: 1250,
  height: 700,
  visible: false,
  backgroundColor: "#090909"
});

SearchFsBG2 = new Layer({
  x: 709,
  y: 71,
  opacity: 1,
  width: 275,
  height: 474,
  visible: false,
  backgroundColor: "#ffffff"
});

SearchFsMore = new Layer({
  x: 984,
  y: 71,
  opacity: 1,
  width: 40,
  height: 40,
  visible: false,
  image: "images/more_fullscreen.png"
});

SearchFsLicense = new Layer({
  x: 735,
  y: 90,
  width: 30,
  height: 30,
  opacity: 1,
  visible: false,
  image: "images/check.png"
});

SearchFsLicenseText = new Layer({
  x: 785,
  y: 93,
  width: 125,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: #414042; font-size: 18px'>Royalty Free</span>"
});

SearchFsLicense2 = new Layer({
  x: 735,
  y: 130,
  width: 30,
  height: 30,
  opacity: 1,
  visible: false,
  image: "images/check.png"
});

SearchFsLicenseText2 = new Layer({
  x: 785,
  y: 133,
  width: 125,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: #414042; font-size: 18px'>Worldwide use</span>"
});

SearchFsLicense3 = new Layer({
  x: 735,
  y: 170,
  width: 30,
  height: 30,
  opacity: 1,
  visible: false,
  image: "images/uncheck.png"
});

SearchFsLicenseText3 = new Layer({
  x: 785,
  y: 173,
  width: 125,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: #414042; font-size: 18px'>All Media</span>"
});

SearchFsSelect = new Layer({
  x: 735,
  y: 225,
  width: 220,
  height: 30,
  opacity: 1,
  borderRadius: 4,
  visible: false,
  borderColor: "#334e5d",
  backgroundColor: "transparent"
});

SearchFsSelect.style["border"] = "2px solid #334e5d";

SearchFsArrowsLeft = new Layer({
  x: 735,
  y: 226,
  width: 30,
  height: 30,
  opacity: 1,
  visible: false,
  image: "images/arrow_left_tr.png"
});

SearchFsArrowsRight = new Layer({
  x: 927,
  y: 226,
  width: 30,
  height: 30,
  opacity: 1,
  visible: false,
  image: "images/arrow_right_tr.png"
});

SearchFsText = new Layer({
  x: 805,
  y: 230,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: #334e5d; font-size: 18px'>500 x 339</span>"
});

SearchFsLicensePriceLabel = new Layer({
  x: 735,
  y: 270,
  width: 125,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: #414042; font-size: 20px'>Price:</span>"
});

SearchFsLicensePrice = new Layer({
  x: 909,
  y: 270,
  width: 125,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: #414042; font-size: 20px'>50 €</span>"
});

SearchFsGotocart = new Layer({
  x: 803,
  y: 320,
  width: 150,
  height: 35,
  opacity: 1,
  visible: false,
  image: "images/gotocart.png"
});

SearchFsAddtocart = new Layer({
  x: 735,
  y: 323,
  width: 31,
  height: 30,
  opacity: 0.6,
  visible: false,
  image: "images/addtocart3.png"
});

SearchFsSeparator = new Layer({
  x: 709,
  y: 380,
  height: 2,
  width: 275,
  visible: false,
  opacity: 0.7,
  backgroundColor: "#414042"
});

SearchFsInfo = new Layer({
  x: 715,
  y: 382,
  height: 160,
  width: 275,
  visible: false,
  opacity: 0.7,
  image: "images/info.png"
});

SearchFsBG = new Layer({
  x: 276,
  y: 71,
  opacity: 1,
  width: 708,
  height: 474,
  visible: false,
  backgroundColor: "#ffffff"
});

SearchFsImage = new Layer({
  x: 280,
  y: 75,
  opacity: 1,
  width: 700,
  height: 466,
  visible: false,
  image: "images/amsterdam1.png"
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

CheckoutProgress1 = new Layer({
  x: 150,
  y: 25,
  width: 1060,
  height: 80,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  image: "images/progress1.png"
});

CheckoutProgress2 = new Layer({
  x: 150,
  y: 25,
  width: 1060,
  height: 80,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  image: "images/progress2.png"
});

CheckoutProgress3 = new Layer({
  x: 150,
  y: 25,
  width: 1060,
  height: 80,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  image: "images/progress3.png"
});

CheckoutProgress4 = new Layer({
  x: 150,
  y: 25,
  width: 1060,
  height: 80,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  image: "images/progress4.png"
});

CheckoutImageText = new Layer({
  x: 150,
  y: 125,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 14px'>Images</span>"
});

CheckoutDetailsText = new Layer({
  x: 450,
  y: 125,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 14px'>Details</span>"
});

CheckoutSelectText = new Layer({
  x: 750,
  y: 125,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 14px'>Select</span>"
});

CheckoutPriceText = new Layer({
  x: 1160,
  y: 125,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 14px'>Price</span>"
});

CheckoutImage1 = new Layer({
  x: 150,
  y: 150,
  width: 250,
  height: 160,
  opacity: 1,
  visible: false,
  image: "images/newyork1.png"
});

CheckoutImage1Details1 = new Layer({
  x: 450,
  y: 150,
  width: 250,
  height: 120,
  opacity: 1,
  visible: false,
  image: "images/details.png"
});

CheckoutImage2 = new Layer({
  x: 150,
  y: 350,
  width: 250,
  height: 160,
  opacity: 1,
  visible: false,
  image: "images/newyork2.png"
});

CheckoutImage1Details2 = new Layer({
  x: 450,
  y: 350,
  width: 250,
  height: 120,
  opacity: 1,
  visible: false,
  image: "images/details.png"
});

CheckoutDetailsPrice1 = new Layer({
  x: 1150,
  y: 152,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; font-size: 20px'>50 €</span>"
});

CheckoutDetailsPrice2 = new Layer({
  x: 1150,
  y: 352,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
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
  visible: false,
  backgroundColor: "#334e5d"
});

CheckoutArrows = new Layer({
  x: 752,
  y: 146,
  width: 250,
  height: 30,
  opacity: 1,
  visible: false,
  image: "images/arrows.png"
});

CheckoutSizeText = new Layer({
  x: 830,
  y: 155,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
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
  visible: false,
  backgroundColor: "#334e5d"
});

CheckoutArrows2 = new Layer({
  x: 752,
  y: 346,
  width: 250,
  height: 30,
  opacity: 1,
  visible: false,
  image: "images/arrows.png"
});

CheckoutSizeText2 = new Layer({
  x: 830,
  y: 355,
  width: 100,
  height: 50,
  opacity: 1,
  visible: false,
  backgroundColor: "transparent",
  html: "<span style='font-family: sans-serif; color: white; font-size: 18px'>500 x 339</span>"
});

CheckoutSelector1 = new Layer({
  x: 750,
  y: 150,
  width: 50,
  height: 30,
  visible: false,
  backgroundColor: "transparent"
});

CheckoutSelector2 = new Layer({
  x: 950,
  y: 150,
  width: 50,
  height: 30,
  visible: false,
  backgroundColor: "transparent"
});

CheckoutSelector11 = new Layer({
  x: 750,
  y: 350,
  width: 50,
  height: 30,
  visible: false,
  backgroundColor: "transparent"
});

CheckoutSelector22 = new Layer({
  x: 950,
  y: 350,
  width: 50,
  height: 30,
  visible: false,
  backgroundColor: "transparent"
});

CheckoutSeparator = new Layer({
  x: 50,
  y: 535,
  width: 1200,
  height: 2,
  opacity: 0.4,
  borderRadius: 4,
  visible: false,
  backgroundColor: "#000000"
});

CheckoutFooter = new Layer({
  x: 50,
  y: 520,
  width: 1160,
  height: 130,
  visible: false,
  image: "images/checkout_footer.png"
});

CheckoutGotocart = new Layer({
  x: 1060,
  y: 660,
  width: 150,
  height: 35,
  opacity: 1,
  visible: false,
  image: "images/gotocart.png"
});

CheckoutSummaryBack = new Layer({
  x: 1060,
  y: 100,
  width: 150,
  height: 35,
  opacity: 1,
  visible: false,
  image: "images/stepback.png"
});

CheckoutBilling = new Layer({
  x: 150,
  y: 100,
  width: 1060,
  height: 400,
  opacity: 1,
  visible: false,
  image: "images/billing.png"
});

CheckoutBillingProceed = new Layer({
  x: 1060,
  y: 450,
  width: 150,
  height: 35,
  opacity: 1,
  visible: false,
  image: "images/gotocart.png"
});

CheckoutBillingBack = new Layer({
  x: 150,
  y: 550,
  width: 150,
  height: 35,
  opacity: 1,
  visible: false,
  image: "images/stepback.png"
});

CheckoutAdyen = new Layer({
  x: 450,
  y: 100,
  width: 450,
  height: 600,
  opacity: 1,
  visible: false,
  image: "images/adyen1.png"
});

CheckoutAdyenProceed = new Layer({
  x: 1060,
  y: 600,
  width: 150,
  height: 35,
  opacity: 1,
  visible: false,
  image: "images/gotocart.png"
});

CheckoutAdyenBack = new Layer({
  x: 150,
  y: 650,
  width: 150,
  height: 35,
  opacity: 1,
  visible: false,
  image: "images/stepback.png"
});

CheckoutDownload = new Layer({
  x: 150,
  y: 100,
  width: 1000,
  height: 300,
  opacity: 1,
  visible: false,
  image: "images/past orders.png"
});

CheckoutDownloadBack = new Layer({
  x: 150,
  y: 400,
  width: 150,
  height: 35,
  opacity: 1,
  visible: false,
  image: "images/stepback.png"
});

CollectionBG = new Layer({
  x: 50,
  y: 0,
  width: 1200,
  height: 550,
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
  y: 75,
  width: 0,
  height: 0,
  clip: false,
  borderRadius: 25,
  opacity: 1,
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

CheckoutSeparator.placeBefore(CheckoutFooter);

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

SearchMouseover.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

SearchBuyOverlay.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

SearchOverlay.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

SearchFsBG.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 276
  },
  two: {
    x: 176
  }
});

SearchFsBG2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 709
  },
  two: {
    x: 884
  }
});

SearchFsImage.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 280
  },
  two: {
    x: 180
  }
});

SearchFsMore.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 984,
    image: "images/more_fullscreen.png"
  },
  two: {
    x: 1118,
    image: "images/arrow_left.png"
  }
});

SearchFsLicense.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 735
  },
  two: {
    x: 910
  }
});

SearchFsLicenseText.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 785
  },
  two: {
    x: 960
  }
});

SearchFsLicense2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 735
  },
  two: {
    x: 910
  }
});

SearchFsLicenseText2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 785
  },
  two: {
    x: 960
  }
});

SearchFsLicense3.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 735
  },
  two: {
    x: 910
  }
});

SearchFsLicenseText3.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 785
  },
  two: {
    x: 960
  }
});

SearchFsSelect.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 735
  },
  two: {
    x: 910
  }
});

SearchFsArrowsLeft.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 735
  },
  two: {
    x: 910
  }
});

SearchFsArrowsRight.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 927
  },
  two: {
    x: 1102
  }
});

SearchFsText.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    html: "<span style='font-family: sans-serif; color: #334e5d; font-size: 18px'>800 x 450</span>"
  },
  two: {
    html: "<span style='font-family: sans-serif; color: #334e5d; font-size: 18px'>1000 x 678</span>"
  },
  three: {
    html: "<span style='font-family: sans-serif; color: #334e5d; font-size: 18px'>3824 x 2592</span>"
  },
  left: {
    x: 805
  },
  right: {
    x: 980
  }
});

SearchFsLicensePriceLabel.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 735
  },
  two: {
    x: 910
  }
});

SearchFsLicensePrice.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    html: "<span style='font-family: sans-serif; color: #414042; font-size: 20px'>50 €</span>"
  },
  two: {
    html: "<span style='font-family: sans-serif; color: #414042; font-size: 20px'>60 €</span>"
  },
  three: {
    html: "<span style='font-family: sans-serif; color: #414042; font-size: 20px'>70 €</span>"
  },
  left: {
    x: 909
  },
  right: {
    x: 1084
  }
});

SearchFsAddtocart.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 735
  },
  two: {
    x: 910
  }
});

SearchFsGotocart.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 803
  },
  two: {
    x: 978
  },
  inactive: {
    image: "images/gotocart.png"
  },
  active: {
    image: "images/gotocart1.png"
  }
});

SearchFsSeparator.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 709
  },
  two: {
    x: 884
  }
});

SearchFsInfo.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  },
  one: {
    x: 715
  },
  two: {
    x: 890
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

CheckoutProgress1.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutProgress2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutProgress3.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutProgress4.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutImageText.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutDetailsText.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSelectText.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutPriceText.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutImage1.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutImage1Details1.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutImage2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutImage1Details2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutDetailsPrice1.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutDetailsPrice2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSelect.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutArrows.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSizeText.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSelect2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutArrows2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSizeText2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSelector1.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSelector2.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSelector11.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSelector22.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSeparator.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutFooter.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutGotocart.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutBilling.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutBillingProceed.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutAdyen.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutAdyenProceed.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutDownload.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutSummaryBack.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutBillingBack.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutAdyenBack.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
  }
});

CheckoutDownloadBack.states.add({
  hidden: {
    visible: false
  },
  visible: {
    visible: true
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
  moreoff();
  summaryoff();
  billingoff();
  adyenoff();
  downloadoff();
  checkoutprgressoff();
  return Dot.animate({
    properties: {
      x: 400,
      y: 400
    },
    curve: "ease-in-out",
    time: timedot
  });
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
  summaryoff();
  billingoff();
  adyenoff();
  downloadoff();
  return checkoutprgressoff();
});

IconBuy.on(Events.Click, function() {
  moreoff();
  searchoff();
  collectionoff();
  trianglewhite();
  summaryon();
  chprogress1on();
  return CollectionBG.states["switch"]("one");
});

IconMore.on(Events.Click, function() {
  morebigscreen();
  searchoff();
  searchoff();
  collectionoff();
  summaryoff();
  billingoff();
  adyenoff();
  downloadoff();
  return checkoutprgressoff();
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
  SearchMouseover.states["switch"]("visible");
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
  IconSeparator4.states["switch"]("one");
  return SearchMouseover.states["switch"]("hidden");
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

summaryon = function() {
  CheckoutProgress1.states["switch"]("visible");
  CheckoutImageText.states["switch"]("visible");
  CheckoutDetailsText.states["switch"]("visible");
  CheckoutSelectText.states["switch"]("visible");
  CheckoutPriceText.states["switch"]("visible");
  CheckoutImage1.states["switch"]("visible");
  CheckoutImage1Details1.states["switch"]("visible");
  CheckoutImage2.states["switch"]("visible");
  CheckoutImage1Details2.states["switch"]("visible");
  CheckoutDetailsPrice1.states["switch"]("visible");
  CheckoutDetailsPrice2.states["switch"]("visible");
  CheckoutSelect.states["switch"]("visible");
  CheckoutArrows.states["switch"]("visible");
  CheckoutSizeText.states["switch"]("visible");
  CheckoutSelect2.states["switch"]("visible");
  CheckoutArrows2.states["switch"]("visible");
  CheckoutSizeText2.states["switch"]("visible");
  CheckoutSelector1.states["switch"]("visible");
  CheckoutSelector2.states["switch"]("visible");
  CheckoutSelector11.states["switch"]("visible");
  CheckoutSelector22.states["switch"]("visible");
  CheckoutSeparator.states["switch"]("visible");
  CheckoutFooter.states["switch"]("visible");
  CheckoutGotocart.states["switch"]("visible");
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

summaryoff = function() {
  CheckoutImageText.states["switch"]("hidden");
  CheckoutDetailsText.states["switch"]("hidden");
  CheckoutSelectText.states["switch"]("hidden");
  CheckoutPriceText.states["switch"]("hidden");
  CheckoutImage1.states["switch"]("hidden");
  CheckoutImage1Details1.states["switch"]("hidden");
  CheckoutImage2.states["switch"]("hidden");
  CheckoutImage1Details2.states["switch"]("hidden");
  CheckoutDetailsPrice1.states["switch"]("hidden");
  CheckoutDetailsPrice2.states["switch"]("hidden");
  CheckoutSelect.states["switch"]("hidden");
  CheckoutArrows.states["switch"]("hidden");
  CheckoutSizeText.states["switch"]("hidden");
  CheckoutSelect2.states["switch"]("hidden");
  CheckoutArrows2.states["switch"]("hidden");
  CheckoutSizeText2.states["switch"]("hidden");
  CheckoutSelector1.states["switch"]("hidden");
  CheckoutSelector2.states["switch"]("hidden");
  CheckoutSelector11.states["switch"]("hidden");
  CheckoutSelector22.states["switch"]("hidden");
  CheckoutSeparator.states["switch"]("hidden");
  CheckoutFooter.states["switch"]("hidden");
  return CheckoutGotocart.states["switch"]("hidden");
};

chprogress1on = function() {
  CheckoutProgress1.states["switch"]("visible");
  return CheckoutProgress2.states["switch"]("hidden");
};

chprogress2on = function() {
  CheckoutProgress1.states["switch"]("hidden");
  CheckoutProgress2.states["switch"]("visible");
  return CheckoutProgress3.states["switch"]("hidden");
};

chprogress3on = function() {
  CheckoutProgress2.states["switch"]("hidden");
  CheckoutProgress3.states["switch"]("visible");
  return CheckoutProgress4.states["switch"]("hidden");
};

chprogress4on = function() {
  CheckoutProgress3.states["switch"]("hidden");
  return CheckoutProgress4.states["switch"]("visible");
};

checkoutprgressoff = function() {
  CheckoutProgress1.states["switch"]("hidden");
  CheckoutProgress2.states["switch"]("hidden");
  CheckoutProgress3.states["switch"]("hidden");
  return CheckoutProgress4.states["switch"]("hidden");
};

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
  CheckoutSelect2.states.next("one", "two", "three");
  return Dot.animate({
    properties: {
      x: 1140,
      y: 667
    },
    curve: "ease-in-out",
    time: timedot
  });
});

CheckoutSelector11.on(Events.Click, function() {
  CheckoutSizeText2.states.next("three", "two", "one");
  CheckoutDetailsPrice2.states.next("three", "two", "one");
  return CheckoutSelect2.states.next("three", "two", "one");
});

SearchFsMore.on(Events.Click, function() {
  fsimagemore();
  return Dot.animate({
    properties: {
      x: 1120,
      y: 240
    },
    curve: "ease-in-out",
    time: timedot
  });
});

Profile.on(Events.Click, function() {
  return fullscreenon();
});

fsimagemore = function() {
  SearchFsBG.states.next("two", "one");
  SearchFsBG2.states.next("two", "one");
  SearchFsImage.states.next("two", "one");
  SearchFsMore.states.next("two", "one");
  SearchFsLicense.states.next("two", "one");
  SearchFsLicenseText.states.next("two", "one");
  SearchFsLicense2.states.next("two", "one");
  SearchFsLicenseText2.states.next("two", "one");
  SearchFsLicenseText3.states.next("two", "one");
  SearchFsLicense3.states.next("two", "one");
  SearchFsSelect.states.next("two", "one");
  SearchFsArrowsLeft.states.next("two", "one");
  SearchFsArrowsRight.states.next("two", "one");
  SearchFsText.states.next("right", "left");
  SearchFsLicensePriceLabel.states.next("two", "one");
  SearchFsLicensePrice.states.next("right", "left");
  SearchFsGotocart.states.next("two", "one");
  SearchFsAddtocart.states.next("two", "one");
  SearchFsSeparator.states.next("two", "one");
  return SearchFsInfo.states.next("two", "one");
};

imageoff = function() {
  return SearchFsBG.states["switch"]("hidden");
};

fullscreenon = function() {
  SearchFsBG.states["switch"]("visible");
  SearchFsBG2.states["switch"]("visible");
  SearchFsImage.states["switch"]("visible");
  SearchFsMore.states["switch"]("visible");
  SearchFsLicense.states["switch"]("visible");
  SearchFsLicenseText.states["switch"]("visible");
  SearchFsLicense2.states["switch"]("visible");
  SearchFsLicenseText2.states["switch"]("visible");
  SearchFsLicenseText3.states["switch"]("visible");
  SearchFsLicense3.states["switch"]("visible");
  SearchFsSelect.states["switch"]("visible");
  SearchFsArrowsLeft.states["switch"]("visible");
  SearchFsArrowsRight.states["switch"]("visible");
  SearchFsText.states["switch"]("visible");
  SearchFsLicensePriceLabel.states["switch"]("visible");
  SearchFsLicensePrice.states["switch"]("visible");
  SearchFsGotocart.states["switch"]("visible");
  SearchFsAddtocart.states["switch"]("visible");
  SearchFsSeparator.states["switch"]("visible");
  SearchFsInfo.states["switch"]("visible");
  return SearchOverlay.states["switch"]("visible");
};

fullscreenoff = function() {
  SearchFsBG.states["switch"]("hidden");
  SearchFsBG2.states["switch"]("hidden");
  SearchFsImage.states["switch"]("hidden");
  SearchFsMore.states["switch"]("hidden");
  SearchFsLicense.states["switch"]("hidden");
  SearchFsLicenseText.states["switch"]("hidden");
  SearchFsLicense2.states["switch"]("hidden");
  SearchFsLicenseText2.states["switch"]("hidden");
  SearchFsLicenseText3.states["switch"]("hidden");
  SearchFsLicense3.states["switch"]("hidden");
  SearchFsSelect.states["switch"]("hidden");
  SearchFsArrowsLeft.states["switch"]("hidden");
  SearchFsArrowsRight.states["switch"]("hidden");
  SearchFsText.states["switch"]("hidden");
  SearchFsLicensePriceLabel.states["switch"]("hidden");
  SearchFsLicensePrice.states["switch"]("hidden");
  SearchFsGotocart.states["switch"]("hidden");
  SearchFsAddtocart.states["switch"]("hidden");
  SearchFsSeparator.states["switch"]("hidden");
  SearchFsInfo.states["switch"]("hidden");
  return SearchOverlay.states["switch"]("hidden");
};

billingon = function() {
  CheckoutBilling.states["switch"]("visible");
  CheckoutBillingProceed.states["switch"]("visible");
  return CheckoutBillingBack.states["switch"]("visible");
};

billingoff = function() {
  CheckoutBilling.states["switch"]("hidden");
  CheckoutBillingProceed.states["switch"]("hidden");
  return CheckoutBillingBack.states["switch"]("hidden");
};

CheckoutGotocart.on(Events.Click, function() {
  summaryoff();
  billingon();
  chprogress2on();
  return Dot.animate({
    properties: {
      x: 1130,
      y: 460
    },
    curve: "ease-in-out",
    time: timedot
  });
});

CheckoutBillingBack.on(Events.Click, function() {
  summaryon();
  billingoff();
  return chprogress1on();
});

adyenon = function() {
  CheckoutAdyen.states["switch"]("visible");
  CheckoutAdyenProceed.states["switch"]("visible");
  return CheckoutAdyenBack.states["switch"]("visible");
};

adyenoff = function() {
  CheckoutAdyen.states["switch"]("hidden");
  CheckoutAdyenProceed.states["switch"]("hidden");
  return CheckoutAdyenBack.states["switch"]("hidden");
};

CheckoutBillingProceed.on(Events.Click, function() {
  billingoff();
  adyenon();
  chprogress3on();
  return Dot.animate({
    properties: {
      x: 1130,
      y: 600
    },
    curve: "ease-in-out",
    time: timedot
  });
});

CheckoutAdyenBack.on(Events.Click, function() {
  adyenoff();
  billingon();
  return chprogress2on();
});

downloadon = function() {
  CheckoutDownload.states["switch"]("visible");
  return CheckoutDownloadBack.states["switch"]("visible");
};

downloadoff = function() {
  CheckoutDownload.states["switch"]("hidden");
  return CheckoutDownloadBack.states["switch"]("hidden");
};

CheckoutAdyenProceed.on(Events.Click, function() {
  adyenoff();
  downloadon();
  chprogress4on();
  return Dot.animate({
    properties: {
      opacity: 0
    },
    curve: "ease-in-out",
    time: timedot
  });
});

CheckoutDownloadBack.on(Events.Click, function() {
  adyenon();
  downloadoff();
  return chprogress3on();
});

SearchFsGotocart.on(Events.MouseOver, function() {
  return SearchFsGotocart.states["switch"]("active");
});

SearchFsGotocart.on(Events.MouseOut, function() {
  return SearchFsGotocart.states["switch"]("inactive");
});

SearchFsArrowsRight.on(Events.Click, function() {
  SearchFsText.states.next("one", "two", "three");
  SearchFsLicensePrice.states.next("one", "two", "three");
  return Dot.animate({
    properties: {
      x: 1060,
      y: 340
    },
    curve: "ease-in-out",
    time: timedot
  });
});

SearchFsArrowsLeft.on(Events.Click, function() {
  SearchFsText.states.next("three", "two", "one");
  return SearchFsLicensePrice.states.next("three", "two", "one");
});

SearchFsGotocart.on(Events.Click, function() {
  moreoff();
  searchoff();
  fullscreenoff();
  collectionoff();
  trianglewhite();
  summaryon();
  chprogress1on();
  CollectionBG.states["switch"]("one");
  return Dot.animate({
    properties: {
      x: 999,
      y: 354
    },
    curve: "ease-in-out",
    time: timedot
  });
});

SearchFsAddtocart.on(Events.MouseOver, function() {
  return SearchFsAddtocart.animate({
    properties: {
      opacity: 1
    }
  });
});

SearchFsAddtocart.on(Events.MouseOut, function() {
  return SearchFsAddtocart.animate({
    properties: {
      opacity: 0.6
    }
  });
});

SearchOverlay.on(Events.Click, function() {
  return fullscreenoff();
});

SearchMouseover.on(Events.MouseOver, function() {
  SearchBuyOverlay.states["switch"]("visible");
  return Dot.animate({
    properties: {
      x: 480,
      y: 480
    },
    curve: "ease-in-out",
    time: timedot
  });
});

SearchMouseover.on(Events.MouseOut, function() {
  return SearchBuyOverlay.states["switch"]("hidden");
});

SearchMouseover.on(Events.Click, function() {
  fullscreenon();
  return Dot.animate({
    properties: {
      x: 1000,
      y: 80
    },
    curve: "ease-in-out",
    time: timedot
  });
});
