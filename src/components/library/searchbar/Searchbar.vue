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
      if (event.key === '/')
      this.$refs.input.focus();
    }
  },
  mounted() {
        document.addEventListener('keydown', this.onSlashFocusInput);
  },
  beforeDestroy() {
      document.removeEventListener('keydown', this.onSlashFocusInput);
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
  padding: 7px;
  width:300;
}
.searchbar-input {
  background: none;
  border: none;
  height: 100%
}
::placeholder { 
  color: #000;
  opacity: 1;
}
::-ms-input-placeholder {
  color: #000;
}
</style>
