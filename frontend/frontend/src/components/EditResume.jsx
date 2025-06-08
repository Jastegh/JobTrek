import React, { useState } from 'react';
import editPDFWithPDFCo from './pdfEditUtils'; // Import the utility function

const EditResume = ({ resumeUrl }) => {
  const [editedPdfUrl, setEditedPdfUrl] = useState(null); // Store the edited PDF URL
  const [error, setError] = useState(null);

  const handleEditPDF = async () => {
    setError(null); // Reset errors
    const edits = [
      {
        text: 'Edited Text: Job Application', // Text to add
        x: 50, // X-coordinate
        y: 750, // Y-coordinate (near the top of the page)
        pages: '0', // Page number (0 = first page)
        fontSize: 16, // Font size
        color: 'blue', // Text color
      },
    ];

    // Call the utility function with the file URL and edits
    const updatedPdfUrl = await editPDFWithPDFCo(resumeUrl, edits);

    if (updatedPdfUrl) {
      setEditedPdfUrl(updatedPdfUrl); // Set the URL of the edited PDF
    } else {
      setError('Failed to edit PDF. Please try again.');
    }
  };

  return (
    <div>
      <h1>Edit Resume</h1>
      <button onClick={handleEditPDF}>Edit PDF</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show link to download edited PDF if available */}
      {editedPdfUrl && (
        <div>
          <a href={editedPdfUrl} target="_blank" rel="noopener noreferrer">
            Download Edited PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default EditResume;
