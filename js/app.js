var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big')
  this.nicknames = ko.observableArray([
    { nickname: "TabTab" },
    { nickname: "Mr. T" },
    { nickname: "T-Bone" }
  ])

  this.level = ko.computed(function() {
    if(this.clickCount() < 10) {
      return "Newborn"
    } else if (this.clickCount() >= 10 && this.clickCount() < 30) {
      return "Infant"
    } else {
      return "Teen"
    }
  }, this);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel())