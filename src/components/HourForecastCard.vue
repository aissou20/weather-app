<template>
  <div id="container">
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Prévisions de la journée</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content class="custom-weather-hour-forecast-card">
        <div v-for="(hourForecast,index) in hoursForecasts " :key="index" class="previson-container">
          <v-card class="forecast-container">
            <v-card-text class="forecast-card">
              <v-row align="center">
                <v-col
                    class="text-h5"
                    cols="6"
                >
                  {{ hourForecast.hour }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <img
                      width="24"
                      height="24"
                      :src="`http://openweathermap.org/img/wn/${hourForecast.weather.icon}.png`"
                      alt="weather_icon"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  {{ hourForecast.temperature }}
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  {{ hourForecast.weather.description }}
                </v-col>
              </v-row>
            </v-card-text>

          </v-card>

        </div>

      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>

export default {
  name: "HourForecastCard",
  props: {
    hoursForecasts: Array,
    // hoursForecasts:  {
    //   type: Array,
    //   default: function () { return [] }
    // },
  },
}
</script>

<style scoped>

.custom-weather-hour-forecast-card{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.forecast-container{
  display: flex;
}
.forecast-card{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  margin-bottom:10px;
}

</style>