# 心得
1. 先看这篇 https://www.jianshu.com/p/b0296e7159e9  <React常用测试框架之Jest>
2. 为什么要安装babel-jest，因为不是先编译好es6 jsx代码，再通过jest执行。而是直接用jest执行es6代码。所以需要babel-jest，它来再jest启动后，调用babel编译，之后执行测试用例。
如果结合webpack，可能就不需要babel-jest，可能可以先编译再跑用例吧。
3. react-test-renderer是facebook官方的包，用来测试渲染，以前一本书看到过官方的react-addons-test-utils和aribnb的enzyme。了解了一下react-addons-test-utils三年没更新了，被废弃了，现在官方应该推的是react-test-render
(http://react.caibaojian.com/docs/test-renderer.html) 最后是这篇
相关的官方文章还有
http://react.caibaojian.com/docs/test-utils.html 先看这篇，讲的test utilities，他是react-dom/test-utils，了解api
http://react.caibaojian.com/docs/shallow-renderer.html 再看这篇
4. 浅层渲染和其它渲染的区别，可以看这篇
http://echizen.github.io/tech/2017/02-12-jest-enzyme-method
shallowRender渲染的是虚拟dom结构, 并且只渲染一层，这个一层不是指里面的dom而是里面的react组件，它不会再渲染里面的子react组件。
test-renderer渲染出来的这不是真实的dom，也是虚拟的。
5. testRender的官方文档讲了一些测试的实践方法，比如渲染后在根节点上查找某个元素有没有渲染等。看一下api，还可以模拟更新操作, 卸载等生命周期, 也可以测试ref
6. 按文章跑了一下，用新版的babel有问题，去看了jest官方的例子：不需要bridge了。
https://jestjs.io/docs/en/tutorial-react.html#content
7. 理解一下test-utils是用来测试各种的，比如提供api模拟点击react组件，但test-renderer只用来提供render相关的api
8. 