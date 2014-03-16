chai = require "chai"
should = chai.should()
expect = chai.expect

Select = require "../main"

describe "Should select DOM elements", ->
	task1 = task2 = null
	it "should select footer element", ->
		selector = new Select("footer").el
		console.log selector
		selector.el.should.equal true



