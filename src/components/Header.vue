<template>
  <vs-navbar class="default-background-color mb-10" collapse>
      <!-- <template #left>
        <vs-button icon border color="rgb(59,222,200)">
          <box-icon name="menu"/>
        </vs-button>
      </template> -->
      <div slot="title">
        <vs-navbar-title>
          Painel do Seller
        </vs-navbar-title>
      </div>
      <!-- <template #right>
        <box-icon name="exit"></box-icon>
      </template> -->
    </vs-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss">
.mb-10 {
  margin-bottom: 10px;
  padding: 10px;

  button span.btn-responsive-line {
    background: #fff;
  }

  .vs-navbar--title {
    color: #fff;
  }
}
</style>
