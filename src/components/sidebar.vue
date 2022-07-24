<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <img
        v-if="isExpanded"
        src="@/assets/images/Logo-light.png"
        alt=""
        class="logo"
      />
      <img
        v-else
        src="@/assets/images/single-icon.png"
        alt=""
        class="logo"
        style="margin-bottom: 24.22px; margin-top: 22.22px"
      />
      <div class="tabs">
        <router-link :to="{ name: 'Customers' }" class="tab active">
          <img src="@/assets/svg/customer.svg" alt="" class="tab-icon" />
          <span v-if="isExpanded">Customers</span>
        </router-link>
        <router-link :to="{ name: 'Campaign' }" class="tab">
          <img src="@/assets/svg/campaign.svg" alt="" class="tab-icon" />
          <span v-if="isExpanded">Campaign</span>
        </router-link>
      </div>
    </div>
    <div class="sidebar-bottom">
      <div class="support">
        <img src="@/assets/svg/support.svg" alt="" />
        <span v-if="isExpanded">Help center</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    isExpanded() {
      const sidebar = document.querySelector(".sidebar");
      if (!this.$store.state.sidebarClose) {
        sidebar.classList.remove("unexpanded");
      } else {
        sidebar.classList.add("unexpanded");
      }
    },
  },
  computed: {
    isExpanded() {
      return !this.$store.state.sidebarClose;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/main";
.sidebar {
  width: 230px;
  height: 100vh;
  background: linear-gradient(138.19deg, #003084 4.98%, #0294d7 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.4s ease;
  &-top {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .logo {
      margin-top: 20px;
      margin-bottom: 22px;
    }
    .tabs {
      width: 100%;
      display: flex;
      flex-direction: column;
      .tab {
        padding-top: 13px;
        padding-bottom: 13px;
        padding-left: 20px;
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        opacity: 0.1;
        transition: all 0.4s ease;
        min-height: 50px;
        img {
          margin-right: 15px;
        }
        &.active,
        &:hover {
          opacity: 1;
          position: relative;
          &::before {
            width: 5px;
            content: "";
            position: absolute;
            height: 100%;
            background: #fddd48;
            border-radius: 0px 3px 3px 0px;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
  &-bottom {
    width: 100%;
    color: #fff;
    opacity: 0.5;
    transition: all 0.4s ease;
    .support {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      min-height: 50px;
      img {
        padding: 13px 10px 13px 20px;
      }
      span {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        padding-top: 13px;
        padding-bottom: 13px;
      }
    }
    &.active,
    &:hover {
      opacity: 1;
      position: relative;
      &::before {
        width: 5px;
        content: "";
        position: absolute;
        height: 100%;
        background: #fddd48;
        border-radius: 0px 3px 3px 0px;
        left: 0;
        top: 0;
      }
    }
  }
  &.unexpanded {
    width: 66px;
  }
}
</style>