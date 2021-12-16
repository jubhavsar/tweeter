$(document).ready(function() {
    // add event listener to the textarea.
   $("#tweet-text").keypress(function(e){
    // get the value user typed in.
    const text = $("#tweet-text").val();
    // get total length of text
        const totalChar = e.target.value.length;
    //const totalChar = $("#my-output").val(text.length);
    const output = 140 - totalChar;
    $('#my-output').text(output);
    if(output>0){
      $('#my-output').removeClass("red-counter");
    }
     if(output<0){
      $('#my-output').addClass("red-counter");

    }
  });
 
});