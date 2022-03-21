import anim_01_serif_sans from '../01_serif_sans.json';
import anim_02_stroke from '../02_stroke.json';
import anim_03_sans_geo from '../03_sans_geo.json';
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
        leadsTo: 'fake_option_0'
      },
      {
        displayText: 'Trazo uniforme',
        leadsTo: '03_sans_geo'
      }
    ]
  },
  {
    id: '03_sans_geo',
    animationData: anim_03_sans_geo,
    prompt: '¿Las estructuras están basadas en formas geométricas simples?',
    options: [
      {
        displayText: 'Sí',
        leadsTo: 'fake_option_0'
      },
      {
        displayText: 'No',
        leadsTo: 'fake_option_1'
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
  }
];

export default testTree;
