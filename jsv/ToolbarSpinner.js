Ext.define('Ext.jsv.ToolbarSpinner', {
    extend: 'Ext.Component',
	xtype : 'tbarspinner',
	
    config: {
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
});
