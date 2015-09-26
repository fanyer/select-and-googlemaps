var Utils = {
  getHtmlFromTemplate : function(id, data){
    var template = $('#'+id).html(),
      i = 0,
      len,
      fragment = '';

    if(!data){
      return template;
    }
    len = data.length;
    var replace = function(obj) {
      var t, key, reg;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          reg = new RegExp( '{{' + key + '}}', 'ig' );
          t = (t || template).replace( reg, obj[ key ] );
        }
      }

      return t;
    };
    for (; i < len; i++) {
      fragment += replace(data[i]);
    }
    return fragment;
  }
};