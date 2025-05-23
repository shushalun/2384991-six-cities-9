# Как работать над проектом

## Окружение

Для удобства работы над проектом используются инструменты из **Node.js** и **npm**. Все необходимые настройки произведены. Убедитесь, что на рабочем компьютере установлен актуальный LTS релиз Node.js**. Актуальная версия **Node.js** указана в файле `package.json` в поле `node`. Затем, в терминале, перейдите в директорию с проектом и _единожды_ запустите команду:

```bash
npm install
```

Команда запустит процесс установки зависимостей проекта из **npm**.

### Сценарии

В `package.json` предопределено несколько сценариев.

#### Скомпилировать проект

```bash
npm run compile
```

Создаст директорию `dist` и скомпилирует проект.

#### Удалить скомпилированный проект

```bash
npm run clean
```

Удаляет директорию `dist`. Используется перед компиляцией.

#### Собрать проект

```bash
npm run build
```

Выполняет сборку проекта: удаляет ранее скомпилированный проект и компилирует заново.

#### Проверить линтером

```bash
npm run lint
```

Запуск проверки проекта статическим анализатором кода **ESLint**.

Линтер проверяет файлы только внутри директории `src`.

**Обратите внимание**, при запуске данной команды, ошибки выводятся в терминал.

#### Запустить ts-модуль без компиляции

```bash
npm run ts -- <Путь к модулю с ts-кодом>
```

Пакет `ts-node` позволяет выполнить TS-код в Node.js без предварительной компиляции. Используется только на этапе разработки.

#### Запустить проект

```bash
npm start
```

В процессе запуска проекта будет выполнен процесс «Сборки проекта» и запуска результирующего кода.

#### Запустить проект в режиме разработки
```bash
npm run start:dev
```

Запускает проект с использованием nodemon. Автоматически отслеживает изменения и перезапускает сервер.

#### Запустить mock-сервер
```bash
npm run mock:server
```

Запускает json-server с использованием данных из ./mocks/mock-server-data.json.
Сервер будет доступен по адресу http://localhost:3123. Используется для тестирования API в процессе разработки.

#### Проверить типы и выполнить модуль без сборки
```bash
npm run ts -- <путь/к/ts-файлу>
```

Выполняет проверку типов с помощью tsc --noEmit и сразу запускает TypeScript-файл через ts-node в ESM-режиме.

#### Запустить CLI-интерфейс
```bash
npm run cli -- --help
```

Запускает CLI-интерфейс проекта. Поддерживает команды --help, --version, --import, --generate и другие. Используется для подготовки и загрузки тестовых данных.

## Структура проекта

### Директория `src`

Исходный код проекта: компоненты, модули и так далее. Структура директории `src` может быть произвольной.

### Файл `Readme.md`

Инструкции по работе с учебным репозиторием.

### Файл `Contributing.md`

Советы и инструкции по внесению изменений в учебный репозиторий.

### Остальное

Все остальные файлы в проекте являются служебными. Пожалуйста, не удаляйте и не изменяйте их самовольно. Только если того требует задание или наставник.

### Переменные окружения

PORT=4000 — порт, на котором запускается приложение  
SALT=secret — соль для хэширования паролей  
DB_HOST=127.0.0.1 — адрес MongoDB  
DB_USER=admin — имя пользователя для подключения к MongoDB  
DB_PASSWORD=test — пароль пользователя MongoDB  
DB_PORT=27017 — порт MongoDB  
UPLOAD_DIRECTORY=\Users\kseniia.lazarov\2384991-six-cities-9\src\upload — путь к директории для загрузки файлов  
STATIC_DIRECTORY_PATH=\Users\kseniia.lazarov\2384991-six-cities-9\static — путь к статическим файлам  
JWT_SECRET=secret — секрет для подписи JWT токенов  
