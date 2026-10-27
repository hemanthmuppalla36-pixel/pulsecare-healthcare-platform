const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Static files (Frontend SPA)
app.use(express.static(path.join(__dirname, 'public')));

// Health Check Endpoint (useful for Render health checks & uptime monitors)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'PulseCare Healthcare Platform API',
    uptime: process.uptime()
  });
});

// Mount API Routes
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/patients', require('./routes/patients'));
app.use('/api/records', require('./routes/records'));
app.use('/api/triage', require('./routes/triage'));
app.use('/api/stats', require('./routes/stats'));

// Catch-all fallback for SPA (compatible with Express 4 and 5)
app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ success: false, message: 'API route not found' });
  }
  const indexPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(indexPath);
});

// Centralized error handling
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred',
    error: process.env.NODE_ENV === 'production' ? null : err.message
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🏥 PulseCare Healthcare Platform is live!`);
  console.log(`📡 Server running on http://localhost:${PORT}`);
  console.log(`🩺 API Health: http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
});
