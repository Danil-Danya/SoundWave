<template>
  <div class="login">
    <div class="login__content">
      <div class="login__header">
        <h1 class="login__title">Войти в SoundWave</h1>
      </div>
      <div class="login__images">
        <img :src="require('@/assets/images/statics/lines/path5.svg')" alt="" class="login__images-src"/>
      </div>
      <div class="input__group">
        <div class="input__group-item">
          <label for="email" class="input__group-email">Электронная почта</label>
          <input type="text" id="email" v-model="email" class="input__group-input" ref="email"/>
        </div>
        <div class="input__group-item">
          <label for="password" class="input__group-password">Пароль</label>
          <input type="password" id="password" v-model="password" class="input__group-input" ref="password"/>
        </div>
        <div class="slider-box">
          <label class="switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
          </label>
          <p>Запомнить меня</p>
        </div>
        <p class="login__message">{{ message }}</p>
        <div class="login__bottun">
          <button class="login__botton-btn" @click="initilaliztion">Войти</button>
        </div>
        <div class="login__forgot-password">
          <!-- <a class="forgot" href="#">Забыли пароль?</a> -->
        </div>
        <hr class="login__line" />
        <div class="login__register">
          <p class="login__register-link">Нет аккаунта?<span class="login__register-reg"><router-link to="/registration/ru">Регистрация в SoundWave</router-link></span></p>
          <p class="login__register-disclaimer">Нажимая кнопку “Войти”, вы даете подтверждение о соблюдении<i><a href="">Политики и Конфиденциальности</a></i><span class="login__register-dis">SoundWave</span></p>
        </div>
      </div>
    </div>
  </div>
</template>



  
<style lang="scss">
@import "@/assets/styles/pages/login/login.scss";
</style>

<script>
import axios from 'axios';

const env = import.meta.env;

export default {
  data: () => ({
    email: '',
    password: '',
    message: ''
  }),
  methods: {
    validateField(ref, value, emptyMessage, invalidMessage) {
      if (!value) {
          this[ref] = '';
          this.$refs[ref].setAttribute('placeholder', emptyMessage);
          this.$refs[ref].style.border = '1px solid red';
          return false;
      } 
      return true;
    },

    validator() {
      return ['email', 'password',].every(ref => {
        const emptyMessage = 'Это поле не может быть пустым';
        let invalidMessage = '';

        return this.validateField(ref, this[ref], emptyMessage, invalidMessage);
    });
    },
    async initilaliztion () {
      const url = `${ env.VITE_APP_API_HOST }/${ env.VITE_APP_SERVER_API }/user-initilazation`;

      const data = {
        email: this.email,
        password: this.password,
      }

      const validate = this.validator();

      if (validate) {
        try {
          const responseInit = await axios.post(url, data, {
            headers: {
              'content-type': 'application/json'
            },
          });
  
          const { webToken } = responseInit.data;
  
          localStorage.setItem('clientWebToken', webToken);
  
          if (localStorage.getItem('clientWebToken')) {
              this.$router.push('/app/home');
          }
        }
        catch (error) {
          console.log(error);

          if (error.response.data.message === 'You send wrong password') {
            this.message = 'Вы ввели неверный пароль';
          }
          
          if (error.response.data.message === 'User not found') {
            this.message = 'Такой пользователь еще не зарегистрирован';
          }
        }
      }
    } 
  }
}
</script>