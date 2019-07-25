import {SYNC_UPDATE} from "./const"
export default {
    initCar(store){ //在app.vue中调用initCar
        //获取购物车
        let cars  = getCar();//获取后台数据
        store.commit(SYNC_UPDATE,cars)//前端同步数据
    },
    //1.添加商品到购物车
    addGoodInCar(store,goodInfo){ //数据cars，商品对象
        setTimeout(()=>{
            //获取后台返回来的购物车
            let cars  = getCar();
            let isHas = cars.some(item=>{
                if(item.CommodityId === goodInfo.CommodityId){//前台的goodInfo.CommodityId；后台数组的item.CommodityId
                    item.num++;
                    return true;
                }
            })
            if(!isHas){ //说明购物车没有此商品
                goodInfo.num = 1;
                cars.push(goodInfo);
            }
            //通知后台更改cars
            localStorage.cars = JSON.stringify(cars);
            //前端需要通过mutations具体的方法同步state.myCar.cars（同步更新前端数据）
            store.commit(SYNC_UPDATE,cars) //mutations的名字;最新的cars
        },600);
    },
    //2.减少商品
    reduceGoodInCar(store,goodInfo){
        let cars = getCar();
        cars = cars.filter(item=>{
            if(item.CommodityId === goodInfo.CommodityId){//前台的goodInfo.CommodityId；后台数组的item.CommodityId
                item.num--;
                if(item.num <= 0){
                    return false 
                }
            }
            return true;
        })
        localStorage.cars = JSON.stringify(cars);
        store.commit(SYNC_UPDATE,cars);
    }
}

//通过本地存储模仿后台
function getCar(){
    return JSON.parse(localStorage.cars ? localStorage.cars : '[]')
}