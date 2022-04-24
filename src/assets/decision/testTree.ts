import anim_01_serif_sans from '../01_serif_sans.json';
import anim_02_stroke from '../02_stroke.json';
import anim_07_serif_axis from '../04_serif_axis.json';
import anim_08a_serif_contrast from '../serif_contrast.json';

import svg_03_sans_geom from '../sans_geom.svg';
import svg_04_sans_human from '../sans_huma.svg';
import svg_05_sans_grot from '../sans_grot.svg';
import svg_15_serif_slab from '../serif_slab.svg';

import { DecisionTree } from '../../utils/DecisionTree';

const testTree: DecisionTree = [
  {
    id: '01_serif_sans',
    animationData: anim_01_serif_sans,
    options: [
      {
        displayText: 'Serif',
        leadsTo: '06_stroke_serif'
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
    id: '06_stroke_serif',
    animationData: anim_02_stroke,
    options: [
      {
        displayText: 'Trazo gradual',
        leadsTo: '07_serif_axis'
      },
      {
        displayText: 'Trazo uniforme',
        leadsTo: '15_serif_slab'
      }
    ]
  },
  {
    id: '07_serif_axis',
    animationData: anim_07_serif_axis,
    prompt: '¿Cómo es el eje de modulación?',
    options: [
      {
        displayText: 'Vertical',
        leadsTo: 'E00_unclassified'
      },
      {
        displayText: 'Inclinado',
        leadsTo: '08a_serif_contrast'
      }
    ]
  },
  {
    id: '08a_serif_contrast',
    animationData: anim_08a_serif_contrast,
    prompt: '¿Cómo es el contraste entre finos y gruesos?',
    options: [
      {
        displayText: 'Alto',
        leadsTo: 'E00_unclassified',
        targetFrame: 0
      },
      {
        displayText: 'Medio',
        leadsTo: 'E00_unclassified',
        targetFrame: 30
      },
      {
        displayText: 'Bajo',
        leadsTo: 'E00_unclassified',
        targetFrame: 60
      }
    ]
  },
  {
    id: '15_serif_slab',
    imageSrc: svg_15_serif_slab,
    prompt: '¿Los remates tienen un ancho similar al trazo?',
    options: [
      {
        displayText: 'Sí',
        leadsTo: 'E04_serif_slab'
      },
      {
        displayText: 'No',
        leadsTo: 'E00_unclassified'
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
    class: '/#Egipcia/ (Slab serif)'
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
