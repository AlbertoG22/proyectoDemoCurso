
/*
    13/4
    13 - 4 = 9      1
    9 - 4 = 5       1
    5 - 4 = 1       1
    1 - 4 = -3      0
*/



function divisionEntera(dividendo, divisor) {
    if(dividendo < divisor) { //preguntar si estamos en el caso base
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor) //la cuenta es lo que se está haciendo arriba
}