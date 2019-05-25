import path from 'path';
import express from 'express';

const PORT = process.env.HTTP_PORT || 4001;
const app = express();

app.use(express.static(path.join(__dirname, 'client2', 'build')));

app.get('/', (req, res) => {
	res.send('flowers are not cool');
	console.log('this is a server console.log');
});

app. get('/flower', (req, res) => {
	res.json({
		name: 'Danelion',
		colour: 'Blue-ish'
	});
});

app.listen(PORT, () => {
	console.log(`server is listening at port ${PORT}`);
});