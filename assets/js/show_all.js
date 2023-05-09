$(document).ready(function () {
  $("#show").click(function () {
    for (i of Issue) {
      console.log(i.title);
    }
  });
});
