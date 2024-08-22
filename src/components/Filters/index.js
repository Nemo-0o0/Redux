import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterChange, statusFilterChange, priorityFilterChange } from '../../Reduxs/actions';

const { Search } = Input;

function Filters() {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('')
    const [filterStatus, setFilterStatus] = useState('All')
    const [priorities, setPriorities] = useState([])

    const handleSearch = (e) => {
        console.log('handleSearch', { e })
        setSearchText(e.target.value)
        dispatch(searchFilterChange(e.target.value))
    }

    const handleFilterChange = (e) => {
        console.log({ e })
        setFilterStatus(e.target.value)
        dispatch(statusFilterChange(e.target.value))
    }

    const handlePriorityChange = (value) => {
        // console.log({ e })
        setPriorities(value)
        dispatch(priorityFilterChange(value))
    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder='input search text'
                    value={searchText}
                    onChange={handleSearch} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={filterStatus} onChange={handleFilterChange}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={priorities}
                    onChange={handlePriorityChange}
                >
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
            </Col>
        </Row>
    );
}

export default Filters;