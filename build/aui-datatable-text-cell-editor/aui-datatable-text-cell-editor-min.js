YUI.add("aui-datatable-text-cell-editor",function(e,t){var n=e.getClassName("form","control"),r=e.getClassName("celleditor","element"),i=e.Component.create({NAME:"textCellEditor",EXTENDS:e.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<input autocomplete="off" class="'+[r,n].join(" ")+'" type="text" />'}});e.TextCellEditor=i},"3.1.0-deprecated.13",{requires:["aui-datatable-base-options-cell-editor"]});
