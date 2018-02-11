function alertStatement(link) {
  if (link) {
    alert("A");
  }

  if (link != null) {
    alert("B");
  }
}

alertStatement('http://www.javascriptisfun.com');
