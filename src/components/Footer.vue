<template>
<div id="tab" v-if="isSelectSticker">
  <!-- スタンプタブ -->
  <ul class="tabMenu">
      <li class="tabItem" @click="isSelect('1')" v-bind:class="{'active': isActive === '1'}">
        <img class="miniSticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1988/android/sticker.png">
      </li>
      <li class="tabItem" @click="isSelect('2')" v-bind:class="{'active': isActive === '2'}">
        <img class="miniSticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10855/android/sticker.png">
      </li>
      <li class="tabItem" @click="isSelect('3')" v-bind:class="{'active': isActive === '3'}">
        <img class="miniSticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551376/android/sticker.png">  
      </li>
      <li class="tabItem" @click="isSelect('4')" v-bind:class="{'active': isActive === '4'}">
        <img class="miniSticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979904/android/sticker.png">  
      </li>
      <li class="tabItem" @click="isSelect('5')" v-bind:class="{'active': isActive === '5'}">
        <img class="miniSticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581242/android/sticker.png">  
      </li>
      <li class="tabItem" @click="isSelect('6')" v-bind:class="{'active': isActive === '6'}">
        <img class="miniSticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002734/android/sticker.png">  
      </li>
      <li class="tabItem" @click="isSelect('7')" v-bind:class="{'active': isActive === '7'}">
        <img class="miniSticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626494/android/sticker.png">  
      </li>
      <li class="tabItem" @click="isSelect('8')" v-bind:class="{'active': isActive === '8'}">
        <img class="miniSticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114110/android/sticker.png">  
      </li>
  </ul>
  <!-- スタンプ表示エリア -->
  <div class="tabContents">
      <!-- 冗長なので時間があるときにスクリプト対応 -->
      <div v-if="isActive === '1'">
          <button class="bg-none" @click="sendSticker('446','1988')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1988/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1989')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1989/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1990')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1990/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1991')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1991/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1992')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1992/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1993')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1993/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1994')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1994/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1995')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1995/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1996')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1996/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1997')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1997/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1998')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1998/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','1999')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/1999/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2000')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2000/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2001')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2001/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2002')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2002/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2003')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2003/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2004')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2004/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2005')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2005/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2006')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2006/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2007')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2007/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2008')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2008/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2009')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2009/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2010')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2010/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2011')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2011/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2012')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2012/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2013')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2013/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2014')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2014/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2015')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2015/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2016')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2016/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2017')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2017/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2018')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2018/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2019')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2019/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2020')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2020/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2021')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2021/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2022')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2022/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2023')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2023/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2024')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2024/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2025')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2025/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2026')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2026/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('446','2027')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/2027/android/sticker.png">
          </button>
      </div>
      <div v-else-if="isActive === '2'">
          <button class="bg-none" @click="sendSticker('789','10855')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10855/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10856')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10856/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10857')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10857/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10858')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10858/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10859')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10859/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10860')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10860/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10861')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10861/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10862')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10862/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10863')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10863/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10864')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10864/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10865')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10865/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10866')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10866/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10867')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10867/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10868')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10868/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10869')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10869/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10870')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10870/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10871')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10871/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10872')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10872/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10873')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10873/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10874')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10874/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10875')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10875/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10876')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10876/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10877')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10877/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10878')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10878/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10879')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10879/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10880')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10880/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10881')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10881/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10882')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10882/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10883')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10883/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10884')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10884/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10885')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10885/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10886')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10886/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10887')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10887/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10888')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10888/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10889')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10889/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10890')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10890/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10891')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10891/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10892')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10892/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10893')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10893/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('789','10894')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10894/android/sticker.png">
          </button>
      </div>
      <div v-else-if="isActive === '3'">
          <button class="bg-none" @click="sendSticker('6136','10551376')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551376/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551377')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551377/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551378')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551378/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551379')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551379/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551380')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551380/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551381')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551381/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551382')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551382/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551383')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551383/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551384')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551384/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551385')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551385/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551386')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551386/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551387')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551387/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551388')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551388/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551389')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551389/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551390')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551390/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551391')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551391/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551392')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551392/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551393')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551393/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551394')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551394/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551395')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551395/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551396')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551396/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551397')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551397/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551398')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551398/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6136','10551399')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10551399/android/sticker.png">
          </button>
      </div>
      <div v-else-if="isActive === '4'">
          <button class="bg-none" @click="sendSticker('6325','10979904')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979904/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979905')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979905/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979906')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979906/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979907')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979907/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979908')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979908/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979909')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979909/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979910')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979910/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979911')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979911/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979912')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979912/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979913')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979913/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979914')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979914/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979915')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979915/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979916')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979916/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979917')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979917/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979918')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979918/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979919')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979919/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979920')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979920/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979921')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979921/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979922')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979922/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979923')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979923/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979924')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979924/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979925')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979925/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979926')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979926/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('6325','10979927')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/10979927/android/sticker.png">
          </button>
      </div>
      <div v-else-if="isActive === '5'">
          <button class="bg-none" @click="sendSticker('8515','16581242')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581242/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581243')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581243/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581244')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581244/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581245')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581245/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581246')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581246/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581247')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581247/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581248')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581248/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581249')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581249/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581250')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581250/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581251')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581251/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581252')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581252/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581253')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581253/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581254')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581254/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581255')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581255/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581256')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581256/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581257')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581257/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581258')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581258/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581259')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581259/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581260')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581260/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581261')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581261/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581262')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581262/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581263')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581263/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581264')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581264/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('8515','16581265')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/16581265/android/sticker.png">
          </button>
      </div>
      <div v-else-if="isActive === '6'">
          <button class="bg-none" @click="sendSticker('11537','52002734')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002734/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002735')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002735/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002736')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002736/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002737')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002737/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002738')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002738/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002739')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002739/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002740')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002740/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002741')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002741/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002742')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002742/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002743')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002743/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002744')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002744/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002745')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002745/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002746')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002746/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002747')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002747/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002748')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002748/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002749')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002749/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002750')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002750/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002751')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002751/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002752')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002752/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002753')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002753/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002754')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002754/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002755')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002755/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002756')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002756/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002757')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002757/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002758')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002758/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002759')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002759/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002760')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002760/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002761')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002761/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002762')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002762/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002763')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002763/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002764')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002764/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002765')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002765/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002766')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002766/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002767')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002767/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002768')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002768/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002769')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002769/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002770')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002770/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002771')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002771/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002772')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002772/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11537','52002773')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52002773/android/sticker.png">
          </button>
      </div>
      <div v-else-if="isActive === '7'">
          <button class="bg-none" @click="sendSticker('11538','51626494')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626494/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626495')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626495/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626496')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626496/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626497')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626497/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626498')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626498/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626499')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626499/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626500')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626500/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626501')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626501/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626502')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626502/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626503')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626503/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626504')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626504/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626505')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626505/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626506')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626506/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626507')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626507/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626508')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626508/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626509')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626509/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626510')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626510/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626511')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626511/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626512')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626512/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626513')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626513/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626514')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626514/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626515')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626515/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626516')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626516/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626517')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626517/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626518')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626518/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626519')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626519/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626520')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626520/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626521')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626521/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626522')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626522/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626523')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626523/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626524')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626524/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626525')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626525/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626526')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626526/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626527')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626527/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626528')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626528/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626529')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626529/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626530')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626530/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626531')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626531/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626532')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626532/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11538','51626533')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/51626533/android/sticker.png">
          </button>
      </div>
      <div v-else-if="isActive === '8'">
          <button class="bg-none" @click="sendSticker('11539','52114110')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114110/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114111')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114111/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114112')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114112/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114113')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114113/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114114')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114114/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114115')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114115/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114116')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114116/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114117')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114117/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114118')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114118/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114119')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114119/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114120')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114120/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114121')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114121/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114122')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114122/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114123')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114123/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114124')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114124/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114125')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114125/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114126')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114126/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114127')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114127/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114128')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114128/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114129')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114129/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114130')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114130/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114131')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114131/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114132')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114132/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114133')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114133/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114134')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114134/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114135')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114135/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114136')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114136/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114137')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114137/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114138')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114138/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114139')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114139/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114140')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114140/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114141')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114141/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114142')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114142/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114143')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114143/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114144')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114144/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114145')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114145/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114146')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114146/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114147')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114147/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114148')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114148/android/sticker.png">
          </button>
          <button class="bg-none" @click="sendSticker('11539','52114149')">
            <img class="sticker" src="https://stickershop.line-scdn.net/stickershop/v1/sticker/52114149/android/sticker.png">
          </button>
      </div>

      <!-- scriptで簡略化する用 -->
      <!-- <div v-if="isActive === '1'" id="sticker1"></div>
      <div v-else-if="isActive === '2'" id="sticker2"></div>
      <div v-else-if="isActive === '3'" id="sticker3"></div>
      <div v-else-if="isActive === '4'" id="sticker4"></div>
      <div v-else-if="isActive === '5'" id="sticker5"></div>
      <div v-else-if="isActive === '6'" id="sticker6"></div>
      <div v-else-if="isActive === '7'" id="sticker7"></div>
      <div v-else-if="isActive === '8'" id="sticker8"></div> -->
  </div>
</div>
<div class="footer d-flex align-items-end bg-main p-1">
  <div id="btn-wrapper" class="d-flex align-items-center bg-white me-1 rounded" :class="{'w-100': isSelectedFile}">
    <div id="buttons" :class="{'w-100': isSelectedFile}">
      <!-- 動画・PDF・音声ファイルを追加 -->
      <input ref="inputFile" type="file" accept="image/png, image/jpeg, video/mp4, application/pdf, audio/mp3" id="upload-file" class="d-none" @change="selectedFile" />
      <div v-if="isSelectedFile" class="d-flex justify-content-between align-items-center mx-2">
        <span id="file-name-display" class="me-1 flex-fill overflow-auto text-nowrap">{{ inputFileName }}</span>
        <div class="text-nowrap d-flex align-items-center">
          <button id="send-file-button" class="btn btn-sm btn-main py-0 me-1" @click="sendFile" :disabled="isSending">
            <span class="spinner-border spinner-border-sm" :class="{active: isSending}" role="status" aria-hidden="true"></span>
            送信
          </button>
          <button id="send-file-button" class="btn btn-sm btn-outline-secondary py-0" @click="cancelFile" :disabled="isSending">キャンセル</button>
        </div>
      </div>
      <div v-else>
        <label id="upload-file-label" for="upload-file" class="d-flex align-items-center justify-content-center btn btn-sm btn-outline-dark p-0 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
            <path
            d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
          </svg>
          <!-- <i class="far fa-image"></i> -->
        </label>
      </div>
    </div>
  </div>
  <div id="sticker-wrapper" class="d-flex align-items-center bg-white me-1 rounded" @click="selectSticker">
    <div id="sticker">
      <label id="sticker-label" for="sticker" class="d-flex align-items-center justify-content-center btn btn-sm btn-outline-dark p-0 rounded">
        <i class="far fa-smile"></i>
      </label>
    </div>
  </div>
  <div v-if="!isSelectedFile" class="d-flex align-items-center w-100">
    <textarea id="message" class="flex-fill me-1 rounded" rows="1" v-model="message" @keyup="resizeTextarea" @paste="resizeTextareaPaste"></textarea>
    <div class="bg-white rounded-1">
      <button id="send-message-button" class="btn btn-sm btn-light" @click="sendMessage" :disabled="isDisabledSendButton || isSending">
        <span class="spinner-border spinner-border-sm" :class="{active: isSending}" role="status" aria-hidden="true"></span>
        送信
      </button>
    </div>
  </div>
</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Footer',
  props: {
    sendChat: {
      type: Function,
      required: true
    },
    getPresignedUrl: {
      type: Function,
      required: true
    },
    uploadFile: {
      type: Function,
      required: true
    },
  },
  setup(props){
    const isSelectSticker = ref(false);
    const isSending = ref(false);
    const isFileIconHover = ref(false);
    const isDisabledSendButton = ref(true);
    const message = ref('');
    const returnCount = ref([]);
    const isSelectedFile = ref(false);
    const inputFile = ref(null);
    const inputFileName = ref("");
    const inputFileData = ref(null);
    const isActive = ref('1');
    const originalFile = ref("");

    watch(message, () => {
      if(validateMessage()){
        isDisabledSendButton.value = false;
      }else{
        isDisabledSendButton.value = true;
      }
    });

    const resizeTextarea = (event) => {
      const maxRows = 3;
      returnCount.value = event.target.value.match(/\r\n|\n/g);
      if(returnCount.value != null){
        if(returnCount.value.length > 0 && returnCount.value.length < maxRows){
          event.target.rows = returnCount.value.length + 1;
        }
      }else{
        event.target.rows = 1;
      }
    }

    // ペーストされた際は、5行に固定
    const resizeTextareaPaste = (event) => {
      event.target.rows = 5;
    }

    const sendMessage = async () => {
      isSending.value = true;
      await props.sendChat(message.value, 'text').catch((err) => {
        console.error(err);
      });
      isSending.value = false;
      message.value = '';
      // テキストエリアの行数をリセット
      document.getElementById("message").rows = 1;
    }

    // スタンプボタン押下時イベント
    const selectSticker = async () => {
      isSelectSticker.value = !isSelectSticker.value;
    }

    // スタンプ種別選択時イベント
    const isSelect = async (num) => {
      isActive.value = num;
      // TODO:一旦べた書きしているので、あとで見直す
      // let packageId = "";
      // let startStickerId = ""; 
      // let endStickerId = "";
      // let elemName = "";
      // const stickerInfo = 
      // [
      //   [1, 446, 1988, 2027],
      //   [2, 789, 10855, 10894],
      //   [3, 6136,	10551376,	10551399],
      //   [4, 6325,	10979904,	10979927],
      //   [5, 8515,	16581242,	16581265],
      //   [6, 11537,	52002734,	52002773],
      //   [7, 11538,	51626494,	51626533],
      //   [8, 11539,	52114110,	52114149],
      // ]

      // for (let i = 0; i < 8; i++){
      //   if(stickerInfo[i][0] == num){
      //       packageId = stickerInfo[i][1];
      //       startStickerId = stickerInfo[i][2];
      //       endStickerId = stickerInfo[i][3];
      //       elemName = 'sticker' + i;
      //   }
      // }

      // const elem = document.getElementById(String(elemName));
      // let html = "";
      // for (let i = startStickerId; i < endStickerId + 1; i++)
      // {
      //   html += 
      //   "<button class='bg-none' @click='sendSticker('" + packageId + "','" + i + 
      //   "')'><img class='sticker' src='https://stickershop.line-scdn.net/stickershop/v1/sticker/" + i +
      //   "/android/sticker.png'></button>" 
      // }
      // elem.innerHTML = html;
    };

    // スタンプ選択時イベント(送信)
    const sendSticker = async (packageId, stickerId) => {
      // pacageID-stickerIdの形で送信(ex.446-1988)
      await props.sendChat(packageId + "-" + stickerId, 'sticker').catch((err) => {
        console.error(err);
      });
      isSelectSticker.value = false;
    }

    // const selectedFile = (event) => {
    const selectedFile = async (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        inputFileData.value = reader.result;
        isSelectedFile.value = true;
        inputFileName.value = file.name;
        isFileIconHover.value = false;
        originalFile.value = file;
      });

      if (file) {
        const fileType = file.type.split("/")[0];
        console.log("file",file);
        // ファイルサイズ上限を10MBに変更
        if(fileType == "image"){
          // 画像ファイルサイズは8MB以下
          // if(file.size <= 8388608){
          if(file.size <= 10485760){
            reader.readAsDataURL(file);
          }else{
            // window.alert("送信できる画像のファイルサイズは8MBまでです");
            window.alert("送信できる画像のファイルサイズは10MBまでです");
          }
        }else if(fileType == "video"){
          // 動画ファイルサイズは8MB以下
          // if(file.size <= 8388608){
          if(file.size <= 10485760){
            reader.readAsDataURL(file);
          }else{
            // window.alert("送信できる動画のファイルサイズは8MBまでです");
            window.alert("送信できる動画のファイルサイズは10MBまでです");
          }
          console.log(file.size)
        }else if(fileType == "audio"){
          // 動画ファイルサイズは8MB以下
          // if(file.size <= 8388608){
          if(file.size <= 10485760){
            reader.readAsDataURL(file);
          }else{
            // window.alert("送信できる動画のファイルサイズは8MBまでです");
            window.alert("送信できる動画のファイルサイズは10MBまでです");
          }
          console.log(file.size)
        }else if(fileType == "application"){
          // if(file.size <= 8388608){
          if(file.size <= 10485760){
            reader.readAsDataURL(file);
          }else{
            // window.alert("送信できるPDFのファイルサイズは8MBまでです");
            window.alert("送信できるPDFのファイルサイズは10MBまでです");
          }
        }else{
          window.alert("送信できるファイルの拡張子は .png .jpg .mp4 .pdf .mp3 です");
        }
      }
    }
    const sendFile = async () => {
      const fileType = inputFileData.value.slice(inputFileData.value.indexOf(':') + 1, inputFileData.value.indexOf('/'));
      isSending.value = true;
      // ファイルサイズが6MBを超えている場合
      if(originalFile.value.size >= 6291456){
          // presignedUrlを用いてS3にアップロードし、送信
          const fileExtension = originalFile.value.type.split("/")[1];
          const presignedUrl = await props.getPresignedUrl(fileExtension);
          const contentType = inputFileData.value.toString().slice(inputFileData.value.indexOf(':') + 1, inputFileData.value.indexOf(';'));
          await props.uploadFile(presignedUrl, originalFile.value, contentType);
          const fileUrl = presignedUrl.split("?")[0]
          await props.sendChat(inputFileData.value, fileType, fileUrl).catch((err) => {
            console.error(err);
          });       
      }else {
        console.log(inputFileData.value);
        await props.sendChat(inputFileData.value, fileType, inputFileData.value).catch((err) => {
          console.error(err);
        });          
      }
      isSending.value = false;
      inputFile.value.value = "";
      inputFileData.value = null;
      isSelectedFile.value = false;
    }

    //選択した画像の取消
    const cancelFile = () => {
      inputFile.value.value = "";
      inputFileData.value = null;
      isSelectedFile.value = false;
    }

    // 入力メッセージの検証
    const validateMessage = () => {
      //改行を削除した入力メッセージ
      const deleteReturnMessage = message.value.replace(/\r\n|\n/g, '');
      //入力が空文字ではない
      if(deleteReturnMessage == ''){
        return false;
      }
      return true;
    }
    return {
      isSelectSticker,
      isSending,
      isDisabledSendButton,
      isSelectedFile,
      message,
      resizeTextarea,
      resizeTextareaPaste,
      sendMessage,
      isFileIconHover,
      selectedFile,
      inputFileName,
      inputFile,
      selectSticker,
      sendSticker,
      sendFile,
      cancelFile,
      isSelect,
      isActive,
    }
  }
}
</script>

<style>
textarea {
  resize: none !important;
}
#setting-wrapper, #upload-file-label, #sticker-label {
  min-height: 31px;
  min-width: 31px;
}
textarea, #btn-wrapper {
  min-height: 31px;
}

#send-message-button {
  width: 70px;
}

.spinner-border:not(.active) {
  display: none;
}

.bg-none {
  background: none;
  border: none;
}
.miniSticker {
  width: 2.5rem;
  height: 2.5rem;
}

.sticker {
  width: 8rem;
}

/* CSSは後で見直し */
li {
  list-style: none;
}
.tab {
  max-width: 100%;
}
.tabMenu {
  padding: 0;
  display: flex;
  margin: 0;
}
.tabItem {
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  width: 60px;
}
.tabItem:not(:first-child) {
  border-left: none;
}

.tabItem.active {
  background: #F2F2F2;
  color: white;
}
.tabContents {
  max-height: 8.5rem;
  overflow-y: scroll;
}
    
</style>
