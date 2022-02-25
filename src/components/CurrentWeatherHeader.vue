<template>
  <div id="container">
    <ion-card class="weather-card">
      <ion-card-header>
        <ion-card-subtitle>{{ weather.city }}</ion-card-subtitle>
        <ion-card-title>{{ temperatureWithoutDecimals }}° </ion-card-title>
      </ion-card-header>
      <ion-card-content class="custom-weather-card">
        <img
            width="100"
            height="100"
            :src="`http://openweathermap.org/img/wn/${weather.weather.icon}.png`"
         alt="weather_icon"/>
        {{ weather.weather.description }}
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrentWeather",
  props: {
    weather: Object,
  },
  computed: {
    temperatureWithoutDecimals() {
      return this.weather.temperature.toFixed(0);
    },
  },
};
</script>

<style scoped>
#container {
  text-align: center;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
.custom-weather-card {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.weather-card{
  --background:#183b66;

}
</style>