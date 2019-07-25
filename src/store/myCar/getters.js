//根据现有状态派发一个新状态
export default{
    compoteTotal(state){
        let cars = state.cars;//获取购物车
        let total = {price:0,num:0}
        cars.forEach(item => {
            total.price += item.OriginalPrice * item.num;
            total.num += item.num;
        });
        total.price = total.price.toFixed(2)//toFixed(2):保留小数两位，向上取整
        return total;
    }
}