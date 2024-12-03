import app from './app.js';
import { connectDB } from './db.js';

connectDB();
app.listen(4000);
console.log('Listening on port', 4000);
console.log('>>> DB is connected');
