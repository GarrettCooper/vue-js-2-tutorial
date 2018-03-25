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
    title: 'Hello World!',
    title2: 'Goodbye World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    changeTitle: function(event) { // default 'event' object created by javascript
      this.title = event.target.value;
      /* 'this' give you access to all of the data properties and
          methods in the Vue instance */
    },
    sayHello: function(){
      //return 'Hello';
      return this.title2;
    },
    newHello: function(){
      //return 'Hello';
      this.title = "NEW Hello World!";
      return this.title;
    },
    increase: function(step, event) {
      return this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(){
      alert('Alert!');
    }
  }
});
