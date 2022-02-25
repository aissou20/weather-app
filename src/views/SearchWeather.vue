<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Rechercher une ville</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="search-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Rechercher une ville</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-input class="search-input" v-model="city" clear-input value=""></ion-input>
      <ion-button class="buttons" @click="searchWeather()" expand="block"
      >Rechercher</ion-button
      >
      <ion-button class="buttons" @click="addToFavorites()" expand="block"
      >Ajouter en favoris</ion-button
      >
      <current-weather
          v-if="coordinates"
          :latitude="coordinates.latitude"
          :longitude="coordinates.longitude"
      />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonContent,
} from "@ionic/vue";
import coordinatesService from "../services/coordinates.service";
import CurrentWeather from "../components/CurrentWeather.vue";
import { Coordinates } from "@/interfaces/coordinates.interface";
import { mapActions, mapState } from "pinia";
import { cityStore } from "@/store/city.store";

export default {
  components: {
    CurrentWeather,
    IonHeader,
    IonInput,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  data() {
    return {
      city: "",
      coordinates: null,
    };
  },
  async mounted() {
    if (this.$route.query.city) {
      this.city = this.$route.query.city;
      await this.searchWeather();
    }
  },
  computed: {
    ...mapState(cityStore, ["favoritesCity"]),
  },
  methods: {
    ...mapActions(cityStore, ["addNewCity"]),

    async searchWeather(): Promise<void> {
      this.coordinates = null;
      const coordinates = await coordinatesService.getCoordinatesByCityName(
          this.city
      );
      this.coordinates = coordinates as Coordinates;
    },
    addToFavorites(): void {
      return this.addNewCity(this.city);
    },
    checkIfCityAlreadyInFavorites(): boolean {
      const isExistCity: Array<string> = this.favoritesCity.filter(
          (city: string) => city === this.city
      ).length;
      console.log(isExistCity);
      return isExistCity.length > 0;
    },
  },
};
</script>

<style scoped>
.search-content{
    --background:#183b66;
}
.search-input{
  --background:#ffffff;
  --padding-bottom:1em;
  --padding-top:1em;
  --color:#1e1e1e;

}
.buttons{
   --background:#6c95c7;
  --border-radius:5px;
  
}

</style>