<template>
  <div class="dados-da-loja-e-pagamento">
    <h2>Sua loja</h2>
    <div class="form-group">
      <label>Celular para contato</label>
      <input type="number" v-model="celular" class="form-control" placeholder="(00) 00000-0000" />
    </div>
    <h2>Dados de pagamento</h2>
    <div class="form-group">
      <label>Número do cartão</label>
      <input type="number" v-model="numeroDoCartao" class="form-control" />
    </div>
    <div class="row">
        <div class="col-6">
            <div class="form-group">
                <label>Validade</label>
                <input type="text" v-model="validade" class="form-control" placeholder="mm/aaaa" maxlength="7" />
            </div>
        </div>
        <div class="col-6">
            <div class="form-group">
                <label>CVC</label>
                <input type="number" v-model="cvc" class="form-control" maxlength="3" />
            </div>
        </div>
    </div>
    <div class="total-area">
        <p>O valor cobrado será</p>
        <strong class="total">R$ 9,90</strong>
    </div>
    <div class="text-right">
        <button class="btn btn-success" @click="finalizarSolicitacao">Finalizar solicitação</button>
    </div>
  </div>
</template>

<script>

    export default {
        data() {
            return {
                cnpj: '',
                celular: '',
                numeroDoCartao: '',
                validade: '',
                cvc: ''
            }
        },
        methods: {
            finalizarSolicitacao() {
                this.$store.dispatch('setDados', {
                    celular: this.celular,
                    numeroDoCartao: this.numeroDoCartao,
                    validade: this.validade,
                    cvc: this.cvc
                })

                this.$store.dispatch('salvar')
                this.$router.push({ name: 'bem-vindo' })
            }
        }
    }

</script>

<style lang="less" scoped>

    .dados-da-loja-e-pagamento {
        padding: 50px 50px;

        .total-area {
            padding: 30px 0;
            line-height: 10px;
            text-align: right;

            .total {
                font-size: 30px;
            }
        }        
    }

</style>
