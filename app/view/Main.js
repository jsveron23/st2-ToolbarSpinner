Ext.define('ToolbarSpinner.view.Main', {
    extend  : 'Ext.Container',
	requires: [
		'Ext.TitleBar'
	],

    config  : {
        items: {
            docked: 'top',
            xtype : 'titlebar',
            title : 'Toolbar Loader',
			items : {
				xtype: 'component',
				style: 'font-size: 60%;',
				align: 'right',
				html : [
					'<div class="x-loading-spinner">',
						'<span class="x-loading-top"></span>',
						'<span class="x-loading-right"></span>',
						'<span class="x-loading-bottom"></span>',
						'<span class="x-loading-left"></span>',
					'</div>'
				].join('')
			}
        }
    }
});
