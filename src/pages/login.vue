<template>
    <div id="login">
        <div class="login_div">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="login_form">
                <el-form-item label="用户名">
                    <el-input v-model="formLabelAlign.id"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="login_down"></div>
    </div>
</template>

 <script type="text/javascript">

export default {
    data() {
        return {
            labelPosition: 'left',
            formLabelAlign: {
                id: '',
                password: ''
            }
        }
    },
    methods: {
        //提交登录数据，并返回token
        submitForm() {
            let loadingInstance = this.$loading({ fullscreen: true, text: "拼命加载中..." });
            // let _this = this;
            let params = {
                api: "login/checkpass",
                param: { id: this.formLabelAlign.id, password: this.formLabelAlign.password }
            };
            API.post("login/checkpass",params.param,function (res) {
                    loadingInstance.close();
                    
                },function (err) {
                    console.log(Pop);

                    // _this.$message.error({showClose: true,message:err.message,duration:0});
                    loadingInstance.close();
                });
        }
    }
}
</script>

<style>
#login {
    width: 100%;
    height: 100%;
}

.login_div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../images/login.png);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position-x: 60%;
}

.login_form {
    padding-top: 25%;
    height: 300px;
    width: 400px;
    padding-left: 42%;
}

.login_form button {
    float: right;
    width: 30%
}

.login_down {
    width: 100%;
    height: 100%;
    background-image: url(../images/login_down1.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>