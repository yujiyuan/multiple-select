# mobile-multiple-select
一个基于react的移动端多选组件。
## 下载

```shell
$ git clone git@github.com:yujiyuan/multiple-select.git
```
## 引用

```javascript
import MultipleSelect from "./MultipleSelect/MultipleSelect";

const data = [
  { name: "樱花庄", code: 1 },
  { name: "有罪受", code: 2 },
  { name: "忽然", code: 3 },
  { name: "还给我", code: 4 }
];
<MultipleSelect data={data} label="人员名称" checkbox serviceData={["2", "3"]} />
```
## 示例展示

https://codesandbox.io/s/zq10pn529x

## API

| 名称        | 类型    | 默认值 | 是否必填 | 注释                                     |
| ----------- | ------- | ------ | -------- | ---------------------------------------- |
| data        | array   | []     | 是       | 多选列表的数据                           |
| serviceData | array   | []     | 否       | 从后台返回的数据，一般用于设置默认选择值 |
| isRequired  | boolean | true   | 否       | 是否显示必填的红色星号                   |
| label       | string  | ""     | 是       | 多选列表的文字                           |
| checkbox    | boolean | true   | 否       | 是否是checkbok类型                       |

## 注意事项

serviceData数组里的值必须为字符串，否则无法正确设置默认值
