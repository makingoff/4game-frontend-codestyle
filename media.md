## Работа с графикой
#### Размеры
Размер изображения должен соответствовать месту в котором оно испоользуются.
Изображения должны быть в двух размерах @1x и @2x для того,
чтобы юзеры на обычных экранах не качали лишнего, а те, кто на ретине,
видели бы красивые изображения.
Исключение можно сделать для маленьких изображений и/или монотонных изображений,
можно использовать сразу двойной размер,
на скорость загрузки их вес повлияет не сильно.

#### Форматы
Используем форматы осознанно, для больших картинок используем .jpg,
для иконок, графических элементов (уголки, кнопки) используем .png или .svg.

Картинки перед добавлением в репозиторий нужно оптимизировать в сервисах https://tinypng.com/ или https://squoosh.app/.
Svg нужно оптимизировать в [svgo](https://jakearchibald.github.io/svgomg/) до добавления в репозиторий.

Изображения в форматах jpg и png, полученные от дизайнеров нужно конвертировать в формат webp, любым удобным образом.
Можно руками перед добавлением в репозиторий, например [тут](https://image.online-convert.com/ru/convert-to-webp),
можно плагином для [вебпака](https://www.npmjs.com/package/imagemin-webp-webpack-plugin) или для [parcel](https://github.com/DeMoorJasper/parcel-plugin-imagemin).
Изображени, с размером менее 10кб можно не конвертировать, их вес не играет большой роли.

Для фоллбека нужно использовать оба изображения, примерно так:
```
<picture>
  <source srcset="./assets/img/awesome-image.webp" type="image/webp">
  <source srcset="./assets/img/awesome-image.jpg" type="image/jpeg">
  <img src="img/awesome-image.jpg">
</picture>
```

## Работа с видео
Видео должно быть в форматах mp4 и webm, сконвертировать можно [тут](https://video.online-convert.com/ru/convert-to-webm)
Обязательно должен быть заполнен атрибут `poster`, из первого кардра видео.
В коде используем конструкцию:
```
<video poster="./assets/video/awesome-video-poster.jpg">
  <source src="./assets/video/awesome-video.mp4" type="video/mp4">
  <source src="./assets/video/awesome-video.webm" type="video/webm">
</video>
```
