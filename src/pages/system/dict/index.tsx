import React, { useRef, useState } from 'react';
import { Button, Input, Col, Row, Popconfirm } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { ActionType, EditableProTable, ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import {
  addDict,
  addDictsDetail,
  delDictsDetail,
  editDict,
  editDictsDetail,
  getDicts,
  getDictsDetail,
} from '@/services/system/dict';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProFormInstance } from '@ant-design/pro-form';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';

export type dictTableListItem = {
  id: number;
  name: string;
  description: string;
};

export type dictDetailTableListItem = {
  id: number;
  label: string;
  value: string;
  dict: object;
};

const deleteDictDetail = async (data: dictDetailTableListItem, action: ActionType) => {
  const res = await delDictsDetail(data?.id.toString());
  action?.reload();
  console.log(res);
};

const dictColumns: ProColumns<dictTableListItem>[] = [
  {
    title: '排序',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
    // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    hideInSearch: true,
  },
  {
    title: '描述',
    dataIndex: 'description',
    ellipsis: true,
    hideInSearch: true,
  },
  {
    title: '内容',
    dataIndex: 'blurry',
    hideInTable: true,
  },

  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a key="link2">删除</a>,
    ],
  },
];
const dictDetailColumns: ProColumns<dictDetailTableListItem>[] = [
  {
    title: '标签',
    dataIndex: 'label',
  },
  {
    title: '值',
    dataIndex: 'value',
    ellipsis: true,
  },

  {
    title: '操作',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <Popconfirm
        key="popconfirm"
        title={`确认删除吗?`}
        okText="是"
        cancelText="否"
        onConfirm={() => {
          deleteDictDetail(record, action);
        }}
      >
        <a>删除</a>
      </Popconfirm>,
    ],
  },
];

const Dict: React.FC = () => {
  const tableRef = useRef<ActionType>();
  const dictDetailTableRef = useRef<ActionType>();

  const formRef = useRef<
    ProFormInstance<{
      date: string;
    }>
  >();
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [currentDict, setCurrentDict] = useState<{ [key: string]: any }>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<dictDetailTableListItem[]>([]);
  const [isAdd, setisAdd] = useState<boolean>(false);
  return (
    <PageContainer>
      <ProTable<dictTableListItem>
        actionRef={tableRef}
        columns={dictColumns}
        request={async (params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          const res = await getDicts({ params: params });
          return {
            data: res?.content,
            success: !res.hasOwnProperty('status'),
            // 不传会使用 data 的长度，如果是分页一定要传
            total: res?.totalElements,
          };
        }}
        rowKey="id"
        editable={{
          type: 'multiple',
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            const res = await editDict(data);
          },
        }}
        pagination={{
          showQuickJumper: true,
        }}
        search={{
          layout: 'vertical',
          defaultCollapsed: false,
        }}
        dateFormatter="string"
        toolbar={{
          title: '字典管理',
          tooltip: '这是一个标题提示',
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
        onRow={(record) => {
          return {
            onClick: (event) => {
              setCurrentDict(record);
              dictDetailTableRef.current?.reload();
            }, // 点击行
            onDoubleClick: (event) => {},
            onContextMenu: (event) => {},
            onMouseEnter: (event) => {}, // 鼠标移入行
            onMouseLeave: (event) => {},
          };
        }}
        tableRender={(_, dom) => (
          <Row gutter={[16, 16]}>
            <Col span={12}>{dom}</Col>
            <Col span={12}>
              <EditableProTable<dictDetailTableListItem>
                actionRef={dictDetailTableRef}
                search={false}
                columns={dictDetailColumns}
                value={dataSource}
                onChange={setDataSource}
                request={async (params, sorter, filter) => {
                  // 表单搜索项会从 params 传入，传递给后端接口。
                  const data =
                    currentDict &&
                    (await getDictsDetail({
                      params: {
                        dictName: currentDict?.name,
                        ...params,
                      },
                    }));
                  return {
                    data: data?.content,
                    success: !data.hasOwnProperty('status'),
                    // 不传会使用 data 的长度，如果是分页一定要传
                    total: data?.totalElements,
                  };
                }}
                rowKey="id"
                editable={{
                  type: 'multiple',
                  editableKeys,
                  onSave: async (rowKey, data, row) => {
                    if (isAdd) {
                      delete data.id;
                      data.dict = currentDict;
                      let res = await addDictsDetail(data);
                      if (!res.hasOwnProperty('status')) {
                        setisAdd(false);
                      }
                    } else {
                      let res = await editDictsDetail(data);
                    }
                    dictDetailTableRef?.current?.reload();
                  },
                  onChange: setEditableRowKeys,
                }}
                recordCreatorProps={{
                  record: () => ({ id: Math.random() * 1000000 }),
                  onClick: () => {
                    setisAdd(true);
                  },
                }}
                pagination={{
                  showQuickJumper: true,
                }}
                dateFormatter="string"
                toolbar={{
                  title: '字典详情',
                  tooltip: '字典详情',
                }}
              />
            </Col>
          </Row>
        )}
      />
      {
        <ModalForm
          title={'添加权限'}
          visible={createModalVisible}
          formRef={formRef}
          onVisibleChange={setCreateModalVisible}
          modalProps={{
            centered: true,
          }}
          onFinish={async (values) => {
            console.log(values);
            const response = await addDict({ ...values });
            setCreateModalVisible(false);
            tableRef.current?.reload();
            formRef.current?.resetFields();
          }}
        >
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

export default Dict;
