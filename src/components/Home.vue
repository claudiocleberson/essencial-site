<template>

  <body> <!-- Add your content of header -->
  <!-- Add your site or app content here -->
    <div v-if="!isOldBrowser" class="hero-full-container background-image-container white-text-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 style="font-size: 44px; font-family: monospace">ESSENCIAL</h1>
            <h4 style="font-size: 22px">Simplificando Processos</h4>
            <br>
            <a href="#" v-scroll-to="'#aboutUs'" class="btn btn-default btn-lg" title="">Saiba Mais</a>
          </div>
        </div>
      </div>
    </div>

    <!-- IE and older version -->
      <div v-else class="hero-full-container background-image-container white-text-container" style="padding: 11%">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1 style="font-size: 44px; font-family: monospace">ESSENCIAL</h1>
              <h4 style="font-size: 22px">Simplificando Processos</h4>
              <br>
              <a href="#" v-scroll-to="'#aboutUs'" class="btn btn-default btn-lg" title="">Saiba Mais</a>
            </div>
          </div>
        </div>
      </div>

    <div id="aboutUs" class="section-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2">
            <div class="text-center">
              <h2>A Essencial</h2>
              <p>Somos uma <strong>Assessoria para departamento Financeiro</strong>,
                voltada ao desenvolvimento contínuo dos processos,
                sistemas e integrantes. Nosso objetivo é através da
                simplicidade solucionar os problemas de maneira permanente,
                entendemos que diante de processos eficientes, sistemas
                parametrizados e profissionais treinados os recursos
                financeiros e a imagem da empresa são preservados e é este o
                equilíbrio que buscamos levar aos nossos clientes.</p>
            </div>
         </div>
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <div id="carousel-example-generic" class="carousel carousel-fade slide" data-ride="carousel">
                  <div class="carousel-inner" role="listbox">
                      <div class="item active">
                          <img class="img-responsive" src="../../static/images/reestruturacaoImg.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">
                            <h4 style="color: #1763e9; margin-top: 30px">
                              <strong>REESTRUTURAÇÃO – PROCESSOS, SISTEMAS  e INTEGRANTES</strong>
                            </h4>
                            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                              <i class="fa fa-chevron-left" aria-hidden="true"></i>
                              <span class="sr-only">Anterior</span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <span class="sr-only">Proxímo</span>
                            </a>
                            <ul>
                              <li>Diagnóstico do departamento Financeiro;</li>
                              <li>Simplicidade nos processos e praticidade nas tomadas de decisão;</li>
                              <li>Melhoria dos controles internos;•	Melhoria dos controles internos;</li>
                              <li>Eliminação da redundância de atividades;</li>
                              <li>Aumento da eficácia no acesso a informação;</li>
                              <li>Aumento de produtividade;</li>
                              <li>Redução nos limites de tempo em resposta ao mercado;</li>
                              <li>Integração dos departamentos e das informações.</li>
                            </ul>
                            <router-link :to="{name: 'Servicos', hash: '#reestruturacao_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </router-link>
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="../../static/images/organizacaocreditoImg.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">

                              <h4 style="color: #1763e9; margin-top: 30px">
                                <strong>ORGANIZAÇÃO E CONTROLE – CRÉDITO E COBRANÇA</strong>
                              </h4>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                              <ul>
                                <li>Foco no aumento de Venda e na Redução de Inadimplência;</li>
                                <li>Simplicidade e Clareza nos processos de Crédito e Cobrança;</li>
                                <li>Sinergia entre os departamentos Comercial e Crédito e Cobrança;</li>
                                <li>Solução permanente aos problemas existentes;</li>
                                <li>Cumprimento rigoroso as etapas de Cobrança;</li>
                                <li>Preservação da Imagem frente ao Mercado;</li>
                                <li>Eliminação de Custos e despesas.</li>
                              </ul>
                            <router-link :to="{name: 'Servicos', hash: '#organizacaocredito_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </router-link>
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="../../static/images/organizacaopagarImg.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">

                            <h4 style="color: #1763e9; margin-top: 30px">
                              <strong>ORGANIZAÇÃO E CONTROLE - CONTAS A PAGAR</strong>
                            </h4>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                            <ul>
                              <li>Foco em eliminar pagamentos em atraso e em duplicidade;</li>
                              <li>Simplicidade e Clareza nos processos de Pagamento;</li>
                              <li>Sinergia entre os departamentos de Compras e Contas a Pagar;</li>
                              <li>Solução permanente aos problemas existentes;</li>
                              <li>Preservação da Imagem frente ao Mercado;</li>
                              <li>Eliminação de Custos e despesas.</li>
                            </ul>
                            <router-link :to="{name: 'Servicos', hash: '#organizacaopagar_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </router-link>
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="../../static/images/treinamentoImg.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">
                            <h4 style="color: #1763e9; margin-top: 30px">
                              <strong>TREINAMENTOS E PALESTRAS PERSONALIZADAS</strong>
                            </h4>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                              <ul>
                                <li>Desenvolvimento Contínuo dos Integrantes;</li>
                                <li>Validação do entendimento quanto a Processos e Sistemas;</li>
                                <li>Integração e valorização do Espírito de Equipe;</li>
                                <li>Acompanhamento e Motivação;</li>
                                <li>Análise de Produtividade e Comprometimento.</li>
                              </ul>
                              <router-link :to="{name: 'Servicos', hash: '#treinamento_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                              </router-link>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="section-container">
      <div class="container text-center">
        <div class="row section-container-spacer">
          <div class="col-xs-12 col-md-12">
            <h2>Quem somos</h2>
            <p>Amigos e companheiros de trabalho em empresa de grande
              porte da Construção Civil, hoje sócios, Renan Moura e Claudio Pereira
              sempre em conversas informais discutiam a dificuldade que as empresas
              possuem em fazer bem o Básico, falávamos que havia muita busca por
              Consultorias conceituadas e ferramentas avançadas antes mesmo de se
              prepararem no cumprimento com excelência dos processos mais Simples,
              então a decisão por levar eficiência através da simplicidade ao mercado
              fundando a ESSENCIAL, onde a ideia é levar o que o significado no nome
              já diz: Dar atenção ao que é muito necessário.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <img src="../../static/images/profil-01.jpg" alt="" class="reveal img-responsive reveal-content image-center">
            <h3>Renan Moura</h3>
            <h4>Gestor de Marketing e MBA em Gestão Empresarial pela FGV</h4>
            <p>15 anos de experiência na área Administrativa Financeira em
              empresas de grande porte. Soma a parceria como Consultor,
              Instrutor, Palestrante e Orientador aos processos vinculados
              a Gestão Comercial. </p>
            <p>
              <a href="https://facebook.com/renancarlos.moura" class="social-round-icon fa-icon" title="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" class="hidden social-round-icon fa-icon" title="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/renan-moura-846316143/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class="col-xs-12 col-md-6">
            <img src="../../static/images/Claudio_gray.jpg" alt="" class="reveal img-responsive reveal-content image-center">
            <h3>Claudio Pereira</h3>
            <h4>Administrador de Empresas</h4>
            <p>Mais de 10 anos de experiência nas áreas Administrativa,
              Financeira e Contábil. Soma a parceria como Instrutor,
              palestrante e Orientador aos processos vinculados a
              Gestão Contábil e Fiscal.
            </p>
            <p>
              <a href="https://www.facebook.com/claudio.pereira.3950" class="social-round-icon fa-icon" title="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" class="hidden social-round-icon fa-icon" title="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/claudio-pereira-06416a49/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class=" hidden col-xs-12 col-md-4">
            <img src="../../static/images/profil-03.jpg" alt="" class="reveal img-responsive reveal-content image-center">
            <h3>Gregor Clegane</h3>
            <h4>Developer</h4>
            <p>Busce rutrum nisi non dui placerat sodales. Vivamus feugiat rutrum malesuada. Nulla volutpat sapien ac gravida varius</p>
            <p>
              <a href="https://facebook.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="parceiros" class="section-container">
      <div class="container text-center">
        <div class="row section-container-spacer">
          <div class="col-xs-12 col-md-12">
            <h2 class="text-center">Parceiros</h2>
            <blockquote>"A vida vai juntando pessoas, unindo propósitos, formando grandes <strong>parcerias</strong> e trazendo a tona os vencedores"
              <footer>Edezia Oliveira</footer>
            </blockquote>
            <a></a>
          </div>
        </div>
        <div class="row">
          <div  class="col-xs-12 col-md-6">
            <a href="http://www.ajaxbr.com.br" title="Website da Ajax">
              <img  src="../../static/images/ajax_logo.png" alt="" class="img-responsive reveal-content image-center">
            </a>
            </div>
          <div  class="col-xs-12 col-md-6">
            <a href="http://www.assystem.com.br" title="Web site da Assystem">
                <img  src="../../static/images/assystem_logo.png" alt="" class="img-responsive reveal-content image-center">
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container contact-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <div class="section-container-spacer">
              <h2 class="text-center">Contato</h2>
              <p class="text-center">Contate-nos, teremos o prazer de
                esclarecer dúvidas, e apoiar na valorização de sua empresa.</p>
            </div>
            <div class="card-container">
              <div class="card card-shadow col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 reveal">
                <app-contact-form></app-contact-form>
              </div>
              <div class="card-image col-xs-12" style="background-image: url('../../static/images/contatoImg.jpeg')">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
</template>

<script>
import ContactForm from './ContactForm.vue';
import axios from 'axios';

export default {
  components: {
    'app-contact-form': ContactForm
  },
  data () {
    return {
        isOldBrowser: false
    }
  },
  created () {

   var ua = window.navigator.userAgent;
   var msie = ua.indexOf('MSIE ');
   if (msie > 0) {
     // IE 10 or older => return version number
     console.log("IE 10 or older")
     this.isOldBrowser = true;
     return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
   }

   var trident = ua.indexOf('Trident/');
   if (trident > 0) {
     // IE 11 => return version number
     console.log("IE 11")
     var rv = ua.indexOf('rv:');
     this.isOldBrowser = true;
     return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
   }

   var edge = ua.indexOf('Edge/');
   if (edge > 0) {
     // Edge (IE 12+) => return version number
     console.log("IE 12")
     this.isOldBrowser = false;
     return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
   }
   // other browser
   return false;
   },
}
</script>

<style>

</style>
