import express from 'express';
import './database.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', userRoutes);

app.listen(3000, () => {
    console.log('🚀 Servidor rodando em http://localhost:3000');
});
