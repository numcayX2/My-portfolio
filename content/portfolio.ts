export const profile = {
  wordmark: "Nam.",
  fullName: "สุธารชัย ประดิษฐกูล",
  studentLine: "นักศึกษาวิทยาการคอมพิวเตอร์ ปี 3 · มหาวิทยาลัยแม่โจ้",
  targetLine: "มองหาโอกาสฝึกงานด้าน Data Science และ UX/UI Development",
  intro:
    "สนใจการเชื่อมโยงข้อมูลกับประสบการณ์ผู้ใช้ และการสร้างเว็บที่ช่วยแก้ปัญหาในชีวิตประจำวัน",
  about:
    "ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจทั้งข้อมูลและการออกแบบประสบการณ์ผู้ใช้ ชอบเริ่มต้นจากปัญหาที่พบในการใช้งานจริง แล้วกำหนดแนวทางและโครงสร้างหน้าจอเพื่อพัฒนาเป็นเครื่องมือที่ใช้งานได้ โดยใช้ AI ช่วยในกระบวนการพัฒนา",
  education: [
    "มหาวิทยาลัยแม่โจ้",
    "คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์",
    "กำลังศึกษาชั้นปีที่ 3",
  ],
  email: "sutarnchai.paditgool@gmail.com",
} as const;

export const navLinks = [
  { href: "/#about", label: "เกี่ยวกับ" },
  { href: "/#skills", label: "ทักษะ" },
  { href: "/#work", label: "ผลงาน" },
  { href: "/#contact", label: "ติดต่อ" },
] as const;

export const skillGroups = [
  {
    index: "01",
    title: "Design direction",
    scope: "Owned in My Schedule",
    items: [
      "กำหนด Requirements",
      "Information Hierarchy",
      "Layout",
      "Visual Theme",
      "ทดสอบใช้งานด้วยตนเอง",
    ],
  },
  {
    index: "02",
    title: "Development tools",
    scope: "AI-assisted",
    items: ["Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    index: "03",
    title: "ความสนใจ",
    scope: "Interests",
    items: ["Data Science", "UX/UI", "การใช้ AI ช่วยพัฒนา"],
  },
] as const;

export const project = {
  name: "My Schedule",
  tagline: "รู้วิชา รู้ห้อง พร้อมไปเรียน",
  summary:
    "เว็บตารางเรียนบนมือถือที่รวมเวลา วิชา และห้องเรียนไว้ในการ์ดเดียว ลดความจำเป็นในการจำรหัสและเลื่อนเทียบข้อมูล พร้อมทิศทางภาพที่ได้แรงบันดาลใจจาก Zenless Zone Zero",
  role: "Project Owner & UI Design Direction",
  tags: ["AI-assisted Development", "Personal Project"],
  tech: ["Next.js", "Tailwind CSS", "GSAP"],
  repo: "https://github.com/numcayX2/my-schedule",
  caseStudyHref: "/work/my-schedule",
  // ภาพทั้งหมดมาจาก screenshot เดียวกัน ภาพขยายเป็น crop ของภาพเต็ม ไม่ใช่หน้าจอคนละอัน
  images: {
    full: {
      src: "/images/my-schedule-mobile.png",
      width: 634,
      height: 1270,
      alt: "ภาพหน้าจอ My Schedule แบบเต็ม: หัวเรื่อง CLASS/SCHEDULE แถบสถิติ และรายการคาบของวันจันทร์สามคาบ",
      caption: "ภาพเต็มหน้าจอ — มุมมองวันจันทร์",
    },
    cards: {
      src: "/images/my-schedule-cards.png",
      width: 634,
      height: 289,
      alt: "ภาพขยายการ์ดวิชาแรก: เวลา 10:00–12:00 รหัสวิชา 10301351 ชื่อวิชาวิทยาการข้อมูล และป้ายห้อง 105 กลุ่ม 2 บรรยาย LEC",
      caption: "ภาพขยาย — การ์ดเดียวรวมเวลา รหัส ชื่อวิชา และห้อง",
    },
    dayNav: {
      src: "/images/my-schedule-daynav.png",
      width: 634,
      height: 250,
      alt: "ภาพขยายช่วงท้ายหน้าจอ: การ์ดวิชาภาษาอังกฤษเพื่อการศึกษา ห้อง 147 และแถบเลือกวัน จ. อ. พ. พฤ. ศ. ด้านล่างสุด",
      caption: "ภาพขยาย — แถบเลือกวันอยู่ด้านล่างเพื่อให้ถึงด้วยนิ้วโป้ง",
    },
  },
} as const;

export const caseStudy = {
  title: "My Schedule",
  subtitle: "รู้วิชา รู้ห้อง พร้อมไปเรียน",
  overview:
    "เว็บไซต์เริ่มจาก Personal Pain Point ของเจ้าของโปรเจกต์ ต้องการใช้เองและแบ่งปันให้เพื่อน ความตั้งใจแชร์ไม่ใช่หลักฐานว่ามีผู้ใช้จริงจำนวนมาก",
  problems: [
    "ตารางเดิมแสดงรหัสวิชาในช่องตาราง แต่แยกชื่อวิชาไว้ในรายการด้านล่าง",
    "ต้องจำรหัสหรือเลื่อนกลับไปเทียบชื่อ",
    "ตัวอักษรเล็กเมื่อเปิดบนมือถือ ต้องซูมเข้า–ออก",
  ],
  decisions: [
    {
      title: "Chunking",
      body: "รวมเวลา รหัส ชื่อวิชาภาษาไทยตัวหนา และป้ายห้องไว้ในการ์ดเดียว",
    },
    {
      title: "Visual Distinction",
      body: "ใช้เขียวนีออน ส้ม ฟ้า แยกคาบ พร้อมเลขลำดับโปร่งแสงขนาดใหญ่ โดยข้อมูลวิชายังเด่นกว่าองค์ประกอบตกแต่ง",
    },
    {
      title: "Mobile-first Navigation",
      body: "แถบ จ.–ศ. อยู่ด้านล่างเพื่อเข้าถึงด้วยนิ้วโป้ง",
    },
    {
      title: "Rationale",
      body: "Recognition over Recall — ช่วยให้เห็นข้อมูลที่ต้องใช้โดยไม่ต้องจำรหัสหรือเทียบคนละส่วน",
    },
  ],
  roleAndAi: [
    "น้ำกำหนด Concept, Requirements, Information Hierarchy, Layout และ Visual Theme และทดลองใช้งานเอง",
    "AI ช่วยสร้างโค้ดและ Animation ตามข้อกำหนด ด้วย Next.js, Tailwind CSS และ GSAP",
    "ไม่เขียนว่าน้ำลงมือเขียนโค้ดทั้งหมดเอง หรือทำ user research อย่างเป็นทางการ",
  ],
  verification: [
    "เพิ่ม Web Shortcut ไว้บนหน้าจอโฮมของสมาร์ตโฟน ไม่เรียกว่า PWA/offline app เว้นแต่ตรวจพบจริง",
    "เจ้าของทดลองใช้ในชีวิตประจำวัน และรายงานว่าเปิดดูและเลื่อนคาบเรียนด้วยมือเดียวได้สะดวก โดยไม่ต้องเพ่งหรือซูมภาพตารางเดิม",
    "เป็น self-reported personal use; ยังไม่มี Formal Usability Testing, การวัดเวลาเปรียบเทียบ หรือสถิติผู้ใช้",
    "Screenshot ยืนยันหน้าตา UI เท่านั้น ไม่ยืนยันประสิทธิภาพหรือความสำเร็จของผู้ใช้ทั้งหมด",
  ],
  nextSteps: [
    "ให้เพื่อนทดลองค้นหาวิชา/ห้องเรียนและเก็บ Feedback",
    "พิจารณาไฮไลต์คาบปัจจุบัน/วันนี้ หรือแจ้งเตือนคาบถัดไป",
    "แสดงเป็นแผนต่อยอด ไม่เป็นฟีเจอร์ที่ทำเสร็จแล้ว",
  ],
} as const;
