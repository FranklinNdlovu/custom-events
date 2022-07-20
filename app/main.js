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
            this.$emit('add-note', { note: this.noteInput, timestamp: new Date().toLocaleString() });
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
            timestamps: [],
            placeholder: 'Enter a note',
        }
    },
    methods: {
        addNote(event) {
            this.notes.push(event.note);
            this.timestamps.push(event.timestamp);
        }
    }
};

Vue.createApp(app).mount('#app');
