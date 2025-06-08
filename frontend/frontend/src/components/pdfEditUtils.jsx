import axios from 'axios';

const editPDFWithPDFCo = async (fileUrl, edits) => {
  const apiKey = 'jasteghsingh04@gmail.com_pdBPHXCTTqier1hZ5Y295MlRg8ILxI0FNR8iSwBcl8Kl0I7VozqiCfECiGDwHuTu'; // Replace with your PDF.co API Key
  const apiEndpoint = 'https://api.pdf.co/v1/pdf/edit/add';

  const requestBody = {
    url: fileUrl, // URL of the PDF file (accessible from your backend)
    annotations: edits, // List of edits/annotations to make on the PDF
  };

  try {
    const response = await axios.post(apiEndpoint, requestBody, {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (response.data && response.data.url) {
      console.log('Edited PDF URL:', response.data.url);
      return response.data.url; // Return the URL of the edited PDF
    } else {
      console.error('PDF editing failed:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error editing PDF:', error);
    return null;
  }
};

export default editPDFWithPDFCo;
