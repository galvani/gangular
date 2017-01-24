import { Component, Input, Output, Directive, ElementRef, HostListener, Renderer, EventEmitter,  ContentChild, AfterContentInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AvailableListTemplate } from './availableList.html';
import { AvailablePipe } from './../shared/available.pipe';
import { Item } from './../shared/item';


@Component({
  moduleId: module.id,
  selector: 'available-list',
  template: AvailableListTemplate,
  providers: [ AvailablePipe ],
  animations: [
    trigger('selected', [
      state('true', style({
        backgroundColor: '#c2eded',
      })),
      state('false', style({
        backgroundColor: '#ffffff'
      })),
      transition('0 => 1', [
        style({
          backgroundColor: '#FFFFFF'
        }),
        animate('150ms ease-in', style({
          backgroundColor: '#7AA8A8'
        }))
      ]),
    ])
  ]
})

export class AvailableListComponent implements AfterContentInit {
  @Input('items') items:Item[];
  @Input('filter') filter:Item[];
  @Input('selected') selected:Item;
  @Input('filterString') filterString:String;

  @Output() selectedChange = new EventEmitter();
  @Output() filterChange = new EventEmitter();
  @Output() filterStringChange = new EventEmitter();

  @ContentChild('availableItem', {read: ElementRef}) availableItemEl:ElementRef;

  @HostListener('document:keydown', ['$event'])
  keypress(e:KeyboardEvent) {
    if (e.srcElement != document.body) {
      return true;
    }
    switch (e.key) {
      case 'ArrowDown':
        if (this.items.indexOf(this.selected) < (this.items.length - 1)) {
          this.selected = this.items[this.items.indexOf(this.selected) + 1];
          this.selectedChange.emit(this.selected);
        }
        break;
      case 'ArrowUp':
        if (this.items.indexOf(this.selected) > 0) {
          this.selected = this.items[this.items.indexOf(this.selected) - 1];
          this.selectedChange.emit(this.selected);
        }
        break;
      case ' ':
        this.selected.inGrid = !this.selected.inGrid;
        this.selectedChange.emit(this.selected);
        this.scrollToSelectedItem(this.selected);
        return false;
      case 'Enter':
        this.filter.push(this.selected);
        this.filterChange.emit(this.filter);
        return false;
    }
    this.scrollToSelectedItem(this.selected);
  }

  constructor(private el:ElementRef, private rd:Renderer) {
  }

  ngAfterContentInit() {
    var elements = this.availableItemEl;
    console.log(elements);
  }

  scrollToSelectedItem(element) {
    console.log('scroll to selected:', element, this.items.indexOf(this.selected), '#availableItem-' + this.items.indexOf(this.selected));
  }

  emitFilterStringChange(val) {
    console.log('emitFilterStringChange', val);
  }

  toggleInGrid(item) {
    item.inGrid = !item.inGrid
  }


  isItemInFilter(item:Item) {
    return this.filter.indexOf(item) != -1
  }

  addToFilter(item:Item) {
    this.filter.push(item);
    return true;
  }

  itemClicked(item:Item, index:number, ev) {
    this.selected = item;
    this.selectedChange.emit(this.selected);
    console.log(ev);
    return true;
  }

  getItemClass(item, index) {
    if (this.selected == item) {
      return 'selected'
    }
    return '';
  }
}