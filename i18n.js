/* Samui sample sites: English / Thai switch.
   Each site loads its own th.js (window.TH = {...}) before this file.
   Text nodes are swapped by exact English text; numbers and prices stay as they are. */
(function(){
  var COMMON={
    "Directions":"เส้นทาง","Open in Google Maps":"เปิดใน Google Maps","Menu":"เมนู","Call":"โทร","Find us":"ที่ตั้งร้าน",
    "Hours":"เวลาเปิด","Address":"ที่อยู่","Phone":"โทรศัพท์","Payment":"การชำระเงิน","Call us":"โทรหาเรา",
    "See the menu":"ดูเมนู","The menu":"เมนู","Book a table":"จองโต๊ะ","Call to book":"โทรจองโต๊ะ","Every day":"ทุกวัน",
    "every day":"ทุกวัน","Open every day":"เปิดทุกวัน","Cash only":"รับเงินสดเท่านั้น","Cards welcome":"รับบัตร",
    "Free parking":"มีที่จอดรถฟรี","free parking":"มีที่จอดรถฟรี","Dogs welcome":"พาสุนัขมาได้","Kids welcome":"เหมาะกับเด็ก",
    "Come and eat with us":"มาทานด้วยกันนะคะ","A family place":"ร้านแบบครอบครัว","closed":"ปิด","Closed":"ปิด",
    "Thursday":"วันพฤหัสบดี","Sun":"อา.","Mon":"จ.","Tue":"อ.","Wed":"พ.","Thu":"พฤ.","Fri":"ศ.","Sat":"ส.",
    "Sunday":"วันอาทิตย์","Monday":"วันจันทร์","Tuesday":"วันอังคาร","Wednesday":"วันพุธ","Friday":"วันศุกร์","Saturday":"วันเสาร์",
    "Breakfast":"อาหารเช้า","Drinks":"เครื่องดื่ม","Coffee":"กาแฟ","Desserts":"ของหวาน","Sweets":"ของหวาน","Salads":"สลัด",
    "Signature":"เมนูพิเศษ","Grill":"ปิ้งย่าง","Sweet and cold":"ของหวานและเครื่องดื่มเย็น","Soup and curry":"ต้มและแกง",
    "Curry and soup":"แกงและต้ม","From the wok":"ผัดกระทะ","Juice and smoothies":"น้ำผลไม้และสมูทตี้","La carte":"เมนู",
    "Pad thai":"ผัดไทย","Green curry":"แกงเขียวหวาน","Red curry":"แกงเผ็ด","Yellow curry":"แกงกะหรี่","Panang curry":"แกงพะแนง",
    "Massaman curry":"แกงมัสมั่น","Massaman chicken":"มัสมั่นไก่","Fried rice":"ข้าวผัด","Pineapple fried rice":"ข้าวผัดสับปะรด",
    "Fried rice in pineapple":"ข้าวผัดสับปะรด","Mango sticky rice":"ข้าวเหนียวมะม่วง","Spring rolls":"ปอเปี๊ยะทอด",
    "Vegetable spring rolls":"ปอเปี๊ยะผัก","Fresh coconut":"มะพร้าวอ่อน","Sweet and sour":"เปรี้ยวหวาน","Tom yum":"ต้มยำ",
    "Tom yum kung":"ต้มยำกุ้ง","Tom kha":"ต้มข่า","Tom kha kai":"ต้มข่าไก่","Pad see ew":"ผัดซีอิ๊ว","Chicken satay":"สะเต๊ะไก่",
    "Garlic and pepper":"ผัดกระเทียมพริกไทย","Morning glory":"ผัดผักบุ้ง","Stir-fried morning glory":"ผัดผักบุ้ง",
    "Papaya salad":"ส้มตำ","Mixed vegetables":"ผัดผักรวม","Chicken wings":"ปีกไก่ทอด","Garlic bread":"ขนมปังกระเทียม",
    "French fries":"เฟรนช์ฟรายส์","Fruit shake":"ผลไม้ปั่น","Spicy seafood salad":"ยำทะเล","Seafood salad":"ยำทะเล",
    "Pad kra pao with fried egg":"ผัดกะเพราไข่ดาว","Matcha latte":"มัทฉะลาเต้","Matcha latte, hot / iced":"มัทฉะลาเต้ ร้อน / เย็น",
    "Grilled fish":"ปลาเผา","Steamed fish":"ปลานึ่ง","Cashew chicken":"ไก่ผัดเม็ดมะม่วง","Chicken with cashew nuts":"ไก่ผัดเม็ดมะม่วงหิมพานต์",
    "Chicken":"ไก่","Pork":"หมู","Beef":"เนื้อ","Shrimp":"กุ้ง","Seafood":"ทะเล","Vegetarian":"มังสวิรัติ","Spaghetti":"สปาเกตตี้",
    "Carbonara":"คาโบนาร่า","Croissant":"ครัวซองต์","Honey lime soda":"โซดาน้ำผึ้งมะนาว","Pad kee mao":"ผัดขี้เมา",
    "Thai omelette":"ไข่เจียว","Sea bass":"ปลากะพง","Noodle soup":"ก๋วยเตี๋ยวน้ำ","Bar":"บาร์","Every day, 10:00 to 22:00":"ทุกวัน 10:00 ถึง 22:00",
    "Espresso":"เอสเปรสโซ","Americano":"อเมริกาโน่","Cappuccino":"คาปูชิโน่","Mocha":"มอคค่า","Flat white":"แฟลตไวท์","Espresso tonic":"เอสเปรสโซโทนิค",
    "4.9 on Google":"4.9 บน Google","4.8 on Google":"4.8 บน Google","4.7 on Google":"4.7 บน Google","4.6 on Google":"4.6 บน Google","5.0 on Google":"5.0 บน Google",
    "Takeaway":"สั่งกลับบ้านได้","and delivery":"และมีบริการส่ง","Hot / iced":"ร้อน / เย็น","Reservations":"รับจองโต๊ะ",
    "OPEN":"เปิด","CLOSED":"ปิด"
  };
  var RULES=[
    [/^Sample website made for (.+?)\. Not live yet; nothing here is final\.$/,"เว็บไซต์ตัวอย่างที่ทำให้ $1 ยังไม่ได้เปิดใช้งานจริง ทุกอย่างแก้ไขได้"],
    [/^(\d\.\d) on Google Maps from ([\d,]+) reviews \((\w+) 2026\)\.?$/,"คะแนน $1 บน Google Maps จาก $2 รีวิว (พฤศจิกายน 2026)"],
    [/^([\d,]+) reviews, Nov 2026$/,"$1 รีวิว (พ.ย. 2026)"],
    [/^Google Maps, ([\d,]+) reviews \(Nov 2026\)$/,"Google Maps $1 รีวิว (พ.ย. 2026)"]
  ];
  var DICT={},k;for(k in COMMON)DICT[k]=COMMON[k];var T=window.TH||{};for(k in T)DICT[k]=T[k];
  var orig=new WeakMap(),mine=new WeakMap(),lang='en',busy=false;
  function norm(s){return s.replace(/\s+/g,' ').trim()}
  function lookup(key){
    if(key.length<2)return null;
    if(DICT.hasOwnProperty(key))return DICT[key];
    for(var i=0;i<RULES.length;i++){if(RULES[i][0].test(key))return key.replace(RULES[i][0],RULES[i][1])}
    return null;
  }
  function skip(n){var p=n.parentNode;while(p&&p.nodeType===1){var t=p.nodeName;if(t==='SCRIPT'||t==='STYLE'||t==='NOSCRIPT'||t==='svg'||t==='SVG'||(p.hasAttribute&&p.hasAttribute('data-no-i18n')))return true;p=p.parentNode}return false}
  function trNode(n){
    var v=n.nodeValue;if(!v||mine.get(n)===v||!/[A-Za-z]/.test(v)||skip(n))return;
    var key=norm(v),th=lookup(key);if(!th||th===key)return;
    var lead0=v.match(/^\s*/)[0],trail0=v.match(/\s*$/)[0];if(v===lead0+th+trail0)return;
    if(!orig.has(n))orig.set(n,v);
    var lead=v.match(/^\s*/)[0],trail=v.match(/\s*$/)[0];
    busy=true;n.nodeValue=lead+th+trail;mine.set(n,n.nodeValue);busy=false;
  }
  function walk(root,fn){var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n,list=[];while((n=w.nextNode()))list.push(n);list.forEach(fn)}
  function apply(l){
    lang=l;document.documentElement.lang=l==='th'?'th':'en';document.documentElement.classList.toggle('lang-th',l==='th');
    if(l==='th'){walk(document.body,trNode)}
    else{walk(document.body,function(n){if(orig.has(n)){busy=true;n.nodeValue=orig.get(n);busy=false;orig.delete(n)}})}
    [].forEach.call(document.querySelectorAll('[data-i18n-btn]'),function(b){b.setAttribute('aria-pressed',b.getAttribute('data-i18n-btn')===l?'true':'false')});
    try{localStorage.setItem('samui-lang',l)}catch(e){}
  }
  var mo=new MutationObserver(function(ms){if(busy||lang!=='th')return;ms.forEach(function(m){
    if(m.type==='characterData'){trNode(m.target)}
    else{[].forEach.call(m.addedNodes,function(a){if(a.nodeType===3)trNode(a);else if(a.nodeType===1)walk(a,trNode)})}
  })});
  function ui(){
    if(document.querySelector('[data-i18n-host]'))return;
    var st=document.createElement('style');
    st.textContent='.i18n{position:fixed;right:12px;bottom:18px;z-index:20;display:flex;border-radius:999px;overflow:hidden;background:#1d1d1f;box-shadow:0 6px 18px -6px rgba(0,0,0,.45);font:600 13px/1 system-ui,sans-serif}.i18n button{all:unset;cursor:pointer;color:#f4f4f2;padding:9px 13px}.i18n button[aria-pressed="true"]{background:#f4f4f2;color:#1d1d1f}.i18n button:focus-visible{outline:2px solid #f5c542;outline-offset:-2px}@media (max-width:900px){.i18n{bottom:70px}}@media print{.i18n{display:none}}';
    document.head.appendChild(st);
    var box=document.createElement('div');box.className='i18n';box.setAttribute('role','group');box.setAttribute('aria-label','Language');box.setAttribute('data-no-i18n','');
    box.innerHTML='<button type="button" data-i18n-btn="en" aria-pressed="true">EN</button><button type="button" data-i18n-btn="th" aria-pressed="false" lang="th">ไทย</button>';
    document.body.appendChild(box);
    box.addEventListener('click',function(e){var b=e.target.closest('[data-i18n-btn]');if(b)apply(b.getAttribute('data-i18n-btn'))});
  }
  function start(){
    ui();
    mo.observe(document.body,{subtree:true,childList:true,characterData:true});
    var saved=null;try{saved=localStorage.getItem('samui-lang')}catch(e){}
    var first=saved||((navigator.language||'').toLowerCase().indexOf('th')===0?'th':'en');
    if(first==='th')apply('th');
  }
  window.samuiI18n={apply:apply,get lang(){return lang}};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
