<script setup>
import { useSlots} from "vue";
const slots = useSlots();
defineProps(["id", "title"]);
const emit = defineEmits(["close"]);
function onClose() {
  emit("close");
}
</script>
<template>
  <div
    :id="id"
    class="modal fade"
    tabindex="-1"
  >
    <div class="modal-dialog" v-bind="$attrs">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" v-html="title"></h1>
          <button
            type="button"
            class="btn-close"
            @click="onClose()"
          ></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer" v-if="slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>