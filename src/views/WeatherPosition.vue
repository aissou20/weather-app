<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Météo locale</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Météo</ion-title>
        </ion-toolbar>
      </ion-header>
      <current-weather-header v-if="currentWeather" :weather="currentWeather" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {CurrentWeather} from "@/interfaces/weather.interface";
import {Coordinates} from "@/interfaces/coordinates.interface";
import CurrentWeatherHeader from "@/components/CurrentWeatherHeader.vue";
import WeatherService from "@/services/weather.service";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    // eslint-disable-next-line vue/no-unused-components
    CurrentWeatherHeader,
  },

  data() {
    return {
      currentWeather: null,
    }
  },
  async mounted() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const {latitude, longitude} = position.coords;
        this.currentWeather = (await this.getCurrentWeather(latitude, longitude)) as CurrentWeather;
      });
    } else {
      throw new Error("Geolocation is not available");
    }
  },

  methods: {
    async getCurrentWeather(
        latitude: number,
        longitude: number
    ): Promise<CurrentWeather> {
      const coordinates = {latitude, longitude} as Coordinates;
      return await WeatherService.getCurrentWeather(coordinates);
    },
  },

}

</script>