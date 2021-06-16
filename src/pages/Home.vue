<template>
  <div class="bg-primary flex-1">
    <div class="container mx-auto px-4">
      <div class="text-3xl font-bold mt-16">
        New
      </div>
      <div class="grid lg:grid-cols-2 gap-5 mt-8">
        <entry-tile
          v-for="entry in newEntries"
          :key="entry.url"
          :entry="entry"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EntryTile from '../components/EntryTile.vue'

export default defineComponent({
  name: 'Home',
  components: {
    EntryTile
  },
  setup() {
    const newEntries = [
      {
        'url': 'https://zenn.dev/',
        'title': 'test',
        'captiopn': 'oha',
        'thumbnail': 'https://images-na.ssl-images-amazon.com/images/I/61kNxS8EZtL._AC_SY355_.jpg',
        'tags': [
          'kato', 'megumi', 'kashiwagi', 'eriri',
          'kasumigaoka', 'utaha', 'hyodo', 'michiru', 'hashima', 'izumi'
        ]
      },
      {
        'url': 'https://zenn.dev/',
        'title': 'test2',
        'captiopn': 'oha',
        'thumbnail': 'https://images-na.ssl-images-amazon.com/images/I/61kNxS8EZtL._AC_SY355_.jpg',
        'tags': [
          'kato', 'megumi'
        ]
      },
      {
        'url': 'https://zenn.dev/',
        'title': 'test3',
        'captiopn': 'oha',
        'thumbnail': 'https://images-na.ssl-images-amazon.com/images/I/61kNxS8EZtL._AC_SY355_.jpg',
        'tags': [
          'kato', 'megumi'
        ]
      }
    ]
    return {
      newEntries
    }
  }
})
</script>
