<script>
export default {
  name: 'highlight',
  props: {
    val: {
      type: Object,
      default: null
    },
    searchKey: {
      type: String,
      defeatlt: ''
    }
  },
  render: h => {
    return h('div', this.val)
  }
}

</script>
