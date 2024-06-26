<template>
  <div>
    <HomeHeader />
    <div class="grid grid-cols-auto-fill-400 gap-5 py-7">
      <div
        v-for="repo in user"
        :key="repo.id"
        class="card transition duration-300 ease-out hover:ease-in hover:drop-shadow-lg shadow-gradient-purple-pink-yellow p-4 text-black bg-slate-100 rounded-md"
        @click="goToRepoDetails(repo.name)"
      >
        <h2 class="text-xl font-bold mb-4">{{ repo.name }}</h2>
        <p>Created: {{ dateOnly(repo.created_at) }}</p>
        <p>Language: {{ repo.language }}</p>
        <p>Stars: {{ repo.stargazers_count }}</p>
      </div>
    </div>
    <div class="testErros flex justify-center gap-4 font-medium my-5">
      <button
        @click="triggerErrorTest"
        class="px-3 py-1 rounded border-[1px] hover:-translate-y-1 transition-all border-solid border-blue-500 hover:bg-blue-500 hover:text-white"
      >
        Trigger Error
      </button>
      <router-link to="/thispagedoesnotexist">
        <button
          class="px-3 py-1 rounded border-[1px] hover:-translate-y-1 transition-all border-solid border-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Test 404 Page
        </button>
      </router-link>
    </div>
    <div class="pagination flex justify-center gap-3 my-7">
      <button
        class="bg-gray-200 px-3 py-1 rounded cursor-pointer"
        @click="handleChangePage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
      <button
        :class="{
          'bg-blue-500 text-white': page === currentPage,
          'bg-gray-200': page !== currentPage
        }"
        class="px-3 py-1 rounded cursor-pointer"
        v-for="page in totalPages"
        :key="page"
        @click="handleChangePage(page)"
      >
        {{ page }}
      </button>
      <button
        class="bg-gray-200 px-3 py-1 rounded cursor-pointer"
        @click="handleChangePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import HomeHeader from './HomeHeader.vue'

export default {
  components: { HomeHeader },
  setup() {
    const user = ref([])
    const currentPage = ref(1)
    const totalPages = ref(1)
    const reposPerPage = 6
    const router = useRouter()

    const fetchRepos = () => {
      fetch(
        `https://api.github.com/users/ogbechie04/repos?per_page=${reposPerPage}&page=${currentPage.value}`
      )
        .then((response) => {
          const linkHeader = response.headers.get('Link')
          const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last"/)
          if (totalPagesMatch) {
            totalPages.value = parseInt(totalPagesMatch[1], 10)
          }
          return response.json()
        })
        .then((data) => {
          user.value = data
        })
        .catch((error) => {
          console.error('Error fetching repositories:', error)
        })
    }
    onMounted(fetchRepos)

    watch(currentPage, fetchRepos)

    const handleChangePage = (page) => {
      currentPage.value = page
    }

    const dateOnly = (dateTime) => {
      const date = new Date(dateTime)
      return date.toLocaleDateString('en-NG')
    }

    const triggerErrorTest = () => {
      const obj = undefined
      console.log(obj.property)
    }

    const goToRepoDetails = (id) => {
      router.push(`/RepoDetails/${id}`)
    }

    return {
      user,
      currentPage,
      totalPages,
      handleChangePage,
      triggerErrorTest,
      dateOnly,
      goToRepoDetails
    }
  }
}
</script>