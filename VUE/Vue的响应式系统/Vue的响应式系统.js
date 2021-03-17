

    //         如何理解Vue的响应式系统？
    // M: model数据模型,    V:view视图模型,  VM: viewModel视图数据模型
    // 双向:
    // 1. 视图变化了, 数据自动更新   =>  监听原生的事件即可,  输入框变了,  监听输入框input事件
    // 2. 数据变化了, 视图要自动更新  =>  vue2 和 vue3

    // 1. 基本原理
    //     vue2.0 数据劫持:  Object.defineProperty  (es5)
    //     vue3.0 数据劫持:  Proxy   (es6)
    //     Vue的双向绑定原理其实就是 MVVM 的基本原理, Vuejs 官网已经说明, 实际就是通过 Object.defineProperty方法 完成了对于Vue实例中数据的 劫持, 通过对于 data中数据 进行set的劫持监听, 然后通过观察者模式, 通知 对应的绑定节点 进行节点数据更新, 完成数据驱动视图的更新
    //     简单概述 : 通过Object.defineProperty 完成对于数据的劫持, 通过观察者模式, 完成对于节点的数据更新

    // 2. 观察者模式
    //     观察者模式:  当对象间存在  一对多  关系时，则使用观察者模式（Observer Pattern）。
    //     比如，当一个对象或者数据被修改时，则会自动通知依赖它的对象。
    //     意图：定义对象间的一种 一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。
    // 拍卖会的时候，大家相互叫价，拍卖师(Dep) 会观察 最高标价(利用Object.defineProperty监听)，
    // 一旦最高价变化了, 然后通知给其它竞价者(watcher观察者 - 订阅者, 订阅了价格的变化)，这就是一个观察者模式 
    // Dep要进行 依赖收集，并通过一个subs数组, 记录观察者Watcher,  
    // Watcher 分为  渲染 watcher、计算属性 watcher、侦听器 watcher  三种 
    // 收集依赖: 简单点说就是谁借了我的钱，我就把那个人  记下来  ，以后我的钱少了 我就通知他们说我没钱了 


    //   <div>
    //   <p>{{ msg }}</p>   // Watcher1(渲染), 依赖于msg
    // </div>
    
    // <div>
    //   <h1>{{ car }}</h1>   // Watcher2(渲染),  依赖于car
    // </div>
    
    // <div>
    //   <h1>{{ myMsg }}</h1>   // Watcher3(渲染), 依赖于myMsg
    // </div>
      
    //   computed: {
    //     myMsg () {
    //       console.log('计算属性重新计算了')
    //       return this.msg + '20'  // Watcher4(计算属性中), 依赖于msg, msg变了重新计算
    //     }
    //   }
      
    //   watch: {
    //     msg (newValue) {
    //       console.log('新的msg', newValue) // Watcher5(侦听器), 将来msg变化, 这边要执行这个函数
    //     }
    //   }
      
      
    //   // 收集依赖 (dep结构有点类似于二维数组, (Map结构))   arr.type="msgDep"
    //   dep: [
    //     msgDep: [Watcher5(侦听器), Watcher4(计算属性中), Watcher1(渲染)],
    //     carDep: [Watcher2(渲染)],
    //     myMsgDep: [Watcher3(渲染)]
    //   ]
      
      
    //   // Watcher
    //   {
    //     callback: Function, (数据变化后, 需要执行的回调)
    //     isRenderWatcher: Boolean, (是否是render的watcher, 是否要触发视图的更新, 往后放, 最后统一虚拟dom对比, 统一更新)
    //     ...
    //   }


    // 比如: 假定数据 money 变了, 那么没有任何与money相关的观察者, 就不需要进行任何更新操作, 也不需要执行任何的监视函数
    // 然而: 假定数据 msg 变了, 就会通知到相关的Watcher, 且优先通知侦听器Watcher和计算属性Watcher, 后进行统一的渲染更新
    //     1. 通知侦听器Watcher,  立刻执行配置的函数,  console.log('新的msg', newValue) 
    //     2. 通知计算属性Watcher, 计算属性依赖的值变了, 需要重新计算
    //       且更新后, myMsg 变化了,  需要进行进行视图的渲染  (render)     (--- 要更新, 等着---)
    //     3. 通过到watcher1, 渲染Watcher  (---要更新---)
    //     4. 最后统一进行, 新旧虚拟dom的对比, 完成视图的更新
    
    // 当数据状态发生改变时，会被 Object.defineProperty 监听劫持到, 会通知到 Dep,  并根据收集的依赖关系,  
    
    // 让订阅者Watcher进行数据更新（update）操作 ,  派发更新 
    
    
    // 总结概述: vue采用的是观察者模式, 是一种 一对多 的关系,  一上来vue在解析渲染时, 会进行依赖收集, 会将渲染 watcher、计算属性 watcher、侦听器 watcher,  都收集到对应的dep中, 将来Object.defineProperty 监听到数据变化, 就根据依赖关系, 派发更新