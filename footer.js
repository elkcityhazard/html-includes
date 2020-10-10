fetch("./header.html")
  .then(response => {
      console.log(response);
    return response.text()
  })
  .then(data => {
      let header = document.createElement('div');
      header.id = "main-header";
      document.querySelector('.container').prepend(header);
    header.innerHTML = data;
  });


fetch("./footer.html")
  .then(response => {
      console.log(response);
    return response.text()
  })
  .then(data => {
    document.querySelector(".container").innerHTML += data;
  });
