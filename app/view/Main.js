Ext.define('ToolbarSpinner.view.Main', {
    extend: 'Ext.tab.Panel',

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title  : 'Home',
                iconCls: 'home',

                items  : [{
                    docked: 'top',
                    xtype : 'titlebar',
                    title : 'Ext.jsv.ToolbarSpnnier',
					items : {
						xtype : 'tbarspinner',
						align : 'right',
						hidden: true
					}
                }, {
					xtype: 'button',
					text : 'Show Spinner',
					id   : 'ToggleSpinner'
				}],
				
				styleHtmlContent: true
            }
        ]
    }
});
