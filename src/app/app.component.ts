import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

class Item {
  name?: string;
  description?: string;
  datecreate?: string;
  // TODO:  Добавить поле локально
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-fire-document';

  docDbf: AngularFirestoreDocument<Item>;

  // Эмитрон. Наблюдатель за изменениями. В данном коде за эмитроном наблюдает
  // div#aaa
  emitron: Observable<Item | undefined>;

  constructor(private dbf: AngularFirestore) {
    /**
      Указываем статический путь к документу базы `firestore`
      Добавляем путь в эмитрон.
      */
    this.docDbf = dbf.doc<Item>('test/ystm');
    this.emitron = this.docDbf.valueChanges();
  }

  myMethod() {
    console.log('Привет, Олегъ!');
  }
}
