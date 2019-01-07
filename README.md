# multiple-select
## 一个基于react的移动端多选组件。

使用示例：

```javascript
const data = [
  { name: "樱花庄", code: 1 },
  { name: "有罪受", code: 2 },
  { name: "忽然", code: 3 },
  { name: "还给我", code: 4 }
];
<MultipleSelect
          data={data}
          label="人员名称"
          checkbox
          serviceData={["2", "3"]}
        />
```

