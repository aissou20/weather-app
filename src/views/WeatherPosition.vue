<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Météo locale</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="weather-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Météo</ion-title>
        </ion-toolbar>
      </ion-header>
      <!--      <current-weather-header v-if="currentWeather" :weather="currentWeather"/>
            <hour-forecast-card v-if="hoursForecasts" :hoursForecasts="hoursForecasts"/>-->
      <current-weather
          v-if="latitude && longitude"
          :latitude="latitude"
          :longitude="longitude"
      />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, toastController} from '@ionic/vue';
import {Coordinates} from "@/interfaces/coordinates.interface";
import CurrentWeather from "@/components/CurrentWeather.vue";


export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    CurrentWeather,
  },

  data() {
    return {
      // currentWeather: null,
      //hoursForecasts: null,
      latitude: "",
      longitude: "",
    }
  },
  async mounted() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        //const {latitude, longitude} = position.coords;
        const coordinates = position.coords as Coordinates;
        this.latitude = coordinates.latitude;
        this.longitude = coordinates.longitude;
        //this.currentWeather = (await this.getCurrentWeather(latitude, longitude)) as CurrentWeather;
        //this.hoursForecasts = (await this.getWeatherForecast(latitude, longitude)) as Promise<Array<HourForecast>>
      });
    } else {
      throw new Error("Geolocation is not available");
    }
  },

  methods: {
    /*async getCurrentWeather(
        latitude: number,
        longitude: number
    ): Promise<CurrentWeather> {
      const coordinates = {latitude, longitude} as Coordinates;
      return await WeatherService.getCurrentWeather(coordinates);
    },
    async getWeatherForecast(
        latitude: number,
        longitude: number
    ): Promise<Array<HourForecast>> {
      const coordinates = {latitude, longitude} as Coordinates;
      return await WeatherService.getWeatherForecast(coordinates);
    },*/
    async showGeolocationNotAvailable() {
      navigator.permissions.query({name: "geolocation"}).then(async () => {
        const toast = await toastController.create({
          message: `La géolocalisation n'est pas disponible sur votre support.`,
          duration: 2000,
        });
        return toast.present();
      });
    },

  },
}

</script>
<style scoped>
.weather-content{
  --background:#395270;
}
</style>