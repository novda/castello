
import { InputNumber, Space, Typography, TimePicker, Input, Form, Button } from 'antd';
import { useEffect, useState } from 'react';

const format = 'HH:mm';

const { Text } = Typography;
const { TextArea } = Input;

const Room = ({ roomNumber, roomCostByHour }) => {
  const [addCost, setAddCost] = useState(0)

  const [total, setTotal] = useState(0)
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()

  const [colaText, setColaText] = useState('')
  const [finalText, setFinalText] = useState('')

  function calculateMinutesBetweenTimes(startTime, endTime) {
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    const timeDiff = Math.abs(end - start);
    const minutes = Math.floor(timeDiff / 1000 / 60);
    return minutes;
  }

  function calcuteCost(startTime, endTime, costByHour) {
    const minutes = calculateMinutesBetweenTimes(startTime, endTime)
    return minutes * (costByHour / 60)
  }

  function clearAll() {
    form.resetFields()
    setTotal(0)
    setColaText('')
    setFinalText('')
  }

  const [form] = Form.useForm();

  useEffect(() => {
    if (startTime, endTime) {
      setTotal(calcuteCost(startTime, endTime, roomCostByHour))
    }
  }, [startTime, endTime]
  )

  useEffect(() => {
    const finalText = `${startTime} - ${endTime}, ${colaText}, total: ${total}`
    if (startTime, endTime) {
      setFinalText(finalText)
    }
  }, [startTime, endTime, colaText, total])

  return (
    <Space direction="horizontal" size="middle">
      <Text strong>{`Room ${roomNumber}`}</Text>
      <Form form={form} layout="vertical">
        <TimePicker format={format} onChange={(value, dateString) => {
          setStartTime(dateString)
        }} />
        <TimePicker format={format} onChange={(value, dateString) => {
          setEndTime(dateString)
        }} />
      </Form>
      <TextArea
        style={{ height: 60, marginBottom: 24 }}
        onChange={(e) => setColaText(e.target.value)}
      />
      <InputNumber addonBefore="+" addonAfter="uzs" defaultValue={addCost} onChange={setAddCost} />
      <InputNumber addonBefore={"Total"} value={Math.floor(total + addCost)} />
      <TextArea
        autoSize={{ minRows: 2, maxRows: 6 }}
        value={finalText}
      />
      <Button shape="circle" onClick={() => clearAll()}>
        C
      </Button>
    </Space>
  )
};
export default Room;