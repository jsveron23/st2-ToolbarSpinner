Ext.Loader.setPath({
	'Ext.jsv': 'jsv'
});

Ext.application({
    name: 'ToolbarSpinner',

    requires: [
        'Ext.MessageBox',
		'Ext.TitleBar',

		'Ext.jsv.ToolbarSpinner'
    ],

    views: ['Main'],

	controllers: ['Spinner'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

	viewport: {
        autoMaximize: true
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('ToolbarSpinner.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            'Application Update',
            'This application has just successfully been updated to the latest version. Reload now?',
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
