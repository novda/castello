import { SettingOutlined } from '@ant-design/icons';
import { InputNumber, Space, Typography, TimePicker } from 'antd';
import { useState } from 'react';

import dayjs from 'dayjs';

const format = 'HH:mm';

const { Text } = Typography;

const Room = ({ roomNumber, roomCostByHour }) => {
    const [addCost, setAddCost] = useState(0)
    const [psCost, setPsCost] = useState(0)

    const [open, setOpen] = useState(false);

    return (  
    <Space direction="horizontal" size="middle">
        <Text strong>{`Room ${roomNumber}`}</Text>
        <TimePicker format={format} />
        <InputNumber addonAfter={<SettingOutlined />} defaultValue={psCost} onChange={setPsCost} />
        <InputNumber addonBefore="+" addonAfter="uzs" defaultValue={addCost} onChange={setAddCost}/>
        <InputNumber addonBefore={"Total"} value={psCost + addCost} />
  </Space>
  )
};
export default Room;