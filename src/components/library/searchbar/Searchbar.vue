<template>
  <div 
    class="searchbar"
    :style="{ width: this.focused ? (this.widthInput + 50) + 'px' : this.widthInput + 'px'}"

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
      v-model="searchTerm"
    />
    <div
      @mousedown="onClickClearInput"
      class="clear-input"
      v-show="searchTerm.length > 0"
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
  computed: {
    searchTerm: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  data () {
    return {
      focused: false,
      showClearButton: false,
      widthInput: this.minWidth
    }
  },
  name: 'Searchbar',
  methods: {
    onClickClearInput () {
      this.searchTerm = ''
    },
    onInput () {
      if (this.searchTerm.length > 0) {
        this.showClearButton = true
      } else {
        this.showClearButton = false
      }
    },
    // TODO add UI hint for keyboard shortcut
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
    /**
    * Adds a placeholder text
    */
    placeholder: {
      type: String,
      default: null
    },
    /**
    * Sets width of the Searchbar, 50px are added on focus
    */
    minWidth: {
      type: Number,
      default: 200
    },
    /**
    * Binds value of input in Searchbar component to v-model directive set on <Searchbar /> in parent component.
    * Example: \<Searchbar v-model="myVeryOwnVariableName" />
    */
    value: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
// TODO: improve styling from user agent stylesheet for internal autofill
.searchbar {
  align-items: center;
  background: rgba(237, 237, 237, 1);
  // avoid jumpy UI on focus
  border: 1px solid rgba(237, 237, 237, 1);
  border-radius: 4px;
  box-sizing: border-box;
  color: #000;
  display: flex;
  height: 28px;
  margin: 4px;
  padding: 0 7px;
  position: relative;
}
.searchbar:focus-within {
  background-color: rgba(237, 237, 237, 0.4);
  border: 1px solid rgba(237, 237, 237, 1);
}
.searchbar-input {
  background: none;
  border: none;
  height: 100%;
  padding: 0 30px 0 30px;
  position: absolute;
  // removing this is not recommended and means implementing a visual cue for focus state
  // I haven't done this in this case since it's not part of the design
  outline: none;
  left: 0;
  width: 100%;
}
.clear-input {
  position: absolute;
  right: 0;
  width: 25px;
}
::placeholder { 
  color: #000;
  opacity: 1;
}
::-ms-input-placeholder {
  color: #000;
}
</style>
