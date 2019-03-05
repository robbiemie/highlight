<template>
  <div class="app">
    <input type="text" v-model="searchKey" @input="handleSearch" placeholder="请输入要检索的数据">
    <ul class="list">
      <li v-for="it in list" :key="it">
        <div>{{it}}</div>
        <!-- <Highlight :val="it" :searchKey="searchKey">{{it}}</Highlight> -->
      </li>
    </ul>
  </div>
</template>

<script>
// import Highlight from '@/component/Highlight'

export default {
  name: 'app',
  data () {
    return {
      searchKey: '',
      list: ['北京1', '北京2', '北京3', '上海北1', '上海北2', '北海北1', '北海北2', '北海北3'],
      stageList: [] // 暂存数组
    }
  },
  components: {
    // Highlight
  },
  mounted () {
    this.stageList = this.list
  },
  methods: {
    handleSearch () {
      this.list = this.stageList.filter(name => {
        // 过滤非匹配字段
        return name.match(this.searchKey)
      })
    }
  }
}
</script>

<style lang="scss">
</style>
