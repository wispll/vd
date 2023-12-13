<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ name }}</span>
        <el-button :icon="RouletteIcon" @click="goRoulette(id)"/>
      </div>
    </template>
      <div>chips : </div>
      <div v-if="bananaSpoil()">
        <BananaIcon v-for="v in bananaSpoil()"/><br>
      </div>
      <div v-if="appleSpoil()">
        <AppleIcon v-for="v in appleSpoil()"/><br>
      </div>
      <div v-if="purpleSpoil()">
        <PurpleIcon v-for="v in purpleSpoil()"/><br>
      </div>
      <div v-if="cherrySpoil()">
        <CherryIcon v-for="v in cherrySpoil()"/>
      </div>
    <template #footer>balance : {{ price }}</template>
  </el-card>
  <button @click="printStore"> store </button>
</template>
    <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->

<script setup>

import RouletteIcon from './icons/IconRoulette.vue'
import AppleIcon from './icons/IconApple.vue'
import BananaIcon from './icons/IconBanana.vue'
import CherryIcon from './icons/IconCherry.vue'
import PurpleIcon from './icons/IconPurple.vue'
import { useRouter } from 'vue-router'
import { useSpoilsStore } from "../stores/spoils";
import { storeToRefs } from 'pinia'


const props = defineProps({
  id: String,
  name: String,
  price: Number,
  spoils: Array
})

const spoilStore = useSpoilsStore();
const { getSpoils } = storeToRefs(spoilStore)

const bananaSpoil = () => {
  console.log('compute')
  if(!getSpoils.value(props.id)){
  console.log('compute false')
    return false 
  }
  return getSpoils.value(props.id).data[0]
}
const appleSpoil = () => {
  if(!getSpoils.value(props.id)){
    return false 
  }
  return getSpoils.value(props.id).data[1]
}

const cherrySpoil = () => {
  if(!getSpoils.value(props.id)){
    return false 
  }
  return getSpoils.value(props.id).data[3]
}
const purpleSpoil = () => {
  if(!getSpoils.value(props.id)){
    return false 
  }
  return getSpoils.value(props.id).data[2]
}

const router = useRouter()

function goRoulette(id){
  // router.push('roulette')
  router.push({name: 'roulette', query: {useId: props.id}})
}

function printStore(){
  console.log(getSpoils.value(props.id).data)
}

</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 320px;
}
</style>