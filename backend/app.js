// backend/server.js
const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Initialize Google Sheets API with service account
const auth = new google.auth.GoogleAuth({
  keyFile: './school.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

app.post('/api/save-data', async (req, res) => {
  try {
    let fileid;
    let range;
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    
    const { keyFile,formData } = req.body;
    if(keyFile==='conges'){
        fileid='1nhcZt4uG6AGgS8_oe47zxwGDfJgy3KFLONiqj5rI9Bo';// change this for registre de congé ID = '1nhcZt4uG6AGgS8_oe47zxwGDfJgy3KFLONiqj5rI9Bo'
        range='conges!A:R' // change for User_Data to conges
    }else{
        fileid='1JBROV0LadFyX6_lC6UyZk_Sjhyg39T1QVcVg9Kk31P8'; // change this for livre de paie ID = '1JBROV0LadFyX6_lC6UyZk_Sjhyg39T1QVcVg9Kk31P8'
        range = 'livre!A:AJ' // change for User_Data to livre
    }
    const values = [Object.values(formData)];

    
    await sheets.spreadsheets.values.append({
      spreadsheetId: fileid,
      range: range,
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
      spreadsheetId: '17W4XPO6sH00eSi8SA1prGjFIARzxFobDcGbKGA0VFq8',
      range: 'User_Data!A:AJ',
    });
    console.log(response);
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