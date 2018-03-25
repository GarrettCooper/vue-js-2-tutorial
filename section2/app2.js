new Vue ({
  el: '#exercise',
  data:{
    value:'',
    input:''
  },
  methods:{
    alert: function(){
      alert('Alert!');
    },
    values: function(event) {
      this.input = event.target.value;
      return this.input;
    }
  }
});
