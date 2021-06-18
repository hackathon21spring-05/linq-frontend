<template>
  <header>
    <div class="header-inner">
      <h1 class="header-logo">
        <img
          id="icon"
          src="./image 11-2.png"
          alt="LinQ"
        >
      </h1>
      
      <ul
        class="header-navList
"
      >
        <li>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          >

          <input
            type="text"
            class="use_icon"
            placeholder="&#xf002;"
          >
        </li>
        <li>
          <a
            href="#"
            target="_blank"
          >
            <img
              id="icon-add"
              src="./image 11.png"
              target="_blank"
            ></a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
          >
            <img
              id="gray"
              src="./160331_12.png"
              target="_blank"
            ></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    return {}
  }
})


</script>
<style>
  @charset "utf-8";
  #icon{
    width: 135px;
    height: 49px;
    right: 231px;
    top: 8px;
  }
  #icon-add{
    width: 75px;
    height: 33px;
    right: 244px;
    top: 16px;
  }
  
#gray{
  width: 32px;
  height: 32px;
}

.use_icon{
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 224px;
    height: 28px;
    background-color: #E5F6EF;
}

header {
    color:#333 ; /* ヘッダーの文字を白にする */
    height: 64px;
    
    align-items: center;  
}
.header-inner {
    display: flex; /* 子要素を横並びにする */
    justify-content: space-between;                         
    align-items: center;
    max-width: 1040px; /* コンテンツの最大幅を1040pxにする */
    width: 100%; /* 最大幅を保つ(ただし最大幅は1040px) */
    margin: 0 auto; /* 1040pxにした要素を中央寄せにする */
}
.header-logo {
    top: 8px;
}
.header-navList {
    display: flex;  /* 子要素を横並びにする */
}
.header-logoImg {
    display: block; /* 扱いやすいようにblock要素にする */
    width: 46px; /* 横幅を任意の大きさに調整 */
    margin-right: 10px; /* 画像とタイトルを少し離す */
}
.header-logoTtl {
    font-size: 24px; /* 任意のフォントサイズにする */
    font-weight: bold; /* 太字にする */
}
.header-navList li {
    margin:20px /* ナビゲーションに左右のスペースを付ける */
}
.header-navList li a {
    display: block; /* 扱いやすいようにblock要素にする */
    font-size: 16px; /* 任意のフォントサイズにする */
    font-weight: bold; /* 太字にする */
}

</style>
