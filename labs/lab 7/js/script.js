function init() {
  let content = document.getElementById("entrybutton");

  function myfunction() {
    let message = document.getElementById("entryinput").value;
    alert("De'Anquan: " + message);
    document.getElementById("textoutput").textContent = message;
  }
  content.addEventListener("click", myfunction);
}

window.addEventListener('load', init);