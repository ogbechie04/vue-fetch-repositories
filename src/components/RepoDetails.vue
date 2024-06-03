<template>
  <div>
    <HomeHeader />
    <div class="repo-details flex justify-start flex-col mt-10 gap-5">
      <h2 class="font-bold text-2xl">Repository Details</h2>
      <table
        class="table-auto border-collapse bg-blue-500 rounded-lg text-white text-left border border-gray-200"
      >
        <thead class="text-xl border">
          <tr>
            <th class="py-2 px-4">Description</th>
            <th class="py-2 px-4">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border">
            <td class="py-2 px-4">Name</td>
            <td class="py-2 px-4">{{ repoInfo.name }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Description</td>
            <td class="py-2 px-4">{{ repoInfo.description || 'No description provided' }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Language</td>
            <td class="py-2 px-4">{{ repoInfo.language }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Default Branch</td>
            <td class="py-2 px-4">{{ repoInfo.default_branch }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Owner</td>
            <td class="py-2 px-4">{{ repoInfo.owner?.login }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Created At</td>
            <td class="py-2 px-4">{{ dateOnly(repoInfo.created_at) }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Last Updated</td>
            <td class="py-2 px-4">{{ dateOnly(repoInfo.updated_at) }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Issues</td>
            <td class="py-2 px-4">{{ repoInfo.open_issues }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Watchers</td>
            <td class="py-2 px-4">{{ repoInfo.watchers }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Forks</td>
            <td class="py-2 px-4">{{ repoInfo.forks }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">Stars</td>
            <td class="py-2 px-4">{{ repoInfo.stargazers_count }}</td>
          </tr>
          <tr class="border">
            <td class="py-2 px-4">URL</td>
            <td class="py-2 px-4 underline">
              <a :href="repoInfo.html_url" target="_blank">View on Github</a>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/">
        <button
          class="px-3 py-1 rounded border-[1px] hover:-translate-y-1 transition-all border-solid border-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Go home
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HomeHeader from './HomeHeader.vue'

export default {
  components: { HomeHeader },
  setup() {
    const route = useRoute()
    const repoInfo = ref({})

    const fetchRepoDetails = () => {
      fetch(`https://api.github.com/repos/ogbechie04/${route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          repoInfo.value = data
        })
        .catch((error) => {
          console.error('Error fetching repository information:', error)
        })
    }

    onMounted(fetchRepoDetails)

    const dateOnly = (dateTime) => {
      const date = new Date(dateTime)
      return date.toLocaleDateString('en-NG')
    }

    return {
      repoInfo,
      dateOnly
    }
  }
}
</script>
