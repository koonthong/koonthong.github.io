<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-light justify-content-between">
      <a class="navbar-brand" href="././index.html" style="padding-left:5%;margin-left:0px;padding-top:1%;margin-bottom:2%"><img src="./assets/STORATE-logo.png"></a>
      <form class="form-inline" style="padding-left:45%;padding-top:3%">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" style="border: 2px solid black;padgin-right:0%;border-right:none;border-radius: 0px;height:36px;">
        <button class="btn btn-outline-light" type="submit" style="border: 2px solid black;border-left:none;border-radius: 0px;height:5%"><span class="glyphicon glyphicon-search" style="color:#000000;"></span></button>
      </form>
      <button class="btn btn btn-link" id="btnhelp" type="submit" style="border-style: none;text-decoration: none;padding-top:3%" onmouseover="mOver()" onmouseout="mOut()"><font color="black">Help</font></button>
    </nav><br>
    <div class="row" style="background-color:#F0F0F0;padding-left: 0%;padding-top:2%">
      <img src="./assets/Most.png"></a>
      </div>
    <div class="row" style="background-color:#F0F0F0;padding: 2%;">
    
      <div class="col-md-3" v-for="item in forSale">
        <div class="card" style="background-color:#ffffff;padding: 5%;">
          <a :href="'././' + item.name"><img :src="item.image" :alt="item.name" class="card-img-top"></a>
          <div class="card-body">
            <h3 class="card-title"><b><center>{{item.product}}</center></b></h3>
            <h4 class="card-text"><i><center>Highest  {{item.price}}  THB</center></i></h4>
            <h4 class="card-text"><i><center>Lowest  {{item.price}}  THB</center></i></h4>
          </div>
        </div>
      </div>
      
      <div style="background-color:#F0F0F0;margin-left:auto;margin-right:auto;padding-top:3%">
        <img class="img-responsive" src="./assets/Up.png" >
      </div>
      
    </div>
    <div class="row" style="background-color:#F0F0F0;padding:0%;">
    
      <div class="row" style="margin-left:auto;margin-right:auto;padding-bottom:4%"> <div>
        <div class="carousel slide">
        <a href="././Salt.html">
          <img src="./assets/Test.png" ></a>
        </div>
      </div>
      </div>
      
      <div class="row" style="width:100%;background-color:#f0f0f0;padding-left:0%;padding-top:3%;">
      <ul class="nav nav-pills left" style="background-color:#f0f0f0;height:5%">
        <li style="background-color:#f0f0f0;padding-right:0px"><img src="./assets/Trend.png" style="width:100%"></li>
        <li style="background-color:#f0f0f0;padding-left:0px"> <img src="./assets/Trend3.png" style="width:100%"></li>
      </ul>
      <ul class="nav nav-pills" style="background-color:#ffffff;width:75%;height:48px;margin-top:2px;box-shadow: -2px 1px 20px -4px rgba(0,0,0,0.38);">
        <li class="active light" id="btn1"><a data-toggle="tab" href="#t1" style="padding-top:5%;"><h4><font color="black">Adidas</font></h4></a></li>
        <li id="btn2"><a data-toggle="tab" href="#t2" style="padding-top:5%"><h4><font color="black">Nike</font></h4></a></li>
        <li id="btn3"><a data-toggle="tab" href="#t3" style="padding-top:5%"><h4><font color="black">Yeezy</font></h4></a></li>
        <li id="btn4"><a data-toggle="tab" href="#t4" style="padding-top:5%"><h4><font color="black">Jordan</font></h4></a></li>
      </ul>
      </div>

    <div class="tab-content">
      <div id="t1" class="tab-pane fade in active">
        <div class="row" style="background-color:#F0F0F0;padding:2%;padding-top:0%;"> 
        <div class="col-md-3" v-for="item in forSale2" style="padding-top:4%;">         
            <div class="card" style="background-color:#ffffff;padding:5%;">
              <a :href="'././' + item.name"><img :src="item.image" :alt="item.name" class="card-img-top"></a>
              <div class="card-body">
                <h3 class="card-title"><b><center>{{item.product}}</center></b></h3>
                <h4 class="card-text"><i><center>Highest  {{item.price}}  THB</center></i></h4>
                <h4 class="card-text"><i><center>Lowest  {{item.price}}  THB</center></i></h4>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div id="t2" class="tab-pane">
        <div class="row" style="background-color:#F0F0F0;padding:2%;padding-top:0%;"> 
        <div class="col-md-3" v-for="item in forSale3" style="padding-top:4%;">      
            <div class="card" style="background-color:#ffffff;padding: 5%;">
              <a :href="'././' + item.name"><img :src="item.image" :alt="item.name" class="card-img-top"></a>
              <div class="card-body">
                <h3 class="card-title"><b><center>{{item.product}}</center></b></h3>
                <h4 class="card-text"><i><center>Highest  {{item.price}}  THB</center></i></h4>
                <h4 class="card-text"><i><center>Lowest  {{item.price}}  THB</center></i></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="t3" class="tab-pane">
        <div class="row" style="background-color:#F0F0F0;padding:2%;padding-top:0%;"> 
        <div class="col-md-3" v-for="item in forSale4" style="padding-top:4%;">
          
            <div class="card" style="background-color:#ffffff;padding: 5%;">
                <a :href="'././' + item.name"><img :src="item.image" :alt="item.name" class="card-img-top"></a>
                <div class="card-body">
                  <h3 class="card-title"><b><center>{{item.product}}</center></b></h3>
                  <h4 class="card-text"><i><center>Highest  {{item.price}}  THB</center></i></h4>
                  <h4 class="card-text"><i><center>Lowest  {{item.price}}  THB</center></i></h4>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div id="t4" class="tab-pane">
        <div class="row" style="background-color:#F0F0F0;padding:2%;padding-top:0%;"> 
        <div class="col-md-3" v-for="item in forSale5" style="padding-top:4%;">
          
            <div class="card" style="background-color:#ffffff;padding: 5%;">
              <a :href="'././' + item.name"><img :src="item.image" :alt="item.name" class="card-img-top"></a>
              <div class="card-body">
                <!--<h3 class="card-title"><b><center>{{item.product}}</center></b></h3>
                <h4 class="card-text"><i><center>Heigest + {{item.price}} + THB</center></i></h4>
                <h4 class="card-text"><i><center>Lowest + {{item.price}} + THB</center></i></h4>-->
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div> 
    

      <div class="row" style="background-color:#F0F0F0;padding:0%;padding-top:0%;margin-left:auto;margin-right:auto;">
      
      <div style="background-color:#F0F0F0;margin-left:auto;margin-right:auto;padding-top:0%">
        <img src="./assets/Footer.png">
      </div>
      
    </div>
      
        
      
    </div>
      
    
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
  return {
    forSale: [
      { invId: 1, name: 'Sesame.html', image: require('./assets/sesame.png'), price: 999, product: 'ADIDAS YEEZY BOOST 350 V2 SESAME',a: 'ProductDetail.html' },
      { invId: 2, name: 'TripleWhite.html', image: require('./assets/triple white.png'), price: 1499, product: 'ADIDAS YEEZY BOOST 350 V2 TRIPLE WHITE' },
      { invId: 3, name: 'Zebra.html', image: require('./assets/zebra.png'), price: 499, product: 'ADIDAS YEEZY BOOST 350 V2 ZEBRA'  },
      { invId: 4, name: 'Salt.html', image: require('./assets/product-salt.png'), price: 299, product: 'ADIDAS YEEZY 500 SALT'  },
    ],
    forSale2: [
      { invId: 1, name: 'Sesame.html', image: require('./assets/sesame.png'), price: 999, product: 'ADIDAS YEEZY BOOST 350 V2 SESAME',a: 'ProductDetail.html' },
      { invId: 2, name: 'TripleWhite.html', image: require('./assets/triple white.png'), price: 1499, product: 'ADIDAS YEEZY BOOST 350 V2 TRIPLE WHITE' },
      { invId: 3, name: 'Zebra.html', image: require('./assets/zebra.png'), price: 499, product: 'ADIDAS YEEZY BOOST 350 V2 ZEBRA'  },
      { invId: 4, name: 'Salt.html', image: require('./assets/product-salt.png'), price: 299, product: 'ADIDAS YEEZY 500 SALT'  },
    ],
    forSale3: [
      { invId: 1, name: 'Menta.html', image: require('./assets/product-air max 97 off white menta.jpg'), price: 999, product: 'NIKE AIR MAX 97 OFF-WHITE MENTA' },
      { invId: 2, name: 'ZoomflyBlack.html', image: require('./assets/product-zoomfly-black.png'), price: 1499, product: 'NIKE ZOOM FLY OFF-WHITE BLACK' },
      { invId: 3, name: 'ZoomflyPink.html', image: require('./assets/product-zoomfly-pink.png'), price: 499, product: 'NIKE ZOOM FLY OFF-WHITE PINK' },
    ],
    forSale4: [
      { invId: 1, name: 'Sesame.html', image: require('./assets/sesame.png'), price: 999, product: 'ADIDAS YEEZY BOOST 350 V2 SESAME',a: 'ProductDetail.html' },
      { invId: 2, name: 'TripleWhite.html', image: require('./assets/triple white.png'), price: 1499, product: 'ADIDAS YEEZY BOOST 350 V2 TRIPLE WHITE' },
      { invId: 3, name: 'Zebra.html', image: require('./assets/zebra.png'), price: 499, product: 'ADIDAS YEEZY BOOST 350 V2 ZEBRA'  },
      { invId: 4, name: 'Salt.html', image: require('./assets/product-salt.png'), price: 299, product: 'ADIDAS YEEZY 500 SALT'  },
    ],
    forSale5: [
      {},
    ],
  };
},
};
</script>
<style>

p {
    font-family: 'Athiti', sans-serif;
}
h4 {
    font-family: 'Athiti', sans-serif;
}
h5 {
    font-family: 'Athiti', sans-serif;
}
botton {
    font-family: 'Athiti', sans-serif;
}
h1 {
    font-family: 'Athiti', sans-serif;
}
h3 {
    font-family: 'Athiti', sans-serif;
}
body{
    font-family: 'Athiti', sans-serif;
}

.row {
    position: relative;
}

.container .btn:hover {
    background-color: black;
}
</style>