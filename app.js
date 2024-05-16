const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/v1/auth', require('./routes/authRoutes'));
// app.use('/api/v1/tasks', require('./routes/taskRoutes'));

app.use(require('./middlewares/globalErrorMiddleware'));

module.exports = app;