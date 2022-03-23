## vuex

### 什么是 vuex

状态管理,可追踪、可预测,仓库

### 为什么用 vuex

没有关系组件之间的传值导致管理比较混乱，所以用 vuex 管理，它不是必须的，适合大型项目

### 安装配置

```bash
# 安装
npm install vuex --save
# 配置
/src/store/index.js
```

```js
//vue2 store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
  state: {
    name: "m1",
  },
  mutations: {},
  getters: {},
};
const moduleB = {
  state: {
    name: "m2",
  },
  mutations: {},
  getters: {},
};

export default new Vuex.Store({
  state: {
    count: 10,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }, //状态
  getters: {
    //计算属性
    filterList: (state) => {
      return state.list.filter((item) => item % 2 === 0);
    },
  },
  //对数据的更改,唯一改变数据的方式，不允许有异步操作
  mutations: {
    add(state) {
      //可以提供额外的参数
      state.count++;
    },
    reduce(state) {
      state.count--;
    },
    //使用 this.$store.commit('add')，推荐使用传对象的方式this.$store.commit('add',{num:100})
    //添加之前state没有设置的key值
    addNewState() {
      //下面是相当于新增一个键值
      Vue.set(state, "newState", "我是新属性");
      //下面相当于替换一个新的state对象
      this.replaceState({ ...state, newState: "我是新属性" });
    },
    changeCount(state, newState) {
      return (state.count = newState.count);
    },
  },
  actions: {
    //使用 this.$store.dispatch('modified')
    modified({ commit }) {
      commit("changeCount", await getData());
    },
  }, //异步处理
  modules: {
    //声明模块
    m1: moduleA,
    m2: moduleB,
  },
});
```

### api

- `state` 和 `mapState`
  可以使用`this.$store.state`来获取数据，当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余，可以使用 `mapState` 来便于我们使用
  ```js
  computed:{
    ... mapState([
      // 映射 this.count 为 store.state.count
      "count",
    ]);
  }
  //可以使用函数
  computed:{
    ... mapState(['count':(state)=>{return state.count}]);
  }
  ```
- `getter`和`mapGetter` 主要是对状态的处理
  ```js
  //正常使用
  computed:{
    ... mapGetters([
      "filterList",
    ]);
  }
  //取别名
  computed:{
    ... mapGetters([{num:'filterList'}]);
  }
  ```
- `mutations`和`mapMutations` 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，必须是同步函数

  ```js
  mutations:{
    increment (state) {
      // 变更状态
      state.count++
    }
  }

  ```

- `action`和`mapAction` 异步操作

```js
actions: {
  checkout ({ commit, state }, products) {
    // 把当前购物车的物品备份起来
    const savedCartItems = [...state.cart.added]
    // 发出结账请求，然后乐观地清空购物车
    commit(types.CHECKOUT_REQUEST)
    // 购物 API 接受一个成功回调和一个失败回调
    shop.buyProducts(
      products,
      // 成功操作
      () => commit(types.CHECKOUT_SUCCESS),
      // 失败操作
      () => commit(types.CHECKOUT_FAILURE, savedCartItems)
    )
  }
}

```
