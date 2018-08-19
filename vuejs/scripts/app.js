Vue.use(VeeValidate);

var root = new Vue({
    el: '.root',
    data: {
        taskList: [],
        task: {}
    },
    methods: {
        newTask: function() {
            this.$validator.validateAll().then(function(result) {
                if (result) {

                }
            });
            this.task.id = this.taskList.length > 0 ? this.taskList[this.taskList.length - 1].id + 1 : 1;
            this.task.status = 'new';

            var newTask = new Object();
            newTask.id = this.task.id;
            newTask.title = this.task.title;
            newTask.startDate = this.task.startDate;
            newTask.endDate = this.task.endDate;
            newTask.status = this.task.status;
            this.taskList.push(this.task);

            this.task = {};

        },
        startTask: function(id) {
            var t = _.find(this.taskList, ['id', id]);
            t.status = 'started';
            this.$set(this.taskList, _.findIndex(this.taskList, ['id', id]), t);
        },
        pauseTask: function(id) {
            var t = _.find(this.taskList, ['id', id]);
            t.status = 'paused';
            this.$set(this.taskList, _.findIndex(this.taskList, ['id', id]), t);
        },
        removeTask: function(id) {
            var t = _.find(this.taskList, ['id', id]);
            t.status = 'removed';
            this.$set(this.taskList, _.findIndex(this.taskList, ['id', id]), t);
        }
    },
    computed: {

    }
})