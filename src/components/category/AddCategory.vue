<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label>Fan nomi</label>
        <input type="text" class="form-control" id="subjectName" required v-model="category.name" name="subjectName"/>
      </div>
      <button @click="saveCategory" class="btn btn-success">Saqlash</button>
    </div>
    <div v-else>
      <h4>Siz muvofaqiyatli saqladingiz!</h4>
      <button class="btn btn-success" @click="newCategory">Qo'shish</button>
    </div>
  </div>
</template>
<script>

import CategoryService from "../../services/CategoryService";

export default {
  name: "AddCategory",
  data() {
    return {
      category: {
        id: null,
        name: ""
      },
      submitted: false
    };
  },
  methods: {
    saveCategory() {
      // var data = {
      //   name: this.category.name
      // };
      CategoryService.create({name: this.category.name})
          .then(response => {
            this.category.id = response.data.category.id;
            console.log(response.data);
            this.submitted = true;
          });
    },
    newCategory() {
      this.submitted = false;
      this.name = {}
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>