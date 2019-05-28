var socket = io();

var searchParams = new URLSearchParams(window.location.search);

console.log(searchParams.has('escritorio'));

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function () {

    //socket.emit( 'NombreDelEvento', Objetos a enviar, funcion de respuesta(){});
    socket.emit('atenderTicket', { escritorio: escritorio }, function (resp) {
        if (resp === 'No hay tickets') {
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero);

    });
});