import Model, { attr, hasMany } from '@ember-data/model';

import { notEmpty } from '@ember/object/computed';

import Faker from 'faker';

export default class LibraryModel extends Model {
  @attr('string') name;
  @attr('string') address;
  @attr('string') phone;

  @hasMany('book') books;

  @notEmpty ('name') isValid;

  randomize() {
    this.name = `${Faker.company.companyName()} Library`;
    this.address = this._fullAddress();
    this.phone = Faker.phone.phoneNumber();

    // If you would like to use in chain.
    return this;
  }

  _fullAddress() {
    return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
  }
}
