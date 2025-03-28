import test from 'ava';
import {http} from './index.js';

const BASE_URL = 'https://317793c8-cac7-4ce6-9cbe-a082e0d531ca.mock.pstmn.io';

http.defaults.baseUrl = BASE_URL;
http.defaults.headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
};

test('index', async t => {
	const {data} = await http.get('/items');
	console.log(data);
	t.pass();
});

test('show', async t => {
	const {data} = await http.get('/items/1');
	console.log(data);
	t.pass();
});

test('create', async t => {
	const {data} = await http.post('/items', {
		body: {
			name: 'foo',
		},
	});
	console.log(data);
	t.pass();
});

test('update', async t => {
	const {data} = await http.put('/items/1', {
		body: {
			name: 'foo',
		},
	});
	console.log(data);
	t.pass();
});

test('delete', async t => {
	const {data} = await http.delete('/items/1');
	console.log(data);
	t.pass();
});
