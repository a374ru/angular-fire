import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

class Item {
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
  title = '002. Добавление записи в Firestore';
  info = 'Нажимая кнопку вы !ДОБАВЛЯЕТЕ ЗАПИСЬ в БД Firestore.';

  // Добавляемая запись в Firestore должна быть объектом. В нашем случае это  объект c типом значений `Item`
  entries: Item = {
    description: this.title,
  };

  // Определяем переменную для коллекции
  collectionFromFirestore: AngularFirestoreCollection<Item>;

  // Здесь определяется переменная dbf - Это так называемая инъекция с типом AngularFirestore. Реализация библиотеки AngularFire, … устанавливаем коннект с базой.
  constructor(private dbf: AngularFirestore) {
    /**
      Инитим переменную именем коллекции размещенной в бд `firestore`
    */
    this.collectionFromFirestore = dbf.collection('collection-test');
  }
  // Метод вызываемый кнопкой
  addClick() {
    this.addEntries(this.entries); // вызов метода добавления записи в firestore
  }

  // Реализация метода добавления записи в БД Firestore
  addEntries(rrr: Item) {
    this.collectionFromFirestore.add(rrr);
    this.info = 'Запись добавлена в бд';
  }
}
