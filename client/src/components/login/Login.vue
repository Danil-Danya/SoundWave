<template>
  <div class="login">
    <div class="login__content">
      <div class="login__header">
        <h1 class="login__title">Войти в SoundWave</h1>
      </div>
      <div class="login__image">
        <img
          src="@/assets/images/statics/lines/path3.svg"
          alt=""
          class="login__image-src"
        />
      </div>
      <div class="input-group">
        <div class="input-group__item input-mail">
          <label for="email" class="input-mail__label"
            >Электронная почта или имя пользователя</label
          >
          <input
            type="text"
            id="email"
            placeholder="Электронная почта или имя пользователя"
            v-model="email"
            class="input-field input-mail__input"
          />
        </div>
        <div class="input-group__item input-password">
          <label for="password" class="input-password__label">Пароль</label>
          <input
            type="password"
            id="password"
            placeholder="Пароль"
            v-model="password"
            class="input-field input-password__input"
          />
        </div>

        <div class="input-group__save">
          <input type="checkbox" id="switch" class="input-toggle" /><label
            for="switch"
            class="input-toggle__label"
            >Toggle</label
          >
          <p>Запомнить меня</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <style lang="scss">
@import "@/assets/styles/pages/login/login.scss";
</style>

  <script></script>
  