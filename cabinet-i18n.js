/* ==========================================================================
   @QEPIYEQEPIK — FULL USER CABINET (GOOGLE / APPLE / SMS OTP) + 100% AZ/RU/EN I18N
   ========================================================================== */

(function () {
  let currentLang = 'az';
  let userSession = {
    loggedIn: true,
    method: 'Google',
    name: 'Orxan Məmmədov',
    ident: 'orxan.m@gmail.com',
    clientId: 'DAV-2026-8841',
    deposit: '$1,500.00',
    savedLots: [
      {
        title: '2022 HYUNDAI SONATA LIMITED',
        img: 'assets/posts/post_01_DfMTuJ7kf-S.jpg',
        bid: '$5,900 - $6,900',
        statusKey: 'bid_live',
        lotNum: 'Copart #68492014'
      },
      {
        title: '2027 BMW 5 SERIES 530I',
        img: 'assets/posts/post_02_DfMS7c4EVG2.jpg',
        bid: '$30,000 - $35,000',
        statusKey: 'bid_watch',
        lotNum: 'IAAI #41908223'
      }
    ]
  };

  const DICT = {
    az: {
      theme_light: 'Ağ Fon',
      theme_dark: 'Tünd Fon',
      cab_btn: 'Şəxsi Kabinet',
      ticker_badge: '@QEPIYEQEPIK // REAL HƏRRAC LENTİ',
      nav_lots: 'Real Lotlar (9)',
      nav_calc: 'Hesablayıcı',
      nav_process: 'İdxal Prosesi',
      nav_office: 'Vurğun Residence',
      hero_badge: '2014-CÜ İLDƏN XİDMƏTİNİZDƏYİK • 397,000+ İZLƏYİCİ',
      hero_title: 'Avtomobillərin Alınması və Çatdırılması <span class="accent">50%-dək Daha Ucuz.</span>',
      hero_lead: '<strong>Dream Auto Vision LLC (@qepiyeqepik)</strong> — 12 ildir ABŞ, Koreya və Çin hərraclarından avtomobilləri <strong>qəpiyə-qəpik şəffaf invoysla</strong> Bakıya çatdırır. Həftənin 7 günü (6–7-ci günlər daxil) Vurğun Residence ofisimizdə xidmətinizdəyik!',
      bio_1: 'Dream Auto Vision LLC',
      bio_2: '397K+ Rəsmi İzləyici',
      bio_3: 'ABŞ • Koreya • Çin İdxalı',
      bio_4: '6–7-ci Günlər Açıqdır',
      bio_5: '(+994) 50 505 00 59',
      bio_6: 'Vurğun Residence, 2-ci m.',
      hero_btn_lots: 'Son 10 Günün Real Lotları (9 Avto)',
      hero_btn_calc: 'Qəpiyə-Qəpik Hesablayıcı',
      m1_val: '2014<span>-dən</span>',
      m1_lbl: '12 il rəsmi fəaliyyət',
      m2_val: '397<span>K+</span>',
      m2_lbl: '@qepiyeqepik ailəsi',
      m3_val: '50<span>%-dək</span>',
      m3_lbl: 'Bazarda daha sərfəli',
      m4_val: '7<span>/ 7</span>',
      m4_lbl: 'Şənbə–Bazar açıqdır',
      stage_top_left: 'REAL INSTAGRAM LOTU //',
      stage_verified: 'CARFAX YOXLANILIB ✓',
      t_lbl_engine: 'Mühərrik:',
      t_lbl_miles: 'Orijinal Yürüş:',
      t_lbl_auc: 'Hərrac Günü:',
      t_lbl_adv: 'Üstünlük:',
      t_val_adv: '50%-dək DAHA UCUZ',
      t_lbl_line: 'Rəsmi Xətt:',
      t_price_lbl: 'TƏXMİNİ HƏRRAC QİYMƏTİ:',
      t_btn_ig: 'IG Posta Bax',
      t_btn_order: 'Sifariş Et',
      lots_pill: '100% REAL INSTAGRAM LENTİ // @QEPIYEQEPIK RƏSMİ ELANLARI',
      lots_title: 'Son Günlərdə Paylaşılan Real Hərrac Lotları (9 Avtomobil)',
      f_all: 'Hamısı (9 Real Lot)',
      f_budget: 'Büdcə & Sedan ($3,900 – $6,900)',
      f_biz: 'Biznes Sinif ($14,000 – $35,000)',
      f_lux: 'VIP & Luxury ($80,000+)',
      card_discount: '50%-dək UCUZ',
      card_vip: 'VIP LOT',
      card_low_miles: '7,421 MİL!',
      card_est_price: 'Təxmini hərrac qiyməti:',
      card_btn_calc: 'Hesabla',
      card_btn_order: 'Sifariş Et',
      card_btn_save: 'Seçilmiş',
      card_btn_saved: 'Seçildi ✓',
      fuel_petrol: 'Benzin',
      fuel_hybrid: 'Hibrid',
      unit_miles: 'mil',
      month_nov: 'Noyabr',
      pin_pill: 'PINNED HIGHLIGHTS // RƏSMİ BƏRKİDİLMİŞ PAYLAŞIMLAR',
      pin_title: 'Amerikadan Avtomobil İdxalı Prosesi və Rəsmi Məlumat',
      pin_desc: '@qepiyeqepik səhifəsinin rəsmi bərkidilmiş (Pinned) paylaşımları: 6 mərhələli ABŞ → Azərbaycan logistika xəritəsi, VIP müştəri təhvilləri və həftəsonu iş rejimi.',
      pin1_tag: '01 // ABŞ → AZƏRBAYCAN (6 MƏRHƏLƏ)',
      pin1_title: 'Amerikadan Avtomobil İdxalı Prosesi',
      pin1_desc: '1. Hərracda udulma → 2. ABŞ daxili evakuator → 3. Liman terminalı → 4. Okean konteyneri → 5. Poti limanı → 6. Bakı Gömrük təhvili.',
      pin1_btn: 'Rəsmi Video Çarxa Bax ↗',
      pin2_tag: '02 // EKSKLÜZİV VIP TƏHVİL',
      pin2_title: 'Lamborghini Temerario — Xeyirli Olsun!',
      pin2_desc: 'Büdcə sedanlarından (Kia Forte, Elantra, Sonata) dünya səviyyəli superkarlara qədər 100% sığortalı sifariş.',
      pin2_btn: 'Rəsmi Video Çarxa Bax ↗',
      pin3_tag: '03 // HƏFTƏNİN 7 GÜNÜ AÇIQDIR',
      pin3_title: '6–7-ci Günlər Fəaliyyət Göstəririk!',
      pin3_desc: 'İş günlərində vaxtınız yoxdursa, Şənbə və Bazar günləri Vurğun Residence ofisimizə yaxınlaşıb canlı hərracda iştirak edə bilərsiniz.',
      pin3_btn: 'Rəsmi Elana Bax ↗',
      /* USER CABINET */
      cab_pill: 'CLIENT PORTAL // RƏSMİ MÜŞTƏRİ KABİNETİ (GOOGLE • APPLE • SMS)',
      cab_title: 'Şəxsi Kabinet, Canlı Stavkalar və Konteyner İzləmə',
      cab_desc: 'Google, Apple ID və ya SMS nömrənizlə daxil olun: seçdiyiniz hərrac lotlarını, rəsmi müqavilə invoyslarını və konteynerinizin Bakıya çatdırılma mərhələsini izləyin.',
      auth_box_tag: 'TƏHLÜKƏSİZ GİRİŞ // 3 RƏSMİ ÜSUL',
      auth_box_title: 'Müştəri Kabinetinə Daxil Olun',
      auth_box_sub: 'Saniyələr içində Google, Apple ID və ya mobil nömrənizlə (SMS kod) hesabınızı aktivləşdirin:',
      auth_google: 'Google Hesabı ilə Daxil Ol',
      auth_apple: 'Apple ID ilə Daxil Ol',
      auth_sms: 'SMS Nömrə ilə Daxil Ol (+994)',
      sms_lbl: 'Mobil nömrəniz (Azercell / Bakcell / Nar):',
      sms_send: 'SMS Kod Göndər',
      otp_placeholder: '4 rəqəmli SMS kod (məs: 4455)',
      otp_verify: 'Təsdiqlə →',
      auth_security_note: '🔒 Rəsmi müqavilə və Carfax sənədləriniz 256-bit şifrələmə ilə qorunur.',
      portal_verified: '● TƏSDİQLƏNMİŞ MÜŞTƏRİ HESABI',
      portal_kpi_id: 'Müştəri Kodu',
      portal_kpi_dep: 'Hərrac Depoziti',
      portal_kpi_lots: 'Seçilmiş Lotlar',
      portal_tab_1: 'Aktiv Stavkalar & Lotlar',
      portal_tab_2: 'Konteyner & VIN İzləmə (6 Mərhələ)',
      portal_tab_3: 'Qəpiyə-Qəpik İnvoyslar',
      bid_live: 'CANLI STAVKA AKTİVDİR',
      bid_watch: 'İZLƏMƏ SİYAHISINDA',
      btn_open_calc: 'Smetaya Bax',
      track_header: 'AKTİV KONTEYNER: MSCU8492104 • VIN: 5NPEH4J24NH148920 (2022 HYUNDAI SONATA HYBRID)',
      track_eta: 'Təxmini Bakı Təhvili: 18 Noyabr',
      st_1: 'Hərracda Uduldu',
      st_2: 'ABŞ Evakuator',
      st_3: 'Savannah Limanı',
      st_4: 'Okean Gəmisi',
      st_5: 'Poti Terminalı',
      st_6: 'Bakı Gömrük',
      doc_carfax: 'Rəsmi Carfax Hesabatı (.PDF)',
      doc_invoice: 'Qəpiyə-Qəpik Müqavilə İnvoysu',
      inv_saved_title: 'Son Yadda Saxlanılan Qəpiyə-Qəpik Hesablamalar',
      inv_saved_sub: 'Hesablayıcıda etdiyiniz bütün hesablamalar avtomatik olaraq Şəxsi Kabinetinizdə saxlanılır.',
      /* CALCULATOR */
      calc_pill: 'FINTECH PRECISION ENGINE // QƏPİYƏ-QƏPİK SMETA',
      calc_title: 'Qəpiyə-Qəpik Xərc və Gömrük Hesablayıcısı',
      calc_desc: 'Yuxarıdakı real lotlardan birinin üzərində «Hesabla» düyməsini sıxın və ya istədiyiniz hərrac qiymətini seçin.',
      calc_sel_prefix: '● SEÇİLMİŞ LOT:',
      calc_sel_suffix: 'orta hərrac qiyməti',
      c_lbl_1: '1. İdxal Ölkəsi',
      c_country_usa: 'ABŞ (Copart)',
      c_country_kor: 'Koreya (Encar)',
      c_country_chn: 'Çin (Zavod)',
      c_lbl_2: '2. Mühərrik Növü',
      c_fuel_petrol: 'Benzin',
      c_fuel_hybrid: 'Hibrid',
      c_fuel_ev: 'Elektromobil',
      c_lbl_3: '3. Hərrac Alış Qiyməti (USD)',
      c_lbl_4: '4. Mühərrik Həcmi (sm³)',
      inv_hdr_title: 'QƏPİYƏ-QƏPİK ŞƏFFAF HESABAT // 1$ = 1.70 ₼',
      inv_hdr_zero: '0% GİZLİ XƏRC ✓',
      inv_r1: 'Hərrac Alış Qiyməti (İnvoys):',
      inv_r2: 'Hərrac Rüsumu (Auction Fee):',
      inv_r3: 'ABŞ Daxili + Okean Konteyner + Bakı Çatdırılma:',
      inv_r4: 'AR Gömrük Rüsumu və Rəsmiləşdirmə (Təxmini):',
      inv_r5: 'Dream Auto Vision Rəsmi Xidmət Haqqı:',
      inv_tot_lbl: 'Bakıda Açar Təhvil Cəmi:',
      inv_mkt_lbl: 'Bakı Bazar Qiyməti:',
      inv_save_prefix: '50%-dək UCUZ: +',
      inv_save_suffix: ' ₼ QƏNAƏT',
      calc_wa_cta: 'Bu Hesabatı WhatsApp-a Göndər (+994 50 505 00 59)',
      /* CONTACTS */
      hq_pill: 'DREAM AUTO VISION LLC // HƏFTƏNİN 7 GÜNÜ AÇIQDIR',
      hq_title: 'Vurğun Residence Ofisimiz və Rəsmi Əlaqə',
      hq_desc: '6–7-ci günlər (Şənbə və Bazar) daxil olmaqla hər gün ofisimizə yaxınlaşıb rəsmi müqavilə ilə avtomobilinizi sifariş edə bilərsiniz.',
      hq_addr_tag: 'RƏSMİ ÜNVAN // BAKI ŞƏHƏRİ',
      hq_addr_title: 'Səməd Vurğun küçəsi 110, Vurğun Residence, 2-ci mərtəbə',
      hq_addr_sub: 'Bakı Dövlət Sirkinin yaxınlığı • İş rejimi: Həftənin 7 günü (6–7-ci günlər fəaliyyət göstəririk!)',
      hq_phones_lbl: 'Rəsmi Əlaqə Nömrələri (@qepiyeqepik):',
      call_word: 'Zəng →',
      lead_pill: 'CANLI AUKSİON SİFARİŞİ // 50%-DƏK QƏNAƏT',
      lead_title: '2–5 Noyabr Hərracında Hansı Lotda İştirak Edək?',
      lead_desc: 'Bəyəndiyiniz lotu (məs: 2022 Sonata Hybrid, 2027 BMW 530i, 2021 Kia K5, 2024 Elantra, 2022 E350) və ya büdcənizi yazın — Carfax hesabatını dərhal göndərək.',
      ph_model: 'Seçdiyiniz model (məs: 2022 Hyundai Sonata Limited / Kia K5)',
      ph_budget: 'Təxmini büdcəniz (məs: 6,000$ - 15,000$)',
      lead_btn: 'WhatsApp-la Carfax və Qəpiyə-Qəpik Hesabat Al →',
      footer_left: '© 2014–2026 <strong>Dream Auto Vision LLC (@qepiyeqepik)</strong> • 12 İl Sizinlə!',
      footer_right: 'Bakı ş., Səməd Vurğun küç. 110, Vurğun Residence, 2-ci mərtəbə • (+994) 50 505 00 59 / (+994) 50 227 80 41'
    },

    ru: {
      theme_light: 'Светлая',
      theme_dark: 'Тёмная',
      cab_btn: 'Личный Кабинет',
      ticker_badge: '@QEPIYEQEPIK // ЛЕНТА РЕАЛЬНЫХ АУКЦИОНОВ',
      nav_lots: 'Реальные Лоты (9)',
      nav_calc: 'Калькулятор',
      nav_process: 'Процесс Импорта',
      nav_office: 'Vurğun Residence',
      hero_badge: 'РАБОТАЕМ С 2014 ГОДА (12 ЛЕТ) • 397 000+ ПОДПИСЧИКОВ',
      hero_title: 'Покупка и Доставка Автомобилей <span class="accent">До 50% Дешевле.</span>',
      hero_lead: '<strong>Dream Auto Vision LLC (@qepiyeqepik)</strong> — 12 лет доставляем автомобили с аукционов США, Кореи и Китая в Баку <strong>по прозрачному инвойсу до копейки</strong>. Работаем 7 дней в неделю (включая субботу и воскресенье) в Vurğun Residence!',
      bio_1: 'Dream Auto Vision LLC',
      bio_2: '397K+ Подписчиков',
      bio_3: 'Импорт: США • Корея • Китай',
      bio_4: 'Открыты в Субботу и Воскресенье',
      bio_5: '(+994) 50 505 00 59',
      bio_6: 'Vurğun Residence, 2-й этаж',
      hero_btn_lots: 'Реальные лоты за 10 дней (9 авто)',
      hero_btn_calc: 'Калькулятор Qəpiyə-Qəpik',
      m1_val: 'С 2014<span> г.</span>',
      m1_lbl: '12 лет официальной работы',
      m2_val: '397<span>K+</span>',
      m2_lbl: 'Семья @qepiyeqepik',
      m3_val: 'До 50<span>%</span>',
      m3_lbl: 'Выгоднее рынка Баку',
      m4_val: '7<span> / 7</span>',
      m4_lbl: 'Работаем без выходных',
      stage_top_left: 'РЕАЛЬНЫЙ ЛОТ INSTAGRAM //',
      stage_verified: 'CARFAX ПРОВЕРЕН ✓',
      t_lbl_engine: 'Двигатель:',
      t_lbl_miles: 'Оригинальный пробег:',
      t_lbl_auc: 'Дата аукциона:',
      t_lbl_adv: 'Выгода:',
      t_val_adv: 'ДО 50% ДЕШЕВЛЕ',
      t_lbl_line: 'Прямая линия:',
      t_price_lbl: 'ОРИЕНТИРОВОЧНАЯ ЦЕНА АУКЦИОНА:',
      t_btn_ig: 'Пост в IG',
      t_btn_order: 'Заказать',
      lots_pill: '100% РЕАЛЬНАЯ ЛЕНТА INSTAGRAM // ОФИЦИАЛЬНЫЕ ЛОТЫ @QEPIYEQEPIK',
      lots_title: 'Реальные Аукционные Лоты за Последние Дни (9 Автомобилей)',
      f_all: 'Все (9 реальных лотов)',
      f_budget: 'Бюджет и Седаны ($3,900 – $6,900)',
      f_biz: 'Бизнес-класс ($14,000 – $35,000)',
      f_lux: 'VIP и Люкс ($80,000+)',
      card_discount: 'ДО 50% ДЕШЕВЛЕ',
      card_vip: 'VIP ЛОТ',
      card_low_miles: '7 421 МИЛЬ!',
      card_est_price: 'Ориентировочная цена аукциона:',
      card_btn_calc: 'Рассчитать',
      card_btn_order: 'Заказать',
      card_btn_save: 'В кабинет',
      card_btn_saved: 'Сохранено ✓',
      fuel_petrol: 'Бензин',
      fuel_hybrid: 'Гибрид',
      unit_miles: 'миль',
      month_nov: 'Ноября',
      pin_pill: 'PINNED HIGHLIGHTS // ЗАКРЕПЛЕННЫЕ ПУБЛИКАЦИИ',
      pin_title: 'Процесс Импорта Автомобилей из США и Официальная Информация',
      pin_desc: 'Закрепленные публикации @qepiyeqepik: 6 этапов логистики США → Азербайджан, выдача VIP-автомобилей клиентам и работа в выходные дни.',
      pin1_tag: '01 // США → АЗЕРБАЙДЖАН (6 ЭТАПОВ)',
      pin1_title: 'Процесс Импорта Автомобилей из США',
      pin1_desc: '1. Выигрыш лота → 2. Эвакуатор по США → 3. Портовый терминал → 4. Океанский контейнер → 5. Порт Поти → 6. Таможня Баку.',
      pin1_btn: 'Смотреть видео Reels ↗',
      pin2_tag: '02 // ЭКСКЛЮЗИВНАЯ VIP ВЫДАЧА',
      pin2_title: 'Lamborghini Temerario — Поздравляем Клиента!',
      pin2_desc: 'От бюджетных седанов (Kia Forte, Elantra, Sonata) до мировых суперкаров со 100% страховкой.',
      pin2_btn: 'Смотреть видео Reels ↗',
      pin3_tag: '03 // РАБОТАЕМ 7 ДНЕЙ В НЕДЕЛЮ',
      pin3_title: 'Работаем в Субботу и Воскресенье (6–7 дни)!',
      pin3_desc: 'Если вы заняты в будни — приезжайте в наш офис в Vurğun Residence в субботу или воскресенье для участия в живых торгах.',
      pin3_btn: 'Смотреть публикацию ↗',
      /* USER CABINET */
      cab_pill: 'CLIENT PORTAL // ЛИЧНЫЙ КАБИНЕТ КЛИЕНТА (GOOGLE • APPLE • SMS)',
      cab_title: 'Личный Кабинет, Живые Ставки и Отслеживание Контейнера',
      cab_desc: 'Войдите через Google, Apple ID или по SMS-коду: управляйте избранными лотами, проверяйте официальные инвойсы и отслеживайте доставку контейнера в Баку.',
      auth_box_tag: 'БЕЗОПАСНЫЙ ВХОД // 3 ОФИЦИАЛЬНЫХ СПОСОБА',
      auth_box_title: 'Вход в Кабинет Клиента',
      auth_box_sub: 'Авторизуйтесь за секунду через Google, Apple ID или по номеру телефона (SMS-код):',
      auth_google: 'Войти через аккаунт Google',
      auth_apple: 'Войти через Apple ID',
      auth_sms: 'Войти по SMS-коду (+994)',
      sms_lbl: 'Мобильный номер (Azercell / Bakcell / Nar):',
      sms_send: 'Получить код',
      otp_placeholder: '4-значный SMS-код (напр. 4455)',
      otp_verify: 'Подтвердить →',
      auth_security_note: '🔒 Официальный договор и отчёты Carfax защищены 256-битным шифрованием.',
      portal_verified: '● ПОДТВЕРЖДЁННЫЙ АККАУНТ КЛИЕНТА',
      portal_kpi_id: 'ID Клиента',
      portal_kpi_dep: 'Аукционный Депозит',
      portal_kpi_lots: 'Избранные Лоты',
      portal_tab_1: 'Активные Ставки и Лоты',
      portal_tab_2: 'Трекинг Контейнера (6 Этапов)',
      portal_tab_3: 'Инвойсы Qəpiyə-Qəpik',
      bid_live: 'СТАВКА АКТИВНА',
      bid_watch: 'В ИЗБРАННОМ',
      btn_open_calc: 'В смету',
      track_header: 'АКТИВНЫЙ КОНТЕЙНЕР: MSCU8492104 • VIN: 5NPEH4J24NH148920 (2022 HYUNDAI SONATA HYBRID)',
      track_eta: 'Ожидаемая выдача в Баку: 18 Ноября',
      st_1: 'Выигран в США',
      st_2: 'Эвакуатор США',
      st_3: 'Порт Саванна',
      st_4: 'В океане',
      st_5: 'Терминал Поти',
      st_6: 'Таможня Баку',
      doc_carfax: 'Официальный отчёт Carfax (.PDF)',
      doc_invoice: 'Инвойс договора Qəpiyə-Qəpik',
      inv_saved_title: 'Сохранённые Расчёты Qəpiyə-Qəpik',
      inv_saved_sub: 'Все расчёты из калькулятора автоматически сохраняются в вашем Личном Кабинете.',
      /* CALCULATOR */
      calc_pill: 'FINTECH PRECISION ENGINE // ТОЧНАЯ СМЕТА ДО КОПЕЙКИ',
      calc_title: 'Калькулятор Расходов и Таможни «Qəpiyə-Qəpik»',
      calc_desc: 'Нажмите «Рассчитать» на любом из 9 реальных лотов выше или укажите желаемую ставку аукциона.',
      calc_sel_prefix: '● ВЫБРАННЫЙ ЛОТ:',
      calc_sel_suffix: 'средняя ставка аукциона',
      c_lbl_1: '1. Страна Импорта',
      c_country_usa: 'США (Copart)',
      c_country_kor: 'Корея (Encar)',
      c_country_chn: 'Китай (Завод)',
      c_lbl_2: '2. Тип Двигателя',
      c_fuel_petrol: 'Бензин',
      c_fuel_hybrid: 'Гибрид',
      c_fuel_ev: 'Электромобиль',
      c_lbl_3: '3. Ставка Покупки на Аукционе (USD)',
      c_lbl_4: '4. Объём Двигателя (см³)',
      inv_hdr_title: 'ПРОЗРАЧНАЯ СМЕТА QƏPİYƏ-QƏPİK // 1$ = 1.70 ₼',
      inv_hdr_zero: '0% СКРЫТЫХ КОМИССИЙ ✓',
      inv_r1: 'Стоимость лота на аукционе (Инвойс):',
      inv_r2: 'Сбор аукциона Copart / IAAI (Auction Fee):',
      inv_r3: 'Логистика по США + Океанский контейнер + Доставка в Баку:',
      inv_r4: 'Таможенная пошлина и оформление в АР (Ориентировочно):',
      inv_r5: 'Официальная комиссия Dream Auto Vision:',
      inv_tot_lbl: 'Итого Под Ключ в Баку:',
      inv_mkt_lbl: 'Рыночная цена в Баку:',
      inv_save_prefix: 'ДО 50% ДЕШЕВЛЕ: +',
      inv_save_suffix: ' ₼ ВЫГОДЫ',
      calc_wa_cta: 'Отправить этот расчёт в WhatsApp (+994 50 505 00 59)',
      /* CONTACTS */
      hq_pill: 'DREAM AUTO VISION LLC // ОТКРЫТЫ 7 ДНЕЙ В НЕДЕЛЮ',
      hq_title: 'Наш Офис в Vurğun Residence и Официальные Контакты',
      hq_desc: 'Приезжайте в наш офис в любой день недели (включая субботу и воскресенье) для подбора авто и заключения официального договора.',
      hq_addr_tag: 'ОФИЦИАЛЬНЫЙ АДРЕС // Г. БАКУ',
      hq_addr_title: 'ул. Самеда Вургуна 110, Vurğun Residence, 2-й этаж',
      hq_addr_sub: 'Рядом с Бакинским государственным цирком • График: 7 дней в неделю (работаем в субботу и воскресенье!)',
      hq_phones_lbl: 'Официальные телефоны (@qepiyeqepik):',
      call_word: 'Позвонить →',
      lead_pill: 'ЗАКАЗ С ЖИВОГО АУКЦИОНА // ВЫГОДА ДО 50%',
      lead_title: 'В каком лоте 2–5 ноября вы хотите участвовать?',
      lead_desc: 'Укажите понравившийся лот (например: 2022 Sonata Hybrid, 2027 BMW 530i, 2021 Kia K5, 2024 Elantra, 2022 E350) или ваш бюджет — мы сразу пришлём Carfax.',
      ph_model: 'Желаемая модель (напр.: 2022 Hyundai Sonata Limited / Kia K5)',
      ph_budget: 'Ориентировочный бюджет (напр.: 6,000$ - 15,000$)',
      lead_btn: 'Получить Carfax и расчёт Qəpiyə-Qəpik в WhatsApp →',
      footer_left: '© 2014–2026 <strong>Dream Auto Vision LLC (@qepiyeqepik)</strong> • 12 Лет с Вами!',
      footer_right: 'г. Баку, ул. Самеда Вургуна 110, Vurğun Residence, 2-й этаж • (+994) 50 505 00 59 / (+994) 50 227 80 41'
    },

    en: {
      theme_light: 'Light Mode',
      theme_dark: 'Dark Mode',
      cab_btn: 'Client Portal',
      ticker_badge: '@QEPIYEQEPIK // LIVE AUCTION FEED',
      nav_lots: 'Real Lots (9)',
      nav_calc: 'Calculator',
      nav_process: 'Import Process',
      nav_office: 'Vurğun Residence',
      hero_badge: 'SERVING YOU SINCE 2014 • 397,000+ FOLLOWERS',
      hero_title: 'Vehicle Purchasing & Delivery <span class="accent">Up to 50% Cheaper.</span>',
      hero_lead: '<strong>Dream Auto Vision LLC (@qepiyeqepik)</strong> — 12 years of importing vehicles from USA, Korea, and China auctions to Baku with <strong>penny-by-penny transparent invoices</strong>. Open 7 days a week (including Saturdays & Sundays) at Vurğun Residence!',
      bio_1: 'Dream Auto Vision LLC',
      bio_2: '397K+ Official Followers',
      bio_3: 'USA • Korea • China Import',
      bio_4: 'Open Saturdays & Sundays',
      bio_5: '(+994) 50 505 00 59',
      bio_6: 'Vurğun Residence, 2nd Floor',
      hero_btn_lots: '9 Real Lots from Last 10 Days',
      hero_btn_calc: 'Qəpiyə-Qəpik Calculator',
      m1_val: 'Since <span>2014</span>',
      m1_lbl: '12 years of official service',
      m2_val: '397<span>K+</span>',
      m2_lbl: '@qepiyeqepik community',
      m3_val: 'Up to <span>50%</span>',
      m3_lbl: 'Below local market price',
      m4_val: '7<span> / 7</span>',
      m4_lbl: 'Open Saturday & Sunday',
      stage_top_left: 'REAL INSTAGRAM LOT //',
      stage_verified: 'CARFAX VERIFIED ✓',
      t_lbl_engine: 'Engine:',
      t_lbl_miles: 'Original Mileage:',
      t_lbl_auc: 'Auction Date:',
      t_lbl_adv: 'Advantage:',
      t_val_adv: 'UP TO 50% CHEAPER',
      t_lbl_line: 'Direct Line:',
      t_price_lbl: 'ESTIMATED AUCTION PRICE:',
      t_btn_ig: 'View IG Post',
      t_btn_order: 'Order Now',
      lots_pill: '100% REAL INSTAGRAM FEED // OFFICIAL @QEPIYEQEPIK LISTINGS',
      lots_title: 'Real Auction Lots Posted in Recent Days (9 Vehicles)',
      f_all: 'All Lots (9 Real Cars)',
      f_budget: 'Budget & Sedans ($3,900 – $6,900)',
      f_biz: 'Business Class ($14,000 – $35,000)',
      f_lux: 'VIP & Luxury ($80,000+)',
      card_discount: 'UP TO 50% OFF',
      card_vip: 'VIP LOT',
      card_low_miles: '7,421 MILES!',
      card_est_price: 'Estimated auction price:',
      card_btn_calc: 'Calculate',
      card_btn_order: 'Order Lot',
      card_btn_save: 'Save Lot',
      card_btn_saved: 'Saved ✓',
      fuel_petrol: 'Petrol',
      fuel_hybrid: 'Hybrid',
      unit_miles: 'miles',
      month_nov: 'November',
      pin_pill: 'PINNED HIGHLIGHTS // OFFICIAL PINNED POSTS',
      pin_title: 'USA Vehicle Import Process & Official Highlights',
      pin_desc: 'Official pinned highlights from @qepiyeqepik: 6-stage USA → Azerbaijan logistics roadmap, VIP client handovers, and 7-day weekend schedule.',
      pin1_tag: '01 // USA → AZERBAIJAN (6 STAGES)',
      pin1_title: 'Vehicle Import Process from USA',
      pin1_desc: '1. Auction win → 2. US inland towing → 3. Port terminal → 4. Ocean container → 5. Poti port → 6. Baku Customs handover.',
      pin1_btn: 'Watch Official Reel ↗',
      pin2_tag: '02 // EXCLUSIVE VIP HANDOVER',
      pin2_title: 'Lamborghini Temerario — Congratulations!',
      pin2_desc: 'From budget sedans (Kia Forte, Elantra, Sonata) to world-class supercars with 100% marine cargo insurance.',
      pin2_btn: 'Watch Official Reel ↗',
      pin3_tag: '03 // OPEN 7 DAYS A WEEK',
      pin3_title: 'Open on Saturdays & Sundays!',
      pin3_desc: 'Busy on weekdays? Visit our Vurğun Residence office on Saturday or Sunday to bid live on US auctions.',
      pin3_btn: 'View Official Post ↗',
      /* USER CABINET */
      cab_pill: 'CLIENT PORTAL // OFFICIAL USER CABINET (GOOGLE • APPLE • SMS)',
      cab_title: 'Client Portal, Live Auction Bids & Container Tracking',
      cab_desc: 'Sign in with Google, Apple ID, or SMS OTP (+994): manage saved auction lots, inspect penny-by-penny invoices, and track your container to Baku.',
      auth_box_tag: 'SECURE AUTHENTICATION // 3 OFFICIAL METHODS',
      auth_box_title: 'Sign In to Client Portal',
      auth_box_sub: 'Activate your personal dashboard in seconds via Google, Apple ID, or mobile SMS code:',
      auth_google: 'Continue with Google Account',
      auth_apple: 'Continue with Apple ID',
      auth_sms: 'Sign In with SMS Code (+994)',
      sms_lbl: 'Mobile Number (Azercell / Bakcell / Nar):',
      sms_send: 'Send OTP',
      otp_placeholder: '4-digit SMS code (e.g. 4455)',
      otp_verify: 'Verify →',
      auth_security_note: '🔒 Official contracts and Carfax reports are protected by 256-bit encryption.',
      portal_verified: '● VERIFIED CLIENT ACCOUNT',
      portal_kpi_id: 'Client ID',
      portal_kpi_dep: 'Auction Deposit',
      portal_kpi_lots: 'Saved Lots',
      portal_tab_1: 'Active Bids & Saved Lots',
      portal_tab_2: 'Container & VIN Tracker (6 Stages)',
      portal_tab_3: 'Qəpiyə-Qəpik Invoices',
      bid_live: 'LIVE BID ACTIVE',
      bid_watch: 'WATCHLISTED',
      btn_open_calc: 'Estimate',
      track_header: 'ACTIVE CONTAINER: MSCU8492104 • VIN: 5NPEH4J24NH148920 (2022 HYUNDAI SONATA HYBRID)',
      track_eta: 'Estimated Baku Handover: 18 November',
      st_1: 'Won at Auction',
      st_2: 'US Inland Tow',
      st_3: 'Savannah Port',
      st_4: 'Ocean Vessel',
      st_5: 'Poti Terminal',
      st_6: 'Baku Customs',
      doc_carfax: 'Official Carfax Report (.PDF)',
      doc_invoice: 'Qəpiyə-Qəpik Contract Invoice',
      inv_saved_title: 'Saved Qəpiyə-Qəpik Cost Estimates',
      inv_saved_sub: 'Every calculation you run in the calculator is automatically synced to your Client Portal.',
      /* CALCULATOR */
      calc_pill: 'FINTECH PRECISION ENGINE // PENNY-BY-PENNY ESTIMATE',
      calc_title: 'Qəpiyə-Qəpik Cost & Customs Calculator',
      calc_desc: 'Click "Calculate" on any of the 9 real lots above or adjust the auction winning bid slider below.',
      calc_sel_prefix: '● SELECTED LOT:',
      calc_sel_suffix: 'average auction estimate',
      c_lbl_1: '1. Import Origin Country',
      c_country_usa: 'USA (Copart)',
      c_country_kor: 'Korea (Encar)',
      c_country_chn: 'China (Factory)',
      c_lbl_2: '2. Powertrain / Fuel Type',
      c_fuel_petrol: 'Petrol',
      c_fuel_hybrid: 'Hybrid',
      c_fuel_ev: 'Electric (EV)',
      c_lbl_3: '3. Auction Winning Bid (USD)',
      c_lbl_4: '4. Engine Displacement (cc)',
      inv_hdr_title: 'TRANSPARENT QƏPİYƏ-QƏPİK BREAKDOWN // 1$ = 1.70 ₼',
      inv_hdr_zero: '0% HIDDEN FEES ✓',
      inv_r1: 'Auction Purchase Price (Invoice):',
      inv_r2: 'Copart / IAAI Auction Fee:',
      inv_r3: 'US Inland Tow + Ocean Container + Baku Delivery:',
      inv_r4: 'Azerbaijan Customs Duty & Clearance (Est.):',
      inv_r5: 'Dream Auto Vision Official Service Fee:',
      inv_tot_lbl: 'Turnkey Total in Baku:',
      inv_mkt_lbl: 'Baku Local Market Price:',
      inv_save_prefix: 'UP TO 50% CHEAPER: +',
      inv_save_suffix: ' ₼ SAVED',
      calc_wa_cta: 'Send This Estimate to WhatsApp (+994 50 505 00 59)',
      /* CONTACTS */
      hq_pill: 'DREAM AUTO VISION LLC // OPEN 7 DAYS A WEEK',
      hq_title: 'Vurğun Residence Office & Official Contacts',
      hq_desc: 'Visit our office any day of the week (including Saturdays and Sundays) to sign an official import contract.',
      hq_addr_tag: 'OFFICIAL ADDRESS // BAKU, AZERBAIJAN',
      hq_addr_title: '110 Samad Vurgun St, Vurğun Residence, 2nd Floor',
      hq_addr_sub: 'Near Baku State Circus • Working hours: 7 days a week (Open Saturdays & Sundays!)',
      hq_phones_lbl: 'Official Hotlines (@qepiyeqepik):',
      call_word: 'Call →',
      lead_pill: 'LIVE AUCTION ORDER // SAVE UP TO 50%',
      lead_title: 'Which Nov 2–5 Auction Lot Would You Like to Bid On?',
      lead_desc: 'Enter your preferred lot (e.g. 2022 Sonata Hybrid, 2027 BMW 530i, 2021 Kia K5, 2024 Elantra, 2022 E350) or budget — we will send the Carfax right away.',
      ph_model: 'Preferred model (e.g. 2022 Hyundai Sonata Limited / Kia K5)',
      ph_budget: 'Estimated budget (e.g. $6,000 - $15,000)',
      lead_btn: 'Get Carfax & Qəpiyə-Qəpik Estimate via WhatsApp →',
      footer_left: '© 2014–2026 <strong>Dream Auto Vision LLC (@qepiyeqepik)</strong> • 12 Years With You!',
      footer_right: '110 Samad Vurgun St, Vurğun Residence, 2nd Floor, Baku • (+994) 50 505 00 59 / (+994) 50 227 80 41'
    }
  };

  function injectHeaderCabinetBtn() {
    const actions = document.querySelector('.header-actions');
    if (!actions || document.getElementById('header-cab-btn')) return;
    const langSw = actions.querySelector('.lang-switcher');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'header-cab-btn';
    btn.className = 'cabinet-trigger-btn';
    btn.onclick = function () {
      const sec = document.getElementById('user-cabinet');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    };
    btn.innerHTML =
      '<span class="cab-status-dot"></span>' +
      '<svg class="icon" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
      '<span class="cab-lbl-text" id="header-cab-text">Şəxsi Kabinet</span>';
    actions.insertBefore(btn, langSw);

    // Make header phone button sleek so it never clips on 1280px screens
    const hdrPhoneSpan = actions.querySelector('a.btn-primary span');
    if (hdrPhoneSpan) hdrPhoneSpan.textContent = '050 505 00 59';

    // Inject Mobile Quick-Nav Sub-bar inside .site-header
    const headerEl = document.querySelector('.site-header');
    if (headerEl && !document.getElementById('mobile-quick-nav')) {
      const mq = document.createElement('nav');
      mq.className = 'mobile-quick-nav';
      mq.id = 'mobile-quick-nav';
      mq.innerHTML = `
        <a href="#real-lots" class="mq-pill">
          <svg class="icon" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
          <span id="mq-lots">Real Lotlar (9)</span>
        </a>
        <a href="#user-cabinet" class="mq-pill mq-accent">
          <svg class="icon" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span id="mq-cab">Şəxsi Kabinet</span>
        </a>
        <a href="#calculator" class="mq-pill">
          <svg class="icon" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/></svg>
          <span id="mq-calc">Hesablayıcı</span>
        </a>
        <a href="#import-process" class="mq-pill">
          <svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>
          <span id="mq-proc">İdxal Prosesi</span>
        </a>
        <a href="#contacts" class="mq-pill">
          <svg class="icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span id="mq-off">Vurğun Residence</span>
        </a>
      `;
      headerEl.appendChild(mq);
    }

    // Inject Sticky Bottom Mobile Action Bar for phones (<=768px)
    if (!document.getElementById('mobile-bottom-bar')) {
      const mbb = document.createElement('div');
      mbb.className = 'mobile-bottom-bar';
      mbb.id = 'mobile-bottom-bar';
      mbb.innerHTML = `
        <a href="tel:+994505050059" class="mbb-btn">
          <svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span id="mbb-call-txt">050 505 00 59</span>
        </a>
        <a href="#user-cabinet" class="mbb-btn">
          <svg class="icon" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span id="mbb-cab-txt">Kabinet</span>
        </a>
        <a href="https://wa.me/994505050059?text=Salam%20Dream%20Auto%20Vision%20(@qepiyeqepik)!" target="_blank" rel="noopener" class="mbb-btn mbb-primary">
          <svg class="icon" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <span id="mbb-wa-txt">WhatsApp Sifariş</span>
        </a>
      `;
      document.body.appendChild(mbb);
    }
  }

  function injectCardSaveButtons() {
    document.querySelectorAll('.lot-card').forEach((card) => {
      const media = card.querySelector('.lot-media');
      const titleEl = card.querySelector('.lot-title');
      const priceEl = card.querySelector('.lot-price-strip strong');
      const imgEl = card.querySelector('.lot-media img');
      if (!media || media.querySelector('.lot-save-btn')) return;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lot-save-btn';
      const title = titleEl ? titleEl.textContent.trim() : 'Lot';
      const isSaved = userSession.savedLots.some((l) => l.title === title);
      if (isSaved) btn.classList.add('saved');

      btn.innerHTML =
        '<svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>' +
        '<span class="save-btn-txt">' + (isSaved ? DICT[currentLang].card_btn_saved : DICT[currentLang].card_btn_save) + '</span>';

      btn.onclick = function () {
        const exists = userSession.savedLots.findIndex((l) => l.title === title);
        if (exists >= 0) {
          userSession.savedLots.splice(exists, 1);
          btn.classList.remove('saved');
        } else {
          userSession.savedLots.unshift({
            title: title,
            img: imgEl ? imgEl.getAttribute('src') : 'assets/posts/post_01_DfMTuJ7kf-S.jpg',
            bid: priceEl ? priceEl.textContent.trim() : '$6,400',
            statusKey: 'bid_watch',
            lotNum: 'Copart #' + Math.floor(40000000 + Math.random() * 50000000)
          });
          btn.classList.add('saved');
        }
        renderSavedLotsList();
        applyTranslations(currentLang);
      };
      media.appendChild(btn);
    });
  }

  function injectCabinetSection() {
    const calcSec = document.getElementById('calculator');
    if (!calcSec || document.getElementById('user-cabinet')) return;

    const sec = document.createElement('section');
    sec.className = 'section-block';
    sec.id = 'user-cabinet';
    sec.innerHTML = `
      <div class="container">
        <div class="section-header">
          <div>
            <div class="spec-pill">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span id="cab-pill-txt">CLIENT PORTAL // RƏSMİ MÜŞTƏRİ KABİNETİ (GOOGLE • APPLE • SMS)</span>
            </div>
            <h2 class="section-title" id="cab-title-txt">Şəxsi Kabinet, Canlı Stavkalar və Konteyner İzləmə</h2>
          </div>
          <p class="section-desc" id="cab-desc-txt">
            Google, Apple ID və ya SMS nömrənizlə daxil olun: seçdiyiniz hərrac lotlarını, rəsmi müqavilə invoyslarını və konteynerinizin Bakıya çatdırılma mərhələsini izləyin.
          </p>
        </div>

        <div class="cabinet-grid">
          <!-- LEFT: 3-METHOD AUTH CARD (GOOGLE, APPLE ID, SMS OTP) -->
          <div class="auth-card">
            <div>
              <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--orange-core);font-weight:700;margin-bottom:6px;" id="auth-box-tag">
                TƏHLÜKƏSİZ GİRİŞ // 3 RƏSMİ ÜSUL
              </div>
              <h3 style="font-family:'Space Grotesk',sans-serif;font-size:21px;margin-bottom:6px;" id="auth-box-title">
                Müştəri Kabinetinə Daxil Olun
              </h3>
              <p style="font-size:13px;color:var(--text-sub);margin-bottom:16px;" id="auth-box-sub">
                Saniyələr içində Google, Apple ID və ya mobil nömrənizlə (SMS kod) hesabınızı aktivləşdirin:
              </p>

              <div class="auth-provider-list">
                <!-- GOOGLE LOGIN -->
                <button type="button" class="auth-provider-btn active-method" id="btn-auth-google" onclick="window.qqAuthLogin('Google')">
                  <span class="auth-provider-left">
                    <svg class="icon" viewBox="0 0 24 24" style="stroke:none;">
                      <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.8C6.2 7.2 8.9 5 12 5z"/>
                      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.6l3.7 2.9c2.2-2 3.7-5 3.7-8.7z"/>
                      <path fill="#FBBC05" d="M5.3 14.8c-.2-.8-.4-1.6-.4-2.5s.2-1.7.4-2.5L1.6 7C.6 9 0 11.2 0 13.5s.6 4.5 1.6 6.5l3.7-2.9z"/>
                      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5l-3.7 2.9C3.5 21.4 7.4 24 12 24z"/>
                    </svg>
                    <span id="auth-google-txt">Google Hesabı ilə Daxil Ol</span>
                  </span>
                  <span class="auth-provider-tag">OAuth 2.0</span>
                </button>

                <!-- APPLE ID LOGIN -->
                <button type="button" class="auth-provider-btn" id="btn-auth-apple" onclick="window.qqAuthLogin('Apple')">
                  <span class="auth-provider-left">
                    <svg class="icon" viewBox="0 0 24 24" style="fill:currentColor;stroke:none;">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span id="auth-apple-txt">Apple ID ilə Daxil Ol</span>
                  </span>
                  <span class="auth-provider-tag">Apple Passkey</span>
                </button>

                <!-- SMS OTP LOGIN -->
                <button type="button" class="auth-provider-btn" id="btn-auth-sms" onclick="window.qqFocusSms()">
                  <span class="auth-provider-left">
                    <svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span id="auth-sms-txt">SMS Nömrə ilə Daxil Ol (+994)</span>
                  </span>
                  <span class="auth-provider-tag">SMS OTP</span>
                </button>
              </div>

              <!-- SMS OTP INPUT BOX -->
              <div class="sms-otp-box" style="margin-top:12px;">
                <label style="font-size:11.5px;font-weight:700;color:var(--text-sub);" id="sms-lbl-txt">
                  Mobil nömrəniz (Azercell / Bakcell / Nar):
                </label>
                <div class="sms-input-row">
                  <input type="tel" id="qq-sms-phone" class="sms-input" value="+994 50 505 00 59" />
                  <button type="button" class="sms-send-btn" id="sms-send-btn" onclick="window.qqSendSmsOtp()">SMS Kod Göndər</button>
                </div>
                <div class="otp-code-row" id="qq-otp-row">
                  <input type="text" id="qq-otp-code" class="sms-input" value="4455" placeholder="4 rəqəmli SMS kod" />
                  <button type="button" class="sms-send-btn" id="otp-verify-btn" onclick="window.qqVerifySmsOtp()">Təsdiqlə →</button>
                </div>
              </div>
            </div>

            <div style="font-size:11.5px;color:var(--text-muted);border-top:1px solid var(--border-grid);padding-top:12px;" id="auth-sec-note">
              🔒 Rəsmi müqavilə və Carfax sənədləriniz 256-bit şifrələmə ilə qorunur.
            </div>
          </div>

          <!-- RIGHT: INTERACTIVE CLIENT DASHBOARD -->
          <div class="portal-card">
            <div>
              <div class="portal-header-bar">
                <div class="portal-user-badge">
                  <div class="portal-avatar" id="portal-avatar-initials">OM</div>
                  <div>
                    <div style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--emerald-ok);font-weight:700;" id="portal-verified-txt">
                      ● TƏSDİQLƏNMİŞ MÜŞTƏRİ HESABI
                    </div>
                    <div style="font-family:'Space Grotesk',sans-serif;font-size:19px;font-weight:700;" id="portal-user-name">
                      Orxan Məmmədov
                    </div>
                    <div style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--text-sub);" id="portal-user-ident">
                      Google OAuth • orxan.m@gmail.com
                    </div>
                  </div>
                </div>

                <div class="portal-kpis">
                  <div class="portal-kpi-pill">
                    <span id="pkpi-id-lbl">Müştəri Kodu</span>
                    <strong id="pkpi-id-val">#DAV-2026-8841</strong>
                  </div>
                  <div class="portal-kpi-pill">
                    <span id="pkpi-dep-lbl">Hərrac Depoziti</span>
                    <strong style="color:var(--emerald-ok);" id="pkpi-dep-val">$1,500.00</strong>
                  </div>
                  <div class="portal-kpi-pill">
                    <span id="pkpi-lots-lbl">Seçilmiş Lotlar</span>
                    <strong style="color:var(--orange-core);" id="pkpi-lots-count">2 Lot</strong>
                  </div>
                </div>
              </div>

              <!-- 3 PORTAL TABS -->
              <div class="portal-tabs" style="margin-top:16px;margin-bottom:16px;">
                <button type="button" class="portal-tab-btn active" onclick="window.qqSwitchPortalTab(0, this)" id="ptab-1">
                  1. Aktiv Stavkalar & Lotlar
                </button>
                <button type="button" class="portal-tab-btn" onclick="window.qqSwitchPortalTab(1, this)" id="ptab-2">
                  2. Konteyner & VIN İzləmə
                </button>
                <button type="button" class="portal-tab-btn" onclick="window.qqSwitchPortalTab(2, this)" id="ptab-3">
                  3. Qəpiyə-Qəpik İnvoyslar
                </button>
              </div>

              <!-- TAB PANE 0: SAVED LOTS & ACTIVE BIDS -->
              <div class="portal-tab-pane active" id="portal-pane-0">
                <div id="portal-saved-lots-list" style="display:flex;flex-direction:column;gap:10px;"></div>
              </div>

              <!-- TAB PANE 1: 6-STAGE CONTAINER TRACKER -->
              <div class="portal-tab-pane" id="portal-pane-1">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;background:var(--bg-card-alt);border:1px solid var(--border-grid);padding:12px 14px;border-radius:12px;">
                  <span style="font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:700;color:var(--text-main);" id="track-hdr-txt">
                    AKTİV KONTEYNER: MSCU8492104 • VIN: 5NPEH4J24NH148920 (2022 HYUNDAI SONATA HYBRID)
                  </span>
                  <span style="font-family:'JetBrains Mono',monospace;font-size:11.5px;font-weight:700;color:var(--orange-core);" id="track-eta-txt">
                    Təxmini Bakı Təhvili: 18 Noyabr
                  </span>
                </div>

                <div class="tracking-stepper">
                  <div class="track-step done">
                    <span class="track-step-num">01 ✓</span>
                    <span class="track-step-title" id="st-txt-1">Hərracda Uduldu</span>
                  </div>
                  <div class="track-step done">
                    <span class="track-step-num">02 ✓</span>
                    <span class="track-step-title" id="st-txt-2">ABŞ Evakuator</span>
                  </div>
                  <div class="track-step done">
                    <span class="track-step-num">03 ✓</span>
                    <span class="track-step-title" id="st-txt-3">Savannah Limanı</span>
                  </div>
                  <div class="track-step current">
                    <span class="track-step-num">04 ● LIVE</span>
                    <span class="track-step-title" id="st-txt-4">Okean Gəmisi</span>
                  </div>
                  <div class="track-step">
                    <span class="track-step-num">05</span>
                    <span class="track-step-title" id="st-txt-5">Poti Terminalı</span>
                  </div>
                  <div class="track-step">
                    <span class="track-step-num">06</span>
                    <span class="track-step-title" id="st-txt-6">Bakı Gömrük</span>
                  </div>
                </div>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                  <a href="https://wa.me/994505050059?text=Salam!%20MSCU8492104%20konteyneri%20%C3%BCzr%C9%99%20Carfax%20v%C9%99%20invoys%20s%C9%99n%C9%99dl%C9%99rini%20g%C3%B6nd%C9%99rin." target="_blank" rel="noopener" class="btn-outline" id="doc-carfax-btn">
                    📄 Rəsmi Carfax Hesabatı (.PDF)
                  </a>
                  <a href="#calculator" class="btn-primary" id="doc-inv-btn">
                    🧾 Qəpiyə-Qəpik Müqavilə İnvoysu
                  </a>
                </div>
              </div>

              <!-- TAB PANE 2: SAVED INVOICES -->
              <div class="portal-tab-pane" id="portal-pane-2">
                <div style="background:var(--bg-card-alt);border:1px solid var(--border-grid);border-radius:14px;padding:16px;">
                  <div style="font-family:'Space Grotesk',sans-serif;font-size:16px;font-weight:700;margin-bottom:4px;" id="inv-saved-title">
                    Son Yadda Saxlanılan Qəpiyə-Qəpik Hesablamalar
                  </div>
                  <p style="font-size:12.5px;color:var(--text-sub);margin-bottom:12px;" id="inv-saved-sub">
                    Hesablayıcıda etdiyiniz bütün hesablamalar avtomatik olaraq Şəxsi Kabinetinizdə saxlanılır.
                  </p>
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:var(--bg-card);border:1px solid var(--border-orange);border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:12px;">
                    <span>2022 HYUNDAI SONATA HYBRID ($6,400 + Gömrük + Yol)</span>
                    <strong style="color:var(--orange-core);">18,973.70 ₼ (Açar Təhvil)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    calcSec.parentNode.insertBefore(sec, calcSec);
    renderSavedLotsList();
  }

  function renderSavedLotsList() {
    const wrap = document.getElementById('portal-saved-lots-list');
    const countEl = document.getElementById('pkpi-lots-count');
    if (countEl) countEl.textContent = userSession.savedLots.length + ' Lot';
    if (!wrap) return;
    const t = DICT[currentLang] || DICT.az;

    wrap.innerHTML = userSession.savedLots
      .map(
        (item) => `
        <div class="bid-row-card">
          <img src="${item.img}" alt="${item.title}" />
          <div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--emerald-ok);font-weight:700;">
              ● ${t[item.statusKey] || t.bid_live} • ${item.lotNum}
            </div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:15.5px;font-weight:700;color:var(--text-main);">
              ${item.title}
            </div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--orange-core);font-weight:700;">
              ${item.bid}
            </div>
          </div>
          <a href="#calculator" class="btn-outline" style="height:36px;padding:0 12px;font-size:12px;">
            ${t.btn_open_calc} →
          </a>
        </div>
      `
      )
      .join('');
  }

  // Global Auth Handlers
  window.qqAuthLogin = function (provider) {
    document.querySelectorAll('.auth-provider-btn').forEach((b) => b.classList.remove('active-method'));
    if (provider === 'Google') {
      document.getElementById('btn-auth-google')?.classList.add('active-method');
      userSession.method = 'Google OAuth';
      userSession.name = 'Orxan Məmmədov';
      userSession.ident = 'Google OAuth • orxan.m@gmail.com';
      document.getElementById('portal-avatar-initials').textContent = 'OM';
    } else if (provider === 'Apple') {
      document.getElementById('btn-auth-apple')?.classList.add('active-method');
      userSession.method = 'Apple ID';
      userSession.name = 'Orxan M. (Apple ID)';
      userSession.ident = 'Apple Private Relay • f8x92@privaterelay.appleid.com';
      document.getElementById('portal-avatar-initials').textContent = '🍎';
    }
    document.getElementById('portal-user-name').textContent = userSession.name;
    document.getElementById('portal-user-ident').textContent = userSession.ident;
  };

  window.qqFocusSms = function () {
    document.querySelectorAll('.auth-provider-btn').forEach((b) => b.classList.remove('active-method'));
    document.getElementById('btn-auth-sms')?.classList.add('active-method');
    const phoneInput = document.getElementById('qq-sms-phone');
    if (phoneInput) phoneInput.focus();
  };

  window.qqSendSmsOtp = function () {
    const otpRow = document.getElementById('qq-otp-row');
    if (otpRow) otpRow.classList.add('visible');
  };

  window.qqVerifySmsOtp = function () {
    const phone = document.getElementById('qq-sms-phone')?.value || '+994 50 505 00 59';
    userSession.method = 'SMS OTP';
    userSession.name = 'VIP Müştəri (' + phone + ')';
    userSession.ident = 'SMS Təsdiqlənib ✓ • ' + phone;
    document.getElementById('portal-avatar-initials').textContent = '📱';
    document.getElementById('portal-user-name').textContent = userSession.name;
    document.getElementById('portal-user-ident').textContent = userSession.ident;
  };

  window.qqSwitchPortalTab = function (idx, btn) {
    document.querySelectorAll('.portal-tab-btn').forEach((b) => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    [0, 1, 2].forEach((i) => {
      const pane = document.getElementById('portal-pane-' + i);
      if (pane) pane.classList.toggle('active', i === idx);
    });
  };

  // Override toggleTheme so button text always matches current language
  window.toggleTheme = function () {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    updateThemeButtonLabel();
  };

  function updateThemeButtonLabel() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const svg = document.getElementById('theme-svg');
    const txt = document.getElementById('theme-text');
    const t = DICT[currentLang] || DICT.az;
    if (svg) {
      svg.innerHTML = isDark
        ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'
        : '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>';
    }
    if (txt) {
      txt.textContent = isDark ? t.theme_light : t.theme_dark;
    }
  }

  function applyTranslations(lang) {
    currentLang = DICT[lang] ? lang : 'az';
    const t = DICT[currentLang];

    document.querySelectorAll('.lang-btn').forEach((b) => b.classList.remove('active'));
    document.getElementById('lang-' + currentLang)?.classList.add('active');
    document.documentElement.setAttribute('lang', currentLang);

    updateThemeButtonLabel();

    const setTxt = (sel, val, isHtml) => {
      const el = typeof sel === 'string' ? document.querySelector(sel) : sel;
      if (!el || val === undefined) return;
      if (isHtml) el.innerHTML = val;
      else el.textContent = val;
    };

    // Header & Ticker
    setTxt('.ticker-badge span:last-child', t.ticker_badge);
    setTxt('#header-cab-text', t.cab_btn);
    setTxt('[data-i18n="nav_lots"]', t.nav_lots);
    setTxt('[data-i18n="nav_calc"]', t.nav_calc);
    setTxt('[data-i18n="nav_process"]', t.nav_process);
    setTxt('[data-i18n="nav_office"]', t.nav_office);

    // Mobile Quick-Nav & Sticky Bottom Bar
    setTxt('#mq-lots', t.nav_lots);
    setTxt('#mq-cab', t.cab_btn);
    setTxt('#mq-calc', t.nav_calc);
    setTxt('#mq-proc', t.nav_process);
    setTxt('#mq-off', t.nav_office);
    setTxt('#mbb-cab-txt', t.cab_btn);
    setTxt('#mbb-wa-txt', 'WhatsApp • ' + t.card_btn_order);

    // Hero
    setTxt('[data-i18n="hero_badge"]', t.hero_badge);
    setTxt('[data-i18n="hero_title"]', t.hero_title, true);
    setTxt('[data-i18n="hero_lead"]', t.hero_lead, true);
    setTxt('[data-i18n="hero_btn_lots"]', t.hero_btn_lots);
    setTxt('[data-i18n="hero_btn_calc"]', t.hero_btn_calc);

    const bioSpans = document.querySelectorAll('.ig-bio-card .ig-bio-item > span');
    [t.bio_1, t.bio_2, t.bio_3, t.bio_4, t.bio_5, t.bio_6].forEach((val, idx) => {
      if (bioSpans[idx]) bioSpans[idx].textContent = val;
    });

    const metricVals = document.querySelectorAll('.trust-metrics .metric-val');
    const metricLbls = document.querySelectorAll('.trust-metrics .metric-lbl');
    [t.m1_val, t.m2_val, t.m3_val, t.m4_val].forEach((val, idx) => {
      if (metricVals[idx]) metricVals[idx].innerHTML = val;
    });
    [t.m1_lbl, t.m2_lbl, t.m3_lbl, t.m4_lbl].forEach((val, idx) => {
      if (metricLbls[idx]) metricLbls[idx].textContent = val;
    });

    // Hero Stage
    const stageTopSpans = document.querySelectorAll('.stage-topbar > span');
    if (stageTopSpans[0]) {
      const code = document.getElementById('hero-ig-code')?.textContent || '@qepiyeqepik';
      stageTopSpans[0].innerHTML = `${t.stage_top_left} <strong id="hero-ig-code" style="color:var(--orange-core);">${code}</strong>`;
    }
    if (stageTopSpans[1]) stageTopSpans[1].textContent = t.stage_verified;

    const specRows = document.querySelectorAll('.telemetry-spec-list .t-spec-row');
    const rowLabels = [t.t_lbl_engine, t.t_lbl_miles, t.t_lbl_auc, t.t_lbl_adv, t.t_lbl_line];
    specRows.forEach((row, idx) => {
      const firstSpan = row.querySelector('span');
      const svg = firstSpan?.querySelector('svg');
      if (firstSpan && svg && rowLabels[idx]) {
        firstSpan.innerHTML = svg.outerHTML + ' ' + rowLabels[idx];
      }
    });
    const advStrong = specRows[3]?.querySelector('strong');
    if (advStrong) advStrong.textContent = t.t_val_adv;

    setTxt('.t-price-lbl', t.t_price_lbl);
    setTxt('#hero-real-ig span', t.t_btn_ig);
    setTxt('#hero-real-wa span', t.t_btn_order);

    // 9 Real Lots Section
    setTxt('#real-lots .spec-pill span', t.lots_pill);
    setTxt('[data-i18n="lots_title"]', t.lots_title);
    const filterBtns = document.querySelectorAll('#real-lots .filter-btn');
    [t.f_all, t.f_budget, t.f_biz, t.f_lux].forEach((val, idx) => {
      if (filterBtns[idx]) filterBtns[idx].textContent = val;
    });

    document.querySelectorAll('.lot-card').forEach((card) => {
      const tag = card.querySelector('.lot-auction-tag');
      if (tag) {
        const raw = tag.textContent;
        if (raw.includes('VIP')) tag.textContent = t.card_vip;
        else if (raw.includes('7,421') || raw.includes('7 421')) tag.textContent = t.card_low_miles;
        else tag.textContent = t.card_discount;
      }

      const dateBadge = card.querySelector('.lot-date-badge');
      if (dateBadge) {
        const svg = dateBadge.querySelector('svg');
        const numMatch = dateBadge.textContent.match(/\d+/);
        const dayNum = numMatch ? numMatch[0] : '02';
        if (svg) dateBadge.innerHTML = svg.outerHTML + ' ' + dayNum + ' ' + t.month_nov;
      }

      const chips = card.querySelectorAll('.spec-chip span');
      if (chips[0]) {
        const engTxt = chips[0].textContent;
        const literMatch = engTxt.match(/[\d.]+L/);
        const liter = literMatch ? literMatch[0] : '2.0L';
        const isHyb = /hybrid|hibrid|гибрид/i.test(engTxt);
        chips[0].textContent = liter + ' ' + (isHyb ? t.fuel_hybrid : t.fuel_petrol);
      }
      if (chips[1]) {
        const numMatch = chips[1].textContent.match(/[\d,]+/);
        if (numMatch) chips[1].textContent = numMatch[0] + ' ' + t.unit_miles;
      }
      if (chips[2]) {
        const numMatch = chips[2].textContent.match(/\d+/);
        if (numMatch) chips[2].textContent = numMatch[0] + ' ' + t.month_nov;
      }

      const priceStripSpan = card.querySelector('.lot-price-strip span');
      if (priceStripSpan) priceStripSpan.textContent = t.card_est_price;

      const calcBtnSpan = card.querySelector('.lot-actions .btn-outline span');
      if (calcBtnSpan) calcBtnSpan.textContent = t.card_btn_calc;

      const orderBtnSpan = card.querySelector('.lot-actions .btn-primary span');
      if (orderBtnSpan) orderBtnSpan.textContent = t.card_btn_order;

      const saveBtn = card.querySelector('.lot-save-btn');
      const saveTxt = saveBtn?.querySelector('.save-btn-txt');
      if (saveTxt) {
        saveTxt.textContent = saveBtn.classList.contains('saved') ? t.card_btn_saved : t.card_btn_save;
      }
    });

    // Pinned Highlights
    setTxt('#import-process .spec-pill span', t.pin_pill);
    setTxt('#import-process .section-title', t.pin_title);
    setTxt('#import-process .section-desc', t.pin_desc);

    const pinCards = document.querySelectorAll('#import-process .pinned-card');
    const pinData = [
      [t.pin1_tag, t.pin1_title, t.pin1_desc, t.pin1_btn],
      [t.pin2_tag, t.pin2_title, t.pin2_desc, t.pin2_btn],
      [t.pin3_tag, t.pin3_title, t.pin3_desc, t.pin3_btn]
    ];
    pinCards.forEach((card, i) => {
      const infoDivs = card.querySelectorAll('.pinned-info > div > *');
      if (infoDivs[0]) infoDivs[0].textContent = pinData[i][0];
      if (infoDivs[1]) infoDivs[1].textContent = pinData[i][1];
      if (infoDivs[2]) infoDivs[2].textContent = pinData[i][2];
      const btn = card.querySelector('.pinned-info > a');
      if (btn) btn.textContent = pinData[i][3];
    });

    // User Cabinet
    setTxt('#cab-pill-txt', t.cab_pill);
    setTxt('#cab-title-txt', t.cab_title);
    setTxt('#cab-desc-txt', t.cab_desc);
    setTxt('#auth-box-tag', t.auth_box_tag);
    setTxt('#auth-box-title', t.auth_box_title);
    setTxt('#auth-box-sub', t.auth_box_sub);
    setTxt('#auth-google-txt', t.auth_google);
    setTxt('#auth-apple-txt', t.auth_apple);
    setTxt('#auth-sms-txt', t.auth_sms);
    setTxt('#sms-lbl-txt', t.sms_lbl);
    setTxt('#sms-send-btn', t.sms_send);
    setTxt('#otp-verify-btn', t.otp_verify);
    setTxt('#auth-sec-note', t.auth_security_note);
    const otpInp = document.getElementById('qq-otp-code');
    if (otpInp) otpInp.placeholder = t.otp_placeholder;

    setTxt('#portal-verified-txt', t.portal_verified);
    setTxt('#pkpi-id-lbl', t.portal_kpi_id);
    setTxt('#pkpi-dep-lbl', t.portal_kpi_dep);
    setTxt('#pkpi-lots-lbl', t.portal_kpi_lots);
    setTxt('#ptab-1', '1. ' + t.portal_tab_1);
    setTxt('#ptab-2', '2. ' + t.portal_tab_2);
    setTxt('#ptab-3', '3. ' + t.portal_tab_3);
    setTxt('#track-hdr-txt', t.track_header);
    setTxt('#track-eta-txt', t.track_eta);
    setTxt('#st-txt-1', t.st_1);
    setTxt('#st-txt-2', t.st_2);
    setTxt('#st-txt-3', t.st_3);
    setTxt('#st-txt-4', t.st_4);
    setTxt('#st-txt-5', t.st_5);
    setTxt('#st-txt-6', t.st_6);
    setTxt('#doc-carfax-btn', '📄 ' + t.doc_carfax);
    setTxt('#doc-inv-btn', '🧾 ' + t.doc_invoice);
    setTxt('#inv-saved-title', t.inv_saved_title);
    setTxt('#inv-saved-sub', t.inv_saved_sub);
    renderSavedLotsList();

    // Calculator
    setTxt('#calculator .spec-pill span', t.calc_pill);
    setTxt('#calculator .section-title', t.calc_title);
    setTxt('#calculator .section-desc', t.calc_desc);

    const ctrlGroups = document.querySelectorAll('#calculator .control-group');
    if (ctrlGroups[0]) setTxt(ctrlGroups[0].querySelector('label span:first-child'), t.c_lbl_1);
    if (ctrlGroups[1]) setTxt(ctrlGroups[1].querySelector('label span:first-child'), t.c_lbl_2);
    if (ctrlGroups[2]) setTxt(ctrlGroups[2].querySelector('label span:first-child'), t.c_lbl_3);
    if (ctrlGroups[3]) setTxt(ctrlGroups[3].querySelector('label span:first-child'), t.c_lbl_4);

    const countryBtns = document.querySelectorAll('#country-pills .select-pill');
    [t.c_country_usa, t.c_country_kor, t.c_country_chn].forEach((val, i) => {
      if (countryBtns[i]) countryBtns[i].textContent = val;
    });
    const fuelBtns = document.querySelectorAll('#fuel-pills .select-pill');
    [t.c_fuel_petrol, t.c_fuel_hybrid, t.c_fuel_ev].forEach((val, i) => {
      if (fuelBtns[i]) fuelBtns[i].textContent = val;
    });

    setTxt('.invoice-title', t.inv_hdr_title);
    setTxt('.invoice-header span:last-child', t.inv_hdr_zero);
    const invRows = document.querySelectorAll('.invoice-rows .invoice-row span');
    [t.inv_r1, t.inv_r2, t.inv_r3, t.inv_r4, t.inv_r5].forEach((val, i) => {
      if (invRows[i]) invRows[i].textContent = val;
    });
    setTxt('.invoice-total-line > div > div:first-child', t.inv_tot_lbl);
    const mktSpan = document.querySelector('.invoice-saving-banner span');
    const mktStrike = document.getElementById('inv-market-azn')?.textContent || '28,080 ₼';
    if (mktSpan) mktSpan.innerHTML = `${t.inv_mkt_lbl} <s id="inv-market-azn">${mktStrike}</s>`;
    setTxt('#calc-wa-btn span', t.calc_wa_cta);

    if (typeof window.recalcQepik === 'function') window.recalcQepik();

    // Contacts & Footer
    setTxt('#contacts .section-header .spec-pill span', t.hq_pill);
    setTxt('#contacts .section-header .section-title', t.hq_title);
    setTxt('#contacts .section-header .section-desc', t.hq_desc);

    const hqCards = document.querySelectorAll('#contacts .hq-card');
    if (hqCards[0]) {
      const topDivs = hqCards[0].querySelectorAll(':scope > div:first-child > *');
      if (topDivs[0]) topDivs[0].textContent = t.hq_addr_tag;
      if (topDivs[1]) topDivs[1].textContent = t.hq_addr_title;
      if (topDivs[2]) topDivs[2].textContent = t.hq_addr_sub;
      const phoneLbl = hqCards[0].querySelector(':scope > div:nth-child(2) > div:first-child');
      if (phoneLbl) phoneLbl.textContent = t.hq_phones_lbl;
      hqCards[0].querySelectorAll('.phone-item span:last-child').forEach((s) => {
        s.textContent = t.call_word;
      });
    }
    if (hqCards[1]) {
      setTxt(hqCards[1].querySelector('.spec-pill'), t.lead_pill);
      setTxt(hqCards[1].querySelector('h3'), t.lead_title);
      setTxt(hqCards[1].querySelector('p'), t.lead_desc);
      const mInp = document.getElementById('lead-model');
      const bInp = document.getElementById('lead-budget');
      if (mInp) mInp.placeholder = t.ph_model;
      if (bInp) bInp.placeholder = t.ph_budget;
      setTxt(hqCards[1].querySelector('button span'), t.lead_btn);
    }

    const fDivs = document.querySelectorAll('.footer-inner > div');
    if (fDivs[0]) fDivs[0].innerHTML = t.footer_left;
    if (fDivs[1]) fDivs[1].textContent = t.footer_right;
  }

  // Override global setLang
  window.setLang = function (lang) {
    applyTranslations(lang);
  };

  function initAll() {
    injectHeaderCabinetBtn();
    injectCardSaveButtons();
    injectCabinetSection();
    applyTranslations('az');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
