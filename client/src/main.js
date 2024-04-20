import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const app = createApp(App)

import eng from './locales/en.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

const i18n = createI18n({
    legacy: true,
    fallbackLocale: 'ru',
    messages: {
        eng: eng,
        ru: ru,
        uz: uz
    }
})

app.use(router)
app.use(i18n)
app.mount('#app')