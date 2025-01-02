// // src/services/sheetsService.js
// const API_URL = 'http://localhost:3001/api';

// export const saveToSheet = async (keyFile,formData) => {
//   try {
//     console.log(formData)
//     const response = await fetch(`${API_URL}/save-data`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
      
//       body: JSON.stringify({ keyFile,formData }),
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to save data');
//     }
    
//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// };

// export const getSheetData = async (keyFile) => {
//   try {
//     const response = await fetch(`${API_URL}/get-data`);
    
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
    
//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// };




const API_URL = 'http://localhost:3001/api';

export const saveToSheet = async (keyFile, formData) => {
  try {
    const response = await fetch(`${API_URL}/save-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyFile, formData }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to save data');
    }
    
    return data;
  } catch (error) {
    throw new Error(`Save failed: ${error.message}`);
  }
};

export const getSheetData = async (keyFile) => {
  try {
    const response = await fetch(`${API_URL}/get-data?keyFile=${encodeURIComponent(keyFile)}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch data');
    }
    
    return data;
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
};