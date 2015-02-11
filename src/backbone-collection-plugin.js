define([
	'jquery',
	'backbone',
	'/app/pluginCenter/plugins/${1}/${2}Model.js'
], function(
	\$,
	Backbone,
	${2}Model
) {
	// ==========================================
	// Backbone Collection: ${2}
	// Represents:
	// Server resource path:
	// ==========================================

	var ${1}Collection = Backbone.Collection.extend({



		// ------------------------------------------
		// Property: model
		// Description: The type of model that each item in this collection represents
		// ------------------------------------------

		model: ${2}Model,

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

	return ${1}Collection;
});