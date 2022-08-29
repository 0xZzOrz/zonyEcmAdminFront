import { routerRedux } from 'dva/router';
import { notification, message } from 'antd';
import { FormattedMessage, history } from 'umi';
import { stringify } from 'qs';
import { login } from '../services/user';
import { setToken } from '../utils/auth';

export default {
  namespace: 'user',
  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      if (response.hasOwnProperty('user')) {
        const { token, user } = response;
        alert(token);

        if (msg.status === 'ok') {
          // await fetchUserInfo();
          /** 此方法会跳转到 redirect 参数所在的位置 */
          if (!history) return;
          const { query } = history.location;
          const { redirect } = query as { redirect: string };
          history.push(redirect || '/');
          return;
        }
        // yield put({
        //   type: 'changeLoginStatus',
        //   payload: {
        //     status: success,
        //     type: 'login',
        //     data: { token, user },
        //   },
        // });
        // const responseRoutes = yield call(dynamicRoutes);
        // const responseButtons = yield call(dynamicButtons);
        // yield put({
        //   type: 'saveMenuData',
        //   payload: {
        //     routes: responseRoutes.data,
        //     buttons: responseButtons.data,
        //   },
        // });
        // const urlParams = new URL(window.location.href);
        // const params = getPageQuery();
        // let { redirect } = params;
        // if (redirect) {
        //   const redirectUrlParams = new URL(redirect);
        //   if (redirectUrlParams.origin === urlParams.origin) {
        //     redirect = redirect.substr(urlParams.origin.length);
        //     if (redirect.match(/^\/.*#/)) {
        //       redirect = redirect.substr(redirect.indexOf('#') + 1);
        //     }
        //   } else {
        //     window.location.href = redirect;
        //     return;
        //   }
        // }
        // yield put(routerRedux.replace(redirect || '/'));
      }
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          type: 'logout',
          data: {
            authority: 'guest',
            logout: true,
          },
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        }),
      );
    },
  },

  reducers: {
    // changeLoginStatus(state, { payload }) {
    //   const { status, type } = payload;
    //   if (status) {
    //     const {
    //       data: { tokenType, accessToken, authority, account, userId, oauthId, userName, avatar },
    //     } = payload;
    //     const token = `${tokenType} ${accessToken}`;
    //     setToken(token);
    //     setAuthority(authority);
    //     setCurrentUser({ avatar, userId, oauthId, account, name: userName, authority });
    //   } else {
    //     removeAll();
    //   }
    //   return {
    //     ...state,
    //     status: type === 'login' ? (status ? 'ok' : 'error') : '',
    //     type: payload.type,
    //   };
    // },
    // saveMenuData(state, { payload }) {
    //   const { routes, buttons } = payload;
    //   setRoutes(formatRoutes(routes));
    //   setButtons(formatButtons(buttons));
    //   return {
    //     ...state,
    //   };
    // },
  },
};
