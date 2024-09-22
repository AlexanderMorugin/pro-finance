<h1 align="center">PROФинанс - Тестовое задание Frontend React</h1>

Смотреть работу <a href="https://alexandermorugin.github.io/pro-finance/" target="_blank">[[react-test-pro-finance](https://github.com/AlexanderMorugin/react-test-pro-finance)](https://alexandermorugin.github.io/pro-finance/)</a>

Данное приложение является тем же самым, что и <b><a href="https://github.com/AlexanderMorugin/react-test-pro-finance">react-test-pro-finance</a></b> только здесь используется Redux Toolkit.

![PROFinance Demo](/ТЗ.png)

## Задание

Сверстать страницу.
Внизу таблицы должна быть строка итого:
По нажатию кнопки «загрузить данные из csv», заполнить таблицу из произвольного data.json файла (в корне проекта), по нажатию «экспорт», сохранить данные в формате json или csv на диске.
По двойному щелчку изменять содержимое ячейки, проверять валидность данных (на число)
Пересчитывать итого при изменении данных.
Использовать React, ts, open source UI компоненты.
Будет плюсом:
-реализовать фильтр по кнопке сформировать
-сортировку по нажатию стрелочки рядом с заголовком.
Тесты приветствуются!
Верстка плюс минус похожа, изображение продублировано в архиве в лучшем качестве,
данные таблицы произвольные, можно использовать DATA.json из архива.

## Выполнено

Все, кроме тестов, а именно:

- Сверстана неадаптированная страница.
- Сделан роутинг.
- При загрузке приложения нажимаем кнопку "Загрузить данные из csv". Происходит загрузка моковых данных из массива DATA.json, который лежит в корне проекта в Редакс. Как только в Редаксе появляются данные - отрисовывается таблица с ними.
- В таблице можно делать сортировку колонок, кликая по названию колонки. Также любую ячейку можно редактировать двойным кликом.
- Ячейки с цифрами валидируются только на числа.
- Внизу таблицы отображаются итоговые данные по количеству и цене, которые меняются при редактировании ячеек.
- Над таблицей расположена форма фильтрации, инпуты которой работают по своим колонкам. Сначала загружаем таблицу кнопкой "Загрузить данные из csv", затем вводим данные в поля фильтра и нажимаем кнопку "Сформировать".
- После фильтрации или редактирования таблицы, ее можно сохранить на диске, нажав кнопку "Экспорт". Данные сохраняются в формате CSV.
- Кнопка "Изменить данные" - после редактирования ячеек таблицы, все данные можно сохранить в Редаксе и если потребуется, то в дальнейшем можно их будет использовать. Пока измененные данные можно увидеть только в консоли. Также таблицу с измененными данными можно сохранить на диске, нажав кнопку "Экспорт". Если нажимать кнопку "Изменить данные" без редактирования таблицы, то ничего в Редакс передаваться не будет.
- Кнопка "Очистить" очищает всю таблицу, т.е. удаляет из Редакса все данные. При отсутствии данных в Редаксе - таблица не отрисовывается. Далее можно снова нажать кнопку "Загрузить данные из csv" и начать все сначала.

## В планах

Сделать тесты

## Используемые технологии и решения

- React Router
- Redux Toolkit
- Typescript в качестве основного языка проекта
- Файлы стилей имеют расширение SCSS
- Tanstack table
- React Icons

## Как запустить проект:

Клонирование репозитория

```
git clone https://github.com/AlexanderMorugin/react-test-pro-finance.git
```

Установка зависимостей

```
npm i
```

Запуск проекта

```
npm run dev
```

---

Александр Моругин\
сентябрь 2024г
