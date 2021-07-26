<template>
  <div class="searchbar">
    <Icon name="search" />
    <input
      class="searchbar-input"
      name="searchbar"
      :placeholder="placeholder"
      ref="input"
      type="text"
      v-model="searchbar"
    />
  </div>
</template>

<script>
import Icon from '../icon/Icon.vue'
export default {
  components: {
    Icon
  },
  data () {
    return {
      searchbar: ''
    }
  },
  name: 'Searchbar',
  methods: {
    onSlashFocusInput: function (event) {
      if (event.key === '/') {
        this.$refs.input.focus();
      }
    }
  },
  mounted() {
    document.addEventListener('keyup', this.onSlashFocusInput);
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.onSlashFocusInput);
  },
  props: {
    placeholder: null,
    minWidth: {
      type: Number,
      default: 200
    }
  }
}
</script>

<style lang="scss" scoped>
.searchbar {
  background: #E5E5E5;
  border-radius: 4px;
  color: #000;
  display: inline-block;
  height: 28px;
  margin: 4px;
  padding-left: 7px;
  width:300;
}
.searchbar:focus-within {
  // ugly, but I removed the outline on the input field so I wanted some visual cue for the focused state
  box-shadow: 0px 0px 4px 2px #171FFF;
}
.searchbar-input {
  background: none;
  border: none;
  height: 100%;
  outline: none;
}
::placeholder { 
  color: #000;
  opacity: 1;
}
::-ms-input-placeholder {
  color: #000;
}
</style>
