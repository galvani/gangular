import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "available",
  pure: false
})

export class AvailablePipe implements PipeTransform {
  items = [];

  transform(array:Array<any>, args:string[]):Array<any> {
    this.items = [];

    var sorted = array.sort(function (a, b) {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    });

    if (args.length) {
      const filtered = sorted.filter(function (el) {
        console.log(args.toString());
        return (new RegExp(args.toString(), 'g')).exec(el.label);

      });
      sorted = filtered;
    }

    for (let i = 0; i < sorted.length; i++) {
      this.items.push(sorted[i]);
    }

    return this.items;
  }
}