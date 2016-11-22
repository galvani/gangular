import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "sort"
})
export class SortPipe implements PipeTransform {
    transform(array: Array<any>, args: string, direction: string): Array<any> {
        array.sort((a: any, b: any) => {
            var res;
            if (a[args] < b[args]) {
                res = -1;
            } else if (a[args] > b[args]) {
                res = 1;
            } else {
                res = 0;
            }
            if (direction=='desc') {
                res = res * -1;
            }
            return res;
        });
        return array;
    }
}