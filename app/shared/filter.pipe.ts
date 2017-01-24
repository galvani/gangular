import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  items = [];

  transform(array: Array<any>, args: any[], direction: string): Array<any> {
    this.items=[];
    if (Object.keys(args).length==1) {
      const key = Object.keys(args).shift();
      const filtered = array.filter(function(el){
        return el[key] === args[key];

      });
      for (let i=0; i<filtered.length; i++) {
        this.items.push(filtered[i]);
      }
      return this.items;
    }

    return array;
  }
}