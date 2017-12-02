<template>
    <div>
      <shopcarts-header  title="购物车" :ttt="ttt"></shopcarts-header>
      <shopcarts-count :tm="tm" :tn="tn"></shopcarts-count>
      <shopcarts-list :del="del" :list="shoplist" :add="add" :sub="sub"></shopcarts-list>
      <shopcarts-footer></shopcarts-footer>
    </div>
</template>

<script>
    import ShopcartsHeader from '../components/shopcarts/ShopcartsHeader';
    import ShopcartsCount from '../components/shopcarts/ShopcartsCount';
    import ShopcartsList from '../components/shopcarts/ShopcartsList';
    import ShopcartsFooter from '../components/shopcarts/ShopcartsFooter';
    import ShopCartsGoods from '../Api/ClassifyApi'
    import '../assets/ionic/css/ionic.css';
    export default {
        name: "shopcarts",
        components:{
          ShopcartsHeader,
          ShopcartsCount,
          ShopcartsList,
          ShopcartsFooter
        },
        data(){
          return {
            shoplist:[],
            tm:0,
            tn:0,
            arr:[],
            onceclick:true
          }
        },
      created:function(){
        this.intiData();
      },
      methods:{
        intiData:function(){
          ShopCartsGoods.getgoods((data)=>{
            this.counter(data);
            this.shoplist=data;
          });
        },
        del:function(idx){
          let id = this.shoplist[idx]._id;
          fetch(`http://localhost:3000/delete/${id}`).then(()=>{
            this.intiData();
          })
        },
        ttt:function(){
            this.shoplist.forEach((val)=>{
              this.arr.push(val);
            });
            if(this.onceclick){
              this.onceclick = false;
              this.arr.sort((a,b)=>{
                return a.price-b.price
              });
              this.shoplist = this.arr;
            }else{
              this.onceclick = true;
              this.arr.sort((a,b)=>{
                return b.price-a.price
              });
              this.shoplist = this.arr;
            }


        },
        updata:function(idx,n,){
          fetch(`http://localhost:3000/updata?id=${idx}&name=${n}`).then()
        },
        add:function(idx){
          this.shoplist[idx].qal++;
          this.counter(this.shoplist);
          let str=JSON.stringify(this.shoplist[idx]);
          this.updata(this.shoplist[idx]._id,str);
        },
        sub:function(idx){
          if(this.shoplist[idx].qal<=1){
            this.shoplist[idx].qal=1;
          }else{
            this.shoplist[idx].qal--;
            this.counter(this.shoplist);
            let str=JSON.stringify(this.shoplist[idx]);
            this.updata(this.shoplist[idx]._id,str);
          }
        },
        counter:function(data){
          this.tm =0;
          this.tn =0;
          data.forEach((item,index)=>{
            this.tn+=item.qal;
            this.tm+= item.qal*item.price;
          })
        }
      }
    }
</script>

<style scoped>

</style>
