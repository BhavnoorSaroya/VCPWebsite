// Injects the navbar, and footer into the HTML doc
function injectTemplates() {
    $('#nav').load('../text/nav.html');
    $('#foot').load('../text/foot.html');
    console.log("injected the header and footer");
}

// Calls the inject_navfoot function
injectTemplates();


//this lil guy makes the bouncy arrow fade out when you scroll down
$(window).scroll(function(){
    $("#bouncyarrow").css("opacity", 1 - $(window).scrollTop() / 400); 
  //250 is fade pixels
  });
