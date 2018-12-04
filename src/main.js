import Vue from 'vue'
import App from './App.vue'
import Detail from './Product.vue'
import Sesame from './Sesame.vue'
import TripleWhite from './TripleWhite.vue'
import Zebra from './Zebra.vue'
import Salt from './Salt.vue'
import Menta from './Menta.vue'
import ZoomflyBlack from './ZoomflyBlack.vue'
import ZoomflyPink from './ZoomflyPink.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#product',
  render: h => h(Detail)
});

new Vue({
  el: '#Sesame',
  render: h => h(Sesame)
});

new Vue({
  el: '#TripleWhite',
  render: h => h(TripleWhite)
});

new Vue({
  el: '#Zebra',
  render: h => h(Zebra)
});

new Vue({
  el: '#Salt',
  render: h => h(Salt)
});

new Vue({
  el: '#Menta',
  render: h => h(Menta)
});

new Vue({
  el: '#ZoomflyBlack',
  render: h => h(ZoomflyBlack)
});

new Vue({
  el: '#ZoomflyPink',
  render: h => h(ZoomflyPink)
});

