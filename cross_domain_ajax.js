$(function(){
  $('#btn_name').on('click', function(e){

    $.getJSON("http://www.yourotherdomain.com/apifile.php?jsoncallback=?",
    {
      variable1: "maybe textbox value",
      variable2: "maybe textbox value",
      variable3: "maybe textbox value"
    },
    function(data) {
        var str = data['result'];
        alert(str);
    });


  });

});
