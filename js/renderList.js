

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

var vmm = new Vue({
	el:'#objDiv',
	data: {
		obj: {
			a: {id: 'id1', url: 'https://www.baidu.com', msg: 'this is obj attr_1'},
			b: {id: 'id2', url: 'https://www.baidu.com', msg: 'this is obj attr_2'},
			c: {id: 'id3', url: 'https://www.baidu.com', msg: 'this is obj attr_3'}
		}
	}
});




