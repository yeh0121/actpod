import React from "react";
import { motion } from "framer-motion";

// --- Small helper components ---
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const PrimaryButton = ({ children, href = "#", onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white shadow-lg transition hover:translate-y-[-1px] hover:shadow-xl active:translate-y-0"
  >
    {children}
  </a>
);

const GhostButton = ({ children, href = "#" }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl border border-black/15 bg-white px-5 py-3 text-gray-800 shadow-sm transition hover:bg-black/5"
  >
    {children}
  </a>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur">
    {children}
  </span>
);

// --- Icons (inline SVG) ---
const IconMic = (props) => (
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M139.146 191.449C139.009 190.159 140.121 189.082 141.405 189.262L179.101 194.509C180.828 194.749 181.437 196.935 180.084 198.035L145.888 225.828C144.659 226.827 142.812 226.065 142.644 224.489L139.146 191.449Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M166.918 109.271C162.804 111.065 159.848 115.07 159.628 119.848L155.93 200.238C155.742 204.318 157.592 208.019 160.583 210.362C164.242 211.717 168.06 212.658 171.97 213.137L179.487 213.483C182.22 213.399 184.977 213.089 187.739 212.537C191.983 211.689 195.992 210.317 199.72 208.499C215.846 200.38 227.351 183.896 228.568 164.351C228.588 164.019 228.606 163.687 228.621 163.352C229.636 140.332 216.093 120.118 196.317 112.014C192.663 110.894 188.824 109.978 185.194 109.295C183.892 109.05 182.604 108.851 181.358 108.686L173.878 108.342C171.515 108.491 169.191 108.804 166.918 109.271Z" fill="#FFC800"/>
<path fillRule="evenodd" clipRule="evenodd" d="M44.8049 145.894C41.7687 136.72 40.1152 126.837 40.1152 116.537C40.1152 68.3453 76.3158 29.2773 120.972 29.2773C165.627 29.2773 201.828 68.3453 201.828 116.537C201.828 119.656 201.676 122.736 201.381 125.769L183.608 128.054C184.009 124.814 184.215 121.503 184.215 118.138C184.215 78.7887 155.9 46.8892 120.972 46.8892C86.043 46.8892 57.7278 78.7887 57.7278 118.138C57.7278 127.146 59.2111 135.762 61.9177 143.694L44.8049 145.894Z" fill="#FFC800"/>
<path fillRule="evenodd" clipRule="evenodd" d="M77.3251 118.79C81.7337 119.615 85.5129 122.852 86.8012 127.456L108.489 204.954C109.59 208.886 108.618 212.909 106.23 215.864C102.971 218.009 99.4642 219.783 95.7628 221.129L88.5126 223.159C85.8317 223.691 83.0755 224.01 80.2605 224.092C75.8922 224.221 71.6361 223.777 67.5579 222.825C49.8468 218.454 34.8285 204.709 29.4291 185.605C29.4065 185.526 29.3842 185.446 29.3619 185.366C23.1941 163.163 31.8441 140.42 49.2912 128.076C52.5991 126.163 56.1336 124.406 59.5166 122.925C60.7318 122.392 61.9451 121.908 63.1229 121.466L70.3169 119.454C72.6596 119.065 75.0001 118.846 77.3251 118.79Z" fill="#FFC800"/>
<mask id="path-4-inside-1_467_825" fill="white">
<path d="M165.334 88.4595C180.678 86.8112 194.453 97.914 196.102 113.258L202.761 175.244C202.873 176.287 202.923 177.324 202.92 178.35C203.052 192.555 192.379 204.811 177.961 206.36L169.178 207.246L145.889 226.177C144.659 227.177 142.812 226.413 142.645 224.838L141.081 210.083L124.078 211.799L94.2227 215.007C78.8785 216.655 65.1033 205.552 63.4551 190.208L56.7969 128.222C55.1486 112.878 66.2515 99.1029 81.5957 97.4546L165.334 88.4595Z"/>
</mask>
<path d="M165.334 88.4595C180.678 86.8112 194.453 97.914 196.102 113.258L202.761 175.244C202.873 176.287 202.923 177.324 202.92 178.35C203.052 192.555 192.379 204.811 177.961 206.36L169.178 207.246L145.889 226.177C144.659 227.177 142.812 226.413 142.645 224.838L141.081 210.083L124.078 211.799L94.2227 215.007C78.8785 216.655 65.1033 205.552 63.4551 190.208L56.7969 128.222C55.1486 112.878 66.2515 99.1029 81.5957 97.4546L165.334 88.4595Z" fill="white"/>
<path d="M165.334 88.4595L165.174 86.9692L165.174 86.9692L165.334 88.4595ZM196.102 113.258L194.611 113.418L194.611 113.418L196.102 113.258ZM202.761 175.244L204.251 175.084L204.251 175.084L202.761 175.244ZM202.92 178.35L201.421 178.345L201.421 178.355L201.421 178.364L202.92 178.35ZM177.961 206.36L178.111 207.851L178.121 207.85L177.961 206.36ZM169.178 207.246L169.027 205.754L168.581 205.799L168.232 206.083L169.178 207.246ZM145.889 226.177L146.834 227.34L146.834 227.34L145.889 226.177ZM142.645 224.838L141.154 224.996L141.154 224.997L142.645 224.838ZM141.081 210.083L142.572 209.925L142.414 208.441L140.93 208.591L141.081 210.083ZM124.078 211.799L123.928 210.308L123.918 210.309L124.078 211.799ZM94.2227 215.007L94.3827 216.498L94.3828 216.498L94.2227 215.007ZM63.4551 190.208L61.9648 190.368L61.9648 190.368L63.4551 190.208ZM56.7969 128.222L58.2871 128.062L58.2871 128.062L56.7969 128.222ZM81.5957 97.4546L81.4356 95.9643L81.4356 95.9643L81.5957 97.4546ZM165.334 88.4595L165.494 89.9497C180.015 88.3899 193.051 98.8971 194.611 113.418L196.102 113.258L197.592 113.098C195.855 96.9308 181.341 85.2326 165.174 86.9692L165.334 88.4595ZM196.102 113.258L194.611 113.418L201.27 175.404L202.761 175.244L204.251 175.084L197.592 113.098L196.102 113.258ZM202.761 175.244L201.27 175.404C201.376 176.39 201.424 177.372 201.421 178.345L202.92 178.35L204.419 178.355C204.422 177.277 204.369 176.185 204.251 175.084L202.761 175.244ZM202.92 178.35L201.421 178.364C201.546 191.805 191.445 203.404 177.801 204.87L177.961 206.36L178.121 207.85C193.314 206.218 204.557 193.304 204.419 178.336L202.92 178.35ZM177.961 206.36L177.811 204.869L169.027 205.754L169.178 207.246L169.328 208.737L178.111 207.851L177.961 206.36ZM169.178 207.246L168.232 206.083L144.943 225.014L145.889 226.177L146.834 227.34L170.123 208.409L169.178 207.246ZM145.889 226.177L144.943 225.014C144.638 225.262 144.177 225.073 144.135 224.68L142.645 224.838L141.154 224.997C141.447 227.752 144.68 229.091 146.834 227.34L145.889 226.177ZM142.645 224.838L144.135 224.68L142.572 209.925L141.081 210.083L139.591 210.24L141.154 224.996L142.645 224.838ZM141.081 210.083L140.93 208.591L123.928 210.308L124.078 211.799L124.229 213.291L141.232 211.574L141.081 210.083ZM124.078 211.799L123.918 210.309L94.0625 213.517L94.2227 215.007L94.3828 216.498L124.238 213.29L124.078 211.799ZM94.2227 215.007L94.0626 213.517C79.5415 215.077 66.5052 204.569 64.9453 190.047L63.4551 190.208L61.9648 190.368C63.7015 206.535 78.2154 218.234 94.3827 216.498L94.2227 215.007ZM63.4551 190.208L64.9453 190.047L58.2871 128.062L56.7969 128.222L55.3066 128.382L61.9648 190.368L63.4551 190.208ZM56.7969 128.222L58.2871 128.062C56.7273 113.541 67.2346 100.505 81.7558 98.9448L81.5957 97.4546L81.4356 95.9643C65.2683 97.7011 53.57 112.215 55.3066 128.382L56.7969 128.222ZM81.5957 97.4546L81.7558 98.9448L165.494 89.9497L165.334 88.4595L165.174 86.9692L81.4356 95.9643L81.5957 97.4546Z" fill="#BDBDBD" mask="url(#path-4-inside-1_467_825)"/>
<path d="M138.617 124.136L144.199 179.416" stroke="#FFC800" strokeWidth="5.40958" strokeLinecap="round"/>
<path d="M151.891 132.498L155.541 168.643" stroke="#FFC800" strokeWidth="5.40958" strokeLinecap="round"/>
<path d="M128.136 139.118L130.928 166.759" stroke="#FFC800" strokeWidth="5.40958" strokeLinecap="round"/>
<path d="M116.583 143.471L118.73 164.732" stroke="#FFC800" strokeWidth="5.40958" strokeLinecap="round"/>
<path d="M164.735 138.756L166.881 160.019" stroke="#FFC800" strokeWidth="5.40958" strokeLinecap="round"/>
<path d="M91.9663 145.879L94.1138 167.142" stroke="#FFC800" strokeWidth="5.40958" strokeLinecap="round"/>
<path d="M103.095 132.98L107.603 177.631" stroke="#FFC800" strokeWidth="5.40958" strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M77.3251 118.79C81.7337 119.615 85.5129 122.852 86.8012 127.456L108.489 204.954C109.59 208.886 108.618 212.909 106.23 215.864C102.971 218.009 99.4642 219.783 95.7628 221.129L88.5126 223.159C85.8317 223.691 83.0755 224.01 80.2605 224.092C75.8922 224.221 71.6361 223.777 67.5579 222.825C49.8468 218.454 34.8285 204.709 29.4291 185.605C29.4065 185.526 29.3842 185.446 29.3619 185.366C23.1941 163.163 31.8441 140.42 49.2912 128.076C52.5991 126.163 56.1336 124.406 59.5166 122.925C60.7318 122.392 61.9451 121.908 63.1229 121.466L70.3169 119.454C72.6596 119.065 75.0001 118.846 77.3251 118.79Z" fill="#FFC800"/>
</svg>

);

const IconWave = (props) => (
  <svg viewBox="0 0 200 20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M0 10 C20 0, 40 20, 60 10 S100 0, 120 10 160 20, 180 10 200 10 200 10" />
  </svg>
);

const IconTag = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M10 3l9 9-7 7-9-9V3h7z"/>
    <circle cx="7.5" cy="7.5" r="1.5" />
  </svg>
);

const IconGraph = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M4 20V4m0 16h16"/>
    <rect x="6" y="12" width="3" height="6" rx="1"/>
    <rect x="11" y="9" width="3" height="9" rx="1"/>
    <rect x="16" y="6" width="3" height="12" rx="1"/>
  </svg>
);

const IconHandshake = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M3 8l5-2 4 3 4-3 5 2v8l-5 2-4-3-4 3-5-2V8z"/>
  </svg>
);

// --- Mock phone frame ---
const PhoneFrame = ({ children }) => (
  <div className="relative mx-auto w-[300px] rounded-[2.5rem] border border-black/10 bg-white p-4 shadow-2xl sm:w-[360px]">
    <div className="absolute left-1/2 top-1.5 h-6 w-28 -translate-x-1/2 rounded-full bg-black/10" />
    <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/10">
      {children}
    </div>
  </div>
);

const DemoScreenn = () => (
  <div className="h-[520px] bg-gradient-to-b from-amber-50 to-white">
    {/* Fake top bar */}
    <div className="flex items-center justify-between px-4 py-3">
      <div className="text-sm font-medium">ActPod</div>
      <div className="text-[10px] text-gray-500">REC • 00:45</div>
    </div>
    {/* Wave demo */}
    <div className="flex h-72 items-center justify-center">
      <IconWave className="h-24 w-[85%] text-amber-400" />
    </div>
    {/* Controls */}
    <div className="flex items-center justify-center gap-4 pb-6">
      <button className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow-sm">Pause</button>
      <button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white shadow">Save</button>
    </div>
  </div>
);

const DemoScreen = () => (
  <div className="h-[520px] bg-gradient-to-b from-amber-50 to-white">
    <img className="h-full w-full object-cover" src="assets/hero.png" alt="Demo Screen" />
  </div>
);

// --- Sections ---
const Nav = () => (
  <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/80 backdrop-blur">
    <Container className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-black">
          <IconMic className="h-4 w-4" />
        </span>
        <span className="text-lg font-semibold text-amber-400">ActPod</span>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
        <a href="#features" className="hover:text-black">特色</a>
        {/* <a href="#flow" className="hover:text-black">流程</a> */}
        <a href="#community" className="hover:text-black">社群</a>
        <a href="#download" className="hover:text-black">下載</a>
      </nav>
      <div className="hidden md:block">
        <PrimaryButton href="#download">免費下載</PrimaryButton>
      </div>
    </Container>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-amber-200 via-amber-100 to-white py-20">
    <Container className="grid items-center gap-12 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="mb-4 flex items-center gap-2">
          <Badge>全新瀏覽體驗</Badge>
          <Badge>Podcast × 社群</Badge>
        </div>
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
          人人都能成為 <br /> Podcaster
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
          Actpod 是一個全新的 Podcast 平台，打造一個更貼近聽眾的 Podcast 空間，建立 Podcaster 和聽眾之間更緊密的雙向互動。
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <PrimaryButton href="#download">立即免費下載</PrimaryButton>
          <GhostButton href="#features">了解特色</GhostButton>
        </div>
        <div className="mt-8 flex items-center gap-3 text-xs text-gray-600">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
          已有 10,000+ 創作者加入 ActPod
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="justify-self-center">
        <PhoneFrame>
          <DemoScreen />

        </PhoneFrame>
      </motion.div>
    </Container>
    <div className="pointer-events-none absolute -right-24 -top-24 hidden aspect-square w-80 rounded-full bg-amber-300/40 blur-3xl lg:block" />
    <div className="pointer-events-none absolute -bottom-24 -left-24 hidden aspect-square w-80 rounded-full bg-amber-200/60 blur-3xl lg:block" />
  </section>
);

const Features = () => (
  <section id="features" className="py-20">
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">耳目一新的瀏覽形式，打造更貼近的互動</h2>
        <p className="mt-4 text-gray-600">結合 Podcast 與社群，讓創作者與聽眾不只「收聽」，更能交流、參與與成長。</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<img src="assets/1.png" alt="mic" className="" />}
          title="人人都是Podcaster"
          desc="快速開始經營自己的頻道。"
        />
        <FeatureCard
          icon={<img src="assets/home.png" alt="mic" className="" />}
          title="排版簡潔"
          desc="更快找到想聽的內容，專注在聲音本身。"
        />
        <FeatureCard
          icon={<img src="assets/3.png" alt="mic" className="" />}
          title="空間系統"
          desc="更快瞄準目標聽眾，加深互動與連結。"
        />
        <FeatureCard
          icon={<img src="assets/4.png" alt="mic" className="" />}
          title="語音對話"
          desc="開啟與Podcaster間的語音對話。"
        />
        <FeatureCard
          icon={<img src="assets/5.png" alt="mic" className="" />}
          title="共創變現"
          desc="全球獨創，語音互動共創變現。"
        />
        <FeatureCard
          icon={<img src="assets/6.png" alt="mic" className="" />}
          title="即時錄音 / 上傳"
          desc="隨時開啟錄音或匯入音檔，靈感來了就開始。"
        />
       
      </div>
    </Container>
  </section>
);

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg"
  >
    <div className="mb-4 inline-flex rounded-xl p-3 text-amber-700">
      {icon}
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
  </motion.div>
);

const Flow = () => (
  <section id="flow" className="bg-gradient-to-b from-white to-amber-50 py-20">
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">從靈感到上架，只要 3 步</h2>
        <p className="mt-4 text-gray-600">錄音 → 編輯 → 發布，一站完成，讓創作更專注。</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { step: "01", title: "錄音 / 上傳", desc: "行動裝置或桌面立即開錄，也能匯入既有音檔。" },
          { step: "02", title: "編輯 / 整理", desc: "AI 自動生成標題、描述與標籤，快速完成節目準備。" },
          { step: "03", title: "一鍵發布", desc: "同步到主要平台，並即時追蹤成效。" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-bold text-white">{s.step}</div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

const Community = () => (
  <section id="community" className="bg-gradient-to-b from-white to-amber-50 py-20">
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Podcast 創作者的舞台</h2>
        <p className="mt-4 text-gray-600">加入 ActPod 社群，與全球創作者連結、交流、合作，讓你的聲音被更多人聽見。</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "小魚", role: "獨立創作者", quote: "第一次覺得做 Podcast 這麼簡單！" },
          { name: "Voices Lab", role: "品牌節目", quote: "數據儀表板讓我們更懂聽眾。" },
          { name: "Coffee Talk", role: "雙人談話", quote: "社群合作幫我們找到新聽眾。" },
        ].map((t, i) => (
          <div key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-amber-200" />
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const CTA = () => (
  <section id="download" className="relative overflow-hidden bg-black py-20 text-white">
    
    <Container className="relative">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">現在就開始，讓世界聽見你的聲音</h2>
        <p className="mt-4 text-white/80">免費下載 ActPod，創作、交流、成長一次到位。</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a className="rounded-2xl bg-white px-5 py-3 text-black shadow hover:bg-white/90" href="#">App Store</a>
          <a className="rounded-2xl border border-white/20 px-5 py-3 text-white hover:bg-white/10" href="#">Google Play</a>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-24 -top-24 aspect-square w-80 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 aspect-square w-80 rounded-full bg-amber-200/20 blur-3xl" />
    </Container>
    <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
      
       <div className="flex items-center gap-2">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-black">
          <IconMic className="h-4 w-4" />
        </span>
        <span className="font-semibold">ActPod</span>
        <span className="text-gray-500">© {new Date().getFullYear()}</span>
      </div>
      <nav className="flex items-center gap-6 text-white/80">
        <a href="#features" className="hover:text-white">特色</a>
        {/* <a href="#flow" className="hover:text-white">流程</a> */}
        <a href="#community" className="hover:text-white">社群</a>
        <a href="#download" className="hover:text-white">下載</a>
      </nav>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="border-t border-black/10 bg-white py-10 text-sm">
    <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
      <div className="flex items-center gap-2 text-gray-700">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-300 text-black">
          <IconMic className="h-4 w-4" />
        </span>
        <span className="font-semibold">ActPod</span>
        <span className="text-gray-500">© {new Date().getFullYear()}</span>
      </div>
      <nav className="flex items-center gap-6 text-gray-600">
        <a href="#features" className="hover:text-black">特色</a>
        <a href="#flow" className="hover:text-black">流程</a>
        <a href="#community" className="hover:text-black">社群</a>
        <a href="#download" className="hover:text-black">下載</a>
      </nav>
    </Container>
  </footer>
);

export default function ActPodLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <Features />
      {/* <Flow /> */}
      <Community />
      <CTA />
      
    </div>
  );
}
