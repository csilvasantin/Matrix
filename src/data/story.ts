import type { StoryGraph } from '../types';

// 9 Mallorca activity decisions with animated GIFs
const mallorcaDecisions = [
  {
    label: 'Playa de Palma',
    nextNodeId: 'mall_playa',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/3o7btQ8jDTPGDpgc6I/giphy.gif',
  },
  {
    label: 'Catedral La Seu',
    nextNodeId: 'mall_catedral',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
  },
  {
    label: 'Castillo Bellver',
    nextNodeId: 'mall_bellver',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif',
  },
  {
    label: 'Tren de Soller',
    nextNodeId: 'mall_soller',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/l2JhN2mPMbTMnMKPu/giphy.gif',
  },
  {
    label: 'Serra Tramuntana',
    nextNodeId: 'mall_serra',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif',
  },
  {
    label: 'Cuevas del Drach',
    nextNodeId: 'mall_drach',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif',
  },
  {
    label: 'Valldemossa',
    nextNodeId: 'mall_valldemossa',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/l3q2LH45XElELRzRm/giphy.gif',
  },
  {
    label: 'Es Trenc',
    nextNodeId: 'mall_trenc',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/l0MYunAI4j10uWbFm/giphy.gif',
  },
  {
    label: 'Puerto Portals',
    nextNodeId: 'mall_portals',
    timeAppear: 1,
    gifSrc: 'https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif',
  },
];

// Historia: "Aeropuerto Internacional"
export const demoStory: StoryGraph = {
  startNodeId: 'airport',
  nodes: {
    airport: {
      id: 'airport',
      videoSrc: 'airport',
      title: 'Aeropuerto Internacional',
      decisions: [
        { label: '🇯🇵 Vuelo de Japón', nextNodeId: 'japan', timeAppear: 1 },
        { label: '🇦🇪 Vuelo de Dubai', nextNodeId: 'dubai', timeAppear: 1 },
        { label: '🇬🇧 Vuelo de Londres', nextNodeId: 'london', timeAppear: 1 },
      ],
    },
    japan: {
      id: 'japan',
      videoSrc: 'japan',
      title: 'Vuelo desde Tokio',
      decisions: mallorcaDecisions,
    },
    dubai: {
      id: 'dubai',
      videoSrc: 'dubai',
      title: 'Vuelo desde Dubai',
      decisions: mallorcaDecisions,
    },
    london: {
      id: 'london',
      videoSrc: 'london',
      title: 'Vuelo desde Londres',
      decisions: mallorcaDecisions,
    },
    japan_sushi: {
      id: 'japan_sushi',
      videoSrc: 'japan_sushi',
      title: 'Sushi Master',
    },
    japan_temple: {
      id: 'japan_temple',
      videoSrc: 'japan_temple',
      title: 'Templo Ancestral',
    },
    dubai_desert: {
      id: 'dubai_desert',
      videoSrc: 'dubai_desert',
      title: 'Safari en el Desierto',
    },
    dubai_burj: {
      id: 'dubai_burj',
      videoSrc: 'dubai_burj',
      title: 'Cima del Burj Khalifa',
    },
    london_tea: {
      id: 'london_tea',
      videoSrc: 'london_tea',
      title: 'Tea Time Real',
    },
    london_eye: {
      id: 'london_eye',
      videoSrc: 'london_eye',
      title: 'Vista desde el London Eye',
    },
    mall_playa: { id: 'mall_playa', videoSrc: 'mall_playa', title: 'Playa de Palma' },
    mall_catedral: { id: 'mall_catedral', videoSrc: 'mall_catedral', title: 'Catedral La Seu' },
    mall_bellver: { id: 'mall_bellver', videoSrc: 'mall_bellver', title: 'Castillo Bellver' },
    mall_soller: { id: 'mall_soller', videoSrc: 'mall_soller', title: 'Tren de Soller' },
    mall_serra: { id: 'mall_serra', videoSrc: 'mall_serra', title: 'Serra Tramuntana' },
    mall_drach: { id: 'mall_drach', videoSrc: 'mall_drach', title: 'Cuevas del Drach' },
    mall_valldemossa: { id: 'mall_valldemossa', videoSrc: 'mall_valldemossa', title: 'Valldemossa' },
    mall_trenc: { id: 'mall_trenc', videoSrc: 'mall_trenc', title: 'Es Trenc' },
    mall_portals: { id: 'mall_portals', videoSrc: 'mall_portals', title: 'Puerto Portals' },
  },
};

// Color themes for each node's generated video
export const nodeColors: Record<string, { bg: string; accent: string }> = {
  airport: { bg: '#1a1a2e', accent: '#4fc3f7' },
  japan: { bg: '#1a0a2e', accent: '#ff6b9d' },
  dubai: { bg: '#2e1a0a', accent: '#ffd740' },
  london: { bg: '#0a1a2e', accent: '#90caf9' },
  japan_sushi: { bg: '#2e0a1a', accent: '#ff5252' },
  japan_temple: { bg: '#1a2e0a', accent: '#76ff03' },
  dubai_desert: { bg: '#3e2723', accent: '#ff9800' },
  dubai_burj: { bg: '#0a2e2e', accent: '#00e5ff' },
  london_tea: { bg: '#2e2e0a', accent: '#ffab40' },
  london_eye: { bg: '#0a0a3e', accent: '#7c4dff' },
};

export const nodeDescriptions: Record<string, string> = {
  airport: 'Un avión está aterrizando... ¿de dónde viene?',
  japan: '¡El vuelo JL045 desde Tokio Narita ha llegado!',
  dubai: '¡El vuelo EK077 desde Dubai ha aterrizado!',
  london: '¡El vuelo BA456 desde Heathrow ha llegado!',
  japan_sushi: '¡El mejor omakase de tu vida en Tsukiji!',
  japan_temple: '¡Paz y serenidad en el templo Senso-ji!',
  dubai_desert: '¡Atardecer épico sobre las dunas doradas!',
  dubai_burj: '¡828 metros de altura, el mundo a tus pies!',
  london_tea: '¡Scones, clotted cream y la Reina al lado!',
  london_eye: '¡Todo Londres se ve desde aquí arriba!',
};
