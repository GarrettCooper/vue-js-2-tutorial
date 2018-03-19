new Vue ({
  el: '#exercise',
  data: {
    Name: 'Garrett Cooper',
    Age: 38,
    image: 'https://www.benefitmany.com/logo.png'
  },
  methods: {
    Random: function() {
      return Math.random();
    }
  }
});
