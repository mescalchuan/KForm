import { TYPE } from '../../../core/types'
import { isFunction } from '../../../core/utils'
export default {
  name: TYPE.SELECT,
  inheritAttrs: false,
  methods: {

  },
  render(h) {
    return (
      <Select {...{ props: this.$attrs, on: this.$listeners}} >
        { this.$attrs.$data.map(item => <Option key = { item.id } value = { item.id } disabled = { item.disabled }>{ item.render ? isFunction(item.render) ? item.render() : item.render : item.name }</Option>) }
        { Object.keys(this.$attrs.slots).map(item => (
          <template slot = { this.$attrs.slots[item].name } >
            { this.$attrs.slots[item].render(h) }
          </template>
        )) }
      </Select>
    )
  }
}