## Именование переменных и сущностей
Пишем полные названия _чего угодно_.

`background` вместо `bg`

`character-image.png` вместо `char-img.png`

`getImages()` вместо `azazaFnIDontCare()`

## Стили
Пишем на любом (пост/пре)процессоре с разбиением по комонентам, миксинам и переменным

Глобальные переменные проекта должны лежать в файле `/src/global/styles/variables(.css|.styl|.scss)`.
Для именования переменных и миксинов используется _kebab-case_ – `$holy-kebab-size: 20px;`.

_Не_ используем БЭМ и другие семантические подходы. Классы пишем в lowerCamelCase.

Вместо модификаторов можно использовать суфиксы без разделителя:
простая кнопка   : `.simpleButton`
она же, активная : `.simpleButtonActive`

_Не_ склеиваем имена классов через '&', так сложнее искать селектор в стилях.

Плохо:
```
.simpleButton {
    color: #f5b105;
    &Active {
        color: red;
    }
}
```

Хорошо:
```
.simpleButton {
    color: #f5b105;
}

.simpleButtonActive {
    color: red;
}
```

Использование оператора конкатенации (&) уместно для использования с псевдоклассами (:hover, :nth-child и т.д.), т.к. они _непосредственно_ относятся к элементу.
И неуместно для псевдоэлементов:

Плохо:
```
.simpleButton {
    &:hover {
        opacity: .8;
    }
    &::after {
        content: 'I'm not part of this!';
    }
}
```

Хорошо:
```
.simpleButton {
    &:hover {
        opacity: .8;
    }
}

.simpleButton::after {
    content: 'Yeah, that's better!';
}
```


## Джаваскрипт
Используем es6 синтаксис, где это уместно:
- по-умолчанию пишем `const`, где необходимо переопределять переменную, используем `let`
- используем стрелочные функции
- используем `import` вместо `require`

Переменные объявляем в `lowerCamelCase`.

_Не_ используем импорт через звездочку: `import * as handyPackage from 'handy-package'`.
