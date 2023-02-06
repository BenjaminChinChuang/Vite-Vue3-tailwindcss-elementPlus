<template>
  <div class="flex flex-col justify-center h-full">
    <ul class="flex items-center justify-center mb-3">
      <el-divider direction="vertical"></el-divider>
      <li>
        <el-link
          href="#"
          class="py-1 text-xs hover:underline text-rt-gray-darker"
          :underline="false"
          target="_blank"
          title="title"
          itemprop="url"
          >會員合約</el-link
        >
      </li>
      <el-divider direction="vertical"></el-divider>
      <li>
        <el-link
          href="#"
          class="py-1 text-xs hover:underline text-rt-gray-darker"
          :underline="false"
          target="_blank"
          title="title"
          itemprop="url"
          >隱私權聲明</el-link
        >
      </li>
      <el-divider direction="vertical"></el-divider>
    </ul>
    <div itemprop="copyrightHolder">
      <p class="text-xs text-center text-rt-gray">
        <span>Footer國際資訊股份有限公司版權所有</span
        ><span>Copyright © Footer Co., Ltd.</span>
      </p>
    </div>
  </div>
</template>

<script setup></script>
