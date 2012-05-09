/**
 *
 * @class    Ext.jsv.ToolbarSpinner
 * @author   Ip Myung, Jin
 * @blog     http://blog.werconnected.info/
 * @twitter  https://twitter.com/#!/jsveron23
 * @facebook http://www.facebook.com/jsveron23
 * @email    jsveron23@gmail.com
 *
 */

Ext.define('Ext.jsv.ToolbarSpinner', {
    extend: 'Ext.Component',
	xtype : 'tbarspinner',
	
    config: {
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
    },

	// showSpinner: function() {
	// 	this.show();
	// },
	// 
	// hideSpinner: function() {
	// 	this.hide();
	// }
});
