import express from 'express';
import path from 'path';

import router from './server/router/router.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.use('/server-api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`server has been started in http://localhost:${PORT}`));