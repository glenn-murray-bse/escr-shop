var shopDetail = {
  getItemDetail: function getItemDetail(selector) {
    if(selector === 'heading'){
      var header = '.detail h1';
      return header;
    }else{
      var el = '.detail .'+selector;
      return el;
    }
  },
  getField: function getField(args) {
    var milliseconds = args.millisecondsToWait ? args.millisecondsToWait : 0;
    var withinContainerCSSLocator = args.withinCSSselector || 'body';
    var labelCSSLocator = withinContainerCSSLocator + ' label';
    var fieldLabel = args.fieldLabel;

    return browser.wait(EC.visibilityOf(element(by.cssContainingText(labelCSSLocator, fieldLabel))), milliseconds)
        .then(function(){
          return element.all(by.cssContainingText(labelCSSLocator, fieldLabel)).get(0).getAttribute('for')
              .then(function(idForField) {
                return element(by.css(withinContainerCSSLocator)).element(by.id(idForField));
              });
        },function(reason){
          throw new Error('field with label ' + fieldLabel + ' was not found. Protactor message: ' + reason);
        });
  }
};

module.exports = shopDetail;