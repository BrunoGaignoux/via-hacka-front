<template>
  <vs-navbar class="default-background-color" text-white>
      <!-- <template #left>
        <vs-button icon border color="rgb(59,222,200)">
          <box-icon name="menu"/>
        </vs-button>
      </template> -->
      <template #default>
        <img src="../assets/logo.png" alt="logo" style="width: 5%; margin: 15px">
      </template>
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
