import { Form, Input, Button, Space } from 'antd';
import { Link } from 'react-router-dom';

import BrandLogo from '@/assets/images/brand-logo.png';
import BrandLogo2 from '@/assets/images/brand-logo-2.png';

import { FormInput } from '@/components';

import dictionary from '~/config/dictionary';

import styles from './styles.module.less';

function SignInPage() {
  const [form] = Form.useForm();

  return (
    <main className={styles.container}>
      <section className={styles.container_form}>
        <div className={styles.title}>
          <img src={BrandLogo} alt="brand-logo" className={styles.demo_logo} />
          {/* <img
            src={BrandLogo2}
            alt="brand-logo"
            className={styles.school_logo}
          /> */}
          <h1>{dictionary.title}</h1>
        </div>
        <Form
          form={form}
          onFinish={(v) => {
            console.log(v);
          }}
          layout="vertical"
        >
          <FormInput
            type="email"
            placeholder="Contoh: email@gmail.com"
            name="email"
            label="Email Address"
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            placeholder="Ketik password anda di sini"
          />

          <Button type="primary" htmlType="submit" size="large" block>
            Sign In
          </Button>
        </Form>
        <footer className={styles.container_footer}>
          {/* <Link>Lupa Password</Link> */}
          <a href="/auth/forgot-password">Lupa Password?</a>
        </footer>
      </section>
    </main>
  );
}

export default SignInPage;
