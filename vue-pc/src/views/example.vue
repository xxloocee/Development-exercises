<template>
  <div class="example">
    <span class="demonstration">轮播按需引入</span>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in arrTwo" :key="item.name">
        <h3>{{ item.nm }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import getpk from '../encrypt/getPassKey' // 获取密码加密函数
// console.log(getpk)
import api from "../api/index";
export default {
  components: {
  },
  name: "example",
  data() {
    return {
      input: '',
      password: '',
      form: {
        name: '',
        pass: ''
      },
      arr: [
        {name: 'one'},
        {name: 'two'},
        {name: 'three'}
      ],
      arrTwo: [
        {name: 'one', active: true, nm: '张三', cls: '一班', tp: '党建培训'},
        {name: 'two', active: false, nm: '李四', cls: '二班', tp: '团建培训'},
        {name: 'three', active: false, nm: '王二', cls: '三班', tp: '没有建培训'}
      ]
    }
  },
  methods: {
    ...mapActions([
      'getLogin',
      'AgetCrf',
      'AgetCollection'
    ]),
    onSubmit () {
      if (this.form.name && this.form.pass) {
        let pasKey = JSON.stringify(this.keyEncrypt(this.form.pass, this.collection))
        let url = {
          _csrf: this.crfcode,
          username: this.form.name,
          password: pasKey,
          responseType: 'json'
        }
        this.form.pass = pasKey
        this.getLogin(url)
      } else {
        alert('请输入账号密码')
      }
    },
    keyEncrypt(data, coll) {
      console.log(coll)
      const rsaEncrypt = new JSEncrypt();
      rsaEncrypt.setPublicKey(coll); // 加入公钥
      const passPhrase = this.generateEncryptPassword(32);

      const iv = CryptoJS.lib.WordArray.random(128 / 8).toString(
        CryptoJS.enc.Hex
      );
      const salt = CryptoJS.lib.WordArray.random(128 / 8).toString(
        CryptoJS.enc.Hex
      );
      const key = CryptoJS.PBKDF2(passPhrase, CryptoJS.enc.Hex.parse(salt), {
        keySize: 128 / 32,
        iterations: 1000
      });

      const aesEncrypted = CryptoJS.AES.encrypt(data, key, {
        iv: CryptoJS.enc.Hex.parse(iv)
      });
      const aesKey = passPhrase + ":::" + salt + ":::" + aesEncrypted.iv;
      const encryptedMessage = aesEncrypted.ciphertext.toString(
        CryptoJS.enc.Base64
      );
      const encryptedKey = rsaEncrypt.encrypt(aesKey);

      const encrypted = encryptedKey + ":::" + encryptedMessage;
      return encrypted;
    },

    generateEncryptPassword(length) {
      const encryptPassChars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";
      let randomstring = "";
      for (let i = 0; i < length; i++) {
        const rnum = Math.floor(Math.random() * encryptPassChars.length);
        randomstring += encryptPassChars.substring(rnum, rnum + 1);
      }
      return randomstring;
    }
  },
  watch: {
    allNumber(newVal) {
      console.log(newVal)
    }
  },
  computed: {
    ...mapGetters([
      'allNumber',
      'crfcode',
      'collection'
    ])
  },
  created() {
    console.log('先')
  },
  mounted() {
    this.AgetCrf()
    this.AgetCollection()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/variables';
  @import '../assets/scss/mixins';
  .example {
    width: 100%;
    height: 200px;
    background: red;
  }
</style>
