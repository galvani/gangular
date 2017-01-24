export const ReportTemplate = `
	  <div class="container wf-reports">
    	<h2>{{model.name}}</h2>
    	<div class="itemList availableList">
    		<available-list
    			[(items)]="model.items.available"
    			[(filter)]="model.items.filtered"
    			[(selected)]="model.state.selected"
    			[(filterString)]="model.state.filters.available"
    			></available-list>
    	</div>
    	<div class="itemList selectedList">
    		<selected-list [(items)]="model.items.available"></selected-list>
    	</div>
    	<div class="itemList filterList"><filter-list [items]="model.items.filtered"></filter-list></div>
    	<div class="grid"><grid [model]="model"></grid></div>
    </div>
`;