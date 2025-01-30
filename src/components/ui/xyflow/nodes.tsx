// const position = { x: 0, y: 0 };
export const initialNodes = [
  {
    id: "L0",
    type: "group",
    data: { label: null },
    position: { x: 0, y: 0 },
    style: {
      width: 700,
      height: 420,
    },
  },
  {
    id: "0",
    type: "levelNode",
    data: { text: "L0", hasTarget: false },
    position: { x: 325, y: 15 },
    parentId: "L0",
  },

  {
    id: "1",
    type: "topicNode",
    data: { label: "Git", hasSource: true },
    position: { x: 45, y: 170 },
    parentId: "L0",
  },
  {
    id: "2",
    type: "topicNode",
    data: { label: "Github", hasSource: true },
    position: { x: 300, y: 170 },
    parentId: "L0",
  },
  {
    id: "3",
    type: "topicNode",
    data: { label: "Markdown", hasSource: false },
    position: { x: 525, y: 170 },
    parentId: "L0",
  },
  {
    id: "4",
    type: "topicNode",
    data: { label: "git branches", hasSource: false },
    position: { x: 25, y: 320 },
    parentId: "L0",
  },
  {
    id: "5",
    type: "topicNode",
    data: { label: "Pull-requests", hasSource: false },
    position: { x: 275, y: 320 },
    parentId: "L0",
  },
  {
    id: "A",
    type: "group",
    data: { label: null },
    position: { x: -650, y: 550 },
    style: {
      width: 550,
      height: 500,
    },
  },
  {
    id: "A0",
    type: "levelNode",
    data: { text: "L1A", hasTarget: false },
    position: { x: 230, y: 15 },
    parentId: "A",
  },

  {
    id: "A1",
    type: "topicNode",
    data: { label: "Astro", hasSource: true },
    position: { x: 20, y: 145 },
    parentId: "A",
  },
  {
    id: "A2",
    type: "topicNode",
    data: { label: "Tailwind", hasSource: true },
    position: { x: 400, y: 145 },
    parentId: "A",
  },
  {
    id: "A3",
    type: "topicNode",
    data: { label: "Astro Integrations", hasSource: true },
    position: { x: 175, y: 275 },
    parentId: "A",
  },
  {
    id: "A4",
    type: "topicNode",
    data: { label: "Build a Website", hasSource: false },
    position: { x: 180, y: 410 },
    parentId: "A",
  },

  {
    id: "B",
    type: "group",
    data: { label: null },
    position: { x: 75, y: 600 },
    style: {
      width: 550,
      height: 400,
    },
  },
  {
    id: "B0",
    type: "levelNode",
    data: { text: "L1B", hasTarget: false },
    position: { x: 230, y: 15 },
    parentId: "B",
  },

  {
    id: "B1",
    type: "topicNode",
    data: { label: "Dart", hasSource: false },
    position: { x: 20, y: 145 },
    parentId: "B",
  },
  {
    id: "B2",
    type: "topicNode",
    data: { label: "Flutter", hasSource: true },
    position: { x: 400, y: 145 },
    parentId: "B",
  },
  {
    id: "B3",
    type: "topicNode",
    data: { label: "Build an App", hasSource: false },
    position: { x: 375, y: 275 },
    parentId: "B",
  },

  {
    id: "C",
    type: "group",
    data: { label: null },
    position: { x: 850, y: 600 },
    style: {
      width: 550,
      height: 400,
    },
  },
  {
    id: "C0",
    type: "levelNode",
    data: { text: "L1C", hasTarget: false },
    position: { x: 230, y: 15 },
    parentId: "C",
  },

  {
    id: "C1",
    type: "topicNode",
    data: { label: "Pandas", hasSource: false },
    position: { x: 20, y: 145 },
    parentId: "C",
  },
  {
    id: "C2",
    type: "topicNode",
    data: { label: "Pytorch", hasSource: true },
    position: { x: 400, y: 145 },
    parentId: "C",
  },
];
