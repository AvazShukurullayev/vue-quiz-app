<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by subject" v-model="searchCategory"/>
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
        <h4 class="text-center my-3">Fanlar Ro'yxati</h4>
        <!-- Todo: v-if="categories.length" qo'yish kere -->
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center"
              :class="{ active: index === currentIndex }"
              v-for="(category, index) in 10"
              :key="category.id"
              @click="setActiveCategory(category, index)"
          >
            <!--  {{ category.name }} -->
            <p class="text-truncate w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus eos
              minus odit qui. Eaque in maxime modi obcaecati sequi!</p>
            <div class="d-flex align-items-center" style="gap: 10px">
              <span class="badge badge-primary badge">14</span>
              <button class="btn btn-sm btn-outline-primary" @click="">
                <font-awesome-icon icon="eye"/>
              </button>
              <button class="btn btn-sm btn-outline-success" @click="">
                <font-awesome-icon icon="pen-to-square"/>
              </button>
              <button class="btn btn-sm btn-outline-danger" @click="deleteItem(category.id)">
                <font-awesome-icon icon="trash"/>
              </button>
            </div>
          </li>
        </ul>
        <!--                <p v-else class="text-center my-4">No data...</p>-->
      </div>
    </div>
  </div>
</template>
<script>
import CategoryService from '../../services/CategoryService';
import ViewPageItem from "../../page/ViewPageItem.vue";
// import ServiceCategories from "../../services/ServiceCategories.js";

export default {
  name: "AllCategory",
  components: {ViewPageItem},
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
    currentViewPage(id) {

    },
    deleteItem(id) {
      CategoryService.delete(id)
          .then((res) => {
            console.log(res)
            this.retrieveCategories();
          })
          .catch(e => console.log(e))
    },
    searchTitle() {
      this.categories = this.categories.filter(item => item.name.toLowerCase().includes(this.searchCategory.toLowerCase()))
      console.log("searchCategory => ", this.searchCategory)
    },
    async retrieveCategories() {
      await CategoryService.getAll()
          .then(response => {
            console.log(response.data);
            this.categories = response.data;
          })
          .catch(e => console.log(e));
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

<!--retrieveCategories() {-->
<!--CategoryService.getAll().then(response => {-->
<!--this.categories = response.data;-->
<!--console.log(response.data);-->
<!--})-->
<!--.catch(e => {-->
<!--console.log(e);-->
<!--});-->
<!--},-->