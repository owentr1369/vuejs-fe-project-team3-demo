<template>
  <div class="submenu">
    <button @click="toggleSidebar" class="submenu_button">
      <img src="@/assets/svg/burger-menu.svg" alt="" />
    </button>
    <div class="submenu_main">
      <div @click="openModal" class="shopify">
        <img
          class="shopify_image"
          src="@/assets/svg/shopify-green-rounded.svg"
        />
        <span class="shopify_name">BaobaoStore</span>
        <img src="@/assets/svg/angle-down.svg" alt="" class="shopify_arrow" />
      </div>
      <div class="submenu-modal">
        <div class="submenu-modal-back">
          <img src="@/assets/svg/gray-shopify.svg" alt="" />
          <span>Back to Shopify</span>
        </div>
        <div class="submenu-modal-logout">
          <img src="@/assets/svg/logout.svg" alt="" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Submenu",
  data() {
    return {};
  },
  methods: {
    openModal() {
      this.$emit(toggleSidebar);
    },
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/main";
.submenu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08),
    0px 0.5px 2px rgba(96, 97, 112, 0.16);
  &_button {
    background: transparent;
    border: none;
    padding-left: 20px;
    cursor: pointer;
  }
  &_main {
    display: flex;
    position: relative;
    .shopify {
      padding: 16px 18px 16px 22px;
      border-left: 1px solid #f3f3f3;
      border-right: 1px solid #f3f3f3;
      display: flex;
      align-items: center;
      cursor: pointer;
      &_image {
        margin-right: 6px;
        width: 36px;
        height: 36px;
      }
      &_name {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #252627;
        margin-right: 4px;
      }
    }
    &:hover .submenu-modal {
      display: block;
    }
  }
  .submenu-modal {
    position: absolute;
    left: -29px;
    top: 61px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 14px;
    padding-right: 58px;
    border: 1px solid #ebebf0;
    background: #fff;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display: none;
    &-back,
    &-logout {
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        margin-right: 8px;
      }
    }
    &-logout {
      color: $red-color;
      margin-top: 16px;
      padding-bottom: 4px;
    }
  }
}
</style>