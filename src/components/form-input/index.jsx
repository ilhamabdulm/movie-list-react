import { Form, Input, InputNumber } from 'antd';

const FormInput = (props) => {
  const { name, type, label, placeholder, onChange } = props;

  const INPUT = {
    password: (
      <Form.Item name={name} label={label}>
        <Input.Password type={type} placeholder={placeholder} />
      </Form.Item>
    ),
    number: (
      <Form.Item name={name} label={label}>
        <InputNumber type={type} placeholder={placeholder} />
      </Form.Item>
    ),
  };

  return INPUT[type] ? (
    INPUT[type]
  ) : (
    <Form.Item name={name} label={label}>
      <Input type={type} placeholder={placeholder} />
    </Form.Item>
  );
};

export default FormInput;
