// @ts-ignore
/* eslint-disable */

import { List } from '@umijs/deps/compiled/lodash';

declare namespace API {
  type Order = {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    /** Order Status */
    status?: 'placed' | 'approved' | 'delivered';
    complete?: boolean;
  };

  type Category = {
    id?: number;
    name?: string;
  };

  type CurrentUser = {
    dataScopes: Array;
    roles: Array;
    user: {
      id?: number;
      username?: string;
      nickName?: string;
      avatarName?: string;
      avatarPath?: string;
      createTime?: string;
      dept?: Array;
      email?: string;
      enabled?: boolean;
      gender?: string;
      jobs?: Array;
      phone?: string;
      pwdResetTime?: string;
      roles?: Array;
      updateBy?: string;
      updateTime?: string;
    };
    menu?: [];
  };

  type User = {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    /** User Status */
    userStatus?: number;
  };

  type Tag = {
    id?: number;
    name?: string;
  };

  type Pet = {
    id?: number;
    category?: Category;
    name: string;
    photoUrls: string[];
    tags?: Tag[];
    /** pet status in the store */
    status?: 'available' | 'pending' | 'sold';
  };

  type ApiResponse = {
    code?: number;
    type?: string;
    message?: string;
  };
}

// @ts-ignore
/* eslint-disable */

import { List } from '@umijs/deps/compiled/lodash';
import { LiteralUnion } from 'antd/lib/_util/type';

declare namespace API {
  // type CurrentUser = {
  //   name?: string;
  //   avatar?: string;
  //   userid?: string;
  //   email?: string;
  //   signature?: string;
  //   title?: string;
  //   group?: string;
  //   tags?: { key?: string; label?: string }[];
  //   notifyCount?: number;
  //   unreadCount?: number;
  //   country?: string;
  //   access?: string;
  //   geographic?: {
  //     province?: { label?: string; key?: string };
  //     city?: { label?: string; key?: string };
  //   };
  //   address?: string;
  //   phone?: string;
  // };

  type LoginResult = {
    status?: string;
    token?: string;
    user?: object;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** ????????????????????? */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username: string;
    password: string;
    autoLogin?: boolean;
    rememberMe?: boolean;
    // type?: string;
  };

  type ErrorResponse = {
    /** ???????????????????????? */
    errorCode: string;
    /** ???????????????????????? */
    errorMessage?: string;
    /** ?????????????????????????????? */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** ????????????????????? */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type Dict = {
    /** ?????? */
    description?: string;
    dictDetails?: DictDetail[];

    /** ?????? */
    name?: string;
  };

  type DictDetail = {
    /**
     * ??????
     * @format int32
     */
    dictSort?: number;

    /** ???????????? */
    label?: string;

    /** ????????? */
    value?: string;
  };

  type MenuType = {
    /** ?????? */
    cache?: boolean;

    /** ???????????? */
    component?: string;

    /** ?????????????????? */
    componentName?: string;

    /** ???????????? */
    hidden?: boolean;

    /** ???????????? */
    icon?: string;
    iframe?: boolean;

    /**
     * ??????
     * @format int32
     */
    menuSort?: number;

    /** ???????????? */
    path?: string;

    /** ???????????? */
    permission?: string;

    /**
     * ????????????
     * @format int64
     */
    pid?: number;

    /** ???????????? */
    roles?: Role[];

    /** ???????????? */
    title?: string;

    /**
     * ???????????????????????????????????????
     * @format int32
     */
    type?: number;
  };
}
