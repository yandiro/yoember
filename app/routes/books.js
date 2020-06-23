import Route from '@ember/routing/route';

import { action } from '@ember/object';

export default class BooksRoute extends Route {
  model() {
    return this.store.findAll('book');
  }

  @action
  editBook(book) {
    book.set('isEditing', true);
  }

  @action
  cancelBookEdit(book) {
    book.set('isEditing', false);
    book.rollbackAttributes();
  }

  @action
  saveBook(book) {
    if (book.get('isNotValid')) {
      return;
    }

    book.set('isEditing', false);
    book.save();
  }

}
