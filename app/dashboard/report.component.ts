import { Component, Input, Directive, ElementRef, HostListener, Renderer } from '@angular/core';
import { Model } from './../shared/model';
import { Item } from './../shared/item';
import { ReportTemplate } from './report.html';
import { AvailableItemsMock } from './../mock/availableItems.mock';
import { ItemService } from './../shared/item.service';

declare var jQuery:any;

@Component({
  template: ReportTemplate
})

export class ReportComponent {
  model: Model = {
    name: "Unnamed Report",
    items: {
      available: [],
      filtered: [],
      sorted: []
    },
    state: {
      selected: Item,
      filters: {
        available: ''
      }
    },
    attributes: {}
  };

  constructor(private el: ElementRef, private rd: Renderer, private itemService: ItemService) {
    this.model.items.available = AvailableItemsMock.items;
    for (let item of this.model.items.available) {
      item.inGrid = Math.round(Math.random()*100)>93;
    }
    console.log(this.itemService);
    this.model.state.selected = this.model.items.available[0];
    console.log('report element:', this.el);
  }
}