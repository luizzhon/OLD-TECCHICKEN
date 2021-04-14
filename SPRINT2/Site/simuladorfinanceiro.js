function simular() {
   
    
    var metro_quadrado = Number(in_metroquadrado.value);
    var qtd_galinhas = Number(in_galinhas.value);
   
    var preju_galinhas = qtd_galinhas*30;
    var perca_total = (metro_quadrado * 350) + preju_galinhas + 1000; 
    var economia_plano_mensal = perca_total - 5040;
    var economia_plano_anual = perca_total - 4200;

    var preju_galinhas = preju_galinhas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var perca_total = perca_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var economia_plano_mensal = economia_plano_mensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var economia_plano_anual = economia_plano_anual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    div_resultado.style.display = 'block'

    quantidade_galinhas.innerHTML = `${qtd_galinhas}`;
    prejuizo_galinhas.innerHTML = `${preju_galinhas}`
    economia_mensal.innerHTML = `${economia_plano_mensal}`;
    economia_anual.innerHTML = `${economia_plano_anual}`;
    
    p_total.innerHTML = `${perca_total}`;

  
}

// Um arduíno por 50m²
// Uma galinha por R$30,00
// Arduíno = R$50,00 + LM35 = R$20,00
// 350 R$ por m² 