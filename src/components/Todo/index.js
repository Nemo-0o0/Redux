import { Row, Tag, Checkbox } from 'antd';

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function Todo({ name, priority }) {
    return (
        <Row justify='space-between' style={{ marginBottom: 3 }}>
            <Checkbox>{name}</Checkbox>
            <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
                {priority}
            </Tag>
        </Row>
    );
}