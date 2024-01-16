<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by name"
                 v-model="searchCategory"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
                    @click="searchTitle">
              Search category...
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <h4 class="text-center my-1">Fanlar Ro'yxati</h4>
        <ul v-if="categories.length" class="list-group">
          <li class="list-group-item"
              :class="{ active: index === currentIndex }"
              v-for="(category, index) in categories"
              :key="index"
              @click="setActiveCategory(category, index)"
          >
            {{ category.name }}
          </li>
        </ul>
        <p v-else class="text-center my-4">No data...</p>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryService from '../../services/CategoryService';

export default {
  name: "AllCategory",
  data() {
    return {
      searchCategory: "",
      categories: [],
      currentCategory: null,
      currentIndex: -1,
      name: ""
    };
  },
  methods: {
    searchTitle() {
      this.categories = this.categories.filter(item => item.name.toLowerCase().includes(this.searchCategory.toLowerCase()))
      console.log("searchCategory => ", this.searchCategory)
    },
    retrieveCategories() {
      CategoryService.getAll().then(response => {
        this.categories = response.data;
        console.log(response.data);
      })
          .catch(e => {
            console.log(e);
          });
    },
    setActiveCategory(category, index) {
      this.currentCategory = category;
      this.currentCategory = category ? index : -1
    },
    searchName() {
      CategoryService.findByName(this.name)
          .then(response => {
            this.categories = response.data;
            this.setActiveCategory(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveCategories();
  }
};
</script>

<style></style>


<!--<div class="col-md-6">-->
<!--<div v-if="currentCategory">-->
<!--  <h4>Fanlar</h4>-->
<!--  <div>-->
<!--    <label><strong>Fan nomi:</strong></label> {{ currentCategory.name }}-->
<!--  </div>-->

<!--  <router-link :to="'/' + currentCategory.id" class="badge badge-warning">Edit</router-link>-->
<!--</div>-->
<!--<div v-else>-->
<!--  <br/>-->
<!--  <p>Iltimos fan nomini tanlang...</p>-->
<!--</div>-->
<!--</div>-->