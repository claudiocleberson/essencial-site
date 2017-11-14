<template>
  <body> <!-- Add your content of header -->
<!--  <header>
    <nav class="navbar navbar-default active">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" tag="a" class="navbar-brand"  title="">
            <img src="../../static/images/essencial_logo.png" class="navbar-logo-img" style="margin-right: 10px" alt="">
             ESSENCIAL
          </router-link>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <router-link to="/" tag="li"><a>Início</a></router-link>
            <router-link to="/servicos" tag="li"><a>Serviços</a></router-link>
            <li class="hidden">
              <p>
                <a href="./components.html" class="btn btn-default navbar-btn" title="">Components</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
-->
  <!-- Add your site or app content here -->
    <div class="hero-full-container background-image-container white-text-container">
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
              <p>Assessoria de departamento Financeiro, voltada ao
                desenvolvimento contínuo dos processos, sistemas e integrantes,
                nosso objetivo é a solução permanente dos problemas do dia-a-dia,
                entendemos que diante de processos simples e eficientes, sistemas
                parametrizados e profissionais treinados os recursos financeiros da
                 empresa estarão preservados, é este o equilíbrio que a ESSENCIAL
                 trabalha e leva a seus clientes.</p>
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
                          <img class="img-responsive" src="../../static/images/img-04.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">
                            <h3>IMPLANTAÇÃO E REESTRUTURAÇÃO</h3>
                            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                              <i class="fa fa-chevron-left" aria-hidden="true"></i>
                              <span class="sr-only">Anterior</span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <span class="sr-only">Proxímo</span>
                            </a>
                            <p>
                              Apresentamos as melhores praticas adotadas pelo mercado e em conjunto com o responsável da área adaptamos conforme a realidade e perfil da empresa, após os processos definidos e aprovados seguimos para verificação junto ao Sistema, avaliamos se a ferramenta atende com segurança todo processo definido como melhor pratica e tomamos alguma ação de manutenção se necessário, por fim apoiamos na montagem da equipe de trabalho, nos treinamentos e avaliação individual da performance de cada integrante.
                            </p>

                            <router-link :to="{name: 'Servicos', hash: '#pagar_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </router-link>
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="../../static/images/img-05.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">

                            <h3>ORGANIZAÇÃO E CONTROLE DE CONTAS A PAGAR</h3>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                            <p>
                              Desorganização e falta de solução permanente nos processos e sistemas,
                              assim como devida orientação aos Integrantes são os maiores causadores
                              pelos pagamentos em duplicidade, atrasos que trazem em cadeia: Juros,
                              Protestos, Corte de crédito, necessidade de adiantamentos, dificuldade
                              de Fluxo de Caixa, novos controles e desvalorização da imagem...
                            </p>
                            <router-link :to="{name: 'Servicos', hash: '#pagar_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </router-link>
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="../../static/images/img-06.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">

                            <h3>ORGANIZAÇÃO E CONTROLE DE COBRANÇA</h3>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                            <ul>
                              <li>Controle</li>
                              <li>Importância </li>
                              <li>Fases da Cobrança</li>
                              <li>Valores</li>
                            </ul>
                            <p>Parceiros (Órgão de Proteção ao Credito, Assessoria
                              de Cobrança administrativa e Judicial)
                            </p>
                            <router-link :to="{name: 'Servicos', hash: '#cobraca_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </router-link>
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="../../static/images/img-07.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">
                            <h3>AUMENTAR VOLUME DE VENDAS E REDUZIR A INADIMPLÊNCIA</h3>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                            <p>Empresas só se mantem em quanto vender seus
                              produtos e/ou serviços, por outro lado nada
                              adianta vender e não receber, muitas buscam
                              combater a Inadimplência colocando regras “frias”
                              em seus procedimentos e não levam em consideração os
                              fatores positivos no momento da analise de crédito,
                              diante disso se perde vendas que poderia se reverter
                              não só no recebimento normal quanto em parcerias
                              duradouras, oposto também é verdadeiro, se vende mal
                              e não é recompensada com o recebimento.
                            </p>
                              <router-link :to="{name: 'Servicos', hash: '#vendas_section'}" tag="a" class="btn btn-primary" title="">
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
              porte da Construção Civil, hoje sócios, Renan Moura e
              Claudio Pereira sempre em conversas informais discutiam a
              dificuldade que as empresas possuem em fazer bem o “Básico”,
              falávamos que havia muita busca por Consultorias, processos,
              ferramentas “avançadas” antes mesmo de encontrarem a “excelência”
              nos processos mais “Simples”, foi então a decisão por levar
              eficiência através da simplicidade ao mercado fundando a
              ESSENCIAL, onde a ideia é levar o que o significado no nome
              já diz: “Dar atenção ao que é muito necessário”.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <img src="../../static/images/profil-01.jpg" alt="" class="reveal img-responsive reveal-content image-center">
            <h3>Renan Carlos</h3>
            <h4>Gestor de Marketing e MBA em Gestão Empresarial pela FGV</h4>
            <p>15 anos de experiência na área Admistravista e Financeira em empresas de grande porte. Soma a parceria como
            como Accessor, Intrutor, palestrante e orientador aos processos vinculados a Gestão Comercial.</p>
            <p>
              <a href="https://facebook.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" class="hidden social-round-icon fa-icon" title="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class="col-xs-12 col-md-6">
            <img src="../../static/images/profil-03.jpg" alt="" class="reveal img-responsive reveal-content image-center">
            <h3>Claudio Pereira</h3>
            <h4>Administrado de Empresas</h4>
            <p>Mais de 10 anos de experiência nas aréas Administrativas,
              Finaceiro e Contábil. Soma a parceria como Palestrante,
              Instrutor e orientador aos processos vinculados a Gestão Contábil e Fiscal.
            </p>
            <p>
              <a href="https://facebook.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" class="hidden social-round-icon fa-icon" title="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" class="social-round-icon fa-icon" title="">
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
          <div class="col-xs-12 col-md-4">
            <img src="../../static/images/logo-01.png" alt="" class="img-responsive reveal-content image-center">

          </div>

          <div class="col-xs-12 col-md-4">
            <img src="../../static/images/logo-02.png" alt="" class="img-responsive reveal-content image-center">
          </div>
          <div class="col-xs-12 col-md-4">
            <img src="../../static/images/logo-03.png" alt="" class="img-responsive reveal-content image-center">
          </div>
        </div>
      </div>
    </div>

      <div class="modal" id="formSubmitted" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Mensagem Enviada</h4>
            </div>
            <div class="modal-body">
              <p>Assunto: {{subject}}</p>
              <p>Mensagem:</p>
              <p>{{message}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" v-on:click="submitForm" class="btn btn-success" data-dismiss="modal">Enviar</button>
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
              <p class="text-center">Contate-nos, que teremos o
                prazer de esclarescer dúvidas, e ajudar a melhorar os
                processos financeiro das sua empresa.</p>
            </div>
            <div class="card-container">
              <div class="card card-shadow col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 reveal">
                <form  name="NovoContato" netlify-honeypot="bot-field" action="" id="contactForm" class="reveal-content" netlify>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <p class="hidden">
                          <label>Don’t fill this out: <input name="bot-field"></label>
                        </p>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="Email">
                      </div>
                      <div class="form-group">
                        <input type="text" v-model="subject" class="form-control" id="subject" placeholder="Assunto">
                      </div>
                      <div class="form-group">
                        <textarea class="form-control" v-model="message" rows="3" placeholder="Digite sua messagem"></textarea>
                      </div>
                      <button type="button" :disabled="!formIsValid" data-toggle="modal" data-target="#formSubmitted" class="btn btn-primary">Enviar</button>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled address-container">
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                          </span>
                          (011)964-774-503
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
              </div>
              <div class="card-image col-xs-12" style="background-image: url('../../static/images/img-01.jpg')">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--  <footer class="footer-container white-text-container">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="row">
          <div class="col-xs-12 col-sm-7">
            <router-link to="/" tag="a" class="navbar-brand text-top" title="">
              <img src="../../static/images/essencial_logo2.png" class="navbar-logo-img" style="margin-right: 10px" alt="">
               ESSENCIAL
            </router-link>
           </div>
            <div class="col-xs-12 col-sm-5">
              <p class="text-right">
                <a href="https://facebook.com/" class="social-round-icon white-round-icon fa-icon" title="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/" class="social-round-icon white-round-icon fa-icon" title="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/" class="social-round-icon white-round-icon fa-icon" title="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
-->
</body>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      subject: '',
      message: ''
    }
  },
  computed :{
    formIsValid () {
       return this.email !== ''
       && this.subject !== ''
       && this.message !== '';
     },
  },
  methods: {
    submitForm () {
      var x = document.getElementById('contactForm');
      x.submit();
      console.log("Form submitted")
    },

  }
}
</script>

<style>

</style>
