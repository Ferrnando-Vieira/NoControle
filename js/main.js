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
  window.open('../files/carnavalNoControle.pdf', '_blank');
}