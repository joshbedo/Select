class SELECT
	_getElementVal = (value) ->
		  set = !!value
		  useValueProperty = (value) ->
		  	if set?
		  		@el.value = value
		  		return @api
		  	else
		  		@el.value

	  	switch @el.nodeName.toLowerCase() 
	  		when "input"
	  			type = @el.getAttribute("type")
	  			if type is "radio" || type is "checkbox"
	  				els = queryAll('[name="' + @el.getAttribute("name") + '"]', parent)
	  				values = []
	  				i = -1

	  				while ++i < els.length
	  					if set && els[i].checked
	  						els[i].removeAttribute('checked');
	  			else
	  				return useValueProperty.apply @, [value]
	  		 break

	  		when "textarea"
	  		 return useValueProperty.call @, [value]
	  		 break
	  		when "select"
	  			if set?
	  				options = queryAll("option", @el)
	  			else
	  				@el.value
	  		else
	  			if set
	  				@el.innerHTML = value
	  			else
	  				if typeof @el.textContent isnt "undefined"
	  					return @el.textContent
	  				else if typeof @el.innerText isnt "undefined"
	  					return typeof @el.innerText
	  				else
	  					return @el.innerHTML
	  		 break
	  					
	  				

	  	#return if set then @api else null
		  return @api
		
	constructor: (el, parent) ->
		@api = { el: null }
		@api.val = (value) ->
			#return _getElementVal value
			return _getElementVal.call @, value
		switch typeof el
			when "string"
				parent = if parent && typeof parent is "string" then @query(parent) else parent
				@api.el = @query el, parent

			when "object"
				if typeof el.nodeName isnt "undefined"
					@api.el = el


		
		return @api

	query: (selector, parent) ->
		parent = parent || document
		return parent.querySelector selector
	queryAll: (selector, parent) ->
		parent = parent || document
		return parent.querySelectorAll selector


window.Select = SELECT
