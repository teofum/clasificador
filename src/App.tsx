import React, { useState } from 'react';
import opentype from 'opentype.js';

import DecisionSlides from './components/DecisionSlides';
import FontPreview from './components/FontPreview';

import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [customFont, setCustomFont] = useState('');
  const [customFontName, setCustomFontName] = useState('');
  let fontLoader: HTMLElement | null = null;

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
      setStarted(true);
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
      </div>

      <div className='font-preview'>
        <FontPreview fontFace={customFont} fontName={customFontName}
          loadFont={() => fontLoader?.click()}
          loadImage={() => fontLoader?.click()} />
      </div>

      {!started &&
        <div className='font-upload'>
          <input type='file' name='font_loader' id='font_loader'
            accept='.ttf, .otf, .woff, .woff2' hidden
            ref={el => fontLoader = el}
            onChange={ev => loadFont(ev.nativeEvent)} />

          <button onClick={() => fontLoader?.click()}>
            Cargar fuente (TTF)
          </button>

          <button onClick={() => fontLoader?.click()}>
            Cargar imagen
          </button>
          
          <button onClick={() => setStarted(true)}>
            Seguir sin referencia
          </button>
        </div>}

      {started &&
        <main className='decision-slides'>
          <DecisionSlides fontName={customFontName} resetFont={() => {
            setCustomFont('');
            setCustomFontName('');
            setStarted(false);
          }} />
        </main>}
    </div>
  );
}

export default App;
