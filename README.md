# КодСтарт — автодеплой

Автодеплой через GitHub Actions. Учебный репозиторий к лабораторной работе № 6 по информатике (ГУАП, гр. 4616): сайт студенческого клуба «КодСтарт» из ЛР4–ЛР5 публикуется на GitHub Pages автоматически при каждом push в ветку main.

Автор: Р. М. Кашапов.

[![Deploy static site](https://github.com/Yenkolisss/kodstart-cicd/actions/workflows/deploy.yml/badge.svg)](https://github.com/Yenkolisss/kodstart-cicd/actions/workflows/deploy.yml)

Сайт: https://yenkolisss.github.io/kodstart-cicd/

## Как устроен пайплайн

1. **lint** — проверка HTML (HTMLHint, правила в `.htmlhintrc`) и CSS (Stylelint, правила в `.stylelintrc.json`).
2. **deploy** — публикация на GitHub Pages; запускается только если проверка прошла и изменения попали в `main`.

Для pull request выполняется только проверка: ошибка в коде не даст опубликовать сайт.
