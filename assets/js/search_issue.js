function myFunction() {
  var input, filter, ul, li, p, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("UL");
  li = ul.getElementsByTagName("ul");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
