// Generated by CoffeeScript 1.7.1
(function() {
  var SELECT;

  SELECT = (function() {
    var _getElementVal;

    _getElementVal = function(value) {
      var set, useValueProperty;
      if (this.el) {
        set = !!value;
        useValueProperty = function(value) {
          var els, index, options, type, values;
          if (this.el.value = value) {
            this.api;
          } else {
            this.el.value;
          }
          switch (this.el.nodeName.toLowerCase()) {
            case "input":
              type = this.el.getAttribute("type");
              if (type === "radio" || type === "checkbox") {
                els = queryAll('[name="' + this.el.getAttribute("name") + '"]', parent);
                values = [];
                index = -1;

                /*continue while ++index < els.length
                		  					if set && els[index].checked? && els[index].value
                		  						"test"
                 */
              }
              break;
            case "textarea":
              useValueProperty.call(this, value);
              break;
            case "select":
              if (set != null) {
                options = queryAll("option", this.el);
              } else {
                this.el.value;
              }
              break;
            default:
              if (set != null) {
                this.el.innerHTML = value;
              } else {
                if (typeof this.el.textContent !== "undefined") {
                  return this.el.textContent;
                } else if (typeof this.el.innerText !== "undefined") {
                  return typeof this.el.innerText;
                } else {
                  return this.el.innerHTML;
                }
              }
          }
          return set != null ? set : {
            api: null
          };
        };
      }
      return null;
    };

    function SELECT(el, parent) {
      this.api = {
        el: null
      };
      this.api.val = function(value) {
        return _getElementVal(value);
      };
      console.log(typeof el);
      switch (typeof el) {
        case "string":
          this.api.el = this.query(el, parent);
          break;
        case "object":
          if (typeof el.nodeName !== "undefined") {
            this.api.el = el;
          }
      }
      return this.api;
    }

    SELECT.prototype.query = function(selector, parent) {
      parent = parent || document;
      return parent.querySelector(selector);
    };

    SELECT.prototype.queryAll = function(selector, parent) {
      parent = parent || document;
      return parent.querySelectorAll(selector);
    };

    return SELECT;

  })();

}).call(this);
