<template>
  <div class="login">
    <div class="login__content">
      <div class="login__header">
        <h1 class="login__title">Войти в SoundWave</h1>
      </div>
      <div class="login__images">
        <img
          src="@/assets/images/statics/lines/path5.svg"
          alt=""
          class="login__images-src"
        />
      </div>
      <div class="input__group">
        <div class="input__group-item">
          <label for="email" class="input__group-email"
            >Электронная почта или имя пользователя</label
          >
          <input
            type="text"
            id="email"
            v-model="email"
            class="input__group-input"
          />
        </div>
        <div class="input__group-item">
          <label for="password" class="input__group-password">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="input__group-input"
          />
        </div>
        <div class="slider-box">
          <label class="switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div class="slider round"></div>
          </label>
          <p>Запомнить меня</p>
        </div>

        <div class="login__botton">
          <button class="login__botton-btn" @click="login">Войти</button>
        </div>

        <div class="login__forgot-password">
          <a class="forgot" href="#" @click.prevent="forgotPassword"
            >Забыли пароль?</a
          >
        </div>

        <hr class="login__line" />

        <div class="login__register">
          <p class="login__register-link">
            Нет аккаунта? <span class="login__register-reg"><a href="#">Регистрация в SoundWave</a></span>
          </p>
          <p class="login__register-disclaimer">
            Нажимая кнопку “Войти”, вы даете подтверждение о соблюдении
            <i><a href="">Политики и Конфиденциальности</a></i> <span class="login__register-dis" >SoundWave</span> 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss">
@import "@/assets/styles/pages/login/login.scss";
</style>

  <script></script>
  