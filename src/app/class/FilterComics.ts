export class CFilterComics {
  title: string;
  orderPrice: boolean;
  orderTitle: boolean;
  idCharacter: number;

  constructor() {
    this.title = '';
    this.orderPrice = false;
    this.orderTitle = false;
    this.idCharacter = 0;
  }
}
