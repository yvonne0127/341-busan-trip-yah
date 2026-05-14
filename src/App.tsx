import React, { useState, useEffect } from 'react';
import { 
  X, Sun, Cloud, Clock, Plane, Utensils, Camera, 
  Coffee, Waves, ArrowRightLeft, BookOpen, Languages, 
  Building2, Volume2, Copy, Check, ShoppingCart, Plus,
  Users, Wallet, ListTodo, ChevronRight, FileText, Anchor, MapPin,
  ShieldCheck, Info, Sparkles, Ticket
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DATES, ITINERARY_DATA, RESTAURANT_DATA, PHRASES, INITIAL_TODOS, SHOPPING_LIST, SURVIVAL_TIPS, FLIGHT_INFO, HOTEL_INFO, HISTORY_CONTENT, TICKET_DATA } from './data';

export default function App() {
  // Navigation
  const [activeTab, setActiveTab] = useState('itinerary'); 
  const [otherActiveSub, setOtherActiveSub] = useState<string | null>(null);
  const [itinerarySubTab, setItinerarySubTab] = useState<'schedule' | 'restaurants' | 'tickets'>('schedule');
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  // Core Data States
  const [activeDate, setActiveDate] = useState(DATES[0].id);
  const [weather, setWeather] = useState<{ temp: number, code: number } | null>(null);
  const [personalNotes, setPersonalNotes] = useState(() => {
    const saved = localStorage.getItem('busan_notes_v2');
    if (saved) return JSON.parse(saved);
    return {
      '2026-05-15': '',
      '2026-05-16': '',
      '2026-05-17': '',
      '2026-05-18': '',
      '2026-05-19': ''
    };
  });
  const [todoList, setTodoList] = useState(() => JSON.parse(localStorage.getItem('busan_todos') || JSON.stringify(INITIAL_TODOS)));
  const [shoppingItems, setShoppingItems] = useState(() => JSON.parse(localStorage.getItem('busan_shopping') || JSON.stringify(SHOPPING_LIST)));

  // Input States
  const [newTodoInput, setNewTodoInput] = useState('');
  const [newShopBrand, setNewShopBrand] = useState('');
  const [newShopItem, setNewShopItem] = useState('');
  
  const [isConverterOpen, setIsConverterOpen] = useState(false);
  const [krwAmount, setKrwAmount] = useState('');
  const [twdAmount, setTwdAmount] = useState('');
  const [lastEdited, setLastEdited] = useState<'krw' | 'twd'>('krw');
  const [translateInput, setTranslateInput] = useState('');
  const [translateOutput, setTranslateOutput] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Persistence
  useEffect(() => { localStorage.setItem('busan_notes_v2', JSON.stringify(personalNotes)); }, [personalNotes]);
  useEffect(() => { localStorage.setItem('busan_todos', JSON.stringify(todoList)); }, [todoList]);
  useEffect(() => { localStorage.setItem('busan_shopping', JSON.stringify(shoppingItems)); }, [shoppingItems]);

  const handleAddTodo = () => {
    if (!newTodoInput.trim()) return;
    const newItem = { id: Date.now(), task: newTodoInput, completed: false };
    setTodoList([...todoList, newItem]);
    setNewTodoInput('');
  };

  const handleAddShop = () => {
    if (!newShopBrand.trim() || !newShopItem.trim()) return;
    const newItem = { id: Date.now(), brand: newShopBrand, item: newShopItem, purchased: false };
    setShoppingItems([...shoppingItems, newItem]);
    setNewShopBrand('');
    setNewShopItem('');
  };

  // Weather Fetching
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.1796&longitude=129.0756&current_weather=true');
        const data = await res.json();
        if (data.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            code: data.current_weather.weathercode
          });
        }
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      }
    };
    fetchWeather();
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  // Translation Handler
  const handleTranslate = async () => {
    if (!translateInput.trim()) return;
    setIsTranslating(true);
    try {
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(translateInput)}&langpair=zh-TW|ko`);
      const data = await res.json();
      const result = data.responseData.translatedText;
      setTranslateOutput(result);
      if (result) speakKorean(result);
    } catch (err) {
      console.error("Translation Error:", err);
      setTranslateOutput('翻譯發生錯誤');
    } finally {
      setIsTranslating(false);
    }
  };

  const speakKorean = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Currency Calculation Logic
  useEffect(() => {
    const rate = 0.024;
    if (lastEdited === 'krw' && krwAmount) {
      setTwdAmount((parseFloat(krwAmount) * rate).toFixed(0));
    } else if (lastEdited === 'twd' && twdAmount) {
      setKrwAmount((parseFloat(twdAmount) / rate).toFixed(0));
    } else if (!krwAmount && !twdAmount) {
      setTwdAmount('');
      setKrwAmount('');
    }
  }, [krwAmount, twdAmount, lastEdited]);

  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="text-busan-orange" size={24} />;
    if (code >= 1 && code <= 3) return <Cloud className="text-ocean" size={24} />;
    if (code >= 51 && code <= 67) return <Waves className="text-ocean" size={24} />;
    return <Cloud className="text-ocean" size={24} />;
  };

  const NavItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => {
    const isActive = activeTab === id;
    return (
      <button 
        onClick={() => { setActiveTab(id); setOtherActiveSub(null); }}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-all active:scale-95 ${isActive ? 'text-busan-orange' : 'text-deep-sea/30'}`}
      >
        <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
        <span className="text-[10px] font-bold mt-1">{label}</span>
      </button>
    )
  };

  return (
    <div className="min-h-screen bg-busan-cream text-deep-sea font-sans pb-32">
      <header className="relative w-full aspect-[22/10] overflow-hidden bg-white shadow-sm">
        <img src="https://www.dropbox.com/scl/fi/oydx0zmf4rjhy9ltk8pjo/unnamed.jpg?rlkey=3lsgzzfeid33x1szy0p171q30&st=a72u777x&raw=1" alt="Busan Illustration" className="w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-busan-cream via-busan-cream/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold mb-1 text-deep-sea text-center tracking-tight">341 Busan Pop<span className="text-busan-orange">!</span></h1>
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-4 bg-busan-orange rounded-full" />
            <p className="text-[10px] font-black uppercase text-ocean tracking-[0.2em]">MAY 15 - 19, 2026</p>
            <span className="h-[2px] w-4 bg-busan-orange rounded-full" />
          </div>
        </div>
      </header>

      <main className="px-5 pt-6 max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'itinerary' && (
            <motion.div key="itinerary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                <div className="flex bg-white/50 p-1 rounded-2xl border-2 border-deep-sea/5 sticker-shadow-sm mb-4">
                <button 
                  onClick={() => setItinerarySubTab('schedule')}
                  className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${itinerarySubTab === 'schedule' ? 'bg-deep-sea text-white sticker-shadow-sm' : 'text-deep-sea/40'}`}
                >
                  每日行程
                </button>
                <button 
                  onClick={() => setItinerarySubTab('restaurants')}
                  className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${itinerarySubTab === 'restaurants' ? 'bg-deep-sea text-white sticker-shadow-sm' : 'text-deep-sea/40'}`}
                >
                  美食推薦
                </button>
              </div>

              <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar snap-x">
                {DATES.map(d => (
                  <button 
                    key={d.id} 
                    onClick={() => { setActiveDate(d.id); if (itinerarySubTab === 'tickets') setItinerarySubTab('schedule'); }} 
                    className={`snap-center flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center border-2 transition-all active:scale-95 ${activeDate === d.id && itinerarySubTab !== 'tickets' ? 'bg-busan-orange text-white border-busan-orange sticker-shadow-sm' : 'bg-white text-deep-sea/40 border-deep-sea/5'}`}
                  >
                    <span className="text-[9px] font-bold uppercase mb-1">{d.day}</span>
                    <span className="text-xl font-extrabold">{d.date}</span>
                  </button>
                ))}
                <button 
                  onClick={() => setItinerarySubTab('tickets')}
                  className={`snap-center flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center border-2 transition-all active:scale-95 ${itinerarySubTab === 'tickets' ? 'bg-busan-orange text-white border-busan-orange sticker-shadow-sm' : 'bg-white text-deep-sea/40 border-deep-sea/5'}`}
                >
                  <Ticket size={20} className="mb-1" />
                  <span className="text-[9px] font-black uppercase">Ticket</span>
                </button>
              </div>
              
              <div className="bg-white p-5 rounded-[1.5rem] sticker-shadow border-2 border-deep-sea/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-busan-orange/10 p-2 rounded-xl">
                    {weather ? getWeatherIcon(weather.code) : <Sun className="text-busan-orange animate-pulse" size={24} />}
                  </div>
                  <div>
                    <span className="text-xl font-bold leading-none">{weather ? `${weather.temp}°C` : '--°C'}</span>
                    <p className="text-[9px] font-black text-ocean uppercase tracking-tight mt-0.5">Live: Haeundae, Busan</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-deep-sea/60 text-right leading-tight max-w-[120px] bg-busan-cream/50 px-3 py-2 rounded-lg">
                  {DATES.find(d => d.id === activeDate)?.theme}
                </span>
              </div>

              {itinerarySubTab === 'schedule' && (
                <div className="space-y-6 border-l-2 border-ocean/20 ml-5 pl-8 pb-10">
                  {ITINERARY_DATA[activeDate]?.map((item) => (
                    <div key={item.id} className="relative bg-white border-2 border-deep-sea/5 p-5 rounded-[1.5rem] sticker-shadow-sm hover:sticker-shadow transition-all group">
                      <div className="absolute -left-[45px] top-4 w-4 h-4 rounded-full bg-white border-2 border-busan-orange group-hover:bg-busan-orange transition-colors" />
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-deep-sea flex items-center gap-2 text-sm">
                          <div className="bg-busan-beige p-1.5 rounded-lg">
                            <item.icon size={14} className="text-busan-orange" />
                          </div>
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {item.mapUrl && (
                            <a href={item.mapUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-busan-orange/10 text-busan-orange rounded-lg flex items-center justify-center hover:bg-busan-orange hover:text-white transition-all active:scale-90">
                              <MapPin size={14} />
                            </a>
                          )}
                          <span className="text-[10px] font-black text-ocean bg-ocean/5 px-2 py-1 rounded-md">{item.time}</span>
                        </div>
                      </div>
                      <p className="text-xs text-deep-sea/60 leading-relaxed font-semibold pl-8">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {itinerarySubTab === 'restaurants' && (
                <div className="space-y-6 pb-10">
                  {RESTAURANT_DATA[activeDate]?.map((res, idx) => (
                    <div key={idx} className="bg-white border-2 border-deep-sea/5 p-6 rounded-[2rem] sticker-shadow-sm hover:sticker-shadow transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black text-busan-orange uppercase tracking-widest mb-1">{res.type}推薦</span>
                          <h3 className="text-lg font-black text-deep-sea tracking-tight">{res.name}</h3>
                        </div>
                        <a href={res.mapUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-busan-orange text-white rounded-xl flex items-center justify-center sticker-shadow-sm hover:scale-105 transition-all active:scale-90">
                          <MapPin size={18} />
                        </a>
                      </div>
                      <p className="text-xs font-semibold text-deep-sea/70 leading-relaxed mb-4">
                        {res.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {res.tags.map((tag: string, tidx: number) => (
                          <span key={tidx} className="text-[9px] font-black text-ocean bg-ocean/5 px-2 py-1 rounded-md">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {itinerarySubTab === 'tickets' && (
                <div className="space-y-6 pb-20">
                  <div className="bg-white p-6 rounded-[2rem] border-2 border-deep-sea/5 sticker-shadow-sm mb-6">
                    <h4 className="text-xs font-black text-ocean uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Ticket size={16} /> 點擊名稱查看票券
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {TICKET_DATA.map((ticket, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setSelectedTicket(ticket.url)}
                          className="bg-busan-cream rounded-xl py-3 px-4 text-xs font-bold text-deep-sea hover:bg-busan-orange hover:text-white transition-all sticker-shadow-sm active:scale-95"
                        >
                          {ticket.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'translator' && (
            <motion.div key="translator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="bg-white border-2 border-deep-sea/5 p-6 rounded-[2rem] sticker-shadow">
                <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-[10px] font-black text-ocean uppercase tracking-widest">Chinese</span>
                  <div className="bg-busan-beige p-2 rounded-full"><ArrowRightLeft size={14} className="text-deep-sea/40" /></div>
                  <span className="text-[10px] font-black text-busan-orange uppercase tracking-widest">Korean</span>
                </div>
                <div className="relative">
                  <textarea 
                    value={translateInput}
                    onChange={e => setTranslateInput(e.target.value)}
                    placeholder="輸入想說的話..." 
                    className="w-full bg-busan-cream rounded-xl p-4 pr-16 text-sm font-bold outline-none h-32 focus:ring-2 ring-busan-orange/10 transition-all border-2 border-transparent focus:border-busan-orange/20" 
                  />
                  <button onClick={handleTranslate} disabled={isTranslating || !translateInput.trim()} className="absolute right-3 bottom-3 bg-busan-orange text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest sticker-shadow-sm active:scale-95 transition-all disabled:opacity-50">
                    翻譯
                  </button>
                </div>
                <div className="mt-4 bg-busan-beige rounded-xl p-6 min-h-[8rem] flex flex-col items-center justify-center relative border border-deep-sea/5 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocean via-busan-orange to-ocean opacity-20" />
                  {isTranslating ? (
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="text-busan-orange font-black tracking-widest">TRANSLATING...</motion.div>
                  ) : (
                    <>
                      <p className={`text-xl font-bold text-center leading-relaxed ${translateOutput ? 'text-deep-sea' : 'text-deep-sea/20'}`}>
                        {translateOutput || '翻譯結果將會出現在這裡'}
                      </p>
                      {translateOutput && (
                        <div className="flex gap-4 mt-6">
                          <button onClick={() => speakKorean(translateOutput)} className="bg-white p-3 rounded-xl sticker-shadow-sm text-busan-orange active:scale-90 transition-all border border-deep-sea/5">
                            <Volume2 size={20} />
                          </button>
                          <button onClick={() => { navigator.clipboard.writeText(translateOutput); setCopiedId('tr'); setTimeout(() => setCopiedId(null), 2000); }} className="bg-white p-3 rounded-xl sticker-shadow-sm text-busan-orange active:scale-90 transition-all border border-deep-sea/5">
                            {copiedId === 'tr' ? <Check size={20} /> : <Copy size={20} />}
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-[10px] font-black text-deep-sea/30 uppercase tracking-widest px-4">快速常用語句</h3>
                {PHRASES.map((p, i) => (
                  <div key={i} onClick={() => speakKorean(p.ko)} className="bg-white border-2 border-deep-sea/5 p-5 rounded-[1.5rem] flex justify-between items-center cursor-pointer sticker-shadow-sm active:scale-95 transition-all">
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 bg-busan-orange/10 rounded-xl flex items-center justify-center text-busan-orange"><Volume2 size={18} /></div>
                      <div>
                        <h4 className="font-bold text-sm text-deep-sea">{p.zh}</h4>
                        <p className="text-xs font-black text-busan-orange mt-0.5">{p.ko}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'others' && (
            <motion.div key="others" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {!otherActiveSub ? (
                <div className="grid grid-cols-2 gap-5 pt-4 pb-10">
                  <MenuButton id="prep" label="準備清單" icon={ListTodo} color="bg-ocean/10 text-ocean" onClick={() => setOtherActiveSub('prep')} />
                  <MenuButton id="shop" label="血拚清單" icon={ShoppingCart} color="bg-busan-orange/10 text-busan-orange" onClick={() => setOtherActiveSub('shop')} />
                  <MenuButton id="survival" label="生存指南" icon={ShieldCheck} color="bg-ocean/10 text-ocean" onClick={() => setOtherActiveSub('survival')} />
                  <MenuButton id="history" label="釜慶歷史" icon={BookOpen} color="bg-busan-orange/10 text-busan-orange" onClick={() => setOtherActiveSub('history')} />
                  <MenuButton id="notes" label="個人筆記" icon={FileText} color="bg-ocean/10 text-ocean" onClick={() => setOtherActiveSub('notes')} />
                  <MenuButton id="flight" label="航班住宿" icon={Building2} color="bg-busan-orange/10 text-busan-orange" onClick={() => setOtherActiveSub('flight')} />
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <button onClick={() => setOtherActiveSub(null)} className="w-10 h-10 bg-white border border-deep-sea/5 rounded-full flex items-center justify-center sticker-shadow-sm text-busan-orange active:scale-90 transition-all">
                      <ChevronRight size={20} className="rotate-180" />
                    </button>
                    <h2 className="text-2xl font-black text-deep-sea tracking-tight">
                      {otherActiveSub === 'prep' && 'Preparation'}
                      {otherActiveSub === 'shop' && 'Shopping'}
                      {otherActiveSub === 'survival' && 'Survival'}
                      {otherActiveSub === 'history' && 'History'}
                      {otherActiveSub === 'notes' && 'Notes'}
                      {otherActiveSub === 'flight' && 'Info'}
                    </h2>
                  </div>

                  {otherActiveSub === 'prep' && (
                    <div className="space-y-8 pb-32">
                      <div className="bg-white p-6 rounded-[2rem] border-2 border-deep-sea/5 sticker-shadow">
                        <p className="text-[10px] font-black text-ocean uppercase tracking-widest mb-3 px-1">新增自訂項目</p>
                        <div className="flex gap-2">
                          <input 
                            value={newTodoInput}
                            onChange={e => setNewTodoInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleAddTodo()}
                            placeholder="輸入想帶的東西..." 
                            className="flex-1 bg-busan-cream rounded-xl px-4 py-3 text-xs font-bold outline-none border-2 border-transparent focus:border-ocean/20 transition-all" 
                          />
                          <button onClick={handleAddTodo} className="bg-ocean text-white p-3 rounded-xl sticker-shadow-sm active:scale-95 transition-all">
                            <Plus size={20} />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {todoList.map((t: any, idx: number) => (
                          <div key={t.id || idx} onClick={() => {
                            const newList = [...todoList];
                            newList[idx].completed = !newList[idx].completed;
                            setTodoList(newList);
                          }} className={`bg-white p-5 rounded-[1.5rem] border-2 border-deep-sea/5 flex items-center gap-4 cursor-pointer sticker-shadow-sm active:scale-[0.98] transition-all ${t.completed ? 'opacity-50 grayscale' : ''}`}>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${t.completed ? 'bg-ocean text-white' : 'bg-busan-beige text-deep-sea/10'}`}>
                              {t.completed && <Check size={20} strokeWidth={3} />}
                            </div>
                            <span className={`text-sm font-bold tracking-tight ${t.completed ? 'line-through text-deep-sea/40' : 'text-deep-sea'}`}>{t.task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {otherActiveSub === 'shop' && (
                    <div className="space-y-8 pb-32">
                      <div className="bg-white p-6 rounded-[2rem] border-2 border-deep-sea/5 sticker-shadow">
                        <p className="text-[10px] font-black text-busan-orange uppercase tracking-widest mb-3 px-1">新增慾望清單</p>
                        <div className="space-y-2">
                          <input 
                            value={newShopBrand}
                            onChange={e => setNewShopBrand(e.target.value)}
                            placeholder="品牌 (如: Mardi Mercredi)" 
                            className="w-full bg-busan-cream rounded-xl px-4 py-3 text-xs font-bold outline-none border-2 border-transparent focus:border-busan-orange/20 transition-all" 
                          />
                          <div className="flex gap-2">
                            <input 
                              value={newShopItem}
                              onChange={e => setNewShopItem(e.target.value)}
                              onKeyDown={e => e.key === 'Enter' && handleAddShop()}
                              placeholder="品項 (如: 經典雛菊T)" 
                              className="flex-1 bg-busan-cream rounded-xl px-4 py-3 text-xs font-bold outline-none border-2 border-transparent focus:border-busan-orange/20 transition-all" 
                            />
                            <button onClick={handleAddShop} className="bg-busan-orange text-white p-3 rounded-xl sticker-shadow-sm active:scale-95 transition-all">
                              <Plus size={20} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {shoppingItems.map((s: any, idx: number) => (
                          <div key={s.id || idx} onClick={() => {
                            const newList = [...shoppingItems];
                            newList[idx].purchased = !newList[idx].purchased;
                            setShoppingItems(newList);
                          }} className={`bg-white p-5 rounded-[1.5rem] border-2 border-deep-sea/5 flex items-center justify-between cursor-pointer sticker-shadow-sm active:scale-[0.98] transition-all ${s.purchased ? 'opacity-50 grayscale' : ''}`}>
                            <div className="flex items-center gap-4">
                               <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${s.purchased ? 'bg-busan-orange text-white' : 'bg-busan-beige text-deep-sea/10'}`}>
                                 {s.purchased && <Check size={20} strokeWidth={3} />}
                               </div>
                               <div>
                                 <p className={`text-[10px] font-black uppercase tracking-widest ${s.purchased ? 'text-busan-orange/40' : 'text-busan-orange'}`}>{s.brand}</p>
                                 <h4 className={`text-sm font-bold tracking-tight ${s.purchased ? 'line-through text-deep-sea/40' : 'text-deep-sea'}`}>{s.item}</h4>
                               </div>
                            </div>
                            <Sparkles size={16} className={s.purchased ? 'text-busan-orange/20' : 'text-busan-orange/10'} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {otherActiveSub === 'survival' && (
                    <div className="space-y-6 pb-32">
                      {SURVIVAL_TIPS.map((tip, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-[2rem] border-2 border-deep-sea/5 sticker-shadow-sm">
                          <h4 className="text-sm font-black text-ocean flex items-center gap-2 mb-3 uppercase tracking-widest">
                            <Info size={16} />
                            {tip.title}
                          </h4>
                          <div className="text-xs font-bold text-deep-sea/70 leading-relaxed whitespace-pre-line bg-busan-cream/50 p-4 rounded-xl border border-deep-sea/5">
                            {tip.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {otherActiveSub === 'history' && (
                    <div className="space-y-8 pb-32">
                      <section className="bg-white p-6 rounded-[2rem] border-2 border-deep-sea/5 sticker-shadow">
                        <h4 className="text-lg font-black text-deep-sea mb-4 flex items-center gap-2"><Anchor size={20} className="text-busan-orange" /> {HISTORY_CONTENT.busan.title}</h4>
                        <div className="text-xs font-semibold text-deep-sea/70 leading-relaxed whitespace-pre-line bg-busan-cream/50 p-5 rounded-2xl">
                          {HISTORY_CONTENT.busan.content}
                        </div>
                      </section>
                      <section className="bg-white p-6 rounded-[2rem] border-2 border-deep-sea/5 sticker-shadow">
                        <h4 className="text-lg font-black text-deep-sea mb-4 flex items-center gap-2"><BookOpen size={20} className="text-ocean" /> {HISTORY_CONTENT.gyeongju.title}</h4>
                        <div className="text-xs font-semibold text-deep-sea/70 leading-relaxed whitespace-pre-line bg-busan-cream/50 p-5 rounded-2xl">
                          {HISTORY_CONTENT.gyeongju.content}
                        </div>
                      </section>
                    </div>
                  )}

                  {otherActiveSub === 'notes' && (
                    <div className="space-y-6 pb-24">
                      {DATES.map((d) => (
                        <div key={d.id} className="bg-white p-6 rounded-[2rem] border-2 border-deep-sea/5 sticker-shadow">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xs font-black text-ocean uppercase tracking-widest">MAY {d.date} • {d.day}</h4>
                            <span className="text-[10px] font-bold text-deep-sea/30">{d.theme}</span>
                          </div>
                          <textarea 
                            value={personalNotes[d.id as keyof typeof personalNotes] || ''}
                            onChange={e => setPersonalNotes({...personalNotes, [d.id]: e.target.value})}
                            placeholder="記錄下這一天的點滴與秘密點子..." 
                            className="w-full text-xs font-bold outline-none bg-busan-cream rounded-2xl p-5 h-40 border-2 border-transparent focus:border-busan-orange/20 transition-all resize-none shadow-inner"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {otherActiveSub === 'flight' && (
                    <div className="space-y-8 pb-32">
                      <div className="space-y-6">
                        <h3 className="text-[10px] font-black text-busan-orange uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                          <Plane size={14} /> ✈️ 航班資訊
                        </h3>
                        {FLIGHT_INFO.map((flight, idx) => (
                          <div key={idx} className="bg-deep-sea text-white p-6 rounded-[2rem] sticker-shadow border-4 border-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -mr-8 -mt-8 rounded-full" />
                            <div className="relative z-10">
                              <p className="text-[10px] font-black uppercase tracking-widest text-busan-orange mb-2">{flight.airline}</p>
                              <div className="flex justify-between items-end mb-4">
                                <h4 className="text-2xl font-black">{flight.codes.go} / {flight.codes.back}</h4>
                              </div>
                              <div className="space-y-2 text-xs font-bold opacity-80 border-t border-white/10 pt-4">
                                <div className="flex justify-between">
                                  <span className="opacity-60">去程</span>
                                  <span>{flight.schedule.go}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="opacity-60">回程</span>
                                  <span>{flight.schedule.back}</span>
                                </div>
                              </div>
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-[9px] font-black uppercase text-busan-orange mb-1 opacity-80">搭乘人員</p>
                                <p className="text-xs font-bold leading-relaxed">{flight.passengers}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-[10px] font-black text-ocean uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                          <Building2 size={14} /> 🏠住宿資訊
                        </h3>
                        {HOTEL_INFO.map((hotel, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-[2rem] border-2 border-deep-sea/5 sticker-shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <span className="text-[9px] font-black text-ocean uppercase tracking-widest bg-ocean/5 px-2 py-1 rounded-md">{hotel.dates}</span>
                                <h4 className="text-lg font-black text-deep-sea mt-2 tracking-tight">{hotel.name}</h4>
                              </div>
                              <a href={hotel.mapUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-ocean text-white rounded-xl flex items-center justify-center sticker-shadow-sm active:scale-90 transition-all">
                                <MapPin size={18} />
                              </a>
                            </div>
                            <div className="space-y-3">
                              <p className="text-[10px] font-bold text-deep-sea/40 italic">{hotel.address}</p>
                              <div className="text-xs font-bold text-deep-sea/70 whitespace-pre-line leading-relaxed bg-busan-cream/30 p-4 rounded-xl">
                                {hotel.details}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <div className="fixed bottom-28 right-6 z-[60]">
        <AnimatePresence>
          {isConverterOpen && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.8 }} className="absolute bottom-20 right-0 w-64 bg-white rounded-[2.5rem] border-2 border-deep-sea/5 sticker-shadow p-6 overflow-hidden">
              <div className="space-y-4">
                <CurrencyInput label="KRW (韓元)" value={krwAmount} onChange={e => { setKrwAmount(e.target.value); setLastEdited('krw'); }} icon="🇰🇷" />
                <CurrencyInput label="TWD (台幣)" value={twdAmount} onChange={e => { setTwdAmount(e.target.value); setLastEdited('twd'); }} icon="🇹🇼" color="text-busan-orange" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={() => setIsConverterOpen(!isConverterOpen)} className={`w-16 h-16 rounded-full flex flex-col items-center justify-center sticker-shadow active:scale-95 transition-all duration-300 ${isConverterOpen ? 'bg-busan-orange text-white' : 'bg-deep-sea text-white'}`}>
          {isConverterOpen ? <X size={28} /> : <div className="flex flex-col items-center text-sm font-black tracking-tighter"><span>₩</span><div className="w-4 h-[1px] bg-white/20 my-1"/><span>$</span></div>}
        </button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-deep-sea/5 px-6 pb-10 pt-4 flex justify-between items-center shadow-[0_-10px_30px_rgba(224,229,213,0.3)]">
        <NavItem id="itinerary" icon={Clock} label="行程" />
        <NavItem id="translator" icon={Languages} label="翻譯" />
        <NavItem id="others" icon={MenuGrid} label="探索" />
      </nav>

      {/* Ticket Modal */}
      <AnimatePresence>
        {selectedTicket && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTicket(null)}
            className="fixed inset-0 z-[100] bg-deep-sea/90 p-6 flex items-center justify-center backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedTicket(null)}
                className="absolute -top-12 right-0 text-white flex items-center gap-2 font-black tracking-widest text-xs uppercase"
              >
                <X size={24} /> 關閉
              </button>
              <img src={selectedTicket} alt="Ticket" className="max-w-full max-h-[80vh] rounded-3xl sticker-shadow border-4 border-white object-contain" />
              <p className="text-white/40 text-[10px] text-center mt-4 font-bold">點擊外部或按鈕關閉</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuButton({ label, icon: Icon, color, onClick }: any) {
  return (
    <button onClick={onClick} className="bg-white border-2 border-deep-sea/5 p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 sticker-shadow hover:sticker-shadow-sm active:scale-95 transition-all">
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center`}>
        <Icon size={28} />
      </div>
      <span className="text-[10px] font-black tracking-widest uppercase">{label}</span>
    </button>
  );
}

function CurrencyInput({ label, value, onChange, icon, color = '' }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-[9px] font-black opacity-60 uppercase px-1">{label}</label>
      <div className="relative">
        <input type="number" value={value} onChange={onChange} className={`w-full bg-busan-cream rounded-2xl p-4 text-lg font-black outline-none border-2 border-transparent focus:border-busan-orange/20 transition-all shadow-inner ${color}`} />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg opacity-20">{icon}</span>
      </div>
    </div>
  );
}

function MenuGrid({ size, strokeWidth }: any) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect width="6" height="6" x="4" y="4" rx="1.5" />
      <rect width="6" height="6" x="14" y="4" rx="1.5" />
      <rect width="6" height="6" x="4" y="14" rx="1.5" />
      <rect width="6" height="6" x="14" y="14" rx="1.5" />
    </svg>
  )
}
