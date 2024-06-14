import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server launched on port ${PORT} 🚀`);
});