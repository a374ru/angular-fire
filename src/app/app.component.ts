import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

class Item {
  id?: string;
  name?: string;
  description?: string;
  datecreate?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '005. Добавление коллекция и документа с полем `description` в `DBF`';
  info = 'Нажимая кнопку вы !ДОБАВЛЯЕТЕ КОЛЛЕКЦИЮ и ЗАПИСЬ в БД Firestore.';
  a = 1;
  collectionName = 'custom_id';
  // Добавляемая запись в Firestore должна быть объектом. В нашем случае это  объект c типом значений `Item`
  entries: Item = {
    id: 'key',
    description: this.title,
  };

  // Определяем переменную для коллекции
  collectionFromFirestore: AngularFirestoreCollection<Item>;

  // Здесь определяется переменная dbf - Это так называемая инъекция с типом AngularFirestore. Реализация библиотеки AngularFire, … устанавливаем коннект с базой.
  constructor(private dbf: AngularFirestore) {
    /**
      Инитим переменную именем коллекции размещенной в бд `firestore`
      Если такой колекции нет она будет создана в `firestore`.
    */
    this.collectionFromFirestore = dbf.collection<Item>(this.collectionName);
  }
  // Метод вызываемый кнопкой
  addClick() {
    // Установка полу-рандомного `id`
    // this.entries.id = 'ystm_' + this.dbf.createId();

    // Ручной `id`
    this.entries.id = 'документ_' + this.a++;
    this.addEntries(this.entries); // вызов метода добавления записи в firestore
  }

  // Реализация метода добавления записи в БД Firestore с ручным `ID`
  addEntries(rrr: Item) {
    this.collectionFromFirestore.doc(rrr.id).set(rrr);
    this.info = 'Запись ' + rrr.id;
  }
}
