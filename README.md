## KeepForm 动态表单

基于 iview 实现的表单组件，支持布局、校验、配置化渲染等功能。

### Form 组件

#### 引入方式

```
import KeepForm from '_app/keep-form'
components: {
  KeepForm: KeepForm.Form
}
```

#### 属性

1. model
同 iview.Form 的 model，绑定数据源。必填，Object

`<keep-form :model="{ name: 'ee' }">`

2. schema
表单的详细配置项，详细配置见下表。必填，Object

#### Schema

1. form
用于配置 iview.Form 的除 model、rules 外的全部属性，比如 labelWidth、inline、labelPosition 等。KeepForm 会自动收集 schema.fields 和 keepField 组件的校验规则自动生成完整表单 rules，不需要单独配置该属性。

`<keep-form :model="{ name: 'ee' }" :schema="{ form: { labelWidth: 200 } }">`

2. fields
用于配置各个表单字段以生成表单组件。

2.1 type：表单组件的类型，支持 iview 的所有表单组件

2.2 field：表单字段值在 model 中对应的 key，KeepForm 基于此配置完成双向数据绑定

2.3 label：同 iview.FormItem 的 label

2.4 ui：表单组件的所有属性和事件配置项，见下

2.4.1 说明：KeepForm 会根据 type 渲染成最终的表单 ui 组件，这些 ui 组件自身的属性、事件、插槽等等全部配置均收集在 ui 里。

2.4.2 属性：以 input 为例

`<KeepForm :model="{ name: 'ee' }" :schema="{ fields: [{
  type: KeepForm.TYPE.INPUT,
  field: 'name',
  label: '姓名',
  ui: { placeholder: '请输入姓名',  }
}] }" />`