<template>
  <ion-page class="ion-page">
    <ion-tabs >
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="iontab"  >
        <ion-tab-button class="ionButton" tab="myPosition" href="/tabs/myPosition">
          <ion-icon class="newColor" src="../../assets/icon/location.svg" />
          <ion-label class="newColor">Ma position</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="searchWeather" href="/tabs/searchWeather">
          <ion-icon class="newColor" src="../../assets/icon/search.svg" />
          <ion-label class="newColor" >Recherche ville</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="favoritesWeather" href="/tabs/favoritesWeather">
          <ion-icon class="newColor" src="../../assets/icon/favorites-list.svg" />
          <ion-label class="newColor">Favoris</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>

<style>
.page{
  --background: #22273f;
}
.newColor{
color :#ffff;
} 

</style>