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
      
      <nav class="header-nav">
        <ul class="header-navList">
          <li>
            <form
              id="form5"
              action="自分のサイトのURL"
            >
              <input
                id="sbox5"
                
                name="s"
                type="text"
                placeholder="キーワードを入力"
              >
              <input
                id="sbtn5"
                type="submit"
                value="検索"
              >
            </form>
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
                id="icon-add"
                src="./160331_12.png"
                target="_blank"
              ></a>
          </li>
        </ul>
      </nav>
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
    width: 100px;
    margin-right: auto;
  }
  #icon-add{
    align-items: center;
    height: 29px;
  }
  


  #form5{
right:100px;

}
#sbox5{	
outline:0;	
height:29px;
padding:0 10px; 

left:0;
top:0; 
max-width:270px;
border-radius:2px;
background:#eee;
}
#sbtn5{
width:70px;
height:29px;

left:280px; 
top:0;
border-radius:2px;
background:#3FD99A;
color:#fff;
font-weight:bold;
font-size:16px;
border:none;
}
#sbtn5:hover{
background:#eee;
color:#3FD99A;
}



header {
    color:#333  /* ヘッダーの文字を白にする */
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
    display: flex;  /* 子要素を横並びにする */
    align-items: center;  /* 子要素を上下中央に配置する */
}
.header-navList {
    display: flex;  /* 子要素を横並びにする */
    align-items: center;  /* 子要素を上下中央に配置する */
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
    margin: 0 20px /* ナビゲーションに左右のスペースを付ける */
}
.header-navList li a {
    display: block; /* 扱いやすいようにblock要素にする */
    font-size: 16px; /* 任意のフォントサイズにする */
    font-weight: bold; /* 太字にする */
}

</style>
