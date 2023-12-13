<template>
  <div>
    <div class="header">
      <el-page-header @back="goBack">
        <template #content>
          <span > Roulette </span>
        </template>
      </el-page-header>
    </div>
    <div class="content">
      <Roulette 
        :size="500"
        :display-shadow="true"
        :centered-indicator="true"	
        :base-size="150"
        :base-display="true"
        :base-display-shadow="true"
        base-background="#EEAA33"
        ref="wheel" 
        :items="items" 
        @click="launchWheel"
        @wheel-start="wheelStartedCallback"
        @wheel-end="wheelEndedCallback" >
          <template #baseContent>
            <div v-html="wheelContent"></div>
          </template>
      </Roulette>
    </div>
    <div class="footer">
      <el-button round @click="reset">Reset</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Roulette } from 'vue3-roulette'
import { useRouter, useRoute} from 'vue-router'
import { useSpoilsStore } from "../stores/spoils";

const router = useRouter();
const route = useRoute();

const spoilStore = useSpoilsStore();

const wheel = ref(null);

const wheelContent = '<strong>⬆️ Touch Me! ⬆️</strong>'
const items = [
  { id: 0, name: "Banana", htmlContent: "Banana", textColor: "", background: "" },
  { id: 1, name: "Apple", htmlContent: "Apple", textColor: "", background: "" },
  { id: 2, name: "Purple", htmlContent: "Purple", textColor: "", background: "" },
  { id: 3, name: "Cherry", htmlContent: "Cherry", textColor: "", background: "" },
];

function launchWheel (){
  wheel.value.launchWheel();
};

function wheelEndedCallback (itemSelected){
  spoilStore.saveSpoils(route.query.useId,itemSelected.id)
  
};

function wheelStartedCallback(){

};

function reset(){
  wheel.value.reset();
};

function goBack(){
  router.push('/');
};
</script>

<style scoped>
.content{
  position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
}
.footer{
  position: absolute;
  top: 90%;
  left: 90%;
}
</style>