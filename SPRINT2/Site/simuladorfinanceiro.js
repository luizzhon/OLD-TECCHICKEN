function simular() {
    var metro_quadrado = Number(in_metroquadrado.value);
    var qtd_galinhas = Number(in_galinhas.value);
   
    var preju_galinhas = qtd_galinhas*30;
    var perca_total = (metro_quadrado * 350) + preju_galinhas + 1000; 
    var economia_plano_mensal = perca_total - 5040;
    var economia_plano_anual = perca_total - 4200;

    div_resultado.style.display = 'block'

    quantidade_galinhas.innerHTML = `${qtd_galinhas}`;
    prejuizo_galinhas.innerHTML = `R$${preju_galinhas.toFixed(2)};`
    economia_mensal.innerHTML = `R$${economia_plano_mensal.toFixed(2)}`;
    economia_anual.innerHTML = `R$${economia_plano_anual.toFixed(2)}`;
    
    p_total.innerHTML = `R$${perca_total.toFixed(2)}`;
}

// Um arduíno por 50m²
// Uma galinha por R$30,00
// Arduíno = R$50,00 + LM35 = R$20,00
// 350 R$ por m² 