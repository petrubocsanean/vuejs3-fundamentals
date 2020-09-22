import { createApp } from 'vue/dist/vue.esm-browser.js'

const User = {
    props: {
        person: {
            type: Object
        }
    },
    template: `<h3>Hello {{person.name}}, you are {{person.age}} years old !</h3>`
}

const app = createApp({
    components: {
        User
    },
    template: `
    <user :person="person"/>
    <button @click="increment">Increment</button>
    <div v-if="isEven()">
        <p> Age is even </p>
    </div>
    <div v-else>
        <p> Age is not even </p>
    </div>
    <div v-for="lang in languages">
        {{lang}}
    </div>
    <input v-model="value"/>
    <div :if="error">{{error}}</div>
    `,
    data() {
        return {
            person: {
                name: 'Petru',
                age: 28
            },
            languages: ["c#", "dart", "js", "ts", "java"],
            value: ''
        }
    },
    methods: {
        increment() {
            this.person.age++;
        },
        isEven() {
            return this.person.age % 2 === 0;
        },
        input(e) {
            this.value = e.target.value;
        }
    },
    computed: {
        error() {
            if (this.value.length < 7) {
                return 'Too short';
            }
        }
    }
}).mount("#app")
