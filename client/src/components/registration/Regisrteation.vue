<template>
    <div class="login">
        <div class="login__content">
            <div class="login__header">
                <h1 class="login__title">Зарегистрироваться в SoundWave</h1>
            </div>
            <div class="login__images">
                <img src="@/assets/images/statics/lines/path5.svg" alt="Line" class="login__images-src"/>
            </div>
            <div class="input__group">
                <div class="input__group-item">
                    <label for="email" class="input__group-email">Электронная почта или имя пользователя</label>
                    <input type="email" id="email" v-model="email" class="input__group-input" ref="email"/>
                </div>
                <div class="input__group-item">
                    <label for="user" class="input__group-user">Ваше имя</label>
                    <input type="text" id="user" v-model="username" class="input__group-input" ref="username"/>
                </div>
                <div class="input__group-item">
                    <label for="password" class="input__group-password">Пароль</label>
                    <input type="password" id="password" v-model="password" class="input__group-input" ref="password"/>
                </div>
                <div class="input__group-item">
                    <label for="confirmPassword" class="input__group-password">Подтверждение</label>
                    <input type="password" id="confirmPassword" v-model="confirmPassword" class="input__group-input" ref="confirmPassword"/>
                </div>
                <p class="login__message">{{ message }}</p>
                <div class="login__button">
                    <button class="login__button-btn" @click="initilaliztion">Далее</button>
                </div>
                <hr class="login__line"/>
                <div class="login__register">
                    <p class="login__register-link"> Уже есть аккаунт? <span class="login__register-reg"><router-link to="/login/ru">Войдите в него.</router-link></span></p>
                    <p class="login__register-disclaimer">Нажимая кнопку “Войти”, вы даете подтверждение о соблюдении <i><router-link to="">Политики и Конфиденциальности</router-link></i> <span class="login__register-dis" >SoundWave</span> 
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

    
<style lang="scss">
@import "@/assets/styles/pages/registration/registration.scss";
</style>


<script>
import axios from 'axios';

const env = import.meta.env;

export default {
    data: () => ({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        message: ''
    }),
    methods: {
        validateField(ref, value, emptyMessage, invalidMessage) {
            const emailTest = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

            if (!value) {
                this[ref] = '';
                this.$refs[ref].setAttribute('placeholder', emptyMessage);
                this.$refs[ref].style.border = '1px solid red';
                return false;
            } 
            else if (ref === 'email' && invalidMessage && !emailTest.test(value)) {
                this[ref] = '';
                this.$refs[ref].setAttribute('placeholder', invalidMessage);
                this.$refs[ref].style.border = '1px solid red';
                return false;
            }
            else if (ref === 'confirmPassword' && this.password !== this.confirmPassword) {
                this[ref] = '';
                this.$refs[ref].setAttribute('placeholder', invalidMessage);
                this.$refs[ref].style.border = '1px solid red';
                return false;
            }
            return true;
        },


        validator() {
            return ['email', 'username', 'password', 'confirmPassword'].every(ref => {
                const emptyMessage = 'Это поле не может быть пустым';
                let invalidMessage = '';

                if (ref === 'email') {
                    invalidMessage = 'Некорректный адрес электронной почты';
                } 
                else if (ref === 'confirmPassword' && this.password !== this.confirmPassword) {
                    invalidMessage = 'Пароли не совпадают';
                }
                return this.validateField(ref, this[ref], emptyMessage, invalidMessage);
            });
        },

        async registration () {
            const url = `${ env.VITE_APP_API_HOST }/${ env.VITE_APP_SERVER_API }/user-create`;
            const validate = this.validator();

            const data = {
                email: this.email,
                password: this.password,
                username: this.username
            }
            
            if (validate) {
                try {
                    const responseRegistr = await axios.post(url, data, {
                        headers: {
                            'content-type': 'application/json'
                        },
                    })

                    return responseRegistr.data.newUser ? true : false;
                }
                catch (error) {
                    console.log(error);
    
                    if (error.response.data.message === 'This user has been added') {
                        this.message = 'Пользователь с таким логином уже существует';
                    }
                }
            }
        },

        async initilaliztion () {
            const url = `${ env.VITE_APP_API_HOST }/${ env.VITE_APP_SERVER_API }/user-initilazation`;

            const data = {
                email: this.email,
                password: this.password,
            }

            const validate = this.validator();
            const regisred = await this.registration();

            if (validate && regisred) {
                try {
                    const responseInit = await axios.post(url, data, {
                        headers: {
                            'content-type': 'application/json'
                        },
                    });

                    const { webToken } = responseInit.data;
                    localStorage.setItem('clientWebToken', webToken);

                    await this.authotization();

                    if (localStorage.getItem('clientWebToken') && localStorage.getItem('auth')) {
                        this.$router.push('/app/home');
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        },

        async authotization () {
            const url = `${ env.VITE_APP_API_HOST }/${ env.VITE_APP_SERVER_API }/user-authotization`;

            if (localStorage.getItem('clientWebToken')) {
                try {
                    const responseAuth = await axios.post(url, { 
                            clientWebToken: localStorage.getItem('clientWebToken')
                        }, {
                        headers: {
                            'content-type': 'application/json'
                        },
                    });

                    const { user, auth } = responseAuth.data;

                    localStorage.setItem('auth', auth);
                    localStorage.setItem('user', JSON.stringify(user));
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
    }
}

</script>