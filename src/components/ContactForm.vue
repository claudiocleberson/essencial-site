<template lang="html">
  <form  name="NovoContato" netlify-honeypot="bot-field" action="" id="contactForm" class="reveal-content" netlify>
    <div class="modal hidden" id="formSubmitted" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Mensagem</h4>
          </div>
          <div class="modal-body">
            <p>Assunto: {{formData.subject}}</p>
            <p>Mensagem:</p>
            <p>{{formData.message}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" v-on:click="submitForm" class="btn btn-success" data-dismiss="modal">Enviar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <p class="hidden">
            <label>Don’t fill this out: <input name="bot-field"></label>
          </p>
          <input type="email" v-model="formData.email" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="text" v-model="formData.subject" class="form-control" id="subject" placeholder="Assunto">
        </div>
        <div class="form-group">
          <textarea class="form-control" v-model="formData.message" rows="3" placeholder="Digite sua messagem"></textarea>
        </div>
        <button type="button" @click.prevent="submitForm" :disabled="!formIsValid"  class="btn btn-primary">Enviar</button>
      </div>
      <div class="col-md-6">
        <ul class="list-unstyled address-container">
          <li>
            <span class="fa-icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </span>
            (011)96477-4503
          </li>
          <li style="word-wrap: normal">
            <span class="fa-icon">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </span>
            essencial@essencial<wbr>nagestao.com.br
          </li>
          <li>
            <span class="fa-icon">
              <i class="fa fa fa-map-o" aria-hidden="true"></i>
            </span>
              Rua Guarantan, 11 sala 10,
              <br>
              Engenho Novo - Barueri/SP
              <br>
              CEP: 06416-180
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {

  data () {
    return {
      formData:{
        email: '',
        subject: '',
        message: ''
      },

    }
  },
  computed :{
    formIsValid () {
       return this.formData.email !== ''
       && this.formData.subject !== ''
       && this.formData.message !== '';
     },
  },
  methods: {
    submitForm () {
      var x = document.getElementById('contactForm');
      //axios.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded';
      //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      //axios.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded';
      var params = new URLSearchParams();
      params.append('Email', this.formData.email);
      params.append('SingleLine', this.formData.subject);
      params.append('MultiLine', this.formData.message);

      axios.post('https://forms.zohopublic.com/virtualoffice10206/form/Contato/formperma/G5KC11B3BB1HH33k1CjKmF78d/htmlRecords/submit',params)
           .then(resp => {
             console.log(resp);
             this.formData.email = '';
             this.formData.subject = '';
             this.formData.message = '';
             alert("Mensagem enviada, Muito obrigado!");
           })
           .catch(error => {
             console.log('Error on submitting form: ',error);
             this.formData.email = '';
             this.formData.subject = '';
             this.formData.message = '';
             alert("Mensagem enviada, Muito obrigado!");
           })
    },
  },
}
</script>

<style lang="css">
</style>
