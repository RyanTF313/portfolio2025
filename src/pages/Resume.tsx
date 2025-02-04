import React from "react";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import resumePDF from "./../assets/Resume-2025.pdf";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

function Resume() {
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <div className="Resume">
      <div className="resumeViewer" style={resumeViewerStyle}>
        <div className="downloadbtn">
          <Download>
            {(props: RenderDownloadProps) => (
              <button onClick={() => props.onClick()} style={downloadBtnStyle}>Download Resume</button>
            )}
          </Download>
        </div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={resumePDF}
            defaultScale={SpecialZoomLevel.PageWidth}
            plugins={[getFilePluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
}

const downloadBtnStyle: React.CSSProperties = {
  color: "white",
  backgroundColor: '#9A8C98',
  borderRadius: '5px',
  fontSize: '1.75rem',
  height: '3rem',
  margin: '1rem'
};

const resumeViewerStyle: React.CSSProperties = {
  maxWidth: "75%",
};

export default Resume;
