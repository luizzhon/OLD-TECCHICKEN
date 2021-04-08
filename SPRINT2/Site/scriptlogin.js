function login() {
  var email1 = email.value;
  var senha1 = senha.value;
  if (email1 == "" || senha1 == "") {
    alert("Preencha todos os campos.");
  }
  else if (email1 == "granja@gmail.com" && senha1 == "123") {
    alert("Login Efetivado");
    window.location.href = "graficos.html";
    setTimeout("login()", 2500)
  }
  else {
    alert("Email ou senha incorretos.");
  }
}