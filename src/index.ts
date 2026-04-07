import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import serviceRouter from './routes/serviceRouter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));


app.use('/', serviceRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});