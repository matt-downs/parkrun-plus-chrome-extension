Vue.component('results-card', {
    props: ['day'],
    template: `
    <md-layout md-row md-align="center">
        <md-layout md-column class="card-column">
            <md-card class="day-card">
                <md-card-header>
                    <div class="md-title">{{timeAgo}}</div>
                    <div class="md-subhead">{{date}}</div>
                </md-card-header>

                <md-card-content>
                    <md-table v-once>
                        <md-table-header>
                            <md-table-row>
                                <md-table-head>Name</md-table-head>
                                <md-table-head>Time</md-table-head>
                                <md-table-head>Location</md-table-head>
                            </md-table-row>
                        </md-table-header>

                        <md-table-body>
                            <!-- Render each row in the table using the template "result-row" -->
                            <result-row v-for="result in day.results" :result="result" :key="result.athleteId"></result-row>
                        </md-table-body>
                    </md-table>


                </md-card-content>
            </md-card>
        </md-layout>
    </md-layout>
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
        <md-table-row>
            <md-table-cell>
                <a href="#" v-on:click="openAthleteLink(result.athleteId)">{{result.name}}</a>
            </md-table-cell>
            <md-table-cell>{{result.time}}</md-table-cell>
            <md-table-cell>{{result.event}}</md-table-cell>
        </md-table-row>
  `,
    methods: {
        openAthleteLink(athleteId) {
            var url = 'http://www.parkrun.com.au/results/athleteresultshistory/?athleteNumber=' + athleteId
            window.open(url);
        }
    }
});


Vue.component('athletes-card', {
    props: ['athletes'],
    template: `
    <md-layout md-row md-align="center">
        <md-layout md-column class="card-column">
            <md-card class="day-card">
                <md-card-header>
                    <div class="md-title">Athletes</div>
                </md-card-header>
                <md-card-content>
                    <md-list>

                        <md-list-item v-for="athlete in athletes" :key="athlete.athleteId"">
                            <span><a href="#" v-on:click="openAthleteLink(athlete.athleteId)">{{athlete.name}}</a></span>
                            <md-menu md-align-trigger>
                                <md-button class="md-icon-button" md-menu-trigger>
                                    <md-icon>more_horiz</md-icon>
                                </md-button>

                                <md-menu-content>
                                    <md-menu-item>Coming soon ;)</md-menu-item>
                                </md-menu-content>
                            </md-menu>
                        </md-list-item>

                    </md-list>
                </md-card-content>
            </md-card>
        </md-layout>
    </md-layout>
  `,
    methods: {
        openAthleteLink(athleteId) {
            var url = 'http://www.parkrun.com.au/results/athleteresultshistory/?athleteNumber=' + athleteId
            window.open(url);
        }
    }
});