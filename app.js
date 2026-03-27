import express from 'express';
import { HoraActual, FechaCompleta} from './time.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a nuestra primer tp de express <3');
});

app.get('/hora', (req, res) => {
    res.send(HoraActual());
});

app.get('/fecha-completa', (req, res) => {
    res.send(FechaCompleta());
});

app.use((req, res) => {
    res.status(404).send('Error, esta ruta no existe.');
});

export default app;