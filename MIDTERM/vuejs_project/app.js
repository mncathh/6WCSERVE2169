// Main App
Vue.createApp({
  data() {
    return {
      title: 'The Ledger',
      author: 'Joseph Esquivel',
      age: 34,
      showMessage: true,
    };
  }
}).mount('#app');

// Conditional Rendering
Vue.createApp({
  data() {
    return {
      seen: true
    };
  }
}).mount('#conditional-rendering');

// v-if / v-else Toggle
Vue.createApp({
  data() {
    return {
      showBooks: true,
      btitle: 'The Ledger',
      bauthor: 'Joseph Esquivel',
      year: 2008
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
}).mount('#books');

// v-for List Rendering
Vue.createApp({
  data() {
    return {
      todos: [
        { text: 'Clean the House' },
        { text: 'Prepare Breakfast' },
        { text: 'Attend WSERVER class' }
      ]
    };
  }
}).mount('#list-rendering');
