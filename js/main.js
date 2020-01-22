function changeQuote(quoteId) {
  var quoteTag = document.getElementById("quotes");

  if (quoteId == "1") {
    quoteTag.innerHTML = '"Frase 1"<b>Pessoa 1</b>';
  } else if (quoteId == "2") {
    quoteTag.innerHTML = '"Frase 2"<b>Pessoa 2</b>';
  } else {
    quoteTag.innerHTML = '"Frase 3"<b>Pessoa 3</b>';
  }
}


function download_pdf() {
  var url = '../files/carnavalNoControle.pdf', name = 'Carnaval No Controle';
  download_file(url, name);
}

function download_file(fileURL, fileName) {
  // Outros Browsers
  if (!window.ActiveXObject) {
      var save = document.createElement('a');
      save.href = fileURL;
      save.target = '_blank';
      var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
      save.download = fileName || filename;
       if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
      document.location = save.href; 
    }else{
          var evt = new MouseEvent('click', {
              'view': window,
              'bubbles': true,
              'cancelable': false
          });
          save.dispatchEvent(evt);
          (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }	
  }

  // Internet Explorer
  else if ( !! window.ActiveXObject && document.execCommand)     {
      var _window = window.open(fileURL, '_blank');
      _window.document.close();
      _window.document.execCommand('SaveAs', true, fileName || fileURL)
      _window.close();
  }
}