Ext.define('ToolbarSpinner.controller.Spinner', {
	extend: 'Ext.app.Controller',
	
	config: {
		refs: {
			spinner: 'tbarspinner'
		},
		
		control: {
			'#ToggleSpinner': {
				tap: 'tapToggleSpinner'
			}
		}
	},
	
	tapToggleSpinner: function(btn) {
		var spinner = this.getSpinner();
		
		if(spinner.isHidden()) {
			spinner.show();
			btn.setText('Hide Spinner');
		} else {
			spinner.hide();
			btn.setText('Show Spinner');
		}
	}
});