<template>
    <div>
      <div>
        <MainCover/>
      </div>
      <div>
        <Intro/>
      </div>
      <div>
        <WhatIsFoodie/>
      </div>
      <div>
        <Earth/>
      </div>
    </div>
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
</style>
