function registerHandlers() {
    var as = document.getElementsByTagName('a');
    for (let i = 0; i < as.length; i++) {
      as[i].onclick = function() {
        alert(i);
        return false;
      }
    }
  }
  
  /* HTML code for testing purposes (do not submit uncommented):*/
  <body>
    <p>In my life, I used the following web search engines:</p><br/>
    <a href="//www.yahoo.com">Yahoo!</a><br/>
    <a href="//www.altavista.com">AltaVista</a><br/>
    <a href="//www.google.com">Google</a><br/>
  </body>