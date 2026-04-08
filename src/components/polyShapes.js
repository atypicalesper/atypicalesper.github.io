// ── 3D mesh definitions ──────────────────────────────────────────────────────

export const CUBE = {
  verts: [
    [-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
    [-1,-1, 1],[1,-1, 1],[1,1, 1],[-1,1, 1],
  ],
  edges: [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7],
  ],
};

export const TETRAHEDRON = {
  verts: [
    [0, 1, 0],
    [ Math.sqrt(8 / 9), -1 / 3, 0],
    [-Math.sqrt(2 / 9), -1 / 3,  Math.sqrt(2 / 3)],
    [-Math.sqrt(2 / 9), -1 / 3, -Math.sqrt(2 / 3)],
  ],
  edges: [[0,1],[0,2],[0,3],[1,2],[2,3],[3,1]],
};

export const OCTAHEDRON = {
  verts: [
    [0,1,0],[0,-1,0],
    [1,0,0],[-1,0,0],
    [0,0,1],[0,0,-1],
  ],
  edges: [
    [0,2],[0,3],[0,4],[0,5],
    [1,2],[1,3],[1,4],[1,5],
    [2,4],[4,3],[3,5],[5,2],
  ],
};

export const ICOSAHEDRON = (() => {
  const t = (1 + Math.sqrt(5)) / 2;
  const verts = [
    [-1, t,0],[1, t,0],[-1,-t,0],[1,-t,0],
    [0,-1, t],[0,1, t],[0,-1,-t],[0,1,-t],
    [ t,0,-1],[ t,0,1],[-t,0,-1],[-t,0,1],
  ].map(([x,y,z]) => { const l = Math.hypot(x,y,z); return [x/l,y/l,z/l]; });
  const edges = [
    [0,1],[0,5],[0,7],[0,10],[0,11],
    [1,5],[1,7],[1,8],[1,9],
    [2,3],[2,4],[2,6],[2,10],[2,11],
    [3,4],[3,6],[3,8],[3,9],
    [4,5],[4,9],[4,11],
    [5,9],[5,11],
    [6,7],[6,8],[6,10],
    [7,8],[7,10],
    [8,9],[10,11],
  ];
  return { verts, edges };
})();

// ── shape catalog ────────────────────────────────────────────────────────────

export const POLY_SHAPES = {
  triangle:    { label: 'Triangle',    kind: '2d',   sides: 3 },
  square:      { label: 'Square',      kind: '2d',   sides: 4 },
  pentagon:    { label: 'Pentagon',    kind: '2d',   sides: 5 },
  hexagon:     { label: 'Hexagon',     kind: '2d',   sides: 6 },
  octagon:     { label: 'Octagon',     kind: '2d',   sides: 8 },
  star:        { label: 'Star',        kind: 'star', points: 5 },
  cube:        { label: 'Cube',        kind: '3d',   mesh: CUBE },
  tetrahedron: { label: 'Tetrahedron', kind: '3d',   mesh: TETRAHEDRON },
  octahedron:  { label: 'Octahedron',  kind: '3d',   mesh: OCTAHEDRON },
  icosahedron: { label: 'Icosahedron', kind: '3d',   mesh: ICOSAHEDRON },
};

export const POLY_SHAPE_KEYS = Object.keys(POLY_SHAPES);
