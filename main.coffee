class SELECT
	_getElementVal = (value) ->
		if @el
		  set = !!value
		  useValueProperty = (value) ->
		  	if @el.value = value
		  		@api
		  	else @el.value

		  	switch @el.nodeName.toLowerCase() 
		  		when "input"
		  			type = @el.getAttribute("type")
		  			if type is "radio" || type is "checkbox"
		  				els = queryAll('[name="' + @el.getAttribute("name") + '"]', parent)
		  				values = []
		  				index = -1

		  				###continue while ++index < els.length
		  					if set && els[index].checked? && els[index].value
		  						"test"
		  						###

		  		when "textarea"
		  			useValueProperty.call this, value
		  		when "select"
		  			if set?
		  				options = queryAll("option", @el)
		  			else
		  				@el.value
		  		else
		  			if set?
		  				@el.innerHTML = value
		  			else
		  				if typeof @el.textContent isnt "undefined"
		  					return @el.textContent
		  				else if typeof @el.innerText isnt "undefined"
		  					return typeof @el.innerText
		  				else
		  					return @el.innerHTML
		  					
		  				

		  	return set ? api : null
		return null
		
	constructor: (el, parent) ->
		@api = { el: null }
		@api.val = (value) ->
			_getElementVal value

		console.log("build", typeof el)
		switch typeof el
			when "string"
				parent = if parent && typeof parent is "string" then @query(parent) else parent
				@api.el = @query el, parent
			when "object"
				if typeof el.nodeName isnt "undefined"
					@api.el = el


		
		return @api

	query: (selector, parent) ->
		console.log("piss", selector, parent)
		parent = parent || document
		return parent.querySelector selector
	queryAll: (selector, parent) ->
		parent = parent || document
		return parent.querySelectorAll selector


window.Select = SELECT
