<template>
  <div>
    <div class="row pt-3">
      <div class="col-3 d-flex">
        <div id="logo" class="d-flex align-items-center">
          <img src="../assets/logo.png" alt="logo" class="rounded-circle w-50 ms-3" />
        </div>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <span id="title" style="font-size: 2.3rem">TreeApp</span>
      </div>
      <div class="col-3 d-flex justify-content-end align-items-center">
        <i @click="checkLogIn" class="bi bi-person-circle fs-1"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkLogIn() {
      console.log('clicked')
    }
  }
}
</script>

<style>
i {
  cursor: pointer;
}
</style>
