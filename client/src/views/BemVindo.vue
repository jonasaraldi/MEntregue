<template>
  <div class="home">
    <div class="content">
      <h1>MEntregue</h1>
      <p>Buscamos o seu produto e entregamos no seu cliente com o melhor custo/benefício</p>
      <button class="btn btn-primary" @click="solicitarColeta">Solicitar coleta</button>
    </div>
  </div>
</template>

<script>

  export default {
    methods: {
      solicitarColeta() {
        this.$router.push({ name: 'localizacao' })
      }
    }
  }

</script>

<style lang="less">

  .home {
    position: relative;
    padding: 50px 50px;
    background-image: url(../assets/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

    .content {
      position: absolute;
      top: 50%;
      left: 50px;
      right: 50px;
      transform: translate(0, -50%);
    }
  }

</style>
