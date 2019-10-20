
$(".saveBtn").on("click",function(){
    var value = $(this).siblings(".description").val();
    var time= $(this).parent().attr("id");
    localStorage.setItem(time,value);
})
 
  $("#hour1.description").val(localStorage.getItem("hour1"));
  $("#hour2.description").val(localStorage.getItem("hour2"));
  $("#hour3.description").val(localStorage.getItem("hour3"));
  $("#hour4.description").val(localStorage.getItem("hour4"));
  $("#hour5.description").val(localStorage.getItem("hour5"));
  $("#hour6.description").val(localStorage.getItem("hour6"));
  $("#hour7.description").val(localStorage.getItem("hour7"));
  $("#hour8.description").val(localStorage.getItem("hour8"));
  $("#hour9.description").val(localStorage.getItem("hour9"));
  
  $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm"));
 
  var currentHour = moment().hour();
 
  $(".time-block").each(function( index ) {
      console.log( index + ": " + $( this ) );
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);
      if(blockHour< currentHour){
     $(this).addClass("past");
      }
      else if (blockHour == currentHour) {
          $(this).addClass("present");
      }
      else {
        $(this).addClass("future");
      };
    });
 
    localStorage.setItem("description", JSON.stringify("description"));
    
   
    var event = JSON.parse(localStorage.getItem("description"));

    setInterval(function(){ 60000});