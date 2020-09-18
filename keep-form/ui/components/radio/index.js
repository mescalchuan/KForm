import { TYPE } from '../../../core/types'

export default {
  name: TYPE.RADIO,
  inheritAttrs: false,
  render(h) {
    return (
      <RadioGroup {...{ props: this.$attrs, on: this.$listeners}}  on-input = { e => this.$emit('input', e) }>
        { this.$attrs.$data.map(item => <Radio label = { item.id } disabled = { item.disabled } true-value = { 'Number' } false-value = { 'Number' }>{ item.name }</Radio>) }
      </RadioGroup>
    )
  }
}