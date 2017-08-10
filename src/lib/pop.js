var eu = require('element-ui')
function pop (type,message) {
  eu.$message({type:type,message:message,showClose:true,duration:0});
}

// 返回在vue模板中的调用接口
export default {
  errorpop: function (message) {
    return pop('error', message)
  }
}
