<template>
  <div class="home">
    <i class="fas fa-headphones" id="headphone-icon"></i>
    <h4>Vue Music App</h4>
    <br>
    <div class="container">
      <div class="row">
        <!-- left column -->
        <div class="col-md-4">
          <h4 style="text-align:left;">Upcoming Events</h4>
          <div class="card">
            <div class="card-header" style="background-color:white;">
               {{ event._embedded.events[1].name }}
            </div>
            <div class="card-body">
              <!-- <ul id="events_list">
                <li v-for="events in event" v-bind:key="events">
                  {{ event._embedded.events.name }}
                </li>
              </ul> -->
                Date: {{ event._embedded.events[2].dates.start.localDate }} <br>
                Venue: {{ event._embedded.events[2]._embedded.venues[0].name }}
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Tickets</button>
            </div>
          </div>
          <br>
          <div class="card">
            <div class="card-header" style="background-color:white;">
               {{ event._embedded.events[8].name }}
            </div>
            <div class="card-body">
              <!-- <ul id="events_list">
                <li v-for="events in event" v-bind:key="events">
                  {{ event._embedded.events.name }}
                </li>
              </ul> -->
                Date: {{ event._embedded.events[8].dates.start.localDate }} <br>
                Venue: {{ event._embedded.events[8]._embedded.venues[0].name }}
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Tickets</button>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <!-- <h1>Events for You</h1>
          <div class="card">
            <div class="card-header" style="background-color:white;">
              Title
            </div>
            <div class="card-body"></div>
            Content
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// takes export from API.js and stores it in variable API
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      event: {},
    };
  },
  mounted() {
    API.getEvents().then((result) => {
      console.log(result);
      this.event = result;
    });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Kanit|Staatliches&display=swap');

*{
  font-family: 'Kanit', sans-serif;
}

.container{
  margin-bottom:100px;
}

.card {
  color:black !important;
  background-color:rgba(255, 255, 255, 0.6) !important;
}

h1 {
  color:#f1f1f1;
}

h4 {
  color:#f1f1f1;
  margin:0px;
  letter-spacing: 1px;
}

#headphone-icon{
  color:white;
  font-size:35px;
  padding:5px 0px 0px 0px;
}
</style>
