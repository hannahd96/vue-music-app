const API_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=IE&apikey=FEFDCflnn42O4diLMc4EtBAGJhlvMpvY';

function getEvents() {
  return fetch(API_URL)
    .then(response => response.json());
}

export default {
  getEvents,
};
