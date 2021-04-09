function login() {
  var email1 = email.value;
  var senha1 = senha.value;
  if (email1 == "" || senha1 == "") {
    alert("Preencha todos os campos.");
  }
  else if (email1 == "admin" && senha1 == "123") {
    alert("Login Efetivado");
    window.location.href = "../NODE5/index.html";
    setTimeout("login()", 2500)
  }
  else {
    alert("Email ou senha incorretos.");
  }
}