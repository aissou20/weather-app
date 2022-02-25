<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Liste des favoris</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="favorites-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Liste des favoris</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card class="item-card-content" v-for="(city, index) in favoritesCity" :key="index">
        <ion-card-header>
          <ion-card-title @click="showWeatherLocation(city)"
         class="title" >{{ city }}
          </ion-card-title>
          <ion-card-content>
            <ion-button class="remove-button" @click="getCurrentCity(index)">Supprimer</ion-button>
          </ion-card-content>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { trash } from "ionicons/icons";
import { mapActions, mapState } from "pinia";
import { cityStore } from "@/store/city.store";

export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  computed: {
    ...mapState(cityStore, ["favoritesCity"]),
  },
  data() {
    return {
      trash,
    };
  },
  methods: {
    ...mapActions(cityStore, ["deleteCity"]),
    showWeatherLocation(city: string): void {
      window.location.href = `/tabs/searchWeather?city=${city}`;
    },
    getCurrentCity(index: number): void {
      return this.deleteCity(index);
    },
  },
};
</script>

<style scoped>

.favorites-content{
    --background:#183b66;

}
.item-card-content{
  --background:#ffffff;

}
.title{
  --color:#1e1e1e;
}
.remove-button{
  --background:#183b66;
  --border-radius:5px;

}
</style>