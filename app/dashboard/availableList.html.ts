export const AvailableListTemplate = `
	  	<h3>Available({{items.length}})</h3>
	  	<div class="filterBox">
	  		<input [(ngModel)]="filterString" (ngModelChange)="filterStringChange.emit(filterString)"/>
	  	</div>
    	<ul *ngIf="items.length">
    	  <li id="availableItem-{{i}}"
    	  	[@selected]="item==selected"
    	    [ngClass]="getItemClass(item, i)"
    	    *ngFor="let i = index; let item of ( items | available: filterString)" dnd-draggable [dragEnabled]="true" [dragData]="item" class="item">
    	    <div class="itemLabel"><span (click)="itemClicked(item, i, $event)"><strong>{{item.label}}</strong></span><small>{{item.dbTable}}</small></div>
    	    <div class="itemProperties">
    	      <span (click)="toggleInGrid(item)">
    	        <i [ngClass]="{'fa-square-o': !item.inGrid, 'fa-check-square-o': item.inGrid}" class="fa" aria-hidden="true"></i></span>
    	      <span class="search">
    	        <i (click)="addToFilter(item)" [ngClass]="isItemInFilter(item)?'active':''" class="fa fa-search" aria-hidden="true"></i>
    	      </span>
    	    </div>
    	    <div class="itemActions"></div>
    	</ul>
    	<div class="clearfix"></div>
`;