<template>
  <el-config-provider :locale="locale">
    <div class="common-layout" :class="{'is-aside-active': isShowAside}">
      <el-container>
        <el-header class="fixed top-0 left-0 w-full">
          <Header
            :isShowAside="isShowAside"
            @toggleAside="setAsideToggle"
          ></Header>
        </el-header>
        <el-aside
          class="transition-transform duration-200 ease-out common-layout-aside"
          width="240px"
          :class="{'-translate-x-full': !isShowAside}"
        >
          <Aside></Aside>
        </el-aside>
        <el-container class="common-layout-main">
          <el-main>
            <slot></slot>
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
      <div
        class="aside-overlay el-overlay animate-fadein"
        v-show="isShowAside"
      ></div>
    </div>
  </el-config-provider>
</template>

<script setup>
import debounce from 'lodash/debounce'
import zhTw from 'element-plus/lib/locale/lang/zh-tw'
import {ref, reactive, computed, onMounted, onUnmounted, watch} from 'vue'
import Header from 'Components/Header.vue'
import Footer from 'Components/Footer.vue'
import Aside from 'Components/Aside.vue'
import {ArrowRight} from '@element-plus/icons-vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

let locale = zhTw
let currentScreenSize = ref(window.innerWidth)
let isShowAside = currentScreenSize.value < 1200 ? ref(false) : ref(true)

const route = useRoute()
const store = useStore()
const errorMsg = computed(() => store.state.errorMsg)
const isLoading = computed(() => store.state.isLoading)
const showSidebar = computed(() => store.state.showSidebar)

function setAsideToggle(toggle) {
  isShowAside.value = toggle
}
watch(
  () => route.name,
  async newName => {
    if (newName && currentScreenSize.value < 1200) {
      isShowAside.value = false
    }
  }
)

// function
const onViewSizeChange = () => {
  let isSmallToLarge =
    currentScreenSize.value < 1200 && window.innerWidth >= 1200
  let isLargeToSmall =
    currentScreenSize.value >= 1200 && window.innerWidth < 1200
  if (isSmallToLarge) isShowAside.value = true
  if (isLargeToSmall) isShowAside.value = false
  currentScreenSize.value = window.innerWidth
}

const toggleSidebar = val => {
  isOpenSidebar.value = val
}

onMounted(() => {
  window.addEventListener('resize', debounce(onViewSizeChange, 300))
})
onUnmounted(() => {
  window.removeEventListener('resize', onViewSizeChange)
})
</script>
