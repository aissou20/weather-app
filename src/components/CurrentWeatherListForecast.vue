<template>
  <div id="container">
    <ion-card class="prevision-list">
      <ion-card-header>
        <ion-card-subtitle>Prévisions sur 24H</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content class="custom-weather-card">
        <ion-list class="card-list" v-for="(forecast, index) in forecasts" :key="index">
          <ion-item class="items">
            <ion-avatar slot="start">
              <img
                  :src="`http://openweathermap.org/img/wn/${forecast.weather.icon}.png`"
               alt="icône météo"/>
            </ion-avatar>
            <ion-label class="label-color" >
              <h2>{{ forecast.hour }}</h2>
              <h3>{{ forecast.temperature }} </h3>
              <p>{{ forecast.weather.description }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrentWeatherListForecast",
  props: {
    forecasts: Array,
  },
};
</script>

<style scoped>
body{
  color:#ffffff;
}
.items{
  border-bottom: 1px solid white;
 
}
.label-color{
 --color:#ffffff;
}
.prevision-list{
    --background:#183b66;

}
 .card-list{
  --background:transparent;
}
</style>