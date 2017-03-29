
var data = {a: 1};


var vm = new Vue({
	el: '#app',
	data: data,
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

alert(vm.a);

console.log(vm.$el === document.getElementById('app'));

