import { 
  Plane, Utensils, Camera, Clock, Coffee, Waves, 
  Anchor, Ship, Users, Building2, ShoppingCart, BookOpen 
} from 'lucide-react';

export const DATES = [
  { id: '2026-05-15', day: 'Fri', date: '15', theme: '雙線匯合・海邊放鬆' },
  { id: '2026-05-16', day: 'Sat', date: '16', theme: '藍色膠囊・古都夜色' },
  { id: '2026-05-17', day: 'Sun', date: '17', theme: '慶州巡禮・光影美學' },
  { id: '2026-05-18', day: 'Mon', date: '18', theme: '飆速滑車・海景水療' },
  { id: '2026-05-19', day: 'Tue', date: '19', theme: '分組行動・滿足賦歸' },
];

export const ITINERARY_DATA: Record<string, any[]> = {
  '2026-05-15': [
    { id: 101, time: '06:30', title: 'Team A 抵達', desc: 'Team A 紅眼航班組抵達金海機場後，可先將大型行李寄放於新世界百貨 Centum City 店，方便後續進入 Spa Land。', icon: Plane, mapUrl: 'https://map.naver.com/v5/search/김해국제공항' },
    { id: 102, time: '08:00', title: '早晨放鬆：Spa Land', desc: '全亞洲最大的豪華汗蒸幕，擁有 22 個天然溫泉池及 13 個特色主題熱療室，是紅眼航班後消除疲累的首選。', icon: Waves, mapUrl: 'https://map.naver.com/v5/search/신세계백화점센텀시티점스파랜드' },
    { id: 103, time: '11:30', title: '雙線匯合｜Team B 抵達', desc: '所有成員集合！Team B 抵達後與 Team A 會合，包車組會接送大家前往影島，正式開啟釜山之旅。', icon: Users },
    { id: 104, time: '12:30', title: '午餐：影島海女村', desc: '在海邊的長凳上品嚐紫菜包飯配海膽（必點！），這是只有在釜山才能體驗到的海邊戶外用餐氛圍。', icon: Utensils, mapUrl: 'https://map.naver.com/v5/search/영도해녀촌' },
    { id: 105, time: '14:30', title: '白淺灘文化村', desc: '曾是韓劇場景的彩繪村落，沿著「影島海路」漫步，尋找那張最有名的海邊隧道剪影照。', icon: Camera, mapUrl: 'https://map.naver.com/v5/search/흰여울문화마을' },
    { id: 106, time: '16:30', title: '松島巡禮', desc: '搭乘松島龍宮雲橋連結海上小島，漫步於透明玻璃步道上，感受在海面上行走的刺激感。', icon: Anchor, mapUrl: 'https://map.naver.com/v5/search/송도용궁구름다리' },
    { id: 107, time: '18:30', title: '晚餐：道地韓料理', desc: '品嚐釜山特色料理，如豬肉湯飯或烤肋排，補足第一天的體力。', icon: Utensils },
    { id: 108, time: '20:00', title: '夜遊：廣安里遊艇', desc: '從 The Bay 101 出發，在海面上欣賞發光的廣安大橋，船上還會有點放煙火，浪漫值爆表。', icon: Ship, mapUrl: 'https://map.naver.com/v5/search/더베이101' },
  ],
  '2026-05-16': [
    { id: 201, time: '08:00', title: '出門', desc: '準備前往青沙浦，記得多帶一件薄外套，海邊早晨風較大。', icon: Clock, mapUrl: 'https://map.naver.com/v5/search/청사포역' },
    { id: 202, time: '08:30', title: '海雲台膠囊列車', desc: '搭乘可愛的網美彩虹小火車，從青沙浦緩慢開回尾浦，沿途俯瞰湛藍的東海美景。', icon: Camera, mapUrl: 'https://map.naver.com/v5/search/해운대블루라인파크미포정거장' },
    { id: 203, time: '09:30', title: '人氣點心：自然鹽麵包', desc: '「自然道」鹽麵包是近期的排隊名店，現烤的奶油香氣與酥脆口感絕對值得排隊。', icon: Coffee, mapUrl: 'https://map.naver.com/v5/search/자연도소금빵해운代' },
    { id: 204, time: '10:30', title: '午餐：機張市場', desc: '選一間喜歡的攤位，當場挑選肥美的長腳蟹，廚師會幫大家剪開，體驗豪邁的蟹腳大餐。', icon: Utensils, mapUrl: 'https://map.naver.com/v5/search/기장시장' },
    { id: 205, time: '13:30', title: '前往慶州', desc: '搭車前往韓國的千年古都——慶州，這裡隨處可見壯麗的古墓群。', icon: Plane },
    { id: 206, time: '15:00', title: '佛國寺巡禮', desc: '慶州最著名的佛教建築群，不僅是世界遺產，其精湛的石雕工藝更是韓國建築的瑰寶。', icon: BookOpen, mapUrl: 'https://map.naver.com/v5/search/불국사' },
    { id: 207, time: '15:30', title: '韓服著裝體驗', desc: '在古城中換上精緻的新式韓服，古建築配上韓服拍出來的照片就像穿越時空。', icon: Users, mapUrl: 'https://map.naver.com/v5/search/황리단길한복' },
    { id: 208, time: '17:00', title: '皇理團路慢步', desc: '由舊韓屋開闢成的時髦街道，充滿了各種可愛小店、獨立咖啡店與慶州著名的「十元麵包」。', icon: ShoppingCart, mapUrl: 'https://map.naver.com/v5/search/황리단길' },
    { id: 209, time: '18:30', title: '韓屋民宿與晚餐', desc: '今晚體驗傳統韓屋住宿，晚餐享用豐富的慶州韓定食。', icon: Building2 },
    { id: 210, time: '20:00', title: '宮廷夜遊', desc: '晚間的東宮與月池在燈光映襯下倒映在水中，是韓國票選最美的夜景之一。', icon: Camera, mapUrl: 'https://map.naver.com/v5/search/동궁과월치' },
  ],
  '2026-05-17': [
    { id: 301, time: '09:30', title: '告別慶州', desc: '在一夜好眠後，我們將帶著滿滿的回憶返回釜山市區。', icon: Plane },
    { id: 302, time: '11:00', title: 'Zoolung Zoolung', desc: '這是一個可以近距離與小動物互動的室內動物園，可以親手餵食水獺、巨嘴鳥，非常療癒。', icon: Camera, mapUrl: 'https://map.naver.com/v5/search/주렁주렁해운대' },
    { id: 303, time: '13:00', title: '午餐時間', desc: '在海雲台市區附近尋找喜歡的在地餐廳。', icon: Utensils },
    { id: 304, time: '14:30', title: 'ARTE MUSEUM 沉浸展', desc: '世界知名的光影藝術展，釜山館結合了海洋主題，讓你在奔騰的數位波浪中感受藝術快感。', icon: Camera, mapUrl: 'https://map.naver.com/v5/search/아르떼뮤지엄부산' },
    { id: 305, time: '17:30', title: '民宿短敘', desc: '回到海雲台住宿放下購物戰利品，稍作休息準備迎接晚上的高空美景。', icon: Building2, mapUrl: 'https://map.naver.com/v5/search/해운대구남로' },
    { id: 306, time: '19:00', title: 'BUSAN X the SKY', desc: '搭乘高速電梯上到全球最高的星巴克所在地，俯看海雲台 LCT 壯闊的城市夜景。', icon: Camera, mapUrl: 'https://map.naver.com/v5/search/부산엑스더스카이' },
    { id: 307, time: '20:30', title: '海濱沙灘散步', desc: '晚間的海雲台沙灘氣氛十足，沿著沙灘步道慢慢散步回房間，非常愜意。', icon: Waves, mapUrl: 'https://map.naver.com/v5/search/해운대해수욕장' },
  ],
  '2026-05-18': [
    { id: 401, time: '09:30', title: 'Skyline Luge 飆速', desc: '穿上頭盔，從高坡駕駛專屬滑車急速轉彎，沿途還能飽覽機張的海天一色景緻。', icon: Waves, mapUrl: 'https://map.naver.com/v5/search/스카이라인루지부산' },
    { id: 402, time: '12:00', title: '補給午餐', desc: '在滑車場附近享用簡單美味的早午餐。', icon: Utensils },
    { id: 403, time: '13:30', title: 'Lotte Outlet 血拚', desc: '東釜山最大的奧特萊斯，各大名牌、運動用品都能在此一次購齊，建築外型非常有異國感。', icon: ShoppingCart, mapUrl: 'https://map.naver.com/v5/search/롯데프리미엄아울렛동부산점' },
    { id: 404, time: '16:30', title: 'Club D Oasis 水療', desc: '全新開幕的高級水療中心，擁有無邊際海景泳池以及正對海雲台大海的桑拿室。', icon: Waves, mapUrl: 'https://map.naver.com/v5/search/클럽디오아시스' },
    { id: 405, time: '19:30', title: '民樂市場與夜市', desc: '在廣安里民樂市場體驗新鮮生魚片，隨後前往海邊與當地人一起喝杯啤酒。', icon: Utensils, mapUrl: 'https://map.naver.com/v5/search/민락동씨랜드회센터' },
  ],
  '2026-05-19': [
    { id: 501, time: '09:30', title: '行李託付', desc: '退房後行李先寄放，輕便啟程今日的自由行程。', icon: Building2 },
    { id: 502, time: '10:00', title: '分組任務：醫美 vs 觀光', desc: '追求美麗的成員前往西面進行韓式皮膚管理；想看美景的則前往色彩繽紛的甘川洞文化村。', icon: Camera, mapUrl: 'https://map.naver.com/v5/search/감천문화마을' },
    { id: 503, time: '13:00', title: '最後聚餐：扎嘎其市場', desc: '著名的海鮮拍賣市場，品嚐現點現煮的碳烤盲鰻或各式肥美炸魚。', icon: Utensils, mapUrl: 'https://map.naver.com/v5/search/자갈치시장' },
    { id: 504, time: '14:30', title: '南浦洞購物', desc: '在 BIFF 廣場吃糖餅、在南浦洞光復路進行最後的伴手禮、襪子、文具採購。', icon: ShoppingCart, mapUrl: 'https://map.naver.com/v5/search/BIFF광장' },
    { id: 505, time: '18:00', title: 'Team B 賦歸機場', desc: 'Team B 成員先行搭乘華航回台 PUS 20:00 - TPE 21:20 (CI187)', icon: Plane, mapUrl: 'https://map.naver.com/v5/search/김해국제공항' },
    { id: 506, time: '20:00', title: 'Team A 賦歸機場', desc: 'Team A 成員繼續逛街採購後，於晚間抵達機場回台 PUS 22:00 - TPE 23:40 (LJ751)', icon: Plane, mapUrl: 'https://map.naver.com/v5/search/김해국제공항' },
  ],
};

export const PHRASES = [
  { category: '問候', ko: '안녕하세요.', zh: '你好。', pro: 'An-nyeong-ha-se-yo.' },
  { category: '感謝', ko: '감사합니다.', zh: '謝謝。', pro: 'Gam-sa-ham-ni-da.' },
  { category: '購物', ko: '이거 얼마예요?', zh: '這個多少錢？', pro: 'I-geo eol-ma-ye-yo?' },
  { category: '點餐', ko: '이거 주세요.', zh: '請給我這個。', pro: 'I-geo ju-se-yo.' },
  { category: '實用', ko: '화장실이 어디예요?', zh: '洗手間在哪裡？', pro: 'Hwa-jang-sil-i eo-di-ye-yo?' },
];

export const INITIAL_TODOS = [
  { id: 1, task: '換韓元', completed: false },
  { id: 2, task: '泳裝與泳帽 (Club D Oasis必備)', completed: false },
  { id: 3, task: '海灘防滑涼鞋', completed: false },
  { id: 4, task: '防水袋 (遊艇/海邊用)', completed: false },
  { id: 5, task: '防曬乳與墨鏡', completed: false },
  { id: 6, task: '220V 轉接頭與變壓器', completed: false },
  { id: 7, task: '防風薄罩衫 (夜景風大)', completed: false },
];

export const SURVIVAL_TIPS = [
  { 
    title: '緊急連絡電話', 
    content: '警察局: 112\n消防局: 119\n旅遊諮詢熱線: 1330 (有中文服務)\n金海機場服務台: +82-1661-2626' 
  },
  { 
    title: '退稅指南 (Tax Free)', 
    content: '1. 單筆消費滿 30,000 韓元即可退稅。\n2. 標有 "Tax Free" 的商店可現場折抵或領取退稅單。\n3. 機場退稅：金海機場 2 樓電子退稅機掃描，過海關後領取現金。' 
  },
  { 
    title: '交通小撇步', 
    content: '1. T-Money：各大便利商店皆可購買儲值，公車轉乘地鐵有優惠。\n2. Kakao T：叫車神器，建議先綁定信用卡。\n3. Naver Map：韓國導航最準，建議設為韓文或簡中界面。' 
  }
];

export const TICKET_DATA = [
  { name: 'Sam', url: 'https://www.dropbox.com/scl/fi/hy0wqdmc0fkbwl86g2qba/Sam.png?rlkey=xve5nmooloo5bbkqbfn0wyb9g&st=9lgnzxif&raw=1' },
  { name: 'Melse', url: 'https://www.dropbox.com/scl/fi/ql2tufh04bnqn0h63onk8/Melse.png?rlkey=izry7234yfihyvgmmtodbxipp&st=72pj09iw&raw=1' },
  { name: 'Alice', url: 'https://www.dropbox.com/scl/fi/j82pilo7bcwkit7b0ub7x/Alice.png?rlkey=7j4ezzl00iuscnkutdgwyvkjy&st=w4v5pkdx&raw=1' },
  { name: 'Yvonne', url: 'https://www.dropbox.com/scl/fi/xk6x68uojj9jnod5zf689/Yvonne.png?rlkey=7ncs7s6n0oyehohnxz0xbzpzu&st=zjxjrlzo&raw=1' },
  { name: 'Kelly', url: 'https://www.dropbox.com/scl/fi/sgr9aygn2oyywgscuk85v/Kelly.png?rlkey=ke7n3nxnama9t9mh4mpz3kutt&st=djt7ixzj&raw=1' },
  { name: 'Eason', url: 'https://www.dropbox.com/scl/fi/fxtwwt3hx3rxy05ievk1t/Eason.png?rlkey=u1cctoxpniq8t2v7a1pr4h1e4&st=7u0g3b2p&raw=1' },
  { name: 'Chris', url: 'https://www.dropbox.com/scl/fi/p3mfukc7kz5rgc0pj1sg3/Chris.png?rlkey=yxlpdej4nxx3qg3jjashbdjm2&st=fx5oakt0&raw=1' },
  { name: 'Jasper', url: 'https://www.dropbox.com/scl/fi/3re7xkbe8ayo0juwtn9ec/Jasper.png?rlkey=bxbk5gfh171k6xlmace798eju&st=ifubfln2&raw=1' },
  { name: '魚魚', url: 'https://www.dropbox.com/scl/fi/f9favexqapdv3m3h4ls9z/.png?rlkey=tnlg5z26jlcigzeyeicsnc7nm&st=9jq46nd4&raw=1' },
  { name: '小吉', url: 'https://www.dropbox.com/scl/fi/f881y2sgk19bxszabrxvl/.png?rlkey=o1recumq7cr0a4pckstm7u8gw&st=xfnalhep&raw=1' },
  { name: '威力', url: 'https://www.dropbox.com/scl/fi/pworinp2inph8f2uhge61/.png?rlkey=jhoujxw58bg31tz0qw98yk3x2&st=93ikmmpx&raw=1' },
  { name: '鐵人', url: 'https://www.dropbox.com/scl/fi/py70izm4an7dz4dopyv8y/.png?rlkey=mbyymohkkpnurb53cxmejqk6u&st=xidp2qtl&raw=1' },
  { name: '瑞瑞', url: 'https://www.dropbox.com/scl/fi/sgdryy4gj2n368mit9uf0/.png?rlkey=hvuw3v3fw25h7w4w4m2zrp7yc&st=gq2i5bi3&raw=1' },
  { name: '柔柔', url: 'https://www.dropbox.com/scl/fi/vbzg9nfdk145yf8milewn/.png?rlkey=9jqrvcs6evicbsdu84181aur6&st=kvrnv12x&raw=1' },
  { name: '珞珞', url: 'https://www.dropbox.com/scl/fi/lgjjqmyfxg3w8ro2igko6/.png?rlkey=3k3x5ur1g6o0fekk55mte4nz2&st=a23iaqrn&raw=1' },
  { name: '九肥', url: 'https://www.dropbox.com/scl/fi/ztpx2whi63a1vj2who7mt/.png?rlkey=c405l0vdv15mtmtd77rfko7rv&st=o4ecshtk&raw=1' },
  { name: '動物園', url: 'https://www.dropbox.com/scl/fi/pnquell9s2cvzntagx4iv/.png?rlkey=pv3b2dpexgj19wk3z8cfub2dl&st=09u78spz&raw=1' },
  { name: '膠囊列車-1車', url: 'https://www.dropbox.com/scl/fi/a8g83qm87p787sbvmi2cb/1.png?rlkey=st7jdqg3x7pxccgkovaewo9qb&st=om9p1qbf&raw=1' },
  { name: '膠囊列車-2車', url: 'https://www.dropbox.com/scl/fi/0s254mplursheeluoymto/2.png?rlkey=10p6427zoe0qpehddz85i06up&st=mcx7xkdb&raw=1' },
  { name: '膠囊列車-3車', url: 'https://www.dropbox.com/scl/fi/0cfijgnw5wl839iyf5bvr/3.png?rlkey=v11fpu3vagglqkge4n6ko7nfv&st=p2p97xhy&raw=1' },
  { name: '膠囊列車-4車', url: 'https://www.dropbox.com/scl/fi/7zyg28vso7naqt6y95prm/4.png?rlkey=uzufyocyxphccgaezgch6l1ay&st=84j2jmrg&raw=1' },
  { name: '膠囊列車-5車', url: 'https://www.dropbox.com/scl/fi/wrmgk27o10dmue0hkci3c/5.png?rlkey=pwpf75q5jf9lixyyj42q0in6k&st=9pw3mr7v&raw=1' },
];

export const HISTORY_CONTENT = {
  busan: {
    title: '釜山：山與海的臨時首都',
    content: '釜山（Busan）是韓國第一大港口城市。其歷史可追溯至三韓時期，當時稱為「居漆山國」。15世紀初，朝鮮王朝將其開闢為對日貿易港口。\n\n【韓戰時期的避風港】\n釜山在韓國現代史上最重要的角色是在 1950 年韓戰期間。當時北緯 38 度線以南幾乎全部淪陷，釜山成為最後的堡壘，並擔任了 1,023 天的臨時首都。大量難民湧入，在山坡上搭建板房，這也形成了今日「甘川洞文化村」與「白淺灘文化村」獨特的階梯式山城景觀。\n\n【美食文化的起源】\n著名的「豬肉湯飯」與「小麥麵」正是源於戰爭時期。當時物資匱乏，難民利用美軍基地剩下的骨頭與廉價肉類熬湯，或用配給的小麥粉取代珍貴的蕎麥製作麵條，發展出了今日釜山的靈魂美食。'
  },
  gyeongju: {
    title: '慶州：新羅千年的金城',
    content: '慶州（Gyeongju）被譽為「沒有圍牆的博物館」。它是新羅王朝（Silla）長達 992 年的首都，當時稱為「金城」。\n\n【世界文化遺產的密集地】\n慶州的歷史遺蹟密集度極高。著名的「佛國寺」與「石窟庵」展現了 8 世紀新羅佛教建築與雕刻的巔峰。市中心的「大陵苑」散佈著巨大的土丘，這些都是昔日王室的陵墓。慶州在全盛時期人口曾超過百萬，與長安、君士坦丁堡並列為當時的世界大城。\n\n【古典與現代的交匯】\n今日的慶州將古蹟與觀光完美結合。皇理團路（Hwangnidan-gil）原本是老舊的韓屋區，現在則成了時髦的潮流街道，在千年古蹟旁喝杯拿鐵、吃塊十元麵包，是慶州最迷人的旅行方式。'
  }
};

export const FLIGHT_INFO = [
  {
    airline: '中華航空 (China Airlines)',
    codes: { go: 'CI188', back: 'CI187' },
    schedule: {
      go: '2026/5/15 (五) 07:55 TPE → 11:15 PUS',
      back: '2026/5/19 (二) 20:00 PUS → 21:20 TPE'
    },
    passengers: 'Jasper, 威力, 小吉, 鐵人, Kelly, Chris, Eason, Sam'
  },
  {
    airline: '真航空 (Jin Air)',
    codes: { go: 'LJ752', back: 'LJ751' },
    schedule: {
      go: '2026/5/15 (五) 02:40 TPE → 06:15 PUS',
      back: '2026/5/19 (二) 22:00 PUS → 23:40 TPE'
    },
    passengers: '魚魚, 九肥, 瑞瑞, Yvonne, 柔柔, 珞珞, Alice, Melse'
  }
];

export const HOTEL_INFO = [
  {
    dates: '5/15 - 5/16',
    name: 'Pension 56 (6F)',
    address: '11, Gunam-ro 12beon-gil, Haeundae-gu, Busan',
    mapUrl: 'https://goo.gl/maps/JpGa4zjF1TSg6a587',
    details: '入住: 16:00 | 退房: 11:00\n海雲臺地鐵站 5 號出口直走 30 秒，右轉步行 20 秒即可抵達門口，位於 6 樓。'
  },
  {
    dates: '5/16 - 5/17',
    name: '慶州皇理團路韓屋飯店 (Hwangnamgwan)',
    address: '1038 posuk-ro, 慶州市中心, 慶州',
    mapUrl: 'https://map.naver.com/v5/search/황남관',
    details: '入住: 15:00 | 退房: 11:00\n位於皇理團路核心地段的傳統韓屋飯店。'
  },
  {
    dates: '5/17 - 5/19',
    name: 'iam house / Haeundae Lamuette',
    address: '620, Haeundae-daero, Haeundae-gu, Busan',
    mapUrl: 'https://map.naver.com/v5/search/해운대라무에뜨',
    details: '入住: 15:00 | 退房: 11:00\n位於海雲台大路 620 號，地理位置優越。'
  }
];

export const SHOPPING_LIST = [
  { id: 1, brand: 'Tamburins', item: '香水 / 護手霜', purchased: false },
  { id: 2, brand: 'Olive Young', item: 'Torriden 玻尿酸精華 / 敷棉片', purchased: false },
  { id: 3, brand: 'Gentle Monster', item: '潮流墨鏡', purchased: false },
  { id: 4, brand: 'Mardi Mercredi', item: '經典小雛菊 T-shirt / 衛衣', purchased: false },
  { id: 5, brand: 'HBAF', item: '各口味杏仁果 / 零食', purchased: false },
  { id: 6, brand: 'Osulloc', item: '抹茶抹醬 / 茶包', purchased: false },
  { id: 7, brand: 'Fennec', item: '皮架 / 皮夾', purchased: false },
];

export const RESTAURANT_DATA: Record<string, any[]> = {
  '2026-05-15': [
    {
      type: '午餐',
      name: '影島海女村',
      desc: '坐在海邊礁石下，品嚐當天現捕海鮮。建議 4 人一組分開點餐。必點：海鮮拉麵、紫菜包飯（搭配海膽吃法）、現切海鮮拼盤。',
      mapUrl: 'https://map.naver.com/v5/search/영도해녀촌',
      tags: ['海景', '現捕海鮮', 'IG打卡']
    },
    {
      type: '晚餐',
      name: '密陽血腸豬肉湯飯 海雲台店',
      desc: '規模大且 24 小時營業，乳白色濃郁湯頭。適合大團體，翻桌快。',
      mapUrl: 'https://map.naver.com/v5/search/밀양순대돼지국밥해운代점',
      tags: ['24小時', '大空間', '經典口味']
    },
    {
      type: '晚餐',
      name: '極東豬肉湯飯',
      desc: '現代簡約裝潢，湯頭清澈型派，喝起來清爽甘甜。環境質感極佳。',
      mapUrl: 'https://map.naver.com/v5/search/극동돼지국밥',
      tags: ['質感裝潢', '清湯派', '網美風']
    },
    {
      type: '晚餐',
      name: '水邊最高豬肉湯飯 海雲台店',
      desc: '人氣名店，肉量爆多。推薦「松阪豬肉湯飯 (항정국밥)」。',
      mapUrl: 'https://map.naver.com/v5/search/수변최고돼지국밥해운代점',
      tags: ['排隊名店', '松阪豬', '肉量驚人']
    },
    {
      type: '晚餐',
      name: '五福豬肉湯飯',
      desc: '位於海雲台主街，環境整潔。白切肉 (수육) 拼盤燉得軟爛入味。',
      mapUrl: 'https://map.naver.com/v5/search/오복돼지국밥',
      tags: ['主街便利', '大眾口味', '環境整潔']
    },
    {
      type: '晚餐',
      name: '奶奶家 (할매집)',
      desc: '外觀像咖啡廳般的精緻內裝。推薦「鐵板烤白切肉」，用餐氣氛佳。',
      mapUrl: 'https://map.naver.com/v5/search/할매집해운代',
      tags: ['網美風', '鐵板白切肉', '氣氛佳']
    }
  ],
  '2026-05-16': [
    {
      type: '晚餐',
      name: '慶州食堂',
      desc: '老韓屋改造，空間雅致。招牌是韓式木盤烤肉定食。',
      mapUrl: 'https://map.naver.com/v5/search/경주식당',
      tags: ['老韓屋', '木盤烤肉', '日系簡約']
    },
    {
      type: '晚餐',
      name: '慶州大排檔 (경주갈비찜)',
      desc: '韓式燉牛排骨，慶州名產，甜辣適中，座位數多。',
      mapUrl: 'https://map.naver.com/v5/search/경주갈비찜',
      tags: ['燉牛排骨', '慶州名產', '適合團體']
    },
    {
      type: '晚餐',
      name: '溫泉家 (Oncheonjib)',
      desc: '視覺系日式涮涮鍋，庭院有竹林與溫泉造景。需提前預約。',
      mapUrl: 'https://map.naver.com/v5/search/경주온천집',
      tags: ['網美必去', '日式涮涮鍋', '竹林造景']
    },
    {
      type: '晚餐',
      name: 'Dosol Maeul (도솔마을)',
      desc: '高 CP 值傳統韓定食，位於古老韓屋內，深度體驗傳統。',
      mapUrl: 'https://map.naver.com/v5/search/도솔마을',
      tags: ['傳統韓定食', '高CP值', '韓屋體驗']
    },
    {
      type: '晚餐',
      name: 'Ryoko (료코)',
      desc: '日系風格炸豬排與咖哩，裝潢走簡約暖色調。',
      mapUrl: 'https://map.naver.com/v5/search/료코경주',
      tags: ['日系豬排', '簡約風格', '人氣店']
    }
  ],
  '2026-05-17': [
    {
      type: '晚餐',
      name: '尾浦末家 (미포끝집)',
      desc: '海景烤貝與生魚片。緊鄰海岸，可欣賞海雲台夜景。',
      mapUrl: 'https://map.naver.com/v5/search/미포끝집',
      tags: ['海景烤貝', '生魚片', '夜景氛圍']
    },
    {
      type: '晚餐',
      name: '五福水產',
      desc: '高級海鮮丼與生魚片，海鮮品質極高，空間現代明亮。',
      mapUrl: 'https://map.naver.com/v5/search/오복수산해운대점',
      tags: ['高級海鮮丼', '精緻餐飲', '現代設計']
    },
    {
      type: '晚餐',
      name: '伍班長烤肉 (Ohbanjang)',
      desc: '超人氣烤肉，座位數多且有半戶外空間，氣氛熱鬧。',
      mapUrl: 'https://map.naver.com/v5/search/오반장',
      tags: ['熱鬧烤肉', '大團體首選', '排隊名店']
    },
    {
      type: '晚餐',
      name: 'The Party Buffet',
      desc: '頂級自助餐，餐點選擇極豐。適合大型團體。',
      mapUrl: 'https://map.naver.com/v5/search/더파티해운대점',
      tags: ['頂級自助餐', '多樣化選擇', '高端環境']
    },
    {
      type: '晚餐',
      name: '錦繡河豚湯',
      desc: '經典河豚湯名店，24 小時營業，空間寬敞。',
      mapUrl: 'https://map.naver.com/v5/search/금수복국해운대점',
      tags: ['河豚湯', '24小時', '釜山名物']
    }
  ],
  '2026-05-18': [
    {
      type: '午餐',
      name: '風元場 密役海帶湯',
      desc: '最具知名度的海帶湯定食，附贈小菜極度豐盛。',
      mapUrl: 'https://map.naver.com/v5/search/풍원장미역국정찬',
      tags: ['海帶湯定食', '豐盛小菜', '大空間']
    },
    {
      type: '午餐',
      name: '珊瑚礁 (Coralani)',
      desc: '海景咖啡廳與輕食，建築設計極具渡假風情，視野極佳。',
      mapUrl: 'https://map.naver.com/v5/search/코랄라니',
      tags: ['海景咖啡廳', '渡假風', '網美建築']
    },
    {
      type: '午餐',
      name: '釜山機張手工刀切麵',
      desc: '在地傳統名店，主打手工刀切麵與韓式飯捲。',
      mapUrl: 'https://map.naver.com/v5/search/기장손칼국수',
      tags: ['平價名店', '手工刀切麵', '道地口味']
    },
    {
      type: '午餐',
      name: 'Ananti at Busan (Da Moim)',
      desc: '位於頂級渡假飯店內，空間奢華大氣，極致渡假體驗。',
      mapUrl: 'https://map.naver.com/v5/search/아난티부산다모임',
      tags: ['奢華自助餐', '飯店精品', '渡假氛圍']
    },
    {
      type: '晚餐',
      name: '民樂活魚分售處',
      desc: '現撈現吃海鮮體驗。1 樓挑選漁獲，2-5 樓代客料理，最接地氣。',
      mapUrl: 'https://map.naver.com/v5/search/민락회타운',
      tags: ['現撈海鮮', '代客料理', '在地體驗']
    },
    {
      type: '晚餐',
      name: 'Gorilla Brewing',
      desc: '精釀啤酒與美式披薩，美式工業風餐酒館，空間極大。',
      mapUrl: 'https://map.naver.com/v5/search/고릴라브루잉',
      tags: ['精釀啤酒', '工業風', '適合放鬆']
    },
    {
      type: '晚餐',
      name: '秀敏家烤貝 (Suminine)',
      desc: '知名炭火烤貝，炭火直烤香氣濃郁，完美還原海線經典。',
      mapUrl: 'https://map.naver.com/v5/search/수민이네',
      tags: ['炭火烤貝', '海鮮拼盤', '必吃經典']
    },
    {
      type: '晚餐',
      name: '廣安里烤牛小腸 (Hae-Sung)',
      desc: '超人氣牛小腸火鍋，煙火氣息濃厚，口味濃郁。',
      mapUrl: 'https://map.naver.com/v5/search/해성막창집광안리점',
      tags: ['牛小腸火鍋', '排隊名店', '在地聚餐']
    },
    {
      type: '晚餐',
      name: 'Millac the Market',
      desc: '新型態複合商場，集結多家餐飲小店與文創。',
      mapUrl: 'https://map.naver.com/v5/search/밀락더마켓',
      tags: ['複合商場', '自由選食', '文創市集']
    }
  ],
  '2026-05-19': [
    {
      type: '午餐',
      name: 'Oase Seafood Buffet',
      desc: '海鮮百匯吃到飽，位於市場大樓頂層，視野極佳。',
      mapUrl: 'https://map.naver.com/v5/search/오아제컨벤션뷔페',
      tags: ['海鮮吃到飽', '極佳視野', '團體集合店']
    },
    {
      type: '午餐',
      name: '白花烤牛腸 (Baekhwa)',
      desc: '傳統炭火烤牛腸，傳統市場氛圍強烈。',
      mapUrl: 'https://map.naver.com/v5/search/백화양곱창',
      tags: ['傳統市場風', '炭火牛腸', '深度在地']
    },
    {
      type: '午餐',
      name: '螞蟻家 (Gaemi Jip) 總店',
      desc: '辣炒章魚牛腸蝦子 (Nak-Gop-Sae)，釜山必吃。',
      mapUrl: 'https://map.naver.com/v5/search/개미집본점',
      tags: ['辣炒章魚', '釜山必吃', '老字號']
    },
    {
      type: '午餐',
      name: '首爾蘿蔔泡菜 (Seoul Kkakdugi)',
      desc: '雪濃湯老店，湯頭醇厚溫潤。',
      mapUrl: 'https://map.naver.com/v5/search/남포동서울깍두기',
      tags: ['雪濃湯', '平價老店', '清爽口味']
    },
    {
      type: '午餐',
      name: 'Gongginat (공기낫)',
      desc: '韓式創意定食，擺盤精緻，具備現代美學。',
      mapUrl: 'https://map.naver.com/v5/search/공기낫',
      tags: ['創意定食', '現代美學', '精緻擺盤']
    }
  ]
};
