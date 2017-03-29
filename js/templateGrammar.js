




var vm = new Vue({
	el: '#app',
	data: {
		message: 'this is nick test',
		html: '<div style="color:red; ">nick</div>',
		id: 'test',
		num: 12,
		seen: false
	},

	filters: {
	    capitalize: function (value) {
	      if (!value) return ''
	      value = value.toString()
	      return value.charAt(0).toUpperCase() + value.slice(1)
	    }
  	},

	beforeCreate: function() {
		console.log('vue beforeCreate...');
	},
	created: function() {
		console.log('vue created');
	},
	beforeMount: function() {
		console.log('vue beforeMount');
	},
	mounted: function() {
		console.log('vue mounted');
	},
	beforeDestroy: function() {
		console.log('vue beforeDestroy');
	},
	destroyed: function() {
		console.log('vue destroyed');
	}
});

document.getElementById('btn').onclick = function() {
	vm.seen = (vm.seen === true) ? false : true;
}





console.log(vm.$el === document.getElementById('app'));



