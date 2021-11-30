<template>
  <div class="VueContainer">
    <div class="VueContainer__logo-container">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <div class="VueContainer__content">
      <form class="Searchbar">
        <input type="text" v-model="inputSearch" placeholder="O que você está procurando?">
        <button @click.prevent="filterCars">Buscar</button>
      </form>

      <ul class="VueContainer__cars-list">
        <li v-for="car in cars" :key="car.name">
          <Card :name="car.name" :imageUrl="car.imageUrl"/>         
        </li>
      </ul>  

      <p v-if="cars.length === 0">Nenhum resultado encontrado para a sua pesquisa</p>
          
    </div>
    
  </div>
</template>

<script>

import Card from './components/Card.vue'
import { allCars } from './constants/cars'

export default {
  name: 'App',
  components: {
    Card
  },
  data(){
    return {
      inputSearch: "",
      cars: allCars
    }
  },
  methods: {
    filterCars(e){
      e.preventDefault() 
      
      if(this.inputSearch === ""){
        this.cars = allCars
      } else {
        this.cars = allCars.filter(car => car.name.toUpperCase().includes(this.inputSearch.toUpperCase()))   
      }      
    }
  }
}
</script>

<style>
.VueContainer {
  display: flex;
  width: 100%;  
  border: solid 2px #07e195;
  border-radius: 0.5rem; 
  margin-bottom: 1rem;
}

.VueContainer__logo-container {
  background-color: #07e195;
  padding: 0.5rem;    
  position: relative;
  display: flex;
  align-items: center;
}

.VueContainer__logo-container::before {
  content: '';
  position: absolute;
  width: 0.5rem;
  height: 100%;
  background: #07e195;
  bottom: 0;
  right: 0;
  transform: translateX(100%);
}

.VueContainer__logo-container::after {
  content: '';
  position: absolute;
  width: 1rem;
  height: 100%;
  border-radius: 0.5rem;
  background: #fff;
  bottom: 0;
  right: 0;
  transform: translateX(100%);
}

.VueContainer__logo-container img {
  width: 2rem;
}

.VueContainer__content {   
  padding: 1rem
}

.VueContainer__cars-list {
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 33vw));
  width: 100%;
}

.Searchbar {
  display: flex;
  margin-bottom: 1rem;
}

.Searchbar input{
  padding: 0.5rem;
  border-radius: 1rem 0 0 1rem;
  border: solid 2px #ccc;
  width: 100%;
  max-width: 20rem;
  outline: none;
  transition: all 0.3s;
}

.Searchbar input:focus{
  border-color: #07e195;
}

.Searchbar button{
  padding: 0.5rem 1rem;
  border-radius: 0 1rem 1rem 0;
  background-color: #ccc;
  color: #fff;
  transition: all 0.3s;
  outline: none;
  border: none;
}

.Searchbar button:hover{
  background-color: #07e195;
}

</style>
