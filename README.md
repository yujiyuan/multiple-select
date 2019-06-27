# mobile-multiple-select

一个基于 react 的移动端多选组件。

## 引用

```javascript
const data = [
  { name: '樱花庄', code: 1 },
  { name: '有罪受', code: 2 },
  { name: '忽然', code: 3 },
  { name: '还给我', code: 4 }
]

class App extends Component {
  state = {
    val: []
  }
  handleChange = val => {
    console.log('val=====>', val)
    this.setState({ val })
  }
  render() {
    return (
      <MobileMultipleSelect
        data={data}
        label="人员名称"
        checkbox
        serviceData={['2', '3']}
        onChange={this.handleChange}
      />
    )
  }
}
```

## API

| 名称        | 类型     | 默认值 | 是否必填 | 注释                                             |
| ----------- | -------- | ------ | -------- | ------------------------------------------------ |
| data        | array    | []     | 是       | 多选列表的数据                                   |
| serviceData | array    | []     | 否       | 从后台返回的数据，一般用于设置默认选择值         |
| isRequired  | boolean  | true   | 否       | 是否显示必填的红色星号                           |
| label       | string   | ""     | 是       | 多选列表的文字                                   |
| checkbox    | boolean  | true   | 否       | 是否是 checkbok 类型                             |
| onChange    | function | ()=>{} | 是       | 点击 checkbox 时通过该方法将选中的值传回给使用者 |

## 注意事项

serviceData 数组里的值必须为字符串，否则无法正确设置默认值
