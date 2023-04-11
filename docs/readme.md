# Установка конекта Angular 13 + firebase 9

[ПРИМЕР ЗДЕСЬ](public/index.html)

## az

Разворачиваем этот проект Ангуляр.

## buki

Подготавливаем БД firebase и копируем конфиг базы в `./src/environments/environment.ts`

## vedi

Устанавливаем пакет `angularfire`

```sh
npm i firebase angularfire --save

```

## glagol

На сайте, в панели `Firebase` настраиваем правила доступа к базе:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write:
	  // if request.time < timestamp.date(2033, 12, 31);
          if request.auth != null; // только для юзеров (не гостей) 
    }
  }
}

```


## dobro

Запускаем приложение

```sh
ng s -o

```

<span style="color: #e34234;">Пример будет работать с вашей `Firebase` только с сервера запущенного в `Angular`. Для работуещего примера вне `Angular` потребуется реализации авторизации или изменения правил  БД `firestore`, создав правило открытого для всех доступа изменив строки кода:


><s>if request.auth != null; // только для юзеров (не гостей)</s><br>
<span style="color: #7C9655;">**if request.time < timestamp.date(2033, 12, 31);**

<br>

Подробности в документации [здесь…](https://firebase.google.com/docs?hl=ru)

<br>

![img](https://img.a374.ru/svg/comp-end.svg)
