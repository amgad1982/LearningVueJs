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
                    root.task.id = root.taskList.length > 0 ? root.taskList[root.taskList.length - 1].id + 1 : 1;
                    root.task.status = 'new';

                    var newTask = new Object();
                    newTask.id = root.task.id;
                    newTask.title = root.task.title;
                    newTask.startDate = root.task.startDate;
                    newTask.endDate = root.task.endDate;
                    newTask.status = root.task.status;
                    root.taskList.push(root.task);

                    root.task = {};

                }
                return;
            });

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