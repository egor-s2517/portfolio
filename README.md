# Портфолио Егора Сивакова

Статический сайт: главная `index.html`, страницы кейсов в `cases/`, работы в `works.js`, общие стили `styles.css`.

## Как открыть локально

```bash
python3 -m http.server 8792 --directory "/Users/egorsivakov/Claude Code/portfolio"
```

Затем открыть http://localhost:8792. Двойным кликом по `index.html` тоже откроется, но через сервер надёжнее.

## Фото на первом экране

Положить фото в `works/assets/photo.jpg` (портрет, пропорция 4:5) и в `index.html` заменить строку `<div class="photo photo--empty" …>` на
`<div class="photo"><img src="works/assets/photo.jpg" alt="Егор Сиваков"></div>`. Чтобы сделать фото чёрно-белым, добавить в `styles.css` к `.photo img` правило `filter:grayscale(1)`.

## Как добавить работу

1. Превью положить в `works/assets/` (лучше 16:10, ширина 800–1200 px). Без превью карточка получит обложку с названием.
2. В `works.js` скопировать любой объект из списка `WORKS` и поменять поля: `section`, `title`, `meta`, `note`, `url`, `img`.
3. Если работа из кейса, добавить `fromCase: CASE.имя` – появится метка «Из кейса».
4. `more: true` убирает работу в список «Ещё N работ» под витриной раздела.

Новый раздел работ: добавить объект в `WORKS_SECTIONS` (`id`, `title`, `role`).

## Как добавить кейс

1. Папка `cases/NN-название/`: `page.html`, `card.html`, `case.md`, `needs.md`, `assets/`. Образец – любой существующий кейс, инструкция – `PROMPT-new-case.md`.
2. Содержимое `card.html` вставить в `index.html` в раздел «Кейсы» (полный кейс – перед строкой «Короткие кейсы», короткий – после). Пути в карточке начинаются с `cases/NN-название/`.
3. Цвет карточки: `card--ink`, `card--graphite`, `card--white` или `card--yellow`, по очереди.

## Публикация на GitHub Pages

Аккаунт: `egor-s2517`. Адрес после публикации: https://egor-s2517.github.io/portfolio/

```bash
cd "/Users/egorsivakov/Claude Code/portfolio"
git init && git add . && git commit -m "Портфолио"
gh repo create portfolio --public --source . --push
gh api -X POST repos/egor-s2517/portfolio/pages -f "source[branch]=main" -f "source[path]=/"
```

Через 1–2 минуты сайт откроется по адресу выше. Обновить сайт: `git add . && git commit -m "Правки" && git push`.

Файл `.nojekyll` в корне нужен, чтобы GitHub отдавал файлы как есть.
