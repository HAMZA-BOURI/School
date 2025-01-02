// backend/server.js
const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Initialize Google Sheets API with service account
const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your/service-account-key.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

app.post('/api/save-data', async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    
    const { formData } = req.body;
    const values = [Object.values(formData)];
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: 'YOUR_SPREADSHEET_ID',
      range: 'Sheet1!A:Z',
      valueInputOption: 'RAW',
      resource: { values },
    });
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/get-data', async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: 'YOUR_SPREADSHEET_ID',
      range: 'Sheet1!A:Z',
    });
    
    res.json({ data: response.data.values });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});