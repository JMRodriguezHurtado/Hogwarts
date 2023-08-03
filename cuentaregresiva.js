// Cuenta regresiva
function cuentaRegresiva (num) {
    console.log(num);
    const nuevoNumero = num - 1;
    if (nuevoNumero === 0) {
        return;}
        cuentaRegresiva(nuevoNumero);
}

cuentaRegresiva(20)