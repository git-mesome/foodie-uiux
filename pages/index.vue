<template>
    <full-page>
      <section class="section">
        <MainCover/>
      </section>
      <section class="section">
        <Intro/>
      </section>
      <section class="section">
        <WhatIsFoodie/>
      </section>
      <section class="section">
        <Earth/>
      </section>
    </full-page>
</template>

<script>
import MainCover from "../components/MainCover";
import Intro from "../components/Intro"
import WhatIsFoodie from "../components/WhatIsFoodie";
import Earth from "../components/chat/Earth";

export default {
  name: 'IndexPage',
  components: {
    MainCover, Intro,
    WhatIsFoodie,
    Earth
  },

}
</script>
<style>
::-webkit-scrollbar {
   display: none;
 }

.section {
  height: 100vh;
}
</style>
