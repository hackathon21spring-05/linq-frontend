<template>
  <div class="bg-primary flex-1">
    <div class="container mx-auto px-12">
      <div class="mt-12 h-36 flex max-w-screen-lg mx-auto">
        <button class="focus:outline-none h-18 w-18 my-auto rounded-lg bg-white flex">
          <img
            class="h-10 w-10 m-auto"
            :src="BookmarkLogo"
          >
        </button>
        <div class="flex-1 flex flex-col justify-center mx-4">
          <div class="h-14 text-xl font-bold mb-1 line-clamp-2 hover:text-accent duration-200">
            <a
              :href="entry.url"
              target="_blank"
            >
              {{ entry.title }}
            </a>
          </div>
          <a
            :href="entry.url"
            target="_blank"
          >
            <div class="ml-1 text-secondary max-w-40 flex">
              <img
                class="mr-1 h-4 my-auto"
                :src="LinkIcon"
              >
              {{ entry.url }}
            </div>
          </a>
        </div>
        <div class="ml-auto hidden md:block">
          <img
            class="h-36 min-w-36"
            :src="entry.thumbnail"
          >
        </div>
      </div>
      <div class="mx-8 mt-12">
        <!-- <div class="flex mb-1">
          <img
            class="mr-2 h-4 my-auto"
            :src="TagIcon"
          >
          タグ
        </div> -->
        <div class="bg-white flex flex-col flex-wrap px-6 py-5 rounded-lg max-w-screen-lg mx-auto">
          <div class="flex flex-wrap">
            <edit-tag
              v-for="tag in entry.tags"
              :key="tag"
              :name="tag"
            />
            <!-- <button class="ml-auto my-auto focus:outline-none">
              <img
                class="w-6 h-6"
                :src="AddButton"
              >
            </button> -->
          </div>
          <form
            class="py-1 px-2 mt-3 flex"
            @submit="onSubmit"
          >
            <img
              class="mr-2 h-4 my-auto"
              :src="TagIcon"
            >
            <input
              v-model="addValue"
              class="outline-none border-b-2 border-transparent duration-100 hover:border-gray-300 focus:border-gray-300"
              type="text"
              placeholder="タグを追加"
            >
            <button 
              v-if="addValue.length > 0"
              class="ml-2 my-auto border-none focus:outline-none"
            >
              <img
                :src="AddButton"
              >
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import useQuery from '/@/use/query'
import EditTag from '/@/components/EditTag.vue'
import BookmarkEmpty from '/@/assets/bookmark_empty.svg'
import BookmarkFill from '/@/assets/bookmark_fill.svg'
import LinkIcon from '/@/assets/link.svg'
import TagIcon from '/@/assets/tag.svg'
import AddButton from '/@/assets/addbutton.svg'

export default defineComponent({
  name: 'Entry',
  components: {
    EditTag
  },
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  setup(props) {
    const url = useQuery('url')
    const addValue = ref(props.value)
    watch(
      () => props.value,
      v => {
        addValue.value = v
      }
    )
    const entry = {
      'url': url.value,
      'title': '加藤恵 「どうかな？わたしは、あなたが望む、メインヒロインに、なれたかな？」「どうかな？わたしは、あなたが望む、メインヒロインに、なれたかな？」',
      'captiopn': '豊ヶ崎学園に通う高校2年生で、同人サークル『Blessing software』のメインヒロイン(役割不明)。のちにサークル副代表を兼任。目鼻立ちが整っていて、可愛いと綺麗が中途半端に同居した容姿。白いベレー帽とスマホがトレードマーク。',
      'thumbnail': 'https://saenai-movie.com/megumi_birthday_fine/present/assets/img/top/img_main.jpg',
      'tags': [
        'kato', 'megumi', 'kashiwagi', 'eriri',
        'kasumigaoka', 'utaha', 'hyodo', 'michiru', 'hashima', 'izumi'
      ],
      'isBookmark': false
    }
    const BookmarkLogo = computed(() => 
      entry.isBookmark ? BookmarkFill : BookmarkEmpty
    )

    const onSubmit = (e: Event) => {
      e.preventDefault()
      if (addValue.value === '') return
      addValue.value = ''
    }
    
    return {
      url, entry, BookmarkLogo, LinkIcon, TagIcon, EditTag, AddButton, onSubmit, addValue
    }
  }
})
</script>
