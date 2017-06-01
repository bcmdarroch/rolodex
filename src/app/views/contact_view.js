import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
// import Modal from 'backbone.modal';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // this.listenTo(this.model, "change", this.render);

    // listenTo trigger for more details
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    // console.log(compiledTemplate);
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    // click card, trigger 'showdetails'
    "click .contact-card" : "selectedHandler"
    // edit contact
  },
  selectedHandler: function(event) {
    this.trigger("showDetails", this.model);
  }
});

export default ContactView;
