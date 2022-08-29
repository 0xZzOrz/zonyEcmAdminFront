import type { MenuDataItem, Settings as LayoutSettings } from '@ant-design/pro-layout';
import { ProBreadcrumb } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import { ErrorShowType, history, Link } from 'umi';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import { BookOutlined, HeartOutlined, LinkOutlined, SmileOutlined } from '@ant-design/icons';
import { getToken, removeToken } from './utils/auth';
import type { Context } from 'umi-request';
import type { API } from './services/swagger/typings';
import { buildMenu } from './services/system/menu';
import * as allIcons from '@ant-design/icons';
import React, { useState } from 'react';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
const iconEnum = {
  SmileOutlined: <SmileOutlined />,
  HeartOutlined: <HeartOutlined />,
};

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
  menu?: MenuDataItem[];
}> {
  const fetchUserInfo = async () => {
    try {
      const userInfo = await queryCurrentUser();
      const menuInfo = await buildMenu();
      if (userInfo.hasOwnProperty('user') || !menuInfo.hasOwnProperty('status')) {
        return Object.assign(userInfo, { menu: menuInfo });
      } else {
        return undefined;
      }
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
      menu: currentUser?.menu,
    };
  }
  return {
    fetchUserInfo,
    settings: {},
    menu: [],
  };
}

const toHump = (name: string) =>
  name.replace(/-(\w)/g, (all: string, letter: any) => letter.toUpperCase());

// const loopMenuItem = (data: MenuDataItem[]): MenuDataItem[] => {
//   data.forEach((item) => {
//     if (item?.meta?.icon) {
//       const { icon } = item.meta;
//       const v4IconName = toHump(icon.replace(icon[0], icon[0].toUpperCase()));
//       const NewIcon = allIcons[icon] || allIcons[''.concat(v4IconName, 'Outlined')];

//       if (NewIcon) {
//         try {
//           // eslint-disable-next-line no-param-reassign
//           item.icon = React.createElement(NewIcon);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     }
//     item.parentKeys = item?.parentPath ? ['/' + item?.parentPath] : [];
//     item.key = item.path;
//     if (item.routes || item.children) {
//       const children = loopMenuItem(item.routes || item.children); // Reduce memory usage

//       item.children = children;
//     }
//   });
// eslint-disable-next-line no-param-reassign
// data = [
//   {
//     name: '系统管理',
//     path: '/system',
//     children: [
//       {
//         name: '字典管理',
//         path: '/system/dict',
//         key: '/system/dict',
//         parentKeys: '/system',
//       },
//     ],
//   },
// ];
//   console.log(data);
//   return data;
// };

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    menuDataRender: () => initialState?.menu || [],
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.user.nickName,
    },
    // headerContentRender: () => <ProBreadcrumb />,
    // breadcrumbRender: () => loopMenuItem(initialState?.menu || []),
    // itemRender: (route, params, routes, paths) => {
    //   const last = routes.indexOf(route) === routes.length - 1;
    //   return last ? <span>{route.name}</span> : <Link to={route.path}>{route.name}</Link>;
    // },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath + '?redirect=' + location.pathname);
      }
    },
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    // childrenRender: (children) => {
    //   if (initialState.loading) return <PageLoading />;
    //   return children;
    // },
    ...initialState?.settings,
  };
};

//Token响应头配置
const authHeaderInterceptor = (url: string, options: RequestInterceptor) => {
  if (getToken()) {
    const authHeader = { Authorization: getToken() };
    return {
      url: `${url}`,
      options: { ...options, interceptors: true, headers: authHeader },
    };
  }
};

const checkServerCode = async (ctx: Context, next: () => void) => {
  await next();
  return ctx;
};

//response拦截器
const responseInterceptors = (response: Response, options: RequestOptionsInit) => {
  return response;
};

export const request: RequestConfig = {
  // 新增自动添加AccessToken的请求前拦截器
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [responseInterceptors],
  middlewares: [checkServerCode],
  errorConfig: {
    // errorPage?: string
    adaptor: (resData: any, ctx: Context) => {
      let errorShowType;
      if (ctx.res.status >= 200 && ctx.res.status < 300) {
        errorShowType = ErrorShowType.NOTIFICATION;
        // return ctx;
      }
      if (ctx.res.tatus === 400) {
        errorShowType = ErrorShowType.ERROR_MESSAGE;
      } else if (ctx.res.status === 401) {
        errorShowType = ErrorShowType.WARN_MESSAGE;
        // removeToken();
        history.push('/user/login');
      } else if (ctx.res.status === 404) {
        errorShowType = ErrorShowType.WARN_MESSAGE;
      } else if (ctx.res.status === 500) {
        errorShowType = ErrorShowType.ERROR_MESSAGE;
      }
      return {
        success: resData.hasOwnProperty('status') && resData?.status != 401 ? false : true,
        data: resData?.content || resData,
        errorCode: resData?.status,
        errorMessage: resData?.message || codeMessage[resData?.status],
        showType: errorShowType || ErrorShowType.SILENT,

        // SILENT = 0,
        // WARN_MESSAGE = 1,
        // ERROR_MESSAGE = 2,
        // NOTIFICATION = 4,
        // REDIRECT = 9,
      };
    },
  },
};
