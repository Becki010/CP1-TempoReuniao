function calcular (){
    // Declaração de variáveis
    let horaIni = parseInt(document.getElementById('horaIni').value);
    let minIni = parseInt(document.getElementById('minIni').value);
    let horaFim = parseInt(document.getElementById('horaFim').value);
    let minFim = parseInt(document.getElementById('minFim').value);

    // validaçãp de entrada
    if (
        horaIni < 0 || horaIni > 23 ||
        horaFim < 0 || horaFim > 23 ||
        minIni < 0 || minIni > 59 ||
        minFim < 0 || minFim > 59

    ){
        alert('Tente novamente: Horas (0 -23) , Minutos (0-59)');
        return;
    }


    // transformando tudo em minutos
    let inicio_min = horaIni * 60 + minIni
    let fim_min = horaFim * 60 + minFim
    

    // Caso passe das 23:59
     if (fim_min < inicio_min){
        fim_min +=  24 * 60
    }

     // Calculando a duração
    let duracao = fim_min - inicio_min

    // Calculando duração em horas
    let horas = Math.floor(duracao / 60)
    let minutos = (duracao % 60)

    // Se horas for < 10
    if(horas < 10 ) horas = '0' + horas
    if(minutos < 10) minutos = '0' + minutos 

    // Para aparecer no html
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;





}
