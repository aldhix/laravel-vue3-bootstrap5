<script setup>
import { reactive } from "vue";
import VContent from "../components/VContent.vue";
import VButton from "../components/VButton.vue";
import VInput from "../components/VInput.vue";
import FormGroup from "../components/FormGroup.vue";
import VTextarea from "../components/VTextarea.vue";
import VSelect from "../components/VSelect.vue";

const form = reactive({
  name: "",
  email: "",
  gender: "",
  address: "",
});

const errors = reactive({});

function clearErrors() {
  for (const key in errors) {
    delete errors[key];
  }
}

function formSubmit() {
  clearErrors();

  if (!form.name) {
    errors.name = ["Name is required."];
  }

  if (!form.email) {
    errors.email = ["Email is required."];
  }

  if (!form.gender) {
    errors.gender = ["Gender is required."];
  }

  if (!form.address) {
    errors.address = ["Address is required."];
  }

  if (Object.keys(errors).length === 0) {
    alert("Ok!");
    console.table(form);
  }
}
</script>
<template>
  <v-content title="Form Component">
    <div class="row">
      <div class="col-lg-6">
        <form class="card" @submit.prevent="formSubmit()">
          <div class="card-header">Form</div>
          <div class="card-body">
            <form-group title="Name">
              <v-input v-model="form.name" :error="errors.name" />
            </form-group>
            <form-group title="Email">
              <v-input
                type="email"
                v-model="form.email"
                :error="errors.email"
              />
            </form-group>
            <form-group title="Gender">
              <v-select v-model="form.gender" :error="errors.gender">
                <option value="">Pilih:</option>
                <option
                  v-for="(value, index) in ['Male', 'Female']"
                  :key="index"
                  :value="value"
                  v-html="value"
                ></option>
              </v-select>
            </form-group>
            <form-group title="Address">
              <v-textarea v-model="form.address" :error="errors.address" />
            </form-group>
          </div>
          <div class="card-footer">
            <v-button type="submit" title="Submit" />
          </div>
        </form>
      </div>
    </div>
  </v-content>
</template>