
const formatearDinero = cantidad => {

    return cantidad.toLocaleString('es-ES',{
        style: 'currency',
        currency: 'EUR'
    })
}

export default formatearDinero;