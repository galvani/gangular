import {Item} from './item';

export class Model {
  name: string
  items: {
    available: Item[]
    filtered: Item[]
    sorted: Item[]
  }
  state: {
    selected: Object,
    filters: {
      available: ''
    }
  }
  attributes: {

  }
}