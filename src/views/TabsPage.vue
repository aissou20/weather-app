<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="myPosition" href="/tabs/myPosition">
          <ion-icon src="../../assets/icon/location.svg" />
          <ion-label>Ma position</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="searchWeather" href="/tabs/searchWeather">
          <ion-icon src="../../assets/icon/search.svg" />
          <ion-label>Recherche ville</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="favoritesWeather" href="/tabs/favoritesWeather">
          <ion-icon src="../../assets/icon/favorites-list.svg" />
          <ion-label>Favoris</ion-label>
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