## typescript的8种数据结构

### Stack 栈

| 方法名  | 解释           | 参数     | 返回值  |
| ------- | -------------- | -------- | ------- |
| push    | 入栈           | ...items | Stack   |
| pop     | 出栈           | -        | Stack   |
| peek    | 获取栈顶的项   | -        | item    |
| isEmpty | 检查是否为空栈 | -        | boolean |
| size    | 检查栈的长度   | -        | number  |

示例

```html
<script src="../dist/stack.global.js"></script>
<script>
    const { Stack } = TdsStack

    const stack = new Stack()

    stack.push(1, 2, 3, 4)

    stack.pop()

    console.log(stack.isEmpty()) // false

    console.log(stack.size()) // e

    console.log(stack) // Stack {stack Array(3)} stack: [1, 2, 3]
</script>
```



### Queue 队列

| 方法名  | 解释         | 参数     | 返回值  |
| ------- | ------------ | -------- | ------- |
| enqueue | 入队         | ...items | Queue   |
| dequeue | 出队         | -        | Queue   |
| front   | 获取队首     | -        | item    |
| back    | 获取队尾     | -        | item    |
| isEmpty | 检查是否为空 | -        | boolean |
| size    | 检查长度     | -        | number  |

示例

```html
<script src="../dist/queue.global.js"></script>
<script>
    const { Queue } = TdsQueue

    const queue = new Queue()

    queue.enqueue(1, 2, 3, 4)

    queue.dequeue()

    console.log(queue.front()) // 2
    console.log(queue.back()) // 4
    console.log(queue.isEmpty()) // false
    console.log(queue.size()) // 3

    console.log(queue) // Queue {queue: Array(3)} queue: [2, 3, 4]
</script>
```

### DoubleLinkedList 双向链表

| 方法名   | 解释                   | 参数             | 返回值  |
| -------- | ---------------------- | ---------------- | ------- |
| add      | 插入节点               | item             | -       |
| addAt    | 在指定位置插入节点     | [index, item]    | -       |
| remove   | 删除链表指定数据项节点 | item             | -       |
| removeAt | 删除链表指定位置节点   | index            | -       |
| reverse  | 反转链表               | -                | -       |
| swap     | 交换两个节点数据       | [index1, index2] | -       |
| isEmpty  | 查询是否为空           | -                | boolean |
| length   | 查询链表长度           | -                | number  |
| traverse | 遍历链表               | fn               | -       |
| find     | 查找某个项的索引       | item             | number  |

示例

```html
<script src="../dist/linkedlist.global.js"></script>
<script>
    const { DoubledLinkedList } = TdsLinkedList

    const doubledLinkedList = new DoubledLinkedList()

    doubledLinkedList.add(1)
    doubledLinkedList.add(2)
    doubledLinkedList.add(3)

    doubledLinkedList.remove(2)

    doubledLinkedList.addAt(1, "在索引为1处添加的节点")

    doubledLinkedList.removeAt(0)

    doubledLinkedList.traverse((node) => console.log(node))
    // Node {data: '在索引为1处添加的节点', next: Node, prev: null}
    // Node {data: 3, next: null, prev: Node}
</script>
```

