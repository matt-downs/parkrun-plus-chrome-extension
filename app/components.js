Vue.component('results-card', {
    props: ['day'],
    template: `
        <div class="card mb-5 mt-5">
            <h5 class="card-header">
                {{timeAgo}}
                <small class="text-muted">{{date}}</small>
            </h5>

            <table class="table table-hover mb-0">
               
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th class="hidden-xs-down">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Render each row in the table using the template "result-row" -->
                    <tr is="result-row" v-for="result in day.results" :result="result"></tr>
                </tbody>
            </table>
        </div>
  `,
    computed: {
        timeAgo: function() {
            return moment(this.day.date).fromNow();
        },
        date: function() {
            return moment(this.day.date).format('MMMM Do YYYY');
        }
    }
});


// This template forms each row in the table of results (rendered by each results-card)
Vue.component('result-row', {
    props: ['result'],
    template: `
        <tr>
            <td>1</td>
            <td>
                <a href="#">{{result.name}}</a>
            </td>
            <td>{{result.time}}</td>
            <td class="hidden-xs-down">{{result.event}}</td>
        </tr>
  `
});