<template>
  <div 
    class="searchbar"
    :style="{ width: this.focused ? this.widthInput + 50 + 'px' : this.widthInput + 'px'}"
  >
    <Icon name="search" />
    <input
      @focus="focused = true"
      @blur="focused = false"
      @input="onInput"
      class="searchbar-input"
      name="searchbar"
      :placeholder="placeholder"
      ref="input"
      type="text"
      v-model="searchbar"
    />
    <div
      @click="onClickClearInput"
      v-show="searchbar.length > 0"
    >
      <Icon
        name="x"
        :width="18"
      />
    </div>
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
      focused: false,
      searchbar: '',
      showClearButton: false,
      widthInput: this.minWidth
    }
  },
  name: 'Searchbar',
  methods: {
    onClickClearInput () {
      return this.searchbar = ''
    },
    onInput () {
      if (this.searchbar > 0) {
        this.showClearButton = true
      } else {
        this.showClearButton = false
      }
    },
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
    placeholder: {
      type: String,
      default: null
    },
    minWidth: {
      type: Number,
      default: 200
    }
  }
}
</script>

<style lang="scss" scoped>
.searchbar {
  align-items: center;
  background: #E5E5E5;
  border-radius: 4px;
  color: #000;
  display: flex;
  height: 28px;
  margin: 4px;
  padding: 0 7px;
}
.searchbar:focus-within {
  background-color: #EDEDED;
  // ugly, but I removed the outline on the input field so I wanted some visual cue for the focused state
  box-shadow: 0px 0px 4px 2px #171FFF;
  border: 1px solid #EDEDED;
}
.searchbar-input {
  background: none;
  border: none;
  height: 100%;
  padding-left: 7px;
  outline: none;
  width: 100%;
}
::placeholder { 
  color: #000;
  opacity: 1;
}
::-ms-input-placeholder {
  color: #000;
}
</style>
