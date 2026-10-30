/* Работы на главной. Чтобы добавить работу, скопируй любой объект в WORKS и поменяй поля.

   section  – id раздела из WORKS_SECTIONS
   title    – название работы
   meta     – ниша · компания или площадка (короткая строка капсом над названием)
   note     – одна строка: задача или результат
   url      – ссылка на работу
   img      – превью (путь от index.html); нет картинки – будет обложка с названием
   fromCase – { name, href } если работа из кейса: появится метка «из кейса»
   open     – подпись кнопки вместо «Открыть →»
   more     – true: работа уйдёт в список «Ещё N работ» под витриной */

window.WORKS_SECTIONS = [
  { id: "articles", title: "Статьи", role: "Приводят читателей из поиска, объясняют сложную тему и ведут к следующему шагу: заявке, подписке или покупке." },
  { id: "telegram", title: "Telegram", role: "Посты прогревают подписчика и ведут к заявке: польза, подход, кейсы, оффер." },
  { id: "email", title: "Email-цепочки", role: "Холодные и триггерные письма доводят получателя до созвона, оплаты или подключения." },
  { id: "funnels", title: "Лид-магниты и воронки", role: "Бесплатная ценность в обмен на подписку или контакт: вход в воронку и первый прогрев." },
  { id: "strategy", title: "Стратегия и системы", role: "Основа, на которой держится весь контент.",
    steps: [
      ["Аудитория", "Кто клиент, чего хочет и как принимает решения"],
      ["Боли и потребности", "Проблемы, страхи, барьеры и мотивы покупки"],
      ["Решение через контент", "Экспертные материалы, кейсы, разборы и работа с возражениями"],
      ["Оффер", "Предложение, ценность и следующий шаг для клиента"],
      ["Заявка", "Целевое действие и переход к продаже"]
    ] }
];

const CASE = {
  orbita: { name: "Новая Орбита", href: "cases/01-novaya-orbita/page.html" },
  b24u: { name: "B24U", href: "cases/02-b24u-email/page.html" },
  yoolip: { name: "Yoolip", href: "cases/03-yoolip-email/page.html" },
  tgx: { name: "TGX", href: "cases/04-tgx-workshops/page.html" },
  telegraphyx: { name: "TeleGraphyx", href: "cases/05-telegraphyx/page.html" },
  teletraf: { name: "Teletraf", href: "cases/06-teletraf/page.html" }
};

window.WORKS = [
  /* ---------- Статьи ---------- */
  { section: "articles", title: "Что такое зубной имплант", meta: "Медицина · блог клиники",
    note: "Сложная операция простым языком: из чего состоит имплант, плюсы и минусы, показания, переход на запись.",
    url: "https://neworbita.ru/zhurnal/chto-takoe-zubnoj-implant", img: "cases/01-novaya-orbita/assets/shot-05-statya-implant.jpg", fromCase: CASE.orbita },
  { section: "articles", title: "10 способов проверить номер телефона контрагента", meta: "Кибербезопасность · SEO-статья",
    note: "Как проверить партнёра до сделки: способ, инструкция, когда сработает, и сравнение сервисов в таблице.",
    url: "https://docs.google.com/document/d/1z9vtgtWdMToqD1QbIuFjTfgmEaOPsWZDt8RKJ63tYZs/edit?usp=sharing" },
  { section: "articles", title: "Путь к энергоэффективному дому", meta: "Строительство · загородные дома",
    note: "Как сэкономить на отоплении: планировка, тепловой контур, окна, рекуперация и герметичность в цифрах.",
    url: "https://dzen.ru/a/ZjEGaC1BiETc6Z8t", img: "works/assets/dzen.jpg" },
  { section: "articles", title: "10 самых популярных вопросов об имплантации зубов", meta: "Медицина · блог клиники",
    note: "Мифы пациентов против мнения врачей: риск отторжения, цена, боль, сроки и уход, со ссылками на исследования.",
    url: "https://neworbita.ru/zhurnal/10-samyh-populyarnyh-voprosov-ob-implantacii-zubov", img: "works/assets/orbita-faq.jpg", fromCase: CASE.orbita },
  { section: "articles", title: "Тестировщик: основные навыки, зарплата и как им стать с нуля", meta: "IT · EdTech",
    url: "https://docs.google.com/document/d/1x5EpcqnWERrn3MvkZ2h4JbLRrGq_eD6-a7oBGkrAlKg/edit?usp=sharing", more: true },
  { section: "articles", title: "Как анализировать конкурентов на маркетплейсах", meta: "Маркетплейсы · блог Yunu",
    url: "https://yunu.ru/blog/kak-pravilno-analizirovat-konkurentov-na-marketpleysakh", more: true },

  /* ---------- Telegram ---------- */
  { section: "telegram", title: "Туториал: все топ-функции TeleGraphyx", meta: "SaaS · TeleGraphyx",
    note: "Сложный сервис разложен на четыре функции, у каждой понятная выгода для владельца канала.",
    url: "https://t.me/tgx214573/12", img: "works/assets/telegraphyx-post.jpg", fromCase: CASE.telegraphyx },
  { section: "telegram", title: "Нетипичные лид-магниты: 5 форматов", meta: "Онлайн-школа · TGX · карусель",
    note: "Карусель из пяти форматов лид-магнитов, которые вовлекают с первых секунд, а не просто «дают файл».",
    url: "https://t.me/tgx386949292/12", img: "works/assets/tgx12.jpg" },
  { section: "telegram", title: "Городские новости как готовая связка для подписчиков и рекламы", meta: "Агентство · Teletraf",
    note: "Почему новостники стабильно работают, сколько стоит подписчик и кейсы клиентов с подпиской по 29–39 ₽.",
    url: "https://t.me/tltraf74849284/7", img: "works/assets/teletraf-novosti.jpg", fromCase: CASE.teletraf },
  { section: "telegram", title: "Проверяем застройщика перед покупкой", meta: "Недвижимость ОАЭ · инвестиции",
    note: "Чек-лист для инвестора: репутация, лицензии, финансы, качество и сроки.",
    url: "https://t.me/sofia_real_estate/6527", img: "works/assets/re6527.jpg" },
  { section: "telegram", title: "Наш подход, который работает в цифрах", meta: "Агентство · Teletraf",
    url: "https://t.me/tltraf74849284/5", fromCase: CASE.teletraf, more: true },
  { section: "telegram", title: "Полная связка: от Директа до продажи на консультации", meta: "Онлайн-школа · TGX",
    url: "https://t.me/tgx386949292/11", more: true },
  { section: "telegram", title: "Лид-магнит: работает или уже нет?", meta: "SaaS · TeleGraphyx",
    url: "https://t.me/tgx214573/3", fromCase: CASE.telegraphyx, more: true },
  { section: "telegram", title: "Экспресс-настройка рекламы Яндекс → Telegram", meta: "Агентство · Teletraf · рассылка",
    url: "https://t.me/tltraf74849284/14", fromCase: CASE.teletraf, more: true },
  { section: "telegram", title: "Личное СМИ: как зайти в Telegram без продукта и экспертности", meta: "Онлайн-школа · TGX",
    url: "https://t.me/tgx386949292/20", more: true },
  { section: "telegram", title: "Особенности недвижимости рядом с DWC", meta: "Недвижимость ОАЭ",
    url: "https://t.me/sofia_real_estate/6523", more: true },

  /* ---------- Email ---------- */
  { section: "email", title: "Холодная цепочка из 5 писем", meta: "B2B SaaS · B24U",
    note: "В каждом письме свой оффер: Zoom, демо, расчёт окупаемости, пробный период. 7 оплат за 20 дней.",
    url: "works/email-b24u.html", img: "works/assets/b24u-mail.jpg", fromCase: CASE.b24u },
  { section: "email", title: "4 письма пользователям расширения", meta: "SaaS для селлеров · Yoolip",
    note: "Цепочка переносит пользу расширения с одного товара на весь магазин: 39 подключённых магазинов за 12 дней.",
    url: "works/email-yoolip.html", img: "works/assets/yoolip-mail.jpg", fromCase: CASE.yoolip },

  /* ---------- Лид-магниты и воронки ---------- */
  { section: "funnels", title: "VSL-видео «Подключение канала за 10 минут»", meta: "SaaS · TeleGraphyx",
    note: "Главный оффер сервиса: бесплатный урок, где ценность видна на практике. CTR 15–18% от охвата.",
    url: "https://telegraphyx.ru/start", img: "works/assets/tgph-vsl.jpg", fromCase: CASE.telegraphyx },
  { section: "funnels", title: "Марафон по контенту", meta: "Онлайн-школа · TGX",
    note: "Бесплатный прогрев ко второму воркшопу: 3 выпуска и прямой эфир в финале. Продал воркшоп за неделю.",
    url: "cases/04-tgx-workshops/page.html", open: "Смотреть в кейсе →", img: "cases/04-tgx-workshops/assets/shot-10-anons-marafona.jpg", fromCase: CASE.tgx },
  { section: "funnels", title: "Гайд «5 способов бесплатно набрать аудиторию в Telegram»", meta: "Онлайн-школа · TGX",
    note: "Лид-магнит с разбором каждого способа: пример, как использовать, вывод и оценка по 10-балльной шкале.",
    url: "https://telegra.ph/Besplatnye-istochniki-trafika-v-Telegram-07-07", img: "works/assets/guide5.jpg" },
  { section: "funnels", title: "VSL-видео в автоворонке TGX", meta: "Онлайн-школа · TGX",
    note: "VSL-видео в автоворонке: что ломает запуск каналов, опыт команды и как запустить продажи за 7 дней.",
    url: "https://t.me/tgx386949292/39", img: "cases/04-tgx-workshops/assets/shot-02-video.jpg", fromCase: CASE.tgx },

  /* ---------- Стратегия и системы ---------- */
  { section: "strategy", title: "Контент-стратегия TeleGraphyx", meta: "SaaS · Notion",
    note: "Миссия, 5 сегментов аудитории, боли и желания, тон, 7 рубрик с примерами тем и 3 лид-магнита под боли.",
    url: "https://app.notion.com/p/Telegraphyx-07-07-2025-24cda1b2665480d98c3ce3ca45c8fbd5", img: "works/assets/n-tgph.jpg", fromCase: CASE.telegraphyx },
  { section: "strategy", title: "Контент-стратегия TGX", meta: "Онлайн-школа · Notion",
    note: "7 сегментов аудитории, разбор четырёх болей, продукт и форматы участия, 5 рубрик и стиль общения.",
    url: "https://app.notion.com/p/TGX-24cda1b2665480b7b6fcd26a815b3713", img: "works/assets/n-tgx.jpg", fromCase: CASE.tgx },
  { section: "strategy", title: "Промпт ИИ-менеджера «Макс»", meta: "Онлайн-школа · TGX · Notion",
    note: "Алгоритм продажи в диалоге: квалификация, точка А и Б, кейсы, выбор формата, тарифы и возражения.",
    url: "https://app.notion.com/p/02-07-2-24cda1b26654800798aad9ad3f417109", img: "works/assets/n-max.jpg", fromCase: CASE.tgx }
];

(function () {
  const root = document.getElementById("works-root");
  if (!root) return;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ext = url => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";
  const badge = w => w.fromCase ? `<a class="badge" href="${esc(w.fromCase.href)}">Из кейса ${esc(w.fromCase.name)}</a>` : "";

  const card = w => `
    <article class="work">
      ${w.img
        ? `<div class="work__img"><img src="${esc(w.img)}" alt="${esc(w.title)}" loading="lazy"></div>`
        : `<div class="work__cover"><span>${esc(w.meta.split(" · ")[0])}</span><b><span class="mark">${esc(w.title)}</span></b></div>`}
      <div class="work__body">
        <p class="work__meta">${esc(w.meta)}</p>
        <h4 class="work__title"><a href="${esc(w.url)}"${ext(w.url)}>${esc(w.title)}</a></h4>
        ${w.note ? `<p class="work__note">${esc(w.note)}</p>` : ""}
        <div class="work__foot"><span class="work__open">${esc(w.open || "Открыть →")}</span>${badge(w)}</div>
      </div>
    </article>`;

  const row = w => `
    <li><a href="${esc(w.url)}"${ext(w.url)}>${esc(w.title)}</a>${badge(w)}<span>${esc(w.meta)}</span></li>`;

  const words = n => n % 10 === 1 && n % 100 !== 11 ? "работа" : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? "работы" : "работ");

  root.innerHTML = window.WORKS_SECTIONS.map(s => {
    const items = window.WORKS.filter(w => w.section === s.id);
    if (!items.length) return "";
    const top = items.filter(w => !w.more), rest = items.filter(w => w.more);
    const path = s.steps ? `<ol class="stairs">${s.steps.map(([t, d]) =>
      `<li><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join("")}</ol>` : "";
    return `
      <section class="fmt" id="w-${s.id}">
        <div class="fmt__head"><h3>${esc(s.title)}</h3><p class="fmt__role">${esc(s.role)}</p></div>${path}
        <div class="grid">${top.map(card).join("")}</div>
        ${rest.length ? `<details class="more"><summary>Ещё ${rest.length} ${words(rest.length)}</summary><ul>${rest.map(row).join("")}</ul></details>` : ""}
      </section>`;
  }).join("");
})();
