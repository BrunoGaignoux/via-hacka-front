<template>
  <div id="app">
    <Header/>
    <vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
      <div class="selector">
        <div class="col-6">
          <vs-button
            type="border"
            :active="active == 0"
            @click="active = 0"
          >
            Hoje
          </vs-button>
        </div>
        <div class="col-6">
          <vs-button
            type="border"
            :active="active == 1"
            @click="active = 1"
          >
            Mês
          </vs-button>
        </div>
      </div>
    </vs-row>
    <vs-row>
      <vs-col vs-align="center" vs-type="flex" vs-justify="center" vs-w="8">
        <vs-row>
          <vs-col vs-align="center" vs-type="flex" vs-justify="center" vs-w="6">
            <vs-card>
              <div slot="header">
                <h3>Pot with a plant</h3>
              </div>
              <div slot="media">
                <img src="https://vuesax.com/foto13.png" alt="">
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div slot="footer">
                <vs-button color="danger" icon>
                  <box-icon name="heart"/>
                </vs-button>
                <vs-button class="btn-chat" shadow color="primary">
                  <box-icon name="chat"/>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </div>
            </vs-card>
          </vs-col>
          <vs-col vs-align="center" vs-type="flex" vs-justify="center" vs-w="6">
            <vs-card>
              <div slot="header">
                <h3>Pot with a plant</h3>
              </div>
              <div slot="media">
                <img src="https://vuesax.com/foto6.png" alt="">
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div slot="footer">
                <vs-button danger icon>
                  <i class='bx bx-heart'></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class='bx bx-chat' ></i>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </div>
            </vs-card>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col vs-align="center" vs-type="flex" vs-justify="center" vs-w="6">
            <vs-card>
              <div slot="header">
                <h3>Pot with a plant</h3>
              </div>
              <div slot="media">
                <img src="https://vuesax.com/foto12.png" alt="">
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div slot="footer">
                <vs-button danger icon>
                  <i class='bx bx-heart'></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class='bx bx-chat' ></i>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </div>
            </vs-card>
          </vs-col>
          <vs-col vs-align="center" vs-type="flex" vs-justify="center" vs-w="6">
            <vs-card>
              <div slot="header">
                <h3>Pot with a plant</h3>
              </div>
              <div slot="media">
                <img src="https://vuesax.com/foto5.png" alt="">
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div slot="footer">
                <vs-button danger icon>
                  <i class='bx bx-heart'></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                  <i class='bx bx-chat' ></i>
                  <span class="span">
                    54
                  </span>
                </vs-button>
              </div>
            </vs-card>
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col vs-align="center" vs-type="flex" vs-justify="center" vs-w="4">
        <vs-card>
          <div slot="header">
            <h3>Próximas campanhas</h3>
          </div>
          <div>
            <vs-list>
              <vs-list-item title="One text"></vs-list-item>
              <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>
              <vs-list-item title="Some more text"></vs-list-item>
              <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>
            </vs-list>
          </div>
          <div slot="footer">
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
                54
              </span>
            </vs-button>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: { Header },
  name: 'App',
  data () {
    return {
      active: 1
    }
  },
  created () {
    this.$vs.loading({
      type: 'radius'
    })

    setTimeout(() => {
      this.$vs.loading.close()
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.selector {
  position: relative;
  left: 47%;
  width: 120px;
  display: flex;
}
</style>
