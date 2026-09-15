export const profile = {
  wordmark: "Nam.",
  fullName: "สุธารชัย ประดิษฐกูล",
  studentLine: "นักศึกษาชั้นปีที่ 3 · วิทยาการคอมพิวเตอร์ · มหาวิทยาลัยแม่โจ้",
  targetLine: "มองหาโอกาสฝึกงานตำแหน่ง UX/UI Developer หรือ Data Scientist",
  intro:
    "ผมเปลี่ยนข้อมูลที่ซับซ้อนให้เป็นประสบการณ์ดิจิทัลที่ชัดเจน ใช้งานง่าย และตอบโจทย์จริง — ตั้งแต่การวางโครงสร้างหน้าจอ ไปจนถึงการวิเคราะห์ข้อมูลเพื่อพัฒนาฟีเจอร์ที่มีความหมาย",
  about:
    "ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจการเชื่อมโยงระหว่าง Data และ User Experience มุ่งสร้างเว็บแอปที่ใช้งานง่าย พร้อมนำข้อมูลมาวิเคราะห์เพื่อพัฒนาฟีเจอร์และแก้ปัญหาที่ตอบโจทย์ผู้ใช้อย่างแท้จริง",
  approach:
    "พัฒนาโปรเจกต์ระดับ Web, Mobile และ Data Script โดยใช้ AI เพื่อเร่งการทำต้นแบบ แต่ยังควบคุม Requirement โครงสร้างระบบ และการทดสอบจริงด้วยตนเอง พร้อมสื่อสารขอบเขตของงานตามข้อเท็จจริง",
  education: [
    "มหาวิทยาลัยแม่โจ้",
    "คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์",
    "กำลังศึกษาชั้นปีที่ 3",
  ],
  interests: [
    "วิ่งสะสมระยะทางและฝึก Zone 2",
    "Specialty coffee: Pour-over, Moka pot, Cold brew และมัทฉะ",
    "เกมแนว Simulation / Strategy, Automation และแอนิเมชัน",
  ],
  email: "sutarnchai@gmail.com",
  github: "https://github.com/numcayX2",
} as const;

export const navLinks = [
  { href: "/#work", label: "ผลงาน" },
  { href: "/#about", label: "เกี่ยวกับ" },
  { href: "/#skills", label: "ทักษะ" },
  { href: "/#certificates", label: "ใบรับรอง" },
  { href: "/#contact", label: "ติดต่อ" },
] as const;

export const certificates = [
  {
    title: "AI Literacy and Safety Modules · ความรู้รอบด้าน AI และความปลอดภัย",
    issuer: "YOU by True · Google Gemini",
    detail: "ผ่านการอบรมและสำเร็จหลักสูตร YOU by True & Gemini Academy",
    date: "15 กันยายน 2569",
    href: encodeURI(
      "/certificates/Certificate Al Literacy and Safety Modules _ ความรู้รอบด้าน AI และความปลอดภัย.pdf",
    ),
  },
] as const;

export const skillGroups = [
  {
    index: "01",
    title: "Frontend & UX/UI",
    scope: "Design and responsive interfaces",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "GSAP",
      "Responsive Web Design (Mobile-first)",
      "Information Hierarchy & Chunking",
      "User-Centered Design",
    ],
  },
  {
    index: "02",
    title: "Backend & Data",
    scope: "Systems, APIs and databases",
    items: [
      "NestJS",
      "Node.js",
      "RESTful APIs",
      "Dual-token Authentication · RBAC",
      "SQLite",
      "MongoDB",
      "Schema Design · Query · Data Relationships",
    ],
  },
  {
    index: "03",
    title: "Programming & Tools",
    scope: "Automation and delivery",
    items: [
      "Python",
      "Data Extraction · Computer Vision เบื้องต้น",
      "TypeScript",
      "JavaScript",
      "Kotlin",
      "Android Development",
      "Git",
      "GitHub",
      "Figma",
      "AI-assisted Development",
    ],
  },
] as const;

export const project = {
  name: "My Schedule",
  tagline: "รู้วิชา รู้ห้อง พร้อมไปเรียน",
  summary:
    "เว็บตารางเรียน responsive ที่รวมเวลา วิชา และห้องเรียนไว้ในการ์ดเดียวบนมือถือ และจัดเป็น Weekly Routing grid บน desktop เพื่อลดการจำรหัสและเลื่อนเทียบข้อมูล",
  role: "Project Owner & UI Design Direction — AI-assisted Development",
  tags: ["Web Application", "Responsive · Mobile & Desktop"],
  tech: ["Next.js", "Tailwind CSS", "GSAP"],
  repo: "https://github.com/numcayX2/my-schedule",
  liveUrl: "https://my-schedule-eosin.vercel.app/",
  caseStudyHref: "/work/my-schedule",
  heroCaption: "My Schedule — ภาพเต็มหน้าจอตารางเรียนบนมือถือ",
  images: {
    full: {
      src: "/images/my-schedule-mobile.png",
      width: 634,
      height: 1270,
      alt: "ภาพหน้าจอ My Schedule แบบเต็ม: หัวเรื่อง CLASS/SCHEDULE แถบสถิติ และรายการคาบของวันจันทร์สามคาบ",
      caption: "Mobile — มุมมองวันจันทร์",
    },
    cards: {
      src: "/images/my-schedule-cards.png",
      width: 634,
      height: 289,
      alt: "ภาพขยายการ์ดวิชาแรก: เวลา 10:00–12:00 รหัสวิชา 10301351 ชื่อวิชาวิทยาการข้อมูล และป้ายห้อง 105 กลุ่ม 2 บรรยาย LEC",
      caption: "Mobile — การ์ดวิชาเดียวรวมเวลา รหัส ชื่อวิชา และห้อง",
    },
    desktop: {
      src: "/images/my-schedule-desktop-preview.webp",
      width: 1262,
      height: 1200,
      alt: "หน้าจอ desktop My Schedule: ส่วนหัว Class Schedule และตาราง Weekly Routing ที่แสดง 12 คาบเรียนตลอดสัปดาห์",
      caption: "Desktop — Class Schedule และ Weekly Routing ทั้งสัปดาห์",
    },
  },
} as const;

export const otherProjects = [
  {
    index: "02",
    name: "Ticket Management Platform",
    type: "Full-stack Web Application",
    role: "Full-stack Developer · Frontend, UI/UX & Authentication",
    tech: "Next.js · React · NestJS · Tailwind CSS",
    summary:
      "แพลตฟอร์มบริหารจัดการตั๋วงานที่แบ่งสิทธิ์เข้าถึงข้อมูลตามบทบาทผู้ใช้ พร้อม Dual-token Authentication, Route Guards, การคัดกรองสถานะ และการแสดงผลข้อมูลแบบ responsive",
  },
  {
    index: "03",
    name: "NoteGPS",
    type: "Android Mobile Application",
    role: "Mobile Application Developer",
    tech: "Kotlin · Android SDK · SQLite",
    summary:
      "แอปบันทึกข้อความพร้อมปักหมุดพิกัด เชื่อม GPS และ Location Services เพื่อเก็บ ค้นหา และจัดการข้อมูลแบบออฟไลน์ด้วยฐานข้อมูลภายในเครื่อง",
  },
  {
    index: "04",
    name: "Python Automation & Data Tracking",
    type: "Data Scripting & Process Automation",
    role: "Developer",
    tech: "Python · Computer Vision libraries",
    summary:
      "สคริปต์ตรวจจับเงื่อนไขและดึงสถานะเชิงสถิติผ่านการประมวลผลภาพอัตโนมัติ เพื่อจัดเก็บ สรุป และประเมินผลการทำงานอย่างเป็นระบบ",
  },
] as const;

export const caseStudy = {
  title: "My Schedule",
  subtitle: "รู้วิชา รู้ห้อง พร้อมไปเรียน",
  overview:
    "เว็บไซต์เริ่มจาก Personal Pain Point ของเจ้าของโปรเจกต์ ต้องการใช้เองและแบ่งปันให้เพื่อน โดยใช้การ์ดสำหรับอ่านทีละวันบนมือถือ และ Weekly Routing grid สำหรับเทียบทั้งสัปดาห์บน desktop ความตั้งใจแชร์ไม่ใช่หลักฐานว่ามีผู้ใช้จริงจำนวนมาก",
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
    {
      title: "Responsive Layout",
      body: "มือถือใช้การ์ดและแถบเลือกวันเพื่ออ่านทีละวัน ส่วน desktop แสดง Weekly Routing grid เพื่อเทียบวันและช่วงเวลาของทั้งสัปดาห์",
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
