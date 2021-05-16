$(document).load(function () {
  // start up after 2sec no matter what
  document.setTimeout(function () {
    $("body").removeClass("animate").addClass("animte");
  }, 2000);
});
