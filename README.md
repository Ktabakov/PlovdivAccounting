# Счетоводна кантора — Статичен уебсайт

Този репозиториум съдържа статичен уебсайт за счетоводна кантора, подходящ за хостване в GitHub Pages.

## Файлова структура

- `index.html` — основната one-page страница
- `assets/css/styles.css` — стилове
- `assets/js/main.js` — JavaScript за навигация, езиков превключвател и работещ контакт формуляр
- `assets/images/` — папка за изображения (favicon, профилни снимки и др.)

---

## Локално пускане

### Вариант 1: Директно отворяне
1. Отворете `index.html` директно в браузър (двойно щракване или браузър → Open File).

### Вариант 2: HTTP сървър (препоръчано)
Сервирайте с прост HTTP сървър, за да избегнете CORS проблеми при тестване:

```bash
# Windows (PowerShell)
python -m http.server 8000

# macOS / Linux
python3 -m http.server 8000
```

Отворете браузър на `http://localhost:8000`

---

## GitHub Pages — Детално ръководство

### Стъпка 1: Създай GitHub репозиториум

1. Отворете https://github.com/new
2. Попълнете:
   - **Repository name**: `accountancy-plovdiv` (или друго име)
   - **Description**: "Accounting office website - Liliya Tabakova, Plovdiv"
   - **Public** или **Private** (за Pages публичен е препоръчан)
   - НЕ инициализирайте с README/gitignore
3. Кликнете **Create repository**

### Стъпка 2: Инициализирай Git локално и push файловете

Отворете PowerShell/Terminal в папката `d:\Plovdivaccounting`:

```bash
# Инициализирай git репо
git init

# Добави всички файлове
git add .

# Направи първия commit
git commit -m "Initial commit: accounting website"

# Добави remote (замени YOUR-USERNAME и accountancy-plovdiv с твоите данни)
git remote add origin https://github.com/YOUR-USERNAME/accountancy-plovdiv.git

# Преименувай branch в main (ако е необходимо)
git branch -M main

# Push към GitHub
git push -u origin main
```

**Забележка:** При първо push GitHub ще те поиска username и personal access token (вместо пароля).

### Стъпка 3: Активирай GitHub Pages

1. Отворете репозиториума на https://github.com/YOUR-USERNAME/accountancy-plovdiv
2. Отворете **Settings** (горен навигационен раздел)
3. От лявото меню, кликнете **Pages**
4. В **Source**, изберете **Deploy from a branch**
5. В **Branch**, изберете:
   - Branch: `main`
   - Folder: `/ (root)`
6. Кликнете **Save**

**Вашият сайт ще е достъпен на:** `https://YOUR-USERNAME.github.io/accountancy-plovdiv`

(За стандартна настройка заемат между 1-5 минути за публикуване.)

---

## Подключване на персонален домейн (приобретен от трети страни)

**Отговор:** GitHub Pages НЕ продава домейни. Трябва да закупите домейн от трети страна, напр.:
- **Namecheap** (препоръчано)
- **GoDaddy**
- **Domain.com**
- **registrar.bg** (за .bg домейни)

### Как да свържете домейна с GitHub Pages:

#### 1. Закупете домейна (напр. `lilyatabakova.bg`)

#### 2. Конфигурирайте DNS указатели на домейн предоставяча

GitHub Pages поддържа два метода:

**Метод A: Apex домейн (по-лесен)**
Настройте A запис, сочещ на GitHub IP адреси:

```
Type: A
Name: @
Value: 185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
```

(Всеки А запис трябва да има една от горните IP адреси. Повечето DNS панели позволяват множество А записи.)

**Метод B: CNAME субдомейн (гъвкавост)**
Ако искате да използвате субдомейн (напр. `www.lilyatabakova.bg`):

```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

#### 3. Добави домейна към GitHub Pages

1. Отворете Settings → Pages на вашия репозиториум
2. В поле **Custom domain**, напишете вашия домейн (напр. `lilyatabakova.bg`)
3. Кликнете **Save**
4. GitHub автоматично ще създаде файл `CNAME` в репо

**ВАЖНО:** Git ще мине някой минути да потвърди DNS записите. Ако видите погрешка, проверете DNS настройките.

#### 4. Активирай HTTPS (препоръчано)

1. След потвърждение на домейна, отворете Settings → Pages отново
2. Отметнете **Enforce HTTPS**

Готово! Вашият сайт е на `https://lilyatabakova.bg`

---

## Контакт формуляр — Конфигурация

Формата подържа безплатни сервиси за изпращане по имейл:

### Опция 1: Formspree (препоръчано)

1. Отворете https://formspree.io
2. Регистрирайте се
3. Създайте нов form → получите form_id (напр. `maypid`)
4. В `index.html`, заменете `action="https://formspree.io/f/your-form-id"` с вашия form_id:
   ```html
   action="https://formspree.io/f/maypid"
   ```
5. При първо изпращане, Formspree ще изпрати потвърждение по имейл

### Опция 2: FormSubmit

1. В `index.html`, заменете `action` с:
   ```html
   action="https://formsubmit.co/your-email@example.com"
   ```
2. При първо изпращане, трябва да потвърдите имейла

### Опция 3: Без backend (локално симулиране)

Формата вече показва потвърждение на екрана дори без конфигурация на endpoint.

---

## Многоезичност

- **По подразбиране:** български
- **Превключвател:** кликнете EN бутона → английски
- Всички текстове автоматично се превеждат

---

## Бележки

- Сайтът е напълно статичен (само HTML, CSS, JS) — идеален за GitHub Pages
- Няма необходимост от Node.js, build tools или бекенд
- SEO-friendly: има мета tags, заглавия и структура
- Отзивчив дизайн (мобилен, таблет, десктоп)

---

## Допълнителна помощ

За повече информация вж.:
- [GitHub Pages документация](https://docs.github.com/en/pages)
- [Как да конфигурирате персонален домейн](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Formspree документация](https://formspree.io/help)
