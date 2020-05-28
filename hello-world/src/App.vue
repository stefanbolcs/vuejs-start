<template>
  <div id="app" class="containers">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/friends">Friends</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/account">Account</router-link>
    </div>
    <router-view />
    <Test v-bind:header="header" />
    <Test2 v-bind:header="header" />
    <Tabs>
      <Tab name="About us" :selected="true">
        <h1>here is he content about us tab</h1>
      </Tab>

      <Tab name="About our culture">
        <h1>tab out the culture</h1>
      </Tab>

      <Tab name="About our vision">
        <h1>here is the vision tab</h1>
      </Tab>
      <Tab name="About our other things">
        <h1>other things tab</h1>
      </Tab>

      <input type="text" v-model="coupon" />
    </Tabs>

    <!-- <h1 v-for="(item,index) in posts" :key="index">{{item.title}}</h1> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import Coupon from "./components/Coupon";
export default {
  name: "app",
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  computed: {
    ...mapState(["posts"]),
  },
  components: {
    Test,
    Test2,
    Tabs,
    Tab,
    Coupom,
  },
  data() {
    return {
      header: "initial header",
      couponApplied: false,
    };
  },
};
</script>
