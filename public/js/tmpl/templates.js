this["JST"] = this["JST"] || {};

this["JST"]["blocks/button.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<button '; if(type !== null) { ;__p += 'type="' +((__t = ( type )) == null ? '' : __t) +'"'; } ;__p += '\n\t'; if(classes !== null) { ;__p += 'class="' +((__t = ( classes )) == null ? '' : __t) +'"'; } ;__p += '\n\t'; if(id !== null) { ;__p += 'id="' +((__t = ( id )) == null ? '' : __t) +'"'; } ;__p += '\n\t'; if(name !== null) { ;__p += 'name="' +((__t = ( name )) == null ? '' : __t) +'"'; } ;__p += '\n\t>'; if(text !== null) { ;__p +=((__t = ( text )) == null ? '' : __t); } ;__p += '</button>';}return __p};

this["JST"]["blocks/container.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="' +((__t = ( classes)) == null ? '' : __t) +'" id="' +((__t = (id)) == null ? '' : __t) +'"></div>';}return __p};

this["JST"]["blocks/dropdown.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="btn-group block-dropdown" id="' +((__t = (id)) == null ? '' : __t) +'">\n\t<button type="button" class="btn btn-success btn-sm dropdown-toggle js-button" data-toggle="dropdown"><span class="caption"></span>' +((__t = ( caption )) == null ? '' : __t) +'<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu">\n\t\t'; _.each(options, function(option) { ;__p += '\n\t\t\t<li><a href="#" class="js-option" data-value="' +((__t = (option.value)) == null ? '' : __t) +'" data-id="' +((__t = (option.id)) == null ? '' : __t) +'">' +((__t = (option.text)) == null ? '' : __t) +'</a></li>\n\t\t'; }); ;__p += '\n\t</ul>\n</div>';}return __p};

this["JST"]["blocks/input.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="form-group clearfix">\n\t<label for="' +((__t = ( id )) == null ? '' : __t) +'" class="col-sm-2 control-label no-padding-right"> ' +((__t = ( label )) == null ? '' : __t) +' </label>\n\n\t<div class="col-sm-10">\n\t\t<input type="' +((__t = ( inputType )) == null ? '' : __t) +'" class="col-xs-10 col-sm-8" placeholder="' +((__t = ( placeholder )) == null ? '' : __t) +'" id="' +((__t = ( id )) == null ? '' : __t) +'">\n\t</div>\n</div>';}return __p};

this["JST"]["blocks/label.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<span class="labelText ' +((__t = (highlight)) == null ? '' : __t) +'" id="' +((__t = (id)) == null ? '' : __t) +'">' +((__t = (text)) == null ? '' : __t) +'</span>';}return __p};