let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSecreto)
    {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(numeroUsuario < numeroSecreto)
        {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        else
        {
            asignarTextoElemento('p', 'El numero es menor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    return;
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
    return;
}

function juegoNuevo()
{
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    return;
}

function generarNumeroSecreto() 
{
    let numeroGenerado = parseInt(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los elementos');
    }
    else
    {
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();            
        }
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
   
}

condicionesIniciales();

