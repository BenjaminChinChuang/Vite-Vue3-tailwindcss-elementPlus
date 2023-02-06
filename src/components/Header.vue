<template>
  <el-row justify="space-between" class="h-full">
    <el-col :span="12" class="h-full">
      <div class="flex items-center h-full">
        <div class="header-menu-toggler-wrap">
          <button
            class="header-menu-toggler"
            :class="{'is-active': isShowAside}"
            @click="toggleAside"
          >
            <span class="header-menu-line is-top"></span>
            <span class="header-menu-line is-middle"></span>
            <span class="header-menu-line is-bottom"></span>
          </button>
        </div>
        <h2
          class="text-2xl font-bold text-white whitespace-nowrap"
          itemprop="name"
        >
          Header Area
        </h2>
      </div>
    </el-col>
    <el-col :span="12" class="flex items-center justify-end">
      <nav id="header-account" class="flex items-center header-account">
        <el-menu
          mode="horizontal"
          :ellipsis="false"
          background-color="transparent"
        >
          <el-sub-menu index="1 " popper-class="header-account-menu">
            <template #title>
              <SvgIcon name="account-avatar" width="24" height="24"></SvgIcon>
              <p class="text-sm text-white mx-1.5 hidden xs:block">
                <span>Edword</span>
              </p>
              <el-icon class="hidden xs:block" color="#ffffff">
                <caret-bottom />
              </el-icon>
            </template>
            <el-menu-item index="1-1" class="header-account-menu-item">
              <p class="flex items-center px-2 text-center">
                <SvgIcon
                  class="mr-1 opacity-25"
                  name="main-store"
                  width="20"
                  height="20"
                ></SvgIcon>
                <a href="#" title="個人資料" target="_blank">
                  <span>個人資料</span>
                </a>
              </p>
            </el-menu-item>
            <el-menu-item index="1-1" class="header-account-menu-item">
              <p class="flex items-center px-2 text-center">
                <SvgIcon
                  class="mr-1 opacity-25"
                  name="judge"
                  width="20"
                  height="20"
                ></SvgIcon>
                <a href="#" title="購物車" target="_blank">
                  <span>購物車</span>
                </a>
              </p>
            </el-menu-item>

            <el-divider></el-divider>

            <el-menu-item index="1-1" class="header-account-menu-item">
              <p class="flex items-center px-2 text-center">
                <SvgIcon
                  class="mr-1 opacity-25"
                  name="sidebar-exit"
                  width="20"
                  height="20"
                ></SvgIcon>
                <a href="#" title="登出">
                  <span>登出</span>
                </a>
              </p>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </nav>
    </el-col>
  </el-row>
</template>

<script setup>
import SvgIcon from 'Components/SvgIcons.vue'
import {CaretBottom} from '@element-plus/icons-vue'
import {ref, reactive, computed, onMounted, onUnmounted, watch} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

const props = defineProps({
  isShowAside: {
    type: Boolean,
  },
})

const emit = defineEmits(['toggleAside'])

const toggleAside = () => {
  emit('toggleAside', !props.isShowAside)
}
</script>
