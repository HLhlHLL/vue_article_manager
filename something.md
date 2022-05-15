### 注意发送请求的数据格式

form ---> Content-Type: application/x-www-form-urlencoded
普通数据 ---> Content-Type: application/json

### 封装表单组件时一定要阻止默认提交行为，否则会导致页面刷新
