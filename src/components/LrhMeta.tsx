import React from 'react';
import { Row, Col, Card, Form, InputNumber, Button, Typography } from 'antd';
import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { utils } from 'ethers';

type LrhMetaProps = {
  contract: Contract;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const LrhMeta: React.FC<LrhMetaProps> = ({ contract }) => {

  const { state: mintMetaReault, send: mintMeta } = useContractFunction(contract, 'mintMeta', {});

  const [form] = Form.useForm<{ tokenQuantity: number }>();

  const onFinish = (values: { tokenQuantity: number }) => {
    mintMeta(
      values.tokenQuantity, 
      {
        value: utils.parseEther("0.003"),
      }
    )
  };

  return (
    <Row gutter={16}>
      <Col span={2}></Col>
      <Col span={20}>
        <Card title="LrhMeta Mint">
          <Form {...layout} initialValues={{tokenQuantity: 1}} form={form} onFinish={onFinish} >
            <Form.Item name="tokenQuantity" label="Mint Number" rules={[{ required: true }, { type: 'number', min: 1, max: 2 }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Mint
              </Button>
            </Form.Item>
          </Form>
          <Typography>
            <pre>
              {JSON.stringify(mintMetaReault)}
            </pre>
          </Typography>

        </Card>
      </Col>
      <Col span={2}></Col>
    </Row>
  )
}

export default LrhMeta;
