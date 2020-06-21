import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ShallowRenderer from 'react-test-renderer/shallow'
import Button from '../src/button'

test('render with text', () => {
  const text = 'hello world'
  const renderer = new ShallowRenderer()
  renderer.render(<Button text={text}/>)
  const button = renderer.getRenderOutput()

  expect(button.type).toBe('button')
  expect(button.props.children).toBe(text)
})

// 想测试浏览器事件就需要在浏览器环境中，将组件渲染到独立的DOM中，不过Jest提供了一个特殊的DOM结构，我们可以使用控制台将组件渲染进去。
test('fires the onClick callback', () => {
  const handleClick = jest.fn(); // 通过jest api创建mock回调函数
  // 通过test-utils api将组件渲染至虚拟的document中, 方可点击
  const tree = TestUtils.renderIntoDocument(<Button handleClick={handleClick}/>)
  // 查找点击按钮的DOM (withTag表示是一个html标签，还有类似的withClass withType函数)
  // withTag是传入h5标签的字符串名称查找，withType是传入组件名称的字符串来查找，withClass是传入Class类来查找，差不多
  const button = TestUtils.findRenderedDOMComponentWithTag(tree, 'button')
  // 模拟点击
  TestUtils.Simulate.click(button)
  // 这就是前面mock函数的作用，它可以知道自己被调用过了
  expect(handleClick).toBeCalled()
})

// 注意如果Button组件上没有绑定click处理，那么测试不通过。因为点击后mock函数没有被called