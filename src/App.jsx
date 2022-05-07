import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import dictionary from '~/config/dictionary';
// import { Dictionary } from '../config';

function App() {
  const [form] = Form.useForm();

  return (
    <main>
      <section>
        <div>
          <h1>{dictionary.title}</h1>
        </div>
        <Form
          form={form}
          onFinish={(v) => {
            console.log(v);
          }}
        >
          <Form.Item name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item name="password">
            <Input type="password" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form>
      </section>
    </main>
  );
}

export default App;
