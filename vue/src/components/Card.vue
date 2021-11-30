<template>
  <div class="Card">
    <img :src="imageUrl" alt="car">
    <div class="Card__texts">
      <h2>{{name}}</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card' ,
  props: {
    name: String,
    imageUrl: String
  } 
}
</script>

<style>
.Card {  
  width: 100%;
  position: relative;
  padding-top: 50%;
  overflow: hidden;
  border-radius: 0.5rem;
}

.Card img{  
  width: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;  
  z-index: -1;
  object-fit: cover; 
}

.Card:hover img {
  transform: scale(1.2);   
  
}

.Card__texts {
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8) 70%);
    height: 30%;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    color: #fff;
    transition: all 0.3s;
}

.Card:hover > div {
  opacity: 0;
}

</style>
