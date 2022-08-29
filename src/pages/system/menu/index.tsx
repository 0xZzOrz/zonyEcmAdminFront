import type { MenuType } from '@/services/swagger/typings';
import { getMenu } from '@/services/system/menu';
import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProFormInstance, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Button, Form, Radio } from 'antd';
import { useRef, useState } from 'react';
const Menu: React.FC = () => {
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const formRef = useRef<
    ProFormInstance<{
      type: number;
    }>
  >();
  const menuColumns: ProColumns<MenuType>[] = [
    {
      title: '名称',
      dataIndex: 'title',
      hideInSearch: true,
    },
    {
      title: '类型',
      dataIndex: 'type',
      hideInSearch: true,
      render: (text, record, _) => {
        if (text == 0) {
          return '目录';
        } else if (text == 1) {
          return '菜单';
        } else if (text == 2) {
          return '按钮';
        }
      },
    },
    {
      title: '排序',
      dataIndex: 'menuSort',
      hideInSearch: true,
    },
    {
      title: '路径',
      dataIndex: 'path',
      hideInSearch: true,
    },
  ];
  return (
    <PageContainer>
      <ProTable<MenuType>
        columns={menuColumns}
        rowKey="id"
        request={async (params, sorter, filter) => {
          const res = await getMenu({ params: { ...params, pid: null } });
          return {
            data: res?.content,
            success: !res.hasOwnProperty('status'),
            // 不传会使用 data 的长度，如果是分页一定要传
            total: res?.totalElements,
          };
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
      />
      {
        <ModalForm
          title={'添加菜单'}
          visible={createModalVisible}
          formRef={formRef}
          onVisibleChange={setCreateModalVisible}
          modalProps={{
            centered: true,
          }}
          onFinish={async (values) => {
            console.log(values);
            // const response = await addDict({ ...values });
            // setCreateModalVisible(false);
            // tableRef.current?.reload();
            // formRef.current?.resetFields();
          }}
        >
          <Form.Item label="Form Layout" name="type">
            <Radio.Group>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <ProFormText
            label={'字典名称'}
            placeholder={'请填写字典名称'}
            rules={[{ required: true, message: '请填写字典名称' }]}
            name={'name'}
          />
          <ProFormTextArea
            label="描述"
            name="description"
            placeholder={'请填写描述'}
            rules={[{ required: true, message: '请填写描述' }]}
          />
        </ModalForm>
      }
    </PageContainer>
  );
};

export default Menu;
