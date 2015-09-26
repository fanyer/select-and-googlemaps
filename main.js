$(function(){
  




var constructList= (function(){
    var count =1;
    var list = $('#list');//select
    var $contentSelect = $(Utils.getHtmlFromTemplate('maincontent'));
    var obj ={};
    for(var i= 0; i<advMetadata.length; i++){
        for(var k in advMetadata[i]){
          obj[k] = obj[k] || [];
          obj[k].push({value: advMetadata[i][k]});
        }
    }
      $(list).append($contentSelect);
    var $row,$cell;
    for(var key in options){
      $row = $(Utils.getHtmlFromTemplate('optgroup',[{label: options[key]}]));
        $contentSelect.append($row);
        $cell = $(Utils.getHtmlFromTemplate('option',obj[options[key]]));
        $row.append($cell);
     }
  })();
  //for select2.js
function formatState (state) {
  return state.text;
  var $state = $(
    '<span><img src="' + state.element.value.toLowerCase() + '.jpg" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};
  $('select').select2(
    {
      tags: true,
      templateResult: formatState,
      placeholder: "click tag to search",
      allowClear: true
  });

});








 

