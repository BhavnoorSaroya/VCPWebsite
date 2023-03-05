// Injects the navbar, and footer into the HTML doc
function injectTemplates() {
    $('#nav').load('../text/nav.html');
    $('#foot').load('../text/foot.html');
    console.log("injected the header and footer");
}

// Calls the inject_navfoot function
injectTemplates();
