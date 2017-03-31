

var data = {a: 1};


var vm = new Vue({
	el: '#app',
	data: {
		list: [
			'item1',
			'item2',
			'item3'
		]
	}
});


document.getElementById('testInput').onkeyup = function(event) {
	var e = event || window.event;
	if(e.keyCode == 13) {
		vm.list.push(this.value);
	}
}



var vmm = new Vue({
	el:'#objDiv',
	data: {
		numbers: [1, 2, 3, 4, 5, 6],
		obj: {
			a: {id: 'id1', url: 'https://www.baidu.com', msg: 'this is obj attr_1'},
			b: {id: 'id2', url: 'https://www.baidu.com', msg: 'this is obj attr_2'},
			c: {id: 'id3', url: 'https://www.baidu.com', msg: 'this is obj attr_3'}
		}
	},
	computed: {
		evenNumbers: function() {
			return this.numbers.filter(function(num) {
				return !(num & 1);
			});
		}
	},
	methods: {
		even: function(numbers) {
			return this.numbers.filter(function(num) {
				return !(num & 1);
			});
		}
	}
});

document.getElementById('changeObj').onclick = function() {
	// vmm.obj['a']['msg'] = 'message after changed';
	Vue.set(vmm.obj, 'a', {msg: 'message after changed by vue'});
}




