var shopDetail = {
  getItemDetail: function getItemDetail(selector) {
    if(selector === 'heading'){
      var header = '.detail h1';
      return header;
    }else{
      var p = '.detail div';
      return p;
    }
  }
};

module.exports = shopDetail;