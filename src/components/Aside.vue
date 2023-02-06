<template>
  <el-menu
    default-active="googleAds"
    active-text-color="#00b3ff"
    text-color="#444444"
    class="mt-4 text-sm rt-aside el-menu-vertical text-warning-color"
  >
    <!-- menu -->
    <div v-for="(sidebar, index) in sidebarItems" :key="index">
      <!-- 二級菜單 -->
      <el-sub-menu v-if="sidebar.child" :index="sidebar.index">
        <template #title class="px-6 font-bold">
          <i class="w-5 h-5 mr-4 opacity-25 rt-aside-item-icon">
            <SvgIcon
              class="icon-normal"
              :name="sidebar.icon"
              width="20"
              height="20"
            />
            <SvgIcon
              class="icon-active"
              :name="`${sidebar.icon}-active`"
              width="20"
              height="20"
              color="#00b3ff"
            />
          </i>
          <span class="font-bold">{{ sidebar.title }}</span>
          <el-icon color="#ffffff" class="el-sub-menu__icon-arrow">
            <caret-bottom />
          </el-icon>
        </template>

        <el-menu-item
          v-for="(children, index) in sidebar.child"
          :key="index"
          :index="children.index"
        >
          <router-link
            v-if="children.isRouter"
            :to="children.url"
            class="flex items-center w-full justify-items-center"
          >
            {{ children.title }}
          </router-link>
          <a
            v-else
            class="flex items-center w-full justify-items-center"
            :href="children.url"
            :target="children.target ? children.target : '_self'"
            :title="children.title"
          >
            <i class="w-3 h-3 mr-6 opacity-25 rt-aside-item-icon">
              <SvgIcon
                class="icon-normal"
                name="sidebar-check"
                width="12"
                height="12"
                color="#ffffff"
              />
              <SvgIcon
                class="icon-active"
                name="sidebar-check"
                width="12"
                height="12"
                color="#00b3ff"
              />
            </i>
            <span>{{ children.title }}</span>
          </a>
        </el-menu-item>
      </el-sub-menu>

      <!-- 一級菜單 -->
      <el-menu-item v-else :index="sidebar.index" class="px-6 py-3 font-bold">
        <router-link
          v-if="sidebar.isRouter"
          :to="sidebar.url"
          class="flex items-center w-full justify-items-center"
        >
          {{ sidebar.title }}
        </router-link>
        <a
          v-else
          class="flex items-center w-full justify-items-center"
          :href="sidebar.url"
          :target="sidebar.target ? sidebar.target : '_self'"
          :title="sidebar.title"
        >
          <i class="w-5 h-5 mr-4 opacity-25 rt-aside-item-icon">
            <SvgIcon
              class="icon-normal"
              :name="sidebar.icon"
              width="20"
              height="20"
            />
            <SvgIcon
              class="icon-active"
              :name="`${sidebar.icon}-active`"
              width="20"
              height="20"
              color="#00b3ff"
            />
          </i>
          <span>{{ sidebar.title }}</span>
        </a>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script setup>
import {CaretBottom} from '@element-plus/icons-vue'
import SvgIcon from 'Components/SvgIcons.vue'
import {ref, reactive, computed, onMounted, watch} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

let toggle = ref(false)
const toggleTest = () => {
  toggle.value = !toggle.value
}

const color = computed(() => (toggle.value ? '#00b3ff' : '#444444'))

const sidebarItems = computed(() => {
  return [
    {
      index: 'home',
      url: `/`,
      title: '首頁',
      icon: 'menu-overview',
      level: 1,
      isRouter: true,
    },
    {
      index: 'prodClassify',
      title: '商品分類',
      icon: 'ads-type',
      level: 2,
      child: [
        {
          index: 'colthes',
          url: `/prodClassify/clothes`,
          title: '衣服',
          isRouter: true,
        },
        {
          index: 'shoes',
          url: `/prodClassify/shoes`,
          title: '鞋子',
          isRouter: true,
        },
      ],
    },
  ]
})
</script>
