## Настройка окружения
В корне этого репзитория есть папка [configs](configs) с файлами,
которые должны находиться в корне проекта.

Используй плагин для поддержки [.editorconfig](https://editorconfig.org/) в твоей IDE.
Остпупы и переносы сами себя не настроят.

Не забывай про TSLint/ESLint и Stylelint.
Проверь, что плагины работают и линтеры ругаются,
например на пустые блоки в стилях и на запятую после последнего элемента в массиве.

## Билд и деплой
Папка с билдом должна называться `build` и лежать в корне проекта.

Для сборки можно использовать [webpack](https://webpack.js.org/) или [parcel](https://parceljs.org/).

_Но нельзя использовать Gulp!_

Стили и скрипты должны быть минифицированы.