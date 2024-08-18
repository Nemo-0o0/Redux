import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { TodoRemainingSelector } from '../../redux/selector';

export default function TodoList() {
    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')

    const todoList = useSelector(TodoRemainingSelector)
    // const searchText = useSelector(searchFilterChange);
    // console.log({ todoList, searchText })

    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(
            addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false
            })
        )
        setTodoName('');
        setPriority('Medium')
    }

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setTodoName(e.target.value)
    }

    const handlePriorityChange = (value) => {
        console.log({ value })
        setPriority(value)
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {/* <Todo name='Learn React' priority='High' />
                <Todo name='Learn Redux' priority='Medium' />
                <Todo name='Learn JavaScript' priority='Low' /> */}
                {todoList.map((todo) => (
                    <Todo key={todo.id} name={todo.name} priority={todo.priority} />
                ))}
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }}>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAdd}>
                        Add
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    );
}