import React, { useState } from 'react';
import opentype from 'opentype.js';

import DecisionSlides from './components/DecisionSlides';
import FontPreview from './components/FontPreview';

import './App.css';

function App() {
  const [customFont, setCustomFont] = useState('');
  const [customFontName, setCustomFontName] = useState('');

  const loadFont = async (ev: Event) => {
    const input = ev.target as HTMLInputElement;

    if (input.files) {
      const file = input.files[0];
      const dataUrl = URL.createObjectURL(file);
      
      const parsed = await opentype.load(dataUrl);
      const fontName = parsed.names.fullName.en;

      const font = new FontFace(fontName, `url(${dataUrl})`);

      const loaded = await font.load();
      console.log(loaded);
      document.fonts.add(loaded);

      setCustomFont(`'${loaded.family}', Chivo`);
      setCustomFontName(fontName);
    }
  };

  return (
    <div className='App'>
      <h1 className='title'>El <em>clasificador</em></h1>

      <div className='summary'>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>

        <input type='file' name='font_loader' id='font_loader'
          accept='.ttf, .otf, .woff, .woff2'
          onChange={ev => loadFont(ev.nativeEvent)} />
      </div>

      {customFont &&
      <div className='font-preview'>
        <FontPreview fontFace={customFont} fontName={customFontName} />
      </div>}

      {customFont &&
      <div className='decision-slides'>
        <DecisionSlides />
      </div>}
    </div>
  );
}

export default App;
