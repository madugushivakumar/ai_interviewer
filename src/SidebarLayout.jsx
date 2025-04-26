import React, { useState } from 'react';
import './SidebarLayout.css';
import ResumeUploader from './ResumeUploader';

const SidebarLayout = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeTool, setActiveTool] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showMockForm, setShowMockForm] = useState(false);
  const [showGeneralForm, setShowGeneralForm] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setActiveTool(null);
  };

  const handleToolClick = (tool) => {
    setActiveTool(tool);
  };

  const renderContent = () => {
    if (activeSection === 'tools') {
      switch (activeTool) {
        case 'resume':
          return (
            <div className="section-container">
              <ResumeUploader />
            </div>
          );
        default:
          return (
            <div className="section-container">
           
            </div>
          );
      }
    }

    switch (activeSection) {
      case 'live':
        
          return (
            <div className="section-container">
              {!showGeneralForm && (
                <button
                  className='generalinterviewbtn'
                  onClick={() => setShowGeneralForm(true)}
                >
                  General Interview
                </button>
              )}
        
              <h1 className='heading'>Live Interview</h1>
        
              {showGeneralForm && (
                <form className="mock-form">
               
                  <label htmlFor="resume">Resume <span className="optional">(Optional)</span></label>
                  <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
        
               
                  <label htmlFor="role">Role <span className="optional">(Optional)</span></label>
                  <select id="role" name="role">
                    <option value="">Select your Role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="designer">UI/UX Designer</option>
                  </select>
        
          
                  <label htmlFor="domain">Select Knowledge Domain (Specialization) <span className="optional">(Optional)</span></label>
                  <select id="domain" name="domain">
                    <option value="general">General</option>
                  </select>
        
                  <button type="submit">Start Interview</button>
                </form>
              )}
        
           <h1 className='heading'>Live Interview</h1>
            <p className="paragraph">
              Interview Copilot is your real-time AI partner that offers on-the-fly, personalized interview support.
              It transcribes each question, analyzes job descriptions and company details, and provides dynamic guidance tailored to your background.
              With coverage across 100+ industries, multilingual support, and seamless integration into popular meeting platforms, you’ll confidently tackle any live interview question that comes your way.
            </p>
          </div>
        );

        case 'mock':
          return (
            <div className="section-container">
              {!showMockForm && (
                <button
                  className='mockinterviewbtn'onClick={() => setShowMockForm(true)}
                >
                  Mock Interview
                </button>
              )}
              {showMockForm && (
                <form className="mock-form">
                
                  <label htmlFor="resume">Resume <span className="optional">(Optional)</span></label>
                  <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
        
                 
                  <label htmlFor="role">Role <span className="optional">(Optional)</span></label>
                  <select id="role" name="role">
                    <option value="">Select your Role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="designer">UI/UX Designer</option>
                  </select>
        
                 
                  <label htmlFor="domain">Select Knowledge Domain (Specialization) <span className="optional">(Optional)</span></label>
                  <select id="domain" name="domain">
                    <option value="general">General</option>
                  </select>
        
                  <button type="submit">Start Interview</button>
                </form>
              )}
            <h1 className='heading'>Mock Interview</h1>
            <p className='paragraph'>
              Elevate your interview skills with AI Mock Interview that offers realistic practice sessions,
              instant feedback, and job-specific questions to transform your weaknesses into strengths.
              Practice anytime, anywhere—no scheduling or stress required—and walk into your real interview fully prepared and confident.
            </p>
          </div>
        );

      case 'docs':
        return (
          <div className="section-container">
            <button className='resumebuilder'>Resume Builder</button>
            <button className='LinkedInProfile'>+ LinkedIn Profile</button>

            <div className="section-container document-center">
              {!showUploadForm ? (
                <button
                  className={`upload-btn-main ${showUploadForm ? 'active' : ''}`}
                  onClick={() => setShowUploadForm(true)}
                >
                  Upload
                </button>
              ) : (
                <>
                  <h1>Select your document type and then upload</h1>

                  <label htmlFor="doc-type">Document Type</label>
                  <select id="doc-type" className="upload-select">
                    <option value="">-- Select --</option>
                    <option value="resume">Resume</option>
                    <option value="cover">Cover Letter</option>
                    <option value="other">Other</option>
                  </select>

                  <label htmlFor="upload-file">Choose File</label>
                  <input
                    type="file"
                    id="upload-file"
                    accept=".pdf,.doc,.docx"
                    className="upload-input"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        console.log('Selected file:', file.name);
                      }
                    }}
                  />
                  <p className="file-note">Only PDF, DOC, or DOCX files up to 10 MB.</p>

                  <div className="upload-actions">
                    <button className="cancel-btn" onClick={() => setShowUploadForm(false)}>Cancel</button>
                    <button className="upload-btn">Upload</button>
                  </div>
                </>
              )}
            </div>

            <h1 className='heading'>Document Center</h1>
            <p className='paragraph'>
              Upload your resume, cover letter, or any other job application materials,
              and let our AI turn them into polished, standout documents.
              From refining structure to highlighting your unique strengths,
              we ensure you shine in every hiring process.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`layout ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarCollapsed ? '<' : '>'}
        </div>
        {!isSidebarCollapsed && (
          <>
            <h2 className="logo">AI Interviewer</h2>
            <nav className="nav-links">
              <h1 className='navbarh1'>interview</h1>
              <a onClick={() => handleNavClick('live')}>Live Interview</a>
              <a onClick={() => handleNavClick('mock')}>Mock Interview</a>
              <a onClick={() => handleNavClick('docs')}>Document Center</a>
              <a onClick={() => handleNavClick('tools')}>Tools</a>

              {activeSection === 'tools' && (
                <div className="sub-tools">
                  <a onClick={() => handleToolClick('resume')}>AI Resume Enhancer</a>
                </div>
              )}
            </nav>
          </>
        )}
      </div>

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default SidebarLayout;
