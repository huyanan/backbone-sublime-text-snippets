define([
	'jquery',
	'backbone',
	'text!/app/pluginCenter/plugins/${1}/template/${2}Tpl.ejs',
], function(
	\$,
	Backbone,
	${2}Tpl
) {
	// ==========================================
	// Backbone View: ${2}
	// Represents:
	// Server resource path:
	// ==========================================

	var ${1}View = Backbone.View.extend({


		/**
         * @property tagName
         * @type String
         */
        tagName: '${3:div}',

        /**
         * @property className
         * @type String
         */
        className: '${1}',

		// ------------------------------------------
		// Property: template
		// Description: ${2} Template
		// ------------------------------------------

		template: _.template(${2}Tpl),


		// ------------------------------------------
	    // Property: events
	    // Description: Bound events to the view's DOM elements
	    // ------------------------------------------

	    events: {},

		// ------------------------------------------
		// Initialize:
		// Arguments:
		//    options: {}
		// Description:
		// ------------------------------------------

		initialize: function(options) {

		},

		// ------------------------------------------
	    // Method: render
	    // Arguments:
	    // Description:
	    // ------------------------------------------

	    render: function() {
	    	var data = this.model.toJSON();

        	var html = this.template({${1}:data});
        	this.$el.html(html);

        	return this;
	    },


	});

	return ${1}View;
});