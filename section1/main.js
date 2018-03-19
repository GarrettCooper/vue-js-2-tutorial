/*
Creates a new Vue instance and these instances have 1 major job.
Control their own template of html code, which it renders to the screen.
We have to pass an argument (javascript object) to the constructor function.
One important property the 'el' property. Takes a string as a value.
We setup what part of our html code will be under control of this vue instance.
*/

new Vue({
  el:'#app', // if this referenced a 'class' rather than an 'id', it would be el:'.app',
  data:{
    title: 'Hello World!'
  },
  methods: {
    changeTitle: function(event) { // default 'event' object created by javascript
      this.title = event.target.value;
      /* 'this' give you access to all of the data properties and
          methods in the Vue instance */
    }
  }
});
