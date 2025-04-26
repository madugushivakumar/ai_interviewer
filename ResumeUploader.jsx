import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';
import "./App.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const ResumeUploader = () => {
  const [resumeText, setResumeText] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();

    if (file.type === 'application/pdf') {
      reader.onload = async () => {
        const typedarray = new Uint8Array(reader.result);
        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        let text = '';

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map((item) => item.str).join(' ') + '\n\n';
        }

        setResumeText(text);
      };
      reader.readAsArrayBuffer(file);
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      reader.onload = async () => {
        const result = await mammoth.extractRawText({ arrayBuffer: reader.result });
        setResumeText(result.value);
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert('Only PDF and DOCX files are supported');
    }
  };

  return (
    <div className="airesume">
      
      <input type="file" onChange={handleFileUpload} accept=".pdf,.docx" />
      <br /><br />
      {fileName && <p><strong>Uploaded Resume:</strong> {fileName}</p>}
      {resumeText && (
        <>
          <h3>Add Resume</h3>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={15}
            style={{ width: '100%', padding: '10px', fontFamily: 'monospace' }}
          />
        </>
      )}
    </div>
  );
};

export default ResumeUploader;
