console.log("hello world")

$("#contactButton").click(function(){
  console.log("contact button clicked")
  $("#contactModal").modal("toggle");
});