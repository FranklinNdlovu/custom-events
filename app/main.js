const inputComponent = {
    template: `<input class="input is-small" type="text" :placeholder="placeholder" v-model="noteInput" @keyup.enter="monitorEnterKey" />`,
    props: ['placeholder'],
    data() {
        return {
            noteInput: '',
        }
    },
    methods: {
        monitorEnterKey(e) {
            this.$emit('add-note', { note: this.noteInput, timeStamp: new Date().toLocaleString() });
            this.noteInput = '';
        }
    },
    emits: ['add-note']
};

const app = {
    components: {
        'input-component': inputComponent
    },
    data() {
        return {
            notes: [],
            timeStamps: [],
            placeholder: 'Enter a note',
        }
    }
};

Vue.createApp(app).mount('#app');
