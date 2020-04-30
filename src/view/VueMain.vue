<template>
<div>
  <el-container style="display:flex;">
    <el-aside style="width:240px;height:calc(100vh - 60px);">
      <h4 style="padding:10px 20px;font-size:14px;">目录</h4>
      <el-collapse v-model="activeNames" @change="handleChange" class="collapse-item" accordion>
        <el-collapse-item :title="item.title" :key="index" :name="item.index" v-for="(item,index) in chapter">
          <div class="unit" @click="getDetail" v-for="unit in item.units" :key="unit">{{unit}}</div>
        </el-collapse-item>
      </el-collapse>
    </el-aside>
    <el-container style="height:calc(100vh - 60px);">
      <el-main class="main-note">
        <Index ></Index>
      </el-main>

    </el-container>
  </el-container>
</div>
</template>

<script>
import Index from '../view/vue'
export default {
  name:'VueMain',
  components: {
    Index
  },
  data() {
    return {
      activeNames: ['1'],
      chapter: [
        {title: 'vue基础语法，指令', units: ['vue列表渲染', '条件渲染']},
        {title: 'vue组件化', units: ['组件化实现和使用','组件之间的通信方式']}
      ],
      objlis: [
        {name: 'vue', id: 'vue'},
        {name: 'javascript', id: 'javascript'}
      ]
    }
  },
  methods: {
    getDetail() {
      this.$router.push({name: 'VueBaseGrammar'})
    }
  }
}

</script>
<style scoped>

</style>