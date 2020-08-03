<!--
/user/parts/_id.vue
-->

<template>
  <div id="Content">
    <h1 class="title">
      {{ this.getCategoryNameByparamsId }}
    </h1>
    <transition>
      <ul class="itemsWrapper">
        <magic-grid>
          <item
            v-for="item in itemsByUid"
            :key="item.id"
            :downloadUrl="item.downloadUrl"
            :categoryId="item.categoryId"
            :id="item.id"
            :showAddButton="showAddButton"
            :showEditButton="showEditButton"
            :showDeleteButton="showDeleteButton"
            v-on:open-edit-modal="openEditModal(item)"
            v-on:open-delete-modal="openDeleteModal(item)"
          />
        </magic-grid>
      </ul>
    </transition>
    <transition>
      <modal-content v-if="showEditModal" @from-child="modalClose">
        <p class="elementTitle">
          Edit
        </p>
        <ul class="categoryButtons">
          <li v-for="category in categories" :key="category.id">
            <a @click="changeCategory(category.id);selectedCategoryId=category.id" :class="[ selectedCategoryId === category.id ? 'selected' : '' ]" href="#">
              {{ category.name }}
            </a>
          </li>
        </ul>
        <div class="buttons">
          <button-default :text="submitText" @from-child="editItem(targetItem,selectedCategoryId); modalClose();" />
          <button-default :text="cancelText" @from-child="modalClose" />
        </div>
      </modal-content>

      <modal-content v-if="showDeleteModal" @from-child="modalClose">
        <p class="elementTitle">
          Delete
        </p>
        <p>本当に削除しますか？</p>
        <div class="buttons">
          <button-default :text="deleteText" @from-child="deleteItem(targetItem); modalClose();" />
          <button-default :text="cancelText" @from-child="modalClose" />
        </div>
      </modal-content>
    </transition>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

import Item from '~/components/Item.vue'
import ButtonDefault from '~/components/common/ButtonDefault.vue'
import ModalContent from '~/components/common/ModalContent.vue'
const db = firebase.firestore()

export default {
  layout: 'user',
  components: {
    Item,
    ButtonDefault,
    ModalContent
  },
  data () {
    return {
      categoryId: parseInt(this.$route.params.id) - 1,
      showAddButton: false,
      showEditButton: true,
      showDeleteButton: true,
      showEditModal: false,
      showDeleteModal: false,
      selectedCategoryId: '',
      setItemCategoryId: '',
      submitText: 'Submit',
      deleteText: 'Yes',
      cancelText: 'Cancel',
      targetItem: ''
    }
  },
  computed: {
    getCategoryNameByparamsId () {
      return this.$store.state.categories[this.categoryId].name
    },
    user () {
      return this.$store.getters.user
    },
    items () {
      // return this.$store.getters['items/itemsByCategory'](this.$route.params.id)
      // return this.$route.params.id && this.$store.getters['items/itemsByCategory']
      return this.$store.getters['items/itemsByCategory' + this.$route.params.id]
    },
    itemsByUid () {
      return this.items.filter(item => item.author === this.user.uid)
    },
    categories () {
      return this.$store.getters.categories
    }
  },
  methods: {
    editItem (targetItem, selectedCategoryId) {
      // alert(selectedCategoryId)
      db.collection('item').doc(targetItem.id).set({
        fileName: targetItem.fileName,
        categoryId: selectedCategoryId,
        author: targetItem.author
      })
        .then(function (docRef) {
          console.log('THEN')
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })

      this.addItemCategoryId = ''
    },
    openEditModal (item) {
      this.targetItem = item
      this.showEditModal = true
      this.selectedCategoryId = item.categoryId
    },
    deleteItem (targetItem) {
      db.collection('item').doc(targetItem.id).delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.log('Error removing document:', error)
      })
    },
    openDeleteModal (item) {
      alert('でりーと')
      this.targetItem = item
      this.showDeleteModal = true
    },
    modalClose () {
      this.showEditModal = false
      this.showDeleteModal = false
    },
    changeCategory (id) {
      this.setItemCategoryId = id
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
