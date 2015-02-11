define([
	'jquery',
	'backbone'
], function(
	\$,
	Backbone
) {
	// ==========================================
	// Backbone Model: ${2}
	// Represents:
	// Server resource path:
	// ==========================================

	var ${1}Model = Backbone.Model.extend({


		// ------------------------------------------
	    // Property: defaults
	    // Description: Default properties for the model
	    // ------------------------------------------

	    defaults: {},


		// ------------------------------------------
		// Initialize:
		// Arguments:
		//    options: {}
		// Description:
		// ------------------------------------------

		initialize: function(options) {
			return {
				'${1}s': this.map(function(model) {
					return model.toJSON();
				})
			};
		},

		toJSON: function(){

		}



	});

	return ${1}Model;
});