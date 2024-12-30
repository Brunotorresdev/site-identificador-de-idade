function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (
    fano.value.length == 0 ||
    Number(fano.value) > ano ||
    Number(fano.value) <= 0
  ) {
    window.alert("ERRO Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "/assets/images/bebemasc.jpg");
      } else if (idade < 21) {
        //adolecente
        img.setAttribute("src", "/assets/images/jovemmasc.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "/assets/images/adultomasc.jpg");
      } else {
        //idoso
        img.setAttribute("src", "/assets/images/idosomasc.jpg");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "/assets/images/bebefem.jpg");
      } else if (idade < 21) {
        //adolecente
        img.setAttribute("src", "/assets/images/jovemfem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "/assets/images/adultofem.jpg");
      } else {
        //idoso
        img.setAttribute("src", "/assets/images/idosofem.jpg");
      }
    }
    res.style.textAlign = "Center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} Anos!`;
    res.appendChild(img);
  }
}
