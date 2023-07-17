<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'TermsPage',
  data() {
    return {
      cookieClosed: false,
      burgerOpened: false,
    }
  },
  methods: {
    closeBurger() {
      this.burgerOpened = false
    },
  },
})
</script>

<template>
  <header>
    <div class="header__desktop">
      <nav class="header__nav">
        <a href="/" class="header__nav__logo">
          <img src="/assets/logo.png" alt="">
        </a>

        <ul class="header__nav__links">
          <li><a href="/#about" @click="closeBurger">О нас</a></li>
          <li><a href="/#advantages" @click="closeBurger">Преимущества</a></li>
          <li><a href="/#price" @click="closeBurger">Стоимость</a></li>
          <li><a href="/#teachers" @click="closeBurger">Преподаватели</a></li>
          <li><a href="/#contacts" @click="closeBurger">Контакты</a></li>
        </ul>

        <p class="header__nav__phone">+7 981 284 93 00</p>
      </nav>

      <div class="header__links">
        <a href="https://t.me/+79812849300">
          <img src="/assets/Telegram.svg" alt="Telegram">
        </a>

        <a href="https://wa.me/79812849300">
          <img src="/assets/Whatsapp.png" alt="Whatsapp">
        </a>
      </div>
    </div>

    <div class="header__mobile">

      <div class="header__fixed">
        <a href="/" class="header__nav__logo">
          <img src="/assets/logo.png" alt="">
        </a>

        <a class="header__nav__close" @click="burgerOpened = true">
          <img src="/assets/close_burger.svg" alt="">
        </a>
      </div>

      <transition>
        <div v-if="burgerOpened" class="header__burger">

          <div class="header__burger__top">
            <a href="/" class="header__nav__logo">
              <img src="/assets/logo.png" alt="">
            </a>

            <a @click="burgerOpened = false" class="header__nav__cls">
              <img src="/assets/burger_close.svg" alt="">
            </a>
          </div>


          <ul class="header__nav__links">
            <li><a href="/#about" @click="closeBurger">О нас</a></li>
            <li><a href="/#advantages" @click="closeBurger">Преимущества</a></li>
            <li><a href="/#price" @click="closeBurger">Стоимость</a></li>
            <li><a href="/#teachers" @click="closeBurger">Преподаватели</a></li>
            <li><a href="/#contacts" @click="closeBurger">Контакты</a></li>
          </ul>

          <p class="header__nav__phone">8 981 284 93 00</p>

        </div>
      </transition>

    </div>


    <div class="header__body">

      <h1>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</h1>

    </div>

    <transition>
      <div class="header__cookie" v-if="!cookieClosed">
        <h2>Мы используем Cookies для улучшения работы сайта</h2>
        <p>Оставаясь на сайте, вы соглашаетесь с использованием файлов cookie</p>
        <a class="header__cookie-btn" @click="cookieClosed = true">Хорошо</a>
      </div>
    </transition>
  </header>

  <main>
    <div class="container">

      <div class="section">

        <h2>1. Общие условия</h2>

        <p>
          1.1. Для целей настоящего Соглашения описанные ниже понятия имеют следующее значение: <br><br>
          1.1.1. «Администрация Сайта», далее также «Мы», «Наше», «Нас» и др. производные – Бобылев Руслан Игоревич (ИНН 501905653820). <br><br>
          1.1.2. «Пользователь» далее также «Вы», «Ваше», «Вас» и др. производные – любое физическое или юридическое лицо, в том числе индивидуальный предприниматель, выразившее согласие с изложенными в настоящем Соглашении условиями путем совершения указанных в Соглашении конклюдентных действий, направленных на использование Сайта. <br><br>
          1.1.3. «Сайт» – совокупность программных и аппаратных средств для ЭВМ, обеспечивающих публикацию для всеобщего обозрения информации и данных, объединенных общим целевым назначением, посредством технических средств, применяемых для связи между ЭВМ в сети Интернет. Сайт находится в сети Интернет по адресу: https://адрессайта.ру. <br><br>
          1.2. Настоящее Соглашение регулирует отношения между Пользователем – Вами, с одной стороны, и Администрацией Сайта – Нами, с другой стороны, по предоставлению Вам права использования Сайта, а также регламентирует порядок использования Вами Сайта. <br><br>
          1.3. В соответствии с настоящим Соглашением мы предоставляем Вам правомочия: - ознакомления с материалами и информацией, размещенной на Сайте; - заполнения форм на Сайте в соответствии с их назначением и загрузкой файлов, включая, но не ограничиваясь изображениями, текстовыми файлами; - копирования отдельных участков кода Сайта с помощью веб-браузера исключительно для целей кэширования; - запуск Сайта с помощью веб-браузера с целью эксплуатации в соответствии с его функционалом. Осуществление указанных выше правомочий для целей настоящего Соглашения именуется использованием Сайта. <br><br>
          1.4. Использование Сайта осуществления на безвозмездной основе. <br><br>
          1.5. Настоящее Соглашение не регулирует условия оказания каких-либо услуг Администрацией Сайта. Оказание иных услуг или выполнение иных работ регулируется отдельно путем заключения письменных соглашений с Администрацией Сайта. <br><br>
          1.6. Мы ни при каких обстоятельствах не берем на Себя ответственность за соответствие Сайта техническим особенностям/возможностям устройства, используемого Вами для использования Сайта, а также соединения Провайдера, обслуживающего Вас. <br><br>
          1.7. Порядок заполнения форм и обработки данных при их заполнении регулируется Политикой конфиденциальности. <br><br>
        </p>

      </div>

      <hr />

      <div class="section">

        <h2>2. Права интеллектуальной собственности</h2>

        <p>
          2.1. Сайт, его составляющие и отдельные компоненты (в том числе, но не ограничиваясь: программы для ЭВМ, базы данных, коды, лежащие в их основе ноу-хау, алгоритмы, элементы дизайна, шрифты, логотипы, а также текстовые, графические и иные материалы) являются принадлежащими Нам объектами интеллектуальной собственности, охраняемыми в соответствии с российским и международным законодательством, любое использование которых допускается только на основании разрешения от Нас как от правообладателя. <br><br>
          2.2. Мы настоящим Соглашением предоставляем Вам на весь срок действия настоящего Соглашения неисключительную (без ограничения территории действия и не подлежащую передаче или уступке третьим лицам), отзывную, ограниченную лицензию на использование Сайта. Такая неисключительная лицензия предназначена для того, чтобы обеспечить Вам возможность пользования Сайтом (п.1.3 Соглашения) в соответствии с его функционалом с учетом ограничений, предусмотренных настоящим Соглашением. Лицензия предоставляется без права сублицензирования. <br><br>
          2.3. Право использования Сайта ни в коем случае не включает в себя право изготовить его копию, в т.ч. для архивных целей, поскольку использование Сайта осуществляется в онлайн-режиме с помощью доступа через сеть Интернет и необходимость в изготовлении копии отсутствует. <br><br>
          2.4. Вы соглашаетесь с тем, что Вы не вправе (в том числе не вправе разрешать кому-либо) изменять, создавать производные работы, разбирать Сайт на составляющие коды, декомпилировать или иным образом пытаться получить исходный код программного обеспечения или любой его части, за исключением случаев, когда есть письменное разрешение на совершение таких действий. В случае игнорирования этого правила Вы несете полную ответственность за подобные действия. <br><br>
          2.5. Никакие положения Соглашения не являются уступкой прав с нашей стороны на интеллектуальную собственность или отказом от данных прав на основании законодательства. <br><br>
          2.6. При цитировании любых материалов Сайта, включая охраняемые авторские произведения, Вы обязуетесь указывать ссылку на Сайт и фирменное наименование Администрации Сайта (подпункт 1 пункта 1 статьи 1274 ГК РФ). <br><br>
        </p>

      </div>

      <hr />

      <div class="section">

        <h2>3. Гарантии Пользователя</h2>

        <p>
          3.1. Вы как физическое лицо гарантируете, что обладаете необходимой правоспособностью для акцепта настоящего Соглашения от собственного имени, либо от имени физического или юридического лица, в интересах которого Вы действуете, а также то, что Вы не ограничены в праве доступа к Сайту и его материалам на основании решения суда, вступившего в законную силу или в иных случаях, предусмотренных действующим законодательством. <br><br>
          3.2. В случае, если Вы действуете от имени юридического лица, Вы гарантируете, что имеете достаточные для заполнения форм на Сайте права и полномочия, а также то, что юридическое лицо, от имени которого вы действуете: <br><br>
          3.2.1. Обладает необходимой право- и дееспособностью для акцепта и исполнения настоящего Соглашения, у него не отозвана (не аннулирована) лицензия, необходимая для осуществления основного вида деятельности, как юридического лица, срок действия лицензии не истек, либо основной вид деятельности, осуществляемый Пользователем, не подлежит лицензированию. <br><br>
          3.2.2. Не нарушает права и интересы третьих лиц путем принятия условий настоящего Соглашения. <br><br>
          3.2.3. Не участвует и не связан каким-либо образом ни с одной сделкой или иным обязательством, по которым Он находится в ситуации невыполнения своих обязательств, или обязан досрочно выполнить свои обязательства, или участие в которых может негативно повлиять на способность Пользователя выполнить взятые им по настоящему Соглашению обязательства. <br><br>
          3.2.4. Получило все необходимые согласия и разрешения, предусмотренные действующим законодательством, для обработки персональных данных, которые потребуется обрабатывать в процессе исполнения настоящего Соглашения. <br><br>
          3.3. Вы обязуетесь соблюдать следующие правила при пользовании Сайтом: - соблюдать все гарантии, взятые на себя в связи с присоединением к данному Соглашению; - предоставлять достоверные данные в ходе заполнения форм, в то же время не предоставлять при заполнении форм информацию, нарушающую действующее законодательство или права и свободы третьих лиц; - не выдавать себя за какое-либо другое физическое или юридическое лицо, не предоставлять какие-либо данные третьих лиц (без получения от них прямого, предварительного согласия) для заполнения форм; - не совершать какие-либо действия (с использованием средств автоматизации или без таких средств), направленные на сбор каких-либо персональных данных других пользователей и третьих лиц; - не предпринимать каких-либо действий, направленных на подрыв работы Сайта, включая, но не ограничиваясь: направление в формы вирусов или вредоносного кода, совершение действий, которые могут привести к отключению Сайта, к нарушению нормальной работы Сайта и т.д. <br><br>
        </p>

      </div>

      <hr />

      <div class="section">

        <h2>4. Предоставление доступа к Сайту и его содержимому</h2>

        <p>
          4.1. Мы оставляем за собой право изменить или модифицировать содержимое Сайта в любой момент без уведомления об этом. <br><br>
          4.2. Мы не гарантируем, что Сайт и его функционал будут доступными вам постоянно и непрерывно. Вы должны осознавать, что Сайт может сталкиваться с проблемами в работе или другими неполадками, устранение которых может потребовать определенного количества времени, а также может привести к некорректной работе Сайта. <br><br>
          4.3. Мы обязуемся принимать меры  к поддержанию Сайта в нормальном состоянии, обеспечению Вашего доступа к Сайту «как есть». Мы не гарантируем, что Сайт будет соответствовать вашим потребностям, целям, ожиданиям. <br><br>
        </p>

      </div>

      <hr />

      <div class="section">

        <h2>5. Заключительные положения</h2>

        <p>
          5.1. Настоящее Соглашение действует в течение неопределенного срока. <br><br>
          5.2. Мы оставляет за собой право после заполнения Вами форм обратной связи взаимодействовать с Вами посредством соответствующих каналов связи. Вы имеете право отказаться от подобных рассылок, нажав «Отписаться от рассылки» в самом электронном письме и следуя дальнейшим указаниям. <br><br>
          5.3. Все споры по Соглашению или в связи с ним подлежат рассмотрению в суде по месту нахождения Администрации Сайта в соответствии с действующим процессуальным правом Российской Федерации. <br><br>
          5.4. Мы оставляем за собой право в одностороннем порядке и без предварительного уведомления Пользователей изменять условия Соглашения, разместив при этом окончательную версию Соглашения на веб-сайте по указанному выше адресу. Положения новой редакции Соглашения становятся обязательными для всех Пользователей с даты публикации на Сайте. <br><br>
          5.5. Признание судом какого-либо положения Соглашения недействительным или не подлежащим принудительному исполнению не влечет недействительности иных положений Соглашения. <br><br>
          5.6. Пользователь подтверждает, что ознакомился со всеми положениями Соглашения, понимает и принимает их. <br><br>
          5.7. Пользователь обязуется использовать Сайт добросовестно и разумно. <br><br>
          5.8. Подлежащим применению к настоящему Соглашению правом является право Российской Федерации. <br><br>
        </p>

      </div>

      <hr />

      <div class="section">

        <h2>6. Реквизиты Администрации</h2>

        <p>Бобылев Руслан Игоревич (ИНН 501905653820)</p>

      </div>

    </div>
  </main>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

header {
  background-image: url("/assets/background.png");
  background-repeat: no-repeat;
  height: max-content;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-size: 100vw 100vh;
  padding-bottom: 4rem;

  .header__mobile {
    display: none;
    width: 100%;

    .header__burger {
      position: fixed;
      height: 100vh;
      width: 100vw;
      background-color: rgba(33, 33, 33, 0.995);
      z-index: 10;

      display: flex;
      padding: 2rem;
      flex-direction: column;

      .header__nav__links {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 3rem 0;
        gap: 1rem;

        li {
          a {
            font-size: 2rem;
            color: white;
            text-decoration: none;
          }
        }
      }

      .header__nav__phone {
        color: white;
        font-size: 2rem;
      }

      .header__burger__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header__nav__cls {
        cursor: pointer;

        img {
          width: 50px;
          height: 50px;
        }
      }

    }

    .header__fixed {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      z-index: 5;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      align-items: center;

      .header__nav__close {
        cursor: pointer;
      }

      .header__nav__logo {
        img {
          height: 44px;
          width: 106px;
        }
      }
    }


  }

  .header__nav {
    padding-top: 26px;
    color: white;
    display: flex;
    justify-content: space-evenly;
    max-width: 1280px;
    align-items: center;
    gap: 4rem;
    flex-wrap: wrap;

    .header__nav__logo {
      img {
        width: 171px;
        height: 73px;
      }
    }

    .header__nav__links {
      display: flex;
      list-style: none;
      gap: 40px;
      align-items: center;

      li {
        a {
          text-decoration: none;
          color: white;
          font-size: 20px;
          font-style: normal;
          //font-weight: 300;
          line-height: normal;
        }
      }

    }

    .header__nav__phone {
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

  }

  .header__links {
    position: absolute;
    top: 48px;
    right: 56px;
    display: flex;
    gap: 32px;
  }

  .header__body {
    max-width: 1280px;
    margin-top: 120px;
    display: flex;
    align-items: center;
    gap: 5rem;

    h1 {
      color: #FFF;
      font-size: 80px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .header__body__form {
      display: flex;
      flex-direction: column;
      width: 636px;

      h1 {
        color: white;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      p {
        color: #FFF;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        margin-top: 32px;
        margin-bottom: 56px;
        line-height: normal;
      }
    }
  }

  .header__cookie {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    position: fixed;
    width: 320px;
    min-height: 180px;
    bottom: 32px;
    right: 24px;
    padding: 16px;

    h2 {
      font-family: Gilroy, Inter, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 88%;
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 88%;
    }

    .header__cookie-btn {
      cursor: pointer;
      padding: 14px;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 96%;
      background-color: black;
      color: white;
      margin-top: 20px;
    }
  }

}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: #E7E7E7;
    margin: 72px 0;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 32px;

    h2 {
      color: #000;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
    }

    p {
      color: #000;
      font-size: 26px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }

    table {
      border: 2px solid #D3D3D3;
      border-collapse: collapse;

      tr {
        border: 2px solid #D3D3D3;

        td {
          border: 2px solid #D3D3D3;
          padding: 2rem;
        }

        td:first-child {
          color: #000;
          font-size: 32px;
          font-style: normal;
          font-weight: 500;
        }

        td:last-child {
          color: #000;
          font-size: 24px;
          font-style: normal;
          font-weight: 300;
        }
      }
    }
  }
}

@media screen and (max-width: 1600px) {
  header {
    background-size: 100vw 100%;
    height: max-content;

    .header__links {
      top: 100px;
    }
    padding-bottom: 6rem;
  }
}

@media screen and (max-width: 1280px) {
  header {
    .header__body {
      flex-direction: column;
      width: 95vw;

      h1 {
        font-size: 3rem;
      }
    }
  }
  .container {
    width: 90vw;
  }
}

@media screen and (max-width: 750px) {
  .container {
    width: 95vw;

    .section {
      h2 {
        color: #000;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      p {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }

      table {
        tr {
          td {
            padding: 0.5rem;
          }

          td:first-child {
            font-size: 1rem !important;
          }

          td:last-child {
            font-size: 1rem !important;
            padding-left: 1rem;
          }
        }
      }

    }

  }
  header {
    .header__body {

      h1 {
        font-size: 1.5rem;
      }

      .header__body__form {
        width: 90%;
        .btn {
          color: #000;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
        }

        h1 {
          text-align: center;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        p {
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
        }
      }
    }

    .header__desktop {
      display: none;
    }
    .header__mobile {
      display: flex;
    }
  }
}
</style>