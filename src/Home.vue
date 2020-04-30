<template>
<div>
  <el-container>
    <el-header style="height:60px;border-bottom: 1px solid #DCDFE6;">
      <div class="head-title">
        <img class="h-icon" src="./assets/logo.png" />
        <p class="h-text">这是一个记录学习前端的笔记</p>
      </div>
      <div class="about">关于</div>
      <div class="tab">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item  v-for="(item,index) in objlis" :index="index+''" :key="index"
          @click="getMain(item.id)">{{item.name}}</el-menu-item>
      </el-menu>
      </div>
    </el-header>
    <router-view></router-view>
  </el-container>
</div>
</template>
<script>
export default {
  name:'Home',
  components: {},
  data() {
    return {
      activeNames: ['1'],
      activeIndex: '0',
      chapter: [
        {title: 'vue基础语法，指令', units: ['vue列表渲染', '条件渲染']},
        {title: 'vue组件化', units: ['组件化实现和使用','组件之间的通信方式']}
      ],
      objlis: [
        {name: 'vue', id: 'VueBaseGrammar'},
        {name: 'javascript', id: 'JsBaseGrammar'}
      ]
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getMain(id) {
      this.$router.replace({name: id})
    }
  }
}
</script>
<style lang="scss">
html,body {
  height: 100%;
  width: 100%;
}
.tab {
  float: right;
}
.head-title {
  float: left;
  height: 60px;
}
.h-text {
  height: 60px;
  display: inline-block;
  font-size: 20px;
  line-height: 60px;
}
.h-icon {
  /* background-image: url('./assets/logo.png'); */
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.about {
  float: right;
  height: 40px;
  width: 40px;
  margin: 10px 0;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
.about:hover {
  color: #409eff;
  cursor: pointer;
  font-size: 13px;
}
.collapse-item{
  padding-left:20px;
}
.unit { 
  box-sizing: border-box;
  padding: 5px 14px;
  // border-bottom: 1px solid #E4E7ED;
  cursor: pointer;
}
.unit:hover {
  color: #409eff;
}
</style>