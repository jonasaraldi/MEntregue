<template>
  <div class="localizacao">
    <h2>Localização</h2>
    <div class="form-group">
      <label>Origem</label>
      <div v-if="localizacaoAtual">
        <p>
          <i class="fa fa-map-marker icon-localizacao"></i>
          <span>Localização atual</span>
          <a href="javascript:;" @click="localizacaoAtual = false" class="btn-trocar">(trocar)</a>
        </p>
      </div>
      <input v-else type="text" v-model="origem" class="form-control" placeholder="Endereço da encomenda" />
    </div>
    <div class="form-group">
      <label>Destino</label>
      <input type="text" v-model="destino" class="form-control" placeholder="Endereço do cliente" />
    </div>
    <div class="observacao">
      <h3>Observações importantes</h3>
      <ul>
        <li>
          <i>O peso máximo que aceitamos é de 10kg, caso a encomenda exceda o peso devolveremos ela ao remetente;</i>
        </li>
        <li>
          <i>Só aceitamos produtos com nota fiscal.</i>
        </li>
      </ul>
      <input 
        id="checkPeso" 
        type="checkbox" 
        class="check-peso"
        v-model="checkPeso" />
      <label for="checkPeso">Entendo e concordo</label>
    </div>
    <div class="text-right">
      <button 
        class="btn btn-success"
        :disabled="!checkPeso" 
        @click="proximaEtapa">Próximo</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      origem: 'Localização atual',
      destino: '',
      checkPeso: false,
      localizacaoAtual: true
    }
  },
  methods: {
    proximaEtapa() {
        this.$store.dispatch('setDados', {
          origem: this.origem,
          destino: this.destino,
          checkPeso: this.checkPeso
        })
        this.$router.push({ name: 'dados-da-loja-e-pagamento' })
    }
  }
}
</script>

<style lang="less">
  .localizacao {
    padding: 50px 50px;

    .observacao {
      padding-top: 30px;
    }

    .check-peso {
      margin-right: 10px;
    }

    .icon-localizacao {
      margin-right: 10px;
    }

    .btn-trocar {
      margin-left: 10px;
    }
  }
</style>