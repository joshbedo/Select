chai = require "chai"
should = chai.should()
expect = chai.expect

{ SELECT } = require "../main"

describe "Should select DOM elements", ->
	it "should select footer element", ->
		selector = new SELECT("footer")
		expect(Select).to.be.a("object")