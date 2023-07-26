import React, { useState } from 'react';
import { PDFDocument, mergeIntoTypedArray, rgb } from 'pdf-lib';

const PDFFormFiller = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  const fillPDF = async () => {
    if (!pdfFile) {
      alert('Please select a PDF file.');
      return;
    }

    try {
      const pdfBytes = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const form = pdfDoc.getForm();
      const fields = form.getFields();

        
        form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5firstName').setText('Ashwani');
        form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5lastName').setText('Sharma');
        form.getDropdown('61daa6fb-0143-4faa-9243-790262d903f5roles').select("Admin", false);
        form.getRadioGroup('61daa6fb-0143-4faa-9243-790262d903f5time').select('parttime', false);
        form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcfirstName').setText('Shubham');
        form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfclastName').setText('Kumar');
        form.getDropdown('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcroles').select("Marketing", false)
       form.getRadioGroup('8a06c958-d66d-4e30-a5b5-41ac3abfdbfctime').select('fulltime', false);

   

      const filledPdfBytes = await pdfDoc.save();

      // Create a new Blob and URL to download the filled PDF
      const blob = new Blob([filledPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      // Create a temporary link and click it to trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'filled_example.pdf';
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      alert('An error occurred while filling the PDF.');
      console.error(error);
    }
  };

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'100px'}}>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={fillPDF}>Save PDF</button>
    </div>
  );
};

export default PDFFormFiller;
