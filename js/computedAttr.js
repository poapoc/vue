/**
 * Created by xiaomuqun on 2017/3/30.
 */

var vm = new Vue({
    el: '#app',
    data: {
        message: 'this is nick test',
        html: '<div style="color:red; ">nick</div>',
        id: 'test',
        num: 12,
        seen: false,
        name: 'nick',
        nick: ''
    },

    computed: {
        nickName: function () {
            return this.name + ' hello';
        }
    },

    methods: {
        reverseName: function () {
            return this.name.split('').reverse().join('');
        }
    },

    watch: {
        name: function () {
            this.nick = this.name + 'nick nick';
        }
    }

});


