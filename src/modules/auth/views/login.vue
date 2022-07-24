<template>
  <div class="login">
    <div class="login-logo">
      <img src="@/assets/images/Logo-dark.png" alt="" />
    </div>
    <form class="login-form" @submit.stop.prevent="onSubmit">
      <div class="login-form-header">
        <h1>Login</h1>
      </div>
      <label for="storeName" class="login-form-label">
        Please enter your Shopify URL to login
      </label>
      <div class="login-form-input">
        <input type="text" name="" id="storeName" placeholder="Store Name" />
        <span>.myshopify.com</span>
      </div>
      <button type="submit" class="btn login-form-button">Login</button>
      <div class="login-form-bottom">
        <span>
          Don't have a <img src="@/assets/svg/shopify-text.svg" alt="" /> store
          yet?
        </span>
        <a href="">Create Now!</a>
      </div>
    </form>
    <div class="artwork">
      <img src="@/assets/images/Art work.png" alt="" class="artwork-image" />
      <div class="copyright">
        <span class="copyright-left">Copyright @ Firegroup.vn</span>
        <span class="copyright-right"
          >Term of use • Privacy policy • Help center</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      console.log("Submit");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/main";
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #f2f2f5;
  &-logo {
    position: absolute;
    left: 30px;
    top: 30px;
  }
  &-form {
    margin-left: 10%;
    width: 450px;
    &-header {
      margin-bottom: 11px;
      h1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #000;
      }
    }
    &-label {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: $header-color;
    }
    &-input {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 19px;
      border-radius: 4px;
      margin-top: 20px;
      overflow: hidden;
      border: 0.5px solid #ebebf0;
      box-shadow: 0px 6px 13px rgba(61, 106, 204, 0.09);
      margin-bottom: 20px;
      input {
        outline: none;
        border: none;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 19px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        width: 100%;
        color: $header-color;
        &::placeholder {
          color: #555770;
          opacity: 0.5;
        }
      }
    }
    &-button {
      width: 100%;
      padding: 12px 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
    &-bottom {
      display: flex;
      align-items: center;
      span {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $header-color;
        display: flex;
        align-items: center;
        margin-right: 4px;
        img {
          padding: 0 4px;
        }
      }
      a {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration: none;
        color: $blue-color;
      }
    }
  }
  .artwork {
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 18%;
    align-items: center;
    background-image: url("@/assets/images/bg.png");
    background-size: cover;
    background-position: center center;
    .copyright {
      display: flex;
      justify-content: space-between;
      text-align: center;
      width: 80%;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      color: #fff;
      opacity: 0.6;
      margin-bottom: 40px;
    }
  }
}
</style>