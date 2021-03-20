//Algoritmo Condicional  -


    const user = {
        username: 'Sofia',
        order_ID: '80867',
        order_status: 'enviada',
        role: 'User',
        quantity: '1',
        product_id: '454678',
        product_name: 'Top New York',
        size: 'Small',
        color: 'negro',
        sku: '108731',
        category: 'Tops'

    }

    let  inputusername = prompt ('Ingrese su Usuario')
    let inputorderID = prompt ('Ingrese su order_ID')


    if (inputusername !== user.username || inputorderID !== user.order_ID) {
     throw new Error('Información inválida')
    }

    switch (user.role) {

        case'Admin':
            console.log('Bienvenido Admin')
            break;
        case 'User':
            console.log('Bienvenido User')
            break;
        default:
            console.log('Beinvenido Guest')
            break;
    }


    switch (user.order_status) {

        case'Proceso':
            console.log('La orden está siendo procesada')
            break;
        case 'Preparación':
            console.log('La orden está siendo preparada')
            break;
        default:
            console.log('La orden ha sido enviada')
            break;
    }


    // Mensaje 1
    alert('Bienvenido/a' + " " + user.username + "."+ " " + 'Su Número de Order es la Nº' + " "+ user.order_ID + " " + 'y la orden ha sido' + " " + user.order_status)

    //Mensaje 2
    alert('Detalle de la orden:' + " " + user.quantity + " " + user.product_name + ", "+ 'talle' +" "+ user.size+ ", " + 'color' + " "+ user.color)