export interface Stat {
  name: string;
  value: number | null;  // เริ่มต้นเป็น null
  weight: number;        // % weight
  upgrade: number;       // upgrade value 0-2
}

export interface Position {
  name: string;
  stats: Stat[];
  ovr: number;
}

export const positions: Position[] = [
  {
    name: 'ST',
    stats: [
      { name: 'แข็งแกร่ง', value: null, weight: 5, upgrade: 0 },
      { name: 'สปีดต้น', value: null, weight: 4, upgrade: 0 },
      { name: 'ความเร็ว', value: null, weight: 5, upgrade: 0 },
      { name: 'เลี้ยงบอล', value: null, weight: 7, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 10, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 5, upgrade: 0 },
      { name: 'จบสกอร์', value: null, weight: 18, upgrade: 0 },
      { name: 'พลังการยิง', value: null, weight: 10, upgrade: 0 },
      { name: 'โหม่งบอล', value: null, weight: 10, upgrade: 0 },
      { name: 'ยิงไกล', value: null, weight: 3, upgrade: 0 },
      { name: 'วอลเลย์', value: null, weight: 2, upgrade: 0 },
      { name: 'ยืนตำแหน่ง', value: null, weight: 13, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 8, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'CF',
    stats: [
      { name: 'สปีดต้น', value: null, weight: 5, upgrade: 0 },
      { name: 'ความเร็ว', value: null, weight: 5, upgrade: 0 },
      { name: 'เลี้ยงบอล', value: null, weight: 14, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 15, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 9, upgrade: 0 },
      { name: 'จบสกอร์', value: null, weight: 11, upgrade: 0 },
      { name: 'พลังการยิง', value: null, weight: 5, upgrade: 0 },
      { name: 'โหม่งบอล', value: null, weight: 2, upgrade: 0 },
      { name: 'ยิงไกล', value: null, weight: 4, upgrade: 0 },
      { name: 'ยืนตำแหน่ง', value: null, weight: 13, upgrade: 0},
      { name: 'อ่านเกม', value: null, weight: 8, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 9, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'LW/RW',
    stats: [
      { name: 'สปีดต้น', value: null, weight: 7, upgrade: 0 },
      { name: 'ความเร็ว', value: null, weight: 6, upgrade: 0 },
      { name: 'คล่องตัว', value: null, weight: 3, upgrade: 0 },
      { name: 'เลี้ยงบอล', value: null, weight: 16, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 14, upgrade: 0 },
      { name: 'เปิดบอล', value: null, weight: 9, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 9, upgrade: 0 },
      { name: 'จบสกอร์', value: null, weight: 10, upgrade: 0 },
      { name: 'ยิงไกล', value: null, weight: 4, upgrade: 0 },
      { name: 'ยืนตำแหน่ง', value: null, weight: 9, upgrade: 0 },
      { name: 'อ่านเกม', value: null, weight: 6, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 7, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'LM/RM',
    stats: [
      { name: 'ความอึด', value: null, weight: 5, upgrade: 0 },
      { name: 'สปีดต้น', value: null, weight: 7, upgrade: 0 },
      { name: 'ความเร็ว', value: null, weight: 6, upgrade: 0 },
      { name: 'เลี้ยงบอล', value: null, weight: 15, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 13, upgrade: 0 },
      { name: 'เปิดบอล', value: null, weight: 10, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 11, upgrade: 0 },
      { name: 'จบสกอร์', value: null, weight: 6, upgrade: 0 },
      { name: 'ส่งไกล', value: null, weight: 5, upgrade: 0 },
      { name: 'ยืนตำแหน่ง', value: null, weight: 8, upgrade: 0 },
      { name: 'อ่านเกม', value: null, weight: 7, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 7, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'CAM',
    stats: [
      { name: 'สปีดต้น', value: null, weight: 4, upgrade: 0 },
      { name: 'ความเร็ว', value: null, weight: 3, upgrade: 0 },
      { name: 'คล่องตัว', value: null, weight: 3, upgrade: 0 },
      { name: 'เลี้ยงบอล', value: null, weight: 13, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 15, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 16, upgrade: 0 },
      { name: 'จบสกอร์', value: null, weight: 7, upgrade: 0 },
      { name: 'ส่งไกล', value: null, weight: 4, upgrade: 0 },
      { name: 'ยิงไกล', value: null, weight: 5, upgrade: 0 },
      { name: 'ยืนตำแหน่ง', value: null, weight: 9, upgrade: 0 },
      { name: 'อ่านเกม', value: null, weight: 14, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 7, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'CM',
    stats: [
      { name: 'ความอึด', value: null, weight: 6, upgrade: 0 },
      { name: 'เลี้ยงบอล', value: null, weight: 7, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 14, upgrade: 0 },
      { name: 'เข้าปะทะ', value: null, weight: 5, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 17, upgrade: 0 },
      { name: 'จบสกอร์', value: null, weight: 2, upgrade: 0 },
      { name: 'ส่งไกล', value: null, weight: 13, upgrade: 0 },
      { name: 'ยิงไกล', value: null, weight: 4, upgrade: 0 },
      { name: 'เข้าสกัด', value: null, weight: 5, upgrade: 0 },
      { name: 'ยืนตำแหน่ง', value: null, weight: 6, upgrade: 0 },
      { name: 'อ่านเกม', value: null, weight: 13, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 8, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'CDM',
    stats: [
      { name: 'แข็งแกร่ง', value: null, weight: 4, upgrade: 0 },
      { name: 'ความอึด', value: null, weight: 6, upgrade: 0 },
      { name: 'สไลด์', value: null, weight: 5, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 10, upgrade: 0 },
      { name: 'ประกบตัว', value: null, weight: 9, upgrade: 0 },
      { name: 'เข้าปะทะ', value: null, weight: 12, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 14, upgrade: 0 },
      { name: 'ส่งไกล', value: null, weight: 10, upgrade: 0 },
      { name: 'เข้าสกัด', value: null, weight: 14, upgrade: 0 },
      { name: 'อ่านเกม', value: null, weight: 4, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 7, upgrade: 0 },
      { name: 'ดุดัน', value: null, weight: 5, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'CB',
    stats: [
      { name: 'แข็งแกร่ง', value: null, weight: 10, upgrade: 0 },
      { name: 'ความเร็ว', value: null, weight: 2, upgrade: 0 },
      { name: 'กระโดด', value: null, weight: 3, upgrade: 0 },
      { name: 'สไลด์', value: null, weight: 10, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 4, upgrade: 0 },
      { name: 'ประกบตัว', value: null, weight: 17, upgrade: 0 },
      { name: 'เข้าปะทะ', value: null, weight: 13, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 5, upgrade: 0 },
      { name: 'โหม่งบอล', value: null, weight: 10, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 5, upgrade: 0 },
      { name: 'เข้าสกัด', value: null, weight: 14, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 5, upgrade: 0 },
      { name: 'ดุดัน', value: null, weight: 7, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'LB/RB',
    stats: [
      { name: 'ความอึด', value: null, weight: 8, upgrade: 0 },
      { name: 'สปีดต้น', value: null, weight: 5, upgrade: 0 },
      { name: 'ความเร็ว', value: null, weight: 7, upgrade: 0 },
      { name: 'สไลด์', value: null, weight: 14, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 7, upgrade: 0 },
      { name: 'ประกบตัว', value: null, weight: 8, upgrade: 0 },
      { name: 'เข้าปะทะ', value: null, weight: 11, upgrade: 0 },
      { name: 'เปิดบอล', value: null, weight: 9, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 7, upgrade: 0 },
      { name: 'โหม่งบอล', value: null, weight: 4, upgrade: 0 },
      { name: 'เข้าสกัด', value: null, weight: 12, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 8, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'LWB/RWB',
    stats: [
      { name: 'ความอึด', value: null, weight: 10, upgrade: 0 },
      { name: 'สปีดต้น', value: null, weight: 4, upgrade: 0 },
      { name: 'ความเร็ว', value: null, weight: 6, upgrade: 0 },
      { name: 'สไลด์', value: null, weight: 11, upgrade: 0 },
      { name: 'เลี้ยงบอล', value: null, weight: 4, upgrade: 0 },
      { name: 'ควบคุมบอล', value: null, weight: 8, upgrade: 0 },
      { name: 'ประกบตัว', value: null, weight: 7, upgrade: 0 },
      { name: 'เข้าปะทะ', value: null, weight: 8, upgrade: 0 },
      { name: 'เปิดบอล', value: null, weight: 12, upgrade: 0 },
      { name: 'ส่งสั้น', value: null, weight: 10, upgrade: 0 },
      { name: 'เข้าสกัด', value: null, weight: 12, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 8, upgrade: 0 },
    ],
    ovr: 0
  },
  {
    name: 'GK',
    stats: [
      { name: 'พุ่งรับ', value: null, weight: 21, upgrade: 0 },
      { name: 'รับบอล', value: null, weight: 21, upgrade: 0 },
      { name: 'ส่งบอล', value: null, weight: 5, upgrade: 0 },
      { name: 'ยืนตำแหน่ง', value: null, weight: 21, upgrade: 0 },
      { name: 'GK ปฏิกิริยา', value: null, weight: 21, upgrade: 0 },
      { name: 'ปฏิกิริยา', value: null, weight: 11, upgrade: 0 },
    ],
    ovr: 0
  }
];