Ext.define('ToolbarSpinner.view.Main', {
    extend: 'Ext.Container',

    config: {
		layout: 'fit',
        items : [{
			title  : 'Home',
			iconCls: 'home',
			items  : [{
				docked: 'top',
				xtype : 'titlebar',
				title : 'Ext.jsv.ToolbarSpinner',
				items : {
					xtype : 'tbarspinner',
					align : 'right',
					hidden: true
				}
			}, {
				xtype: 'container',
				html : [
					'<h3>How to use:</h3>',
					'<code>',
						'items: {<br />',
						'&nbsp;&nbsp;docked: \'top\',<br />',
						'&nbsp;&nbsp;xtype : \'titlebar\'<br />',
						'&nbsp;&nbsp;title : \'ToolbarSpinner\'<br />',
						'&nbsp;&nbsp;items : {<br />',
						'&nbsp;&nbsp;&nbsp;&nbsp;xtype : \'tbarspinner\'<br />',
						'&nbsp;&nbsp;&nbsp;&nbsp;align : \'right\'<br />',
						'&nbsp;&nbsp;}<br />',
						'}<br />',
					'</code>'
				].join(''),
				styleHtmlContent: true
			}, {
				xtype: 'button',
				text : 'Show Spinner',
				id   : 'ToggleSpinner'
			}],
			styleHtmlContent: true
		}]
    }
});
