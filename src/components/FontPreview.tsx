import React from 'react';

import './FontPreview.css';

interface FontPreviewProps {
  fontFace: string;
  fontName: string;
}

const FontPreview = ({ fontFace, fontName }: FontPreviewProps) => {
  const previewStyle = {
    fontFamily: fontFace || 'inherit'
  };

  return (
    <div className='pre-container'>
      <span className='pre-label'>
        {fontName || ''}
      </span>
      <div className='pre-font' style={previewStyle}>
        ASOMga
      </div>
    </div>
  );
};

export default FontPreview;