import anim_01_serif_sans from '../01_serif_sans.json';
import anim_02_stroke from '../02_stroke.json';

import svg_03_sans_geom from '../sans_geom.svg';
import svg_04_sans_human from '../sans_human.svg';
import svg_05_sans_grot from '../sans_grot.svg';

import { DecisionTree } from '../../utils/DecisionTree';

const testTree: DecisionTree = [
  {
    id: '01_serif_sans',
    animationData: anim_01_serif_sans,
    options: [
      {
        displayText: 'Serif',
        leadsTo: '05_stroke_serif'
      },
      {
        displayText: 'Palo seco',
        leadsTo: '02_stroke_sans'
      }
    ]
  },
  {
    id: '02_stroke_sans',
    animationData: anim_02_stroke,
    options: [
      {
        displayText: 'Trazo gradual',
        leadsTo: '04_sans_human'
      },
      {
        displayText: 'Trazo uniforme',
        leadsTo: '03_sans_geom'
      }
    ]
  },
  {
    id: '03_sans_geom',
    imageSrc: svg_03_sans_geom,
    prompt: '¿Las estructuras están basadas en formas geométricas simples?',
    options: [
      {
        displayText: 'Sí',
        leadsTo: 'E01_sans_geom'
      },
      {
        displayText: 'No',
        leadsTo: '04_sans_human'
      }
    ]
  },
  {
    id: '04_sans_human',
    imageSrc: svg_04_sans_human,
    prompt: '¿Las estructuras se asemejan a las clásicas romanas?',
    options: [
      {
        displayText: 'Sí',
        leadsTo: 'E02_sans_human'
      },
      {
        displayText: 'No',
        leadsTo: '05_sans_grot'
      }
    ]
  },
  {
    id: '05_sans_grot',
    imageSrc: svg_05_sans_grot,
    prompt: '¿Hay una ligera cuadratura en las curvas?',
    options: [
      {
        displayText: 'Sí',
        leadsTo: 'E03_sans_grot'
      },
      {
        displayText: 'No',
        leadsTo: 'E00_unclassified'
      }
    ]
  },
  {
    id: '05_stroke_serif',
    animationData: anim_02_stroke,
    options: [
      {
        displayText: 'Trazo gradual',
        leadsTo: 'fake_option_0'
      },
      {
        displayText: 'Trazo uniforme',
        leadsTo: 'fake_option_1'
      }
    ]
  },

  // ENDING SLIDES
  {
    id: 'E00_unclassified',
    class: ''
  },
  {
    id: 'E01_sans_geom',
    class: 'Sans serif /#geométrica/'
  },
  {
    id: 'E02_sans_human',
    class: 'Sans serif /#humanística/'
  },
  {
    id: 'E03_sans_grot',
    class: 'Sans serif /#grotesca/'
  },
  {
    id: 'E04_serif_slab',
    class: '/#Egipcia/ (Slab serif)'
  },
  {
    id: 'E05_serif_mod',
    class: 'Romana /#moderna/'
  },
  {
    id: 'E06_serif_trn',
    class: 'Romana /#de transición/'
  },
  {
    id: 'E07_serif_old',
    class: 'Romana /#antigua/'
  },
  {
    id: 'E08_serif_human',
    class: 'Romana /#humanística/'
  }
];

export default testTree;
