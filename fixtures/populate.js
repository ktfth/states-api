const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');

const socket = io('http://localhost:3030');
const client = feathers();

client.configure(socketio(socket));

const stateService = client.service('v1/states');

stateService.on('created', state => console.log('Created a state', state));

const states = [
	{ name: 'São Paulo', uf: 'SP' },
	{ name: 'Rio de Janeiro', uf: 'RJ' },
	{ name: 'Pernambuco', uf: 'PE' },
	{ name: 'Bahia', uf: 'BA' }
];

for (let i = 0; i < states.length; i += 1) {
	stateService
		.create(states[i])
		.then(res => console.log(res));
}
