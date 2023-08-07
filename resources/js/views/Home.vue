<script setup>
import { onMounted } from "vue";
import VContent from "../components/VContent.vue";
import ModalDialog from "../components/ModalDialog.vue";
let myModal = null;
onMounted(() => {
  myModal = new bootstrap.Modal("#modalExample", {
    keyboard: false,
    backdrop: "static",
  });
});

function modalShow() {
  myModal.show();
}

function modalHide() {
  myModal.hide();
}
</script>
<template>
  <v-content>
    <div class="h-100 p-5 bg-light border rounded-3">
      <h2>Wellcome!</h2>
      <p>
        Or, keep it light and add a border for some added definition to the
        boundaries of your content. Be sure to look under the hood at the source
        HTML here as we've adjusted the alignment and sizing of both column's
        content for equal-height.
      </p>
      <button type="button" class="btn btn-primary" @click="modalShow()">
        Click Me !
      </button>
    </div>
  </v-content>
  <Teleport to="Body">
    <modal-dialog id="modalExample" title="Modal Example" @close="modalHide">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
      incidunt, corporis commodi non tempora eius nihil cum nostrum asperiores
      similique laboriosam a, eaque fugiat animi voluptate maxime vel dolorum.
      Reiciendis.
      <template #footer>
        <button type="button" class="btn btn-light" @click="modalHide()">
          Close
        </button>
      </template>
    </modal-dialog>
  </Teleport>
</template>