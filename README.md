<h1 align="center">Бухгалтерское приложение - PROФинанс</h1>
Смотреть работу <a href="https://alexandermorugin.github.io/pro-finance/">https://alexandermorugin.github.io/pro-finance/</a>

![PROFinance Demo](/pro-finance.png)

## О проекте

- Многостраничное приложение с подгрузкой таблицы данных телефонов. В конце таблицы указана строка "Итого", которая меняется в результате редактирования таблицы или фильтров.
- По нажатию кнопки «загрузить данные из csv», заполняется таблица из data.json файла (в корне проекта).
- По нажатию «экспорт», сохраняются данные в формате csv на диске.
- По двойному щелчку изменяется содержимое ячеек и проверяется на валидность числовых данных.
- Работают фильтры по столбцам. Вводим данные и нажимаем кнопку "Сформировать".
- После фильтрации или редактирования таблицы, ее можно сохранить на диске, нажав кнопку "Экспорт". Данные сохраняются в формате CSV.
- Работает сортировка таблицы. Нажимаем на стрелочки у заголовков столбцов.
- Кнопка "Изменить данные" - после редактирования ячеек таблицы, все данные можно сохранить в Редаксе и если потребуется, то в дальнейшем можно их будет использовать. Пока измененные данные можно увидеть только в консоли.
- Также таблицу с измененными данными можно сохранить на диске, нажав кнопку "Экспорт". Если нажимать кнопку "Изменить данные" без редактирования таблицы, то ничего в Редакс передаваться не будет.
- Кнопка "Очистить" - очищает всю таблицу, т.е. удаляет из Редакса все данные. При отсутствии данных в Редаксе - таблица не отрисовывается. Далее можно снова нажать кнопку "Загрузить данные из csv" и начать все сначала.

## Используемые технологии и решения

- Typescript
- React
- React Router
- React-Icons
- Tanstack-Table
- Redux-Toolkit
- SCSS
- без адаптива

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
