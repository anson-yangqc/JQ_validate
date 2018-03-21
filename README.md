## PACKAGE
### JQ_validate.html 校验

```javascript
验证日期格式的正则表达式：/^[0-9]{4}-[0-1]?[0-9]{1}-[0-3]?[0-9]{1}$/
验证手机号码的正则表达式/^1[3|4|5|7|8][0-9]\d{4,8}$/
验证中文的正则表达式：/^[\u4e00-\u9fa5]+$/
验证网址的正则表达式：/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
验证邮箱的正则表达式：/\w+([-+\.]?\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/) 
验证英文的正则表达式： /^[a-zA-Z]+$/;
```

```
var str = '393800@huawei.com'   
var reg = /(^[a-zA-Z0-9]*)(@huawei.com$)/;
if (reg.test(str)) {}else{}
```

### dateTimePicker.html 日期
### listItem.html 列表
### ajax.html ajax 请求
### createDiv.html 创建div 传入class、style、方法
