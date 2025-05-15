import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.send('🟢 Bunny container alive!'));
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
