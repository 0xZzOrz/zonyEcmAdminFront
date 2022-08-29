/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AlipayConfig {
  /** 应用ID */
  appId?: string;

  /** 类型 */
  format?: string;

  /** 异步通知地址 */
  notifyUrl?: string;

  /** 商户私钥 */
  privateKey?: string;

  /** 支付宝公钥 */
  publicKey?: string;

  /** 订单完成后返回的页面 */
  returnUrl?: string;

  /** 签名方式 */
  signType?: string;

  /** 商户号 */
  sysServiceProviderId?: string;
}

export interface App {
  /** 备份路径 */
  backupPath?: string;

  /** 部署路径 */
  deployPath?: string;

  /** 部署脚本 */
  deployScript?: string;

  /** 名称 */
  name?: string;

  /**
   * 端口
   * @format int32
   */
  port?: number;

  /** 启动脚本 */
  startScript?: string;

  /** 上传路径 */
  uploadPath?: string;
}

export interface AuthUserDto {
  code?: string;
  password?: string;
  username?: string;
  uuid?: string;
}

export interface ColumnInfo {
  /** 数据库字段名称 */
  columnName?: string;

  /** 数据库字段类型 */
  columnType?: string;

  /** 日期注解 */
  dateAnnotation?: string;

  /** 字典名称 */
  dictName?: string;

  /** 字段额外的参数 */
  extra?: string;

  /** 是否表单显示 */
  formShow?: boolean;

  /** 表单类型 */
  formType?: string;

  /** 数据库字段键类型 */
  keyType?: string;

  /** 是否在列表显示 */
  listShow?: boolean;

  /** 是否必填 */
  notNull?: boolean;

  /** 查询 1:模糊 2：精确 */
  queryType?: string;

  /** 数据库字段描述 */
  remark?: string;

  /** 表名 */
  tableName?: string;
}

export interface Database {
  /** 数据库连接地址 */
  jdbcUrl?: string;

  /** 数据库名称 */
  name?: string;

  /** 数据库密码 */
  pwd?: string;

  /** 用户名 */
  userName?: string;
}

export interface Deploy {
  /** 应用编号 */
  app?: App;
}

export interface DeployHistory {
  /** 应用名称 */
  appName?: string;

  /** 部署时间 */
  deployDate?: Timestamp;

  /**
   * 部署ID
   * @format int64
   */
  deployId?: number;

  /** 部署者 */
  deployUser?: string;

  /** IP */
  ip?: string;
}

export interface Dept {
  /**
   * 排序
   * @format int32
   */
  deptSort?: number;

  /** 是否启用 */
  enabled?: boolean;

  /** 部门名称 */
  name?: string;

  /**
   * 上级部门
   * @format int64
   */
  pid?: number;

  /** 角色 */
  roles?: Role[];
}

export interface Dict {
  /** 描述 */
  description?: string;
  dictDetails?: DictDetail[];

  /** 名称 */
  name?: string;
}

export interface DictDetail {
  /**
   * 排序
   * @format int32
   */
  dictSort?: number;

  /** 字典标签 */
  label?: string;

  /** 字典值 */
  value?: string;
}

export interface EmailConfig {
  /** 收件人 */
  fromUser?: string;

  /** 邮件服务器SMTP地址 */
  host?: string;

  /** 密码 */
  pass?: string;

  /** 邮件服务器 SMTP 端口 */
  port?: string;

  /** 发件者用户名 */
  user?: string;
}

export interface EmailVo {
  content?: string;
  subject?: string;
  tos?: string[];
}

export interface File {
  absolute?: boolean;
  absoluteFile?: File;
  absolutePath?: string;
  canonicalFile?: File;
  canonicalPath?: string;
  directory?: boolean;
  executable?: boolean;
  file?: boolean;

  /** @format int64 */
  freeSpace?: number;
  hidden?: boolean;

  /** @format int64 */
  lastModified?: number;
  name?: string;
  parent?: string;
  parentFile?: File;
  path?: string;
  readable?: boolean;

  /** @format int64 */
  totalSpace?: number;

  /** @format int64 */
  usableSpace?: number;
  writable?: boolean;
}

export interface GenConfig {
  /** 接口名称 */
  apiAlias?: string;

  /** 前端文件路径 */
  apiPath?: string;

  /** 作者 */
  author?: string;

  /** 是否覆盖 */
  cover?: boolean;

  /** 模块名 */
  moduleName?: string;

  /** 包路径 */
  pack?: string;

  /** 前端文件路径 */
  path?: string;

  /** 表前缀 */
  prefix?: string;

  /** 表名 */
  tableName?: string;
}

export type InputStream = object;

export interface Job {
  /** 是否启用 */
  enabled?: boolean;

  /**
   * 岗位排序
   * @format int64
   */
  jobSort?: number;

  /** 岗位名称 */
  name?: string;
}

export interface LocalStorage {
  /** 文件名 */
  name?: string;

  /** 路径 */
  path?: string;

  /** 真实文件名 */
  realName?: string;

  /** 大小 */
  size?: string;

  /** 后缀 */
  suffix?: string;

  /** 类型 */
  type?: string;
}

export interface Menu {
  /** 缓存 */
  cache?: boolean;

  /** 组件路径 */
  component?: string;

  /** 菜单组件名称 */
  componentName?: string;

  /** 是否隐藏 */
  hidden?: boolean;

  /** 菜单图标 */
  icon?: string;
  iframe?: boolean;

  /**
   * 排序
   * @format int32
   */
  menuSort?: number;

  /** 路由地址 */
  path?: string;

  /** 权限标识 */
  permission?: string;

  /**
   * 上级菜单
   * @format int64
   */
  pid?: number;

  /** 菜单角色 */
  roles?: Role[];

  /** 菜单标题 */
  title?: string;

  /**
   * 菜单类型，目录、菜单、按钮
   * @format int32
   */
  type?: number;
}

export interface QiniuConfig {
  /** accessKey */
  accessKey?: string;

  /** 存储空间名称作为唯一的 Bucket 识别符 */
  bucket?: string;

  /** 外链域名，可自定义，需在七牛云绑定 */
  host?: string;

  /**
   * ID
   * @format int64
   */
  id?: number;

  /** secretKey */
  secretKey?: string;

  /** 空间类型：公开/私有 */
  type?: string;

  /** Zone表示与机房的对应关系 */
  zone?: string;
}

export interface QuartzJob {
  /** Bean名称 */
  beanName?: string;

  /** cron表达式 */
  cronExpression?: string;

  /** 备注 */
  description?: string;

  /** 报警邮箱 */
  email?: string;

  /** @format int64 */
  id?: number;

  /** 状态，暂时或启动 */
  isPause?: boolean;

  /** 定时器名称 */
  jobName?: string;

  /** 方法名称 */
  methodName?: string;

  /** 参数 */
  params?: string;

  /** 失败后暂停 */
  pauseAfterFailure?: boolean;

  /** 负责人 */
  personInCharge?: string;

  /** 子任务 */
  subTask?: string;
}

export interface Resource {
  description?: string;
  file?: File;
  filename?: string;
  inputStream?: InputStream;
  open?: boolean;
  readable?: boolean;
  uri?: URI;
  url?: URL;
}

export interface Role {
  /** 数据权限，全部 、 本级 、 自定义 */
  dataScope?: string;

  /** 描述 */
  description?: string;

  /**
   * 级别，数值越小，级别越大
   * @format int32
   */
  level?: number;
}

export interface ServerDeploy {
  /** 账号 */
  account?: string;

  /** IP */
  ip?: string;

  /** 服务器名称 */
  name?: string;

  /** 密码 */
  password?: string;

  /**
   * 端口
   * @format int32
   */
  port?: number;
}

export interface Timestamp {
  /** @format int32 */
  date?: number;

  /** @format int32 */
  day?: number;

  /** @format int32 */
  hours?: number;

  /** @format int32 */
  minutes?: number;

  /** @format int32 */
  month?: number;

  /** @format int32 */
  nanos?: number;

  /** @format int32 */
  seconds?: number;

  /** @format int64 */
  time?: number;

  /** @format int32 */
  timezoneOffset?: number;

  /** @format int32 */
  year?: number;
}

export interface TradeVo {
  body?: string;
  subject?: string;
  totalAmount?: string;
}

export interface URI {
  absolute?: boolean;
  authority?: string;
  fragment?: string;
  host?: string;
  opaque?: boolean;
  path?: string;

  /** @format int32 */
  port?: number;
  query?: string;
  rawAuthority?: string;
  rawFragment?: string;
  rawPath?: string;
  rawQuery?: string;
  rawSchemeSpecificPart?: string;
  rawUserInfo?: string;
  scheme?: string;
  schemeSpecificPart?: string;
  userInfo?: string;
}

export interface URL {
  authority?: string;
  content?: object;

  /** @format int32 */
  defaultPort?: number;
  deserializedFields?: URLStreamHandler;
  file?: string;
  host?: string;
  path?: string;

  /** @format int32 */
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;

  /** @format int32 */
  serializedHashCode?: number;
  userInfo?: string;
}

export type URLStreamHandler = object;

export interface User {
  /** 用户部门 */
  dept?: Dept;

  /** 邮箱 */
  email?: string;

  /** 是否启用 */
  enabled?: boolean;

  /** 用户性别 */
  gender?: string;

  /** 用户岗位 */
  jobs?: Job[];

  /** 用户昵称 */
  nickName?: string;

  /** 密码 */
  password?: string;

  /** 电话号码 */
  phone?: string;

  /** 用户角色 */
  roles?: Role[];

  /** 用户名称 */
  username?: string;
}

export interface UserPassVo {
  newPass?: string;
  oldPass?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '//localhost:8000';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title EL-ADMIN 接口文档
 * @version 2.6
 * @baseUrl //localhost:8000
 *
 * 一个简单且易上手的 Spring boot 后台管理框架
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags app-run
   * @name IndexUsingGet
   * @summary index
   * @request GET:/
   * @secure
   */
  indexUsingGet = (params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/`,
      method: 'GET',
      secure: true,
      ...params,
    });

  activiti = {
    /**
     * No description
     *
     * @tags activiti-controller
     * @name CreateUsingGet
     * @summary create
     * @request GET:/activiti/create
     * @secure
     */
    createUsingGet: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/activiti/create`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags activiti-controller
     * @name CreateUsingHead
     * @summary create
     * @request HEAD:/activiti/create
     * @secure
     */
    createUsingHead: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/activiti/create`,
        method: 'HEAD',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags activiti-controller
     * @name CreateUsingPost
     * @summary create
     * @request POST:/activiti/create
     * @secure
     */
    createUsingPost: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/activiti/create`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags activiti-controller
     * @name CreateUsingPut
     * @summary create
     * @request PUT:/activiti/create
     * @secure
     */
    createUsingPut: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/activiti/create`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags activiti-controller
     * @name CreateUsingDelete
     * @summary create
     * @request DELETE:/activiti/create
     * @secure
     */
    createUsingDelete: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/activiti/create`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags activiti-controller
     * @name CreateUsingOptions
     * @summary create
     * @request OPTIONS:/activiti/create
     * @secure
     */
    createUsingOptions: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/activiti/create`,
        method: 'OPTIONS',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags activiti-controller
     * @name CreateUsingPatch
     * @summary create
     * @request PATCH:/activiti/create
     * @secure
     */
    createUsingPatch: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/activiti/create`,
        method: 'PATCH',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @tags 工具：支付宝管理
     * @name QueryConfigUsingGet
     * @summary queryConfig
     * @request GET:/api/aliPay
     * @secure
     */
    queryConfigUsingGet: (params: RequestParams = {}) =>
      this.request<AlipayConfig, void>({
        path: `/api/aliPay`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：支付宝管理
     * @name UpdateConfigUsingPut
     * @summary 配置支付宝
     * @request PUT:/api/aliPay
     * @secure
     */
    updateConfigUsingPut: (alipayConfig: AlipayConfig, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/aliPay`,
        method: 'PUT',
        body: alipayConfig,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：支付宝管理
     * @name ToPayAsPcUsingPost
     * @summary PC网页支付
     * @request POST:/api/aliPay/toPayAsPC
     * @secure
     */
    toPayAsPcUsingPost: (trade: TradeVo, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/api/aliPay/toPayAsPC`,
        method: 'POST',
        body: trade,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：支付宝管理
     * @name ToPayAsWebUsingPost
     * @summary 手机网页支付
     * @request POST:/api/aliPay/toPayAsWeb
     * @secure
     */
    toPayAsWebUsingPost: (trade: TradeVo, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/api/aliPay/toPayAsWeb`,
        method: 'POST',
        body: trade,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：应用管理
     * @name QueryUsingGet
     * @summary 查询应用
     * @request GET:/api/app
     * @secure
     */
    queryUsingGet: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        name?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/app`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：应用管理
     * @name CreateUsingPost1
     * @summary 新增应用
     * @request POST:/api/app
     * @secure
     */
    createUsingPost1: (resources: App, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/app`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：应用管理
     * @name UpdateUsingPut
     * @summary 修改应用
     * @request PUT:/api/app
     * @secure
     */
    updateUsingPut: (resources: App, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/app`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：应用管理
     * @name DeleteUsingDelete
     * @summary 删除应用
     * @request DELETE:/api/app
     * @secure
     */
    deleteUsingDelete: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/app`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：应用管理
     * @name DownloadUsingGet
     * @summary 导出应用数据
     * @request GET:/api/app/download
     * @secure
     */
    downloadUsingGet: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/app/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：验证码管理
     * @name ResetPassUsingPost
     * @summary 重置密码，发送验证码
     * @request POST:/api/code/email/resetPass
     * @secure
     */
    resetPassUsingPost: (query: { email: string }, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/code/email/resetPass`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：验证码管理
     * @name ResetEmailUsingPost
     * @summary 重置邮箱，发送验证码
     * @request POST:/api/code/resetEmail
     * @secure
     */
    resetEmailUsingPost: (query: { email: string }, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/code/resetEmail`,
        method: 'POST',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：验证码管理
     * @name ValidatedUsingGet
     * @summary 验证码验证
     * @request GET:/api/code/validated
     * @secure
     */
    validatedUsingGet: (
      query: { code: string; codeBi: number; email: string },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/code/validated`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：数据库管理
     * @name QueryUsingGet1
     * @summary 查询数据库
     * @request GET:/api/database
     * @secure
     */
    queryUsingGet1: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        jdbcUrl?: string;
        name?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/database`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：数据库管理
     * @name CreateUsingPost2
     * @summary 新增数据库
     * @request POST:/api/database
     * @secure
     */
    createUsingPost2: (resources: Database, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/database`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：数据库管理
     * @name UpdateUsingPut1
     * @summary 修改数据库
     * @request PUT:/api/database
     * @secure
     */
    updateUsingPut1: (resources: Database, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/database`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：数据库管理
     * @name DeleteUsingDelete1
     * @summary 删除数据库
     * @request DELETE:/api/database
     * @secure
     */
    deleteUsingDelete1: (ids: string[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/database`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：数据库管理
     * @name DownloadUsingGet1
     * @summary 导出数据库数据
     * @request GET:/api/database/download
     * @secure
     */
    downloadUsingGet1: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        jdbcUrl?: string;
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/database/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：数据库管理
     * @name TestConnectUsingPost
     * @summary 测试数据库链接
     * @request POST:/api/database/testConnect
     * @secure
     */
    testConnectUsingPost: (resources: Database, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/database/testConnect`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：数据库管理
     * @name UploadUsingPost
     * @summary 执行SQL脚本
     * @request POST:/api/database/upload
     * @secure
     */
    uploadUsingPost: (data: any, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/database/upload`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name QueryUsingGet2
     * @summary 查询部署
     * @request GET:/api/deploy
     * @secure
     */
    queryUsingGet2: (
      query?: {
        appName?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/deploy`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name CreateUsingPost3
     * @summary 新增部署
     * @request POST:/api/deploy
     * @secure
     */
    createUsingPost3: (resources: Deploy, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deploy`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name UpdateUsingPut2
     * @summary 修改部署
     * @request PUT:/api/deploy
     * @secure
     */
    updateUsingPut2: (resources: Deploy, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deploy`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name DeleteUsingDelete2
     * @summary 删除部署
     * @request DELETE:/api/deploy
     * @secure
     */
    deleteUsingDelete2: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deploy`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name DownloadUsingGet2
     * @summary 导出部署数据
     * @request GET:/api/deploy/download
     * @secure
     */
    downloadUsingGet2: (
      query?: {
        appName?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/deploy/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name ServerReductionUsingPost
     * @summary 系统还原
     * @request POST:/api/deploy/serverReduction
     * @secure
     */
    serverReductionUsingPost: (resources: DeployHistory, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deploy/serverReduction`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name ServerStatusUsingPost
     * @summary 服务运行状态
     * @request POST:/api/deploy/serverStatus
     * @secure
     */
    serverStatusUsingPost: (resources: Deploy, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deploy/serverStatus`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name StartServerUsingPost
     * @summary 启动服务
     * @request POST:/api/deploy/startServer
     * @secure
     */
    startServerUsingPost: (resources: Deploy, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deploy/startServer`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name StopServerUsingPost
     * @summary 停止服务
     * @request POST:/api/deploy/stopServer
     * @secure
     */
    stopServerUsingPost: (resources: Deploy, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deploy/stopServer`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署管理
     * @name UploadUsingPost1
     * @summary 上传文件部署
     * @request POST:/api/deploy/upload
     * @secure
     */
    uploadUsingPost1: (data: any, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deploy/upload`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署历史管理
     * @name QueryUsingGet3
     * @summary 查询部署历史
     * @request GET:/api/deployHistory
     * @secure
     */
    queryUsingGet3: (
      query?: {
        blurry?: string;
        'deployDate[0].date'?: number;
        'deployDate[0].day'?: number;
        'deployDate[0].hours'?: number;
        'deployDate[0].minutes'?: number;
        'deployDate[0].month'?: number;
        'deployDate[0].nanos'?: number;
        'deployDate[0].seconds'?: number;
        'deployDate[0].time'?: number;
        'deployDate[0].timezoneOffset'?: number;
        'deployDate[0].year'?: number;
        deployId?: number;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/deployHistory`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署历史管理
     * @name DeleteUsingDelete3
     * @summary 删除部署历史
     * @request DELETE:/api/deployHistory
     * @secure
     */
    deleteUsingDelete3: (ids: string[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/deployHistory`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：部署历史管理
     * @name DownloadUsingGet3
     * @summary 导出部署历史数据
     * @request GET:/api/deployHistory/download
     * @secure
     */
    downloadUsingGet3: (
      query?: {
        blurry?: string;
        'deployDate[0].date'?: number;
        'deployDate[0].day'?: number;
        'deployDate[0].hours'?: number;
        'deployDate[0].minutes'?: number;
        'deployDate[0].month'?: number;
        'deployDate[0].nanos'?: number;
        'deployDate[0].seconds'?: number;
        'deployDate[0].time'?: number;
        'deployDate[0].timezoneOffset'?: number;
        'deployDate[0].year'?: number;
        deployId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/deployHistory/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：部门管理
     * @name QueryUsingGet4
     * @summary 查询部门
     * @request GET:/api/dept
     * @secure
     */
    queryUsingGet4: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        enabled?: boolean;
        name?: string;
        pid?: number;
        pidIsNull?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/dept`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：部门管理
     * @name CreateUsingPost4
     * @summary 新增部门
     * @request POST:/api/dept
     * @secure
     */
    createUsingPost4: (resources: Dept, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dept`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：部门管理
     * @name UpdateUsingPut3
     * @summary 修改部门
     * @request PUT:/api/dept
     * @secure
     */
    updateUsingPut3: (resources: Dept, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dept`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：部门管理
     * @name DeleteUsingDelete4
     * @summary 删除部门
     * @request DELETE:/api/dept
     * @secure
     */
    deleteUsingDelete4: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dept`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：部门管理
     * @name DownloadUsingGet4
     * @summary 导出部门数据
     * @request GET:/api/dept/download
     * @secure
     */
    downloadUsingGet4: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        enabled?: boolean;
        name?: string;
        pid?: number;
        pidIsNull?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/dept/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：部门管理
     * @name GetSuperiorUsingPost
     * @summary 查询部门:根据ID获取同级与上级数据
     * @request POST:/api/dept/superior
     * @secure
     */
    getSuperiorUsingPost: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dept/superior`,
        method: 'POST',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典管理
     * @name QueryUsingGet5
     * @summary 查询字典
     * @request GET:/api/dict
     * @secure
     */
    queryUsingGet5: (
      query?: { blurry?: string; page?: number; size?: number; sort?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<Dict, void>({
        path: `/api/dict`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典管理
     * @name CreateUsingPost5
     * @summary 新增字典
     * @request POST:/api/dict
     * @secure
     */
    createUsingPost5: (resources: Dict, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dict`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典管理
     * @name UpdateUsingPut4
     * @summary 修改字典
     * @request PUT:/api/dict
     * @secure
     */
    updateUsingPut4: (resources: Dict, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dict`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典管理
     * @name DeleteUsingDelete5
     * @summary 删除字典
     * @request DELETE:/api/dict
     * @secure
     */
    deleteUsingDelete5: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dict`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典管理
     * @name QueryAllUsingGet
     * @summary 查询字典
     * @request GET:/api/dict/all
     * @secure
     */
    queryAllUsingGet: (params: RequestParams = {}) =>
      this.request<Dict, void>({
        path: `/api/dict/all`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典管理
     * @name DownloadUsingGet5
     * @summary 导出字典数据
     * @request GET:/api/dict/download
     * @secure
     */
    downloadUsingGet5: (query?: { blurry?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/dict/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典详情管理
     * @name QueryUsingGet6
     * @summary 查询字典详情
     * @request GET:/api/dictDetail
     * @secure
     */
    queryUsingGet6: (
      query?: { dictName?: string; label?: string; page?: number; size?: number; sort?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/dictDetail`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典详情管理
     * @name CreateUsingPost6
     * @summary 新增字典详情
     * @request POST:/api/dictDetail
     * @secure
     */
    createUsingPost6: (resources: DictDetail, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dictDetail`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典详情管理
     * @name UpdateUsingPut5
     * @summary 修改字典详情
     * @request PUT:/api/dictDetail
     * @secure
     */
    updateUsingPut5: (resources: DictDetail, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dictDetail`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典详情管理
     * @name GetDictDetailMapsUsingGet
     * @summary 查询多个字典详情
     * @request GET:/api/dictDetail/map
     * @secure
     */
    getDictDetailMapsUsingGet: (query: { dictName: string }, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dictDetail/map`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：字典详情管理
     * @name DeleteUsingDelete6
     * @summary 删除字典详情
     * @request DELETE:/api/dictDetail/{id}
     * @secure
     */
    deleteUsingDelete6: (id: number, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/dictDetail/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：邮件管理
     * @name QueryConfigUsingGet1
     * @summary queryConfig
     * @request GET:/api/email
     * @secure
     */
    queryConfigUsingGet1: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/email`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：邮件管理
     * @name SendEmailUsingPost
     * @summary 发送邮件
     * @request POST:/api/email
     * @secure
     */
    sendEmailUsingPost: (emailVo: EmailVo, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/email`,
        method: 'POST',
        body: emailVo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：邮件管理
     * @name UpdateConfigUsingPut1
     * @summary 配置邮件
     * @request PUT:/api/email
     * @secure
     */
    updateConfigUsingPut1: (emailConfig: EmailConfig, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/email`,
        method: 'PUT',
        body: emailConfig,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：代码生成器配置管理
     * @name UpdateUsingPut6
     * @summary 修改
     * @request PUT:/api/genConfig
     * @secure
     */
    updateUsingPut6: (genConfig: GenConfig, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/genConfig`,
        method: 'PUT',
        body: genConfig,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：代码生成器配置管理
     * @name QueryUsingGet7
     * @summary 查询
     * @request GET:/api/genConfig/{tableName}
     * @secure
     */
    queryUsingGet7: (tableName: string, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/genConfig/${tableName}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：代码生成管理
     * @name SaveUsingPut
     * @summary 保存字段数据
     * @request PUT:/api/generator
     * @secure
     */
    saveUsingPut: (columnInfos: ColumnInfo[], params: RequestParams = {}) =>
      this.request<
        | '100 CONTINUE'
        | '101 SWITCHING_PROTOCOLS'
        | '102 PROCESSING'
        | '103 CHECKPOINT'
        | '200 OK'
        | '201 CREATED'
        | '202 ACCEPTED'
        | '203 NON_AUTHORITATIVE_INFORMATION'
        | '204 NO_CONTENT'
        | '205 RESET_CONTENT'
        | '206 PARTIAL_CONTENT'
        | '207 MULTI_STATUS'
        | '208 ALREADY_REPORTED'
        | '226 IM_USED'
        | '300 MULTIPLE_CHOICES'
        | '301 MOVED_PERMANENTLY'
        | '302 FOUND'
        | '302 MOVED_TEMPORARILY'
        | '303 SEE_OTHER'
        | '304 NOT_MODIFIED'
        | '305 USE_PROXY'
        | '307 TEMPORARY_REDIRECT'
        | '308 PERMANENT_REDIRECT'
        | '400 BAD_REQUEST'
        | '401 UNAUTHORIZED'
        | '402 PAYMENT_REQUIRED'
        | '403 FORBIDDEN'
        | '404 NOT_FOUND'
        | '405 METHOD_NOT_ALLOWED'
        | '406 NOT_ACCEPTABLE'
        | '407 PROXY_AUTHENTICATION_REQUIRED'
        | '408 REQUEST_TIMEOUT'
        | '409 CONFLICT'
        | '410 GONE'
        | '411 LENGTH_REQUIRED'
        | '412 PRECONDITION_FAILED'
        | '413 PAYLOAD_TOO_LARGE'
        | '413 REQUEST_ENTITY_TOO_LARGE'
        | '414 URI_TOO_LONG'
        | '414 REQUEST_URI_TOO_LONG'
        | '415 UNSUPPORTED_MEDIA_TYPE'
        | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
        | '417 EXPECTATION_FAILED'
        | '418 I_AM_A_TEAPOT'
        | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
        | '420 METHOD_FAILURE'
        | '421 DESTINATION_LOCKED'
        | '422 UNPROCESSABLE_ENTITY'
        | '423 LOCKED'
        | '424 FAILED_DEPENDENCY'
        | '425 TOO_EARLY'
        | '426 UPGRADE_REQUIRED'
        | '428 PRECONDITION_REQUIRED'
        | '429 TOO_MANY_REQUESTS'
        | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
        | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
        | '500 INTERNAL_SERVER_ERROR'
        | '501 NOT_IMPLEMENTED'
        | '502 BAD_GATEWAY'
        | '503 SERVICE_UNAVAILABLE'
        | '504 GATEWAY_TIMEOUT'
        | '505 HTTP_VERSION_NOT_SUPPORTED'
        | '506 VARIANT_ALSO_NEGOTIATES'
        | '507 INSUFFICIENT_STORAGE'
        | '508 LOOP_DETECTED'
        | '509 BANDWIDTH_LIMIT_EXCEEDED'
        | '510 NOT_EXTENDED'
        | '511 NETWORK_AUTHENTICATION_REQUIRED',
        void
      >({
        path: `/api/generator`,
        method: 'PUT',
        body: columnInfos,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：代码生成管理
     * @name QueryColumnsUsingGet
     * @summary 查询字段数据
     * @request GET:/api/generator/columns
     * @secure
     */
    queryColumnsUsingGet: (query: { tableName: string }, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/generator/columns`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：代码生成管理
     * @name SyncUsingPost
     * @summary 同步字段数据
     * @request POST:/api/generator/sync
     * @secure
     */
    syncUsingPost: (tables: string[], params: RequestParams = {}) =>
      this.request<
        | '100 CONTINUE'
        | '101 SWITCHING_PROTOCOLS'
        | '102 PROCESSING'
        | '103 CHECKPOINT'
        | '200 OK'
        | '201 CREATED'
        | '202 ACCEPTED'
        | '203 NON_AUTHORITATIVE_INFORMATION'
        | '204 NO_CONTENT'
        | '205 RESET_CONTENT'
        | '206 PARTIAL_CONTENT'
        | '207 MULTI_STATUS'
        | '208 ALREADY_REPORTED'
        | '226 IM_USED'
        | '300 MULTIPLE_CHOICES'
        | '301 MOVED_PERMANENTLY'
        | '302 FOUND'
        | '302 MOVED_TEMPORARILY'
        | '303 SEE_OTHER'
        | '304 NOT_MODIFIED'
        | '305 USE_PROXY'
        | '307 TEMPORARY_REDIRECT'
        | '308 PERMANENT_REDIRECT'
        | '400 BAD_REQUEST'
        | '401 UNAUTHORIZED'
        | '402 PAYMENT_REQUIRED'
        | '403 FORBIDDEN'
        | '404 NOT_FOUND'
        | '405 METHOD_NOT_ALLOWED'
        | '406 NOT_ACCEPTABLE'
        | '407 PROXY_AUTHENTICATION_REQUIRED'
        | '408 REQUEST_TIMEOUT'
        | '409 CONFLICT'
        | '410 GONE'
        | '411 LENGTH_REQUIRED'
        | '412 PRECONDITION_FAILED'
        | '413 PAYLOAD_TOO_LARGE'
        | '413 REQUEST_ENTITY_TOO_LARGE'
        | '414 URI_TOO_LONG'
        | '414 REQUEST_URI_TOO_LONG'
        | '415 UNSUPPORTED_MEDIA_TYPE'
        | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
        | '417 EXPECTATION_FAILED'
        | '418 I_AM_A_TEAPOT'
        | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
        | '420 METHOD_FAILURE'
        | '421 DESTINATION_LOCKED'
        | '422 UNPROCESSABLE_ENTITY'
        | '423 LOCKED'
        | '424 FAILED_DEPENDENCY'
        | '425 TOO_EARLY'
        | '426 UPGRADE_REQUIRED'
        | '428 PRECONDITION_REQUIRED'
        | '429 TOO_MANY_REQUESTS'
        | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
        | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
        | '500 INTERNAL_SERVER_ERROR'
        | '501 NOT_IMPLEMENTED'
        | '502 BAD_GATEWAY'
        | '503 SERVICE_UNAVAILABLE'
        | '504 GATEWAY_TIMEOUT'
        | '505 HTTP_VERSION_NOT_SUPPORTED'
        | '506 VARIANT_ALSO_NEGOTIATES'
        | '507 INSUFFICIENT_STORAGE'
        | '508 LOOP_DETECTED'
        | '509 BANDWIDTH_LIMIT_EXCEEDED'
        | '510 NOT_EXTENDED'
        | '511 NETWORK_AUTHENTICATION_REQUIRED',
        void
      >({
        path: `/api/generator/sync`,
        method: 'POST',
        body: tables,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：代码生成管理
     * @name QueryTablesUsingGet1
     * @summary 查询数据库数据
     * @request GET:/api/generator/tables
     * @secure
     */
    queryTablesUsingGet1: (
      query?: { name?: string; page?: number; size?: number },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/generator/tables`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：代码生成管理
     * @name QueryTablesUsingGet
     * @summary 查询数据库数据
     * @request GET:/api/generator/tables/all
     * @secure
     */
    queryTablesUsingGet: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/generator/tables/all`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：代码生成管理
     * @name GeneratorUsingPost
     * @summary 生成代码
     * @request POST:/api/generator/{tableName}/{type}
     * @secure
     */
    generatorUsingPost: (tableName: string, type: number, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/generator/${tableName}/${type}`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：岗位管理
     * @name QueryUsingGet8
     * @summary 查询岗位
     * @request GET:/api/job
     * @secure
     */
    queryUsingGet8: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        enabled?: boolean;
        name?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/job`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：岗位管理
     * @name CreateUsingPost7
     * @summary 新增岗位
     * @request POST:/api/job
     * @secure
     */
    createUsingPost7: (resources: Job, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/job`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：岗位管理
     * @name UpdateUsingPut7
     * @summary 修改岗位
     * @request PUT:/api/job
     * @secure
     */
    updateUsingPut7: (resources: Job, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/job`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：岗位管理
     * @name DeleteUsingDelete7
     * @summary 删除岗位
     * @request DELETE:/api/job
     * @secure
     */
    deleteUsingDelete7: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/job`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：岗位管理
     * @name DownloadUsingGet6
     * @summary 导出岗位数据
     * @request GET:/api/job/download
     * @secure
     */
    downloadUsingGet6: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        enabled?: boolean;
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/job/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name QueryUsingGet16
     * @summary 查询定时任务
     * @request GET:/api/jobs
     * @secure
     */
    queryUsingGet16: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        isSuccess?: boolean;
        jobName?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/jobs`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name CreateUsingPost10
     * @summary 新增定时任务
     * @request POST:/api/jobs
     * @secure
     */
    createUsingPost10: (resources: QuartzJob, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/jobs`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name UpdateUsingPut11
     * @summary 修改定时任务
     * @request PUT:/api/jobs
     * @secure
     */
    updateUsingPut11: (resources: QuartzJob, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/jobs`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name DeleteUsingDelete12
     * @summary 删除定时任务
     * @request DELETE:/api/jobs
     * @secure
     */
    deleteUsingDelete12: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/jobs`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name DownloadUsingGet13
     * @summary 导出任务数据
     * @request GET:/api/jobs/download
     * @secure
     */
    downloadUsingGet13: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        isSuccess?: boolean;
        jobName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/jobs/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name ExecutionUsingPut
     * @summary 执行定时任务
     * @request PUT:/api/jobs/exec/{id}
     * @secure
     */
    executionUsingPut: (id: number, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/jobs/exec/${id}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name QueryJobLogUsingGet
     * @summary 查询任务执行日志
     * @request GET:/api/jobs/logs
     * @secure
     */
    queryJobLogUsingGet: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        isSuccess?: boolean;
        jobName?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/jobs/logs`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name DownloadLogUsingGet
     * @summary 导出日志数据
     * @request GET:/api/jobs/logs/download
     * @secure
     */
    downloadLogUsingGet: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        isSuccess?: boolean;
        jobName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/jobs/logs/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统:定时任务管理
     * @name UpdateUsingPut10
     * @summary 更改定时任务状态
     * @request PUT:/api/jobs/{id}
     * @secure
     */
    updateUsingPut10: (id: number, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/jobs/${id}`,
        method: 'PUT',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：限流测试管理
     * @name TestUsingGet
     * @summary 测试
     * @request GET:/api/limit
     * @secure
     */
    testUsingGet: (params: RequestParams = {}) =>
      this.request<number, void>({
        path: `/api/limit`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：本地存储管理
     * @name QueryUsingGet9
     * @summary 查询文件
     * @request GET:/api/localStorage
     * @secure
     */
    queryUsingGet9: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/localStorage`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：本地存储管理
     * @name CreateUsingPost8
     * @summary 上传文件
     * @request POST:/api/localStorage
     * @secure
     */
    createUsingPost8: (query: { name: string }, data: { file: File }, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/localStorage`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：本地存储管理
     * @name UpdateUsingPut8
     * @summary 修改文件
     * @request PUT:/api/localStorage
     * @secure
     */
    updateUsingPut8: (resources: LocalStorage, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/localStorage`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：本地存储管理
     * @name DeleteUsingDelete8
     * @summary 多选删除
     * @request DELETE:/api/localStorage
     * @secure
     */
    deleteUsingDelete8: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/localStorage`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：本地存储管理
     * @name DownloadUsingGet7
     * @summary 导出数据
     * @request GET:/api/localStorage/download
     * @secure
     */
    downloadUsingGet7: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/localStorage/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：本地存储管理
     * @name UploadUsingPost2
     * @summary 上传图片
     * @request POST:/api/localStorage/pictures
     * @secure
     */
    uploadUsingPost2: (data: any, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/localStorage/pictures`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：日志管理
     * @name QueryUsingGet10
     * @summary 日志查询
     * @request GET:/api/logs
     * @secure
     */
    queryUsingGet10: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        logType?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/logs`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：日志管理
     * @name DelAllErrorLogUsingDelete
     * @summary 删除所有ERROR日志
     * @request DELETE:/api/logs/del/error
     * @secure
     */
    delAllErrorLogUsingDelete: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/logs/del/error`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：日志管理
     * @name DelAllInfoLogUsingDelete
     * @summary 删除所有INFO日志
     * @request DELETE:/api/logs/del/info
     * @secure
     */
    delAllInfoLogUsingDelete: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/logs/del/info`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：日志管理
     * @name DownloadUsingGet8
     * @summary 导出数据
     * @request GET:/api/logs/download
     * @secure
     */
    downloadUsingGet8: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        logType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/logs/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：日志管理
     * @name QueryErrorLogUsingGet
     * @summary 错误日志查询
     * @request GET:/api/logs/error
     * @secure
     */
    queryErrorLogUsingGet: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        logType?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/logs/error`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：日志管理
     * @name DownloadErrorLogUsingGet
     * @summary 导出错误数据
     * @request GET:/api/logs/error/download
     * @secure
     */
    downloadErrorLogUsingGet: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        logType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/logs/error/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：日志管理
     * @name QueryErrorLogsUsingGet
     * @summary 日志异常详情查询
     * @request GET:/api/logs/error/{id}
     * @secure
     */
    queryErrorLogsUsingGet: (id: number, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/logs/error/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：日志管理
     * @name QueryUserLogUsingGet
     * @summary 用户日志查询
     * @request GET:/api/logs/user
     * @secure
     */
    queryUserLogUsingGet: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        logType?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/logs/user`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name QueryUsingGet12
     * @summary 查询菜单
     * @request GET:/api/menus
     * @secure
     */
    queryUsingGet12: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        pid?: number;
        pidIsNull?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/menus`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name CreateUsingPost9
     * @summary 新增菜单
     * @request POST:/api/menus
     * @secure
     */
    createUsingPost9: (resources: Menu, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/menus`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name UpdateUsingPut9
     * @summary 修改菜单
     * @request PUT:/api/menus
     * @secure
     */
    updateUsingPut9: (resources: Menu, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/menus`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name DeleteUsingDelete9
     * @summary 删除菜单
     * @request DELETE:/api/menus
     * @secure
     */
    deleteUsingDelete9: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/menus`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name BuildMenusUsingGet
     * @summary 获取前端所需菜单
     * @request GET:/api/menus/build
     * @secure
     */
    buildMenusUsingGet: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/menus/build`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name ChildUsingGet
     * @summary 根据菜单ID返回所有子节点ID，包含自身ID
     * @request GET:/api/menus/child
     * @secure
     */
    childUsingGet: (query: { id: number }, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/menus/child`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name DownloadUsingGet9
     * @summary 导出菜单数据
     * @request GET:/api/menus/download
     * @secure
     */
    downloadUsingGet9: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        pid?: number;
        pidIsNull?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/menus/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name QueryUsingGet11
     * @summary 返回全部的菜单
     * @request GET:/api/menus/lazy
     * @secure
     */
    queryUsingGet11: (query: { pid: number }, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/menus/lazy`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：菜单管理
     * @name GetSuperiorUsingPost1
     * @summary 查询菜单:根据ID获取同级与上级数据
     * @request POST:/api/menus/superior
     * @secure
     */
    getSuperiorUsingPost1: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/menus/superior`,
        method: 'POST',
        body: ids,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统-服务监控管理
     * @name QueryUsingGet13
     * @summary 查询服务监控
     * @request GET:/api/monitor
     * @secure
     */
    queryUsingGet13: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/monitor`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name QueryUsingGet15
     * @summary 查询文件
     * @request GET:/api/qiNiuContent
     * @secure
     */
    queryUsingGet15: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        key?: string;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/qiNiuContent`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name UploadUsingPost3
     * @summary 上传文件
     * @request POST:/api/qiNiuContent
     * @secure
     */
    uploadUsingPost3: (data: any, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/qiNiuContent`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name DeleteAllUsingDelete
     * @summary 删除多张图片
     * @request DELETE:/api/qiNiuContent
     * @secure
     */
    deleteAllUsingDelete: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/qiNiuContent`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name QueryConfigUsingGet2
     * @summary queryConfig
     * @request GET:/api/qiNiuContent/config
     * @secure
     */
    queryConfigUsingGet2: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/qiNiuContent/config`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name UpdateConfigUsingPut2
     * @summary 配置七牛云存储
     * @request PUT:/api/qiNiuContent/config
     * @secure
     */
    updateConfigUsingPut2: (qiniuConfig: QiniuConfig, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/qiNiuContent/config`,
        method: 'PUT',
        body: qiniuConfig,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name DownloadUsingGet12
     * @summary 导出数据
     * @request GET:/api/qiNiuContent/download
     * @secure
     */
    downloadUsingGet12: (
      query?: {
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        key?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/qiNiuContent/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name DownloadUsingGet11
     * @summary 下载文件
     * @request GET:/api/qiNiuContent/download/{id}
     * @secure
     */
    downloadUsingGet11: (id: number, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/qiNiuContent/download/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name SynchronizeUsingPost
     * @summary 同步七牛云数据
     * @request POST:/api/qiNiuContent/synchronize
     * @secure
     */
    synchronizeUsingPost: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/qiNiuContent/synchronize`,
        method: 'POST',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具：七牛云存储管理
     * @name DeleteUsingDelete11
     * @summary 删除文件
     * @request DELETE:/api/qiNiuContent/{id}
     * @secure
     */
    deleteUsingDelete11: (id: number, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/qiNiuContent/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name QueryUsingGet19
     * @summary 查询角色
     * @request GET:/api/roles
     * @secure
     */
    queryUsingGet19: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/roles`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name CreateUsingPost11
     * @summary 新增角色
     * @request POST:/api/roles
     * @secure
     */
    createUsingPost11: (resources: Role, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/roles`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name UpdateUsingPut12
     * @summary 修改角色
     * @request PUT:/api/roles
     * @secure
     */
    updateUsingPut12: (resources: Role, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/roles`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name DeleteUsingDelete13
     * @summary 删除角色
     * @request DELETE:/api/roles
     * @secure
     */
    deleteUsingDelete13: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/roles`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name QueryUsingGet17
     * @summary 返回全部的角色
     * @request GET:/api/roles/all
     * @secure
     */
    queryUsingGet17: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/roles/all`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name DownloadUsingGet14
     * @summary 导出角色数据
     * @request GET:/api/roles/download
     * @secure
     */
    downloadUsingGet14: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/roles/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name GetLevelUsingGet
     * @summary 获取用户级别
     * @request GET:/api/roles/level
     * @secure
     */
    getLevelUsingGet: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/roles/level`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name UpdateMenuUsingPut
     * @summary 修改角色菜单
     * @request PUT:/api/roles/menu
     * @secure
     */
    updateMenuUsingPut: (resources: Role, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/roles/menu`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：角色管理
     * @name QueryUsingGet18
     * @summary 获取单个role
     * @request GET:/api/roles/{id}
     * @secure
     */
    queryUsingGet18: (id: number, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/roles/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：服务器管理
     * @name QueryUsingGet20
     * @summary 查询服务器
     * @request GET:/api/serverDeploy
     * @secure
     */
    queryUsingGet20: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/serverDeploy`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：服务器管理
     * @name CreateUsingPost12
     * @summary 新增服务器
     * @request POST:/api/serverDeploy
     * @secure
     */
    createUsingPost12: (resources: ServerDeploy, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/serverDeploy`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：服务器管理
     * @name UpdateUsingPut13
     * @summary 修改服务器
     * @request PUT:/api/serverDeploy
     * @secure
     */
    updateUsingPut13: (resources: ServerDeploy, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/serverDeploy`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：服务器管理
     * @name DeleteUsingDelete14
     * @summary 删除Server
     * @request DELETE:/api/serverDeploy
     * @secure
     */
    deleteUsingDelete14: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/serverDeploy`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：服务器管理
     * @name DownloadUsingGet15
     * @summary 导出服务器数据
     * @request GET:/api/serverDeploy/download
     * @secure
     */
    downloadUsingGet15: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/serverDeploy/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运维：服务器管理
     * @name TestConnectUsingPost1
     * @summary 测试连接服务器
     * @request POST:/api/serverDeploy/testConnect
     * @secure
     */
    testConnectUsingPost1: (resources: ServerDeploy, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/serverDeploy/testConnect`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name QueryUsingGet21
     * @summary 查询用户
     * @request GET:/api/users
     * @secure
     */
    queryUsingGet21: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        deptId?: number;
        deptIds?: number[];
        enabled?: boolean;
        id?: number;
        page?: number;
        size?: number;
        sort?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/api/users`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name CreateUsingPost13
     * @summary 新增用户
     * @request POST:/api/users
     * @secure
     */
    createUsingPost13: (resources: User, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/users`,
        method: 'POST',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name UpdateUsingPut14
     * @summary 修改用户
     * @request PUT:/api/users
     * @secure
     */
    updateUsingPut14: (resources: User, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/users`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name DeleteUsingDelete15
     * @summary 删除用户
     * @request DELETE:/api/users
     * @secure
     */
    deleteUsingDelete15: (ids: number[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/users`,
        method: 'DELETE',
        body: ids,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name CenterUsingPut
     * @summary 修改用户：个人中心
     * @request PUT:/api/users/center
     * @secure
     */
    centerUsingPut: (resources: User, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/users/center`,
        method: 'PUT',
        body: resources,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name DownloadUsingGet16
     * @summary 导出用户数据
     * @request GET:/api/users/download
     * @secure
     */
    downloadUsingGet16: (
      query?: {
        blurry?: string;
        'createTime[0].date'?: number;
        'createTime[0].day'?: number;
        'createTime[0].hours'?: number;
        'createTime[0].minutes'?: number;
        'createTime[0].month'?: number;
        'createTime[0].nanos'?: number;
        'createTime[0].seconds'?: number;
        'createTime[0].time'?: number;
        'createTime[0].timezoneOffset'?: number;
        'createTime[0].year'?: number;
        deptId?: number;
        deptIds?: number[];
        enabled?: boolean;
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/users/download`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name UpdateAvatarUsingPost
     * @summary 修改头像
     * @request POST:/api/users/updateAvatar
     * @secure
     */
    updateAvatarUsingPost: (data: { avatar: File }, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/users/updateAvatar`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name UpdateEmailUsingPost
     * @summary 修改邮箱
     * @request POST:/api/users/updateEmail/{code}
     * @secure
     */
    updateEmailUsingPost: (code: string, user: User, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/users/updateEmail/${code}`,
        method: 'POST',
        body: user,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：用户管理
     * @name UpdatePassUsingPost
     * @summary 修改密码
     * @request POST:/api/users/updatePass
     * @secure
     */
    updatePassUsingPost: (passVo: UserPassVo, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/api/users/updatePass`,
        method: 'POST',
        body: passVo,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags 系统：系统授权接口
     * @name GetCodeUsingGet
     * @summary 获取验证码
     * @request GET:/auth/code
     */
    getCodeUsingGet: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/auth/code`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：系统授权接口
     * @name GetUserInfoUsingGet
     * @summary 获取用户信息
     * @request GET:/auth/info
     */
    getUserInfoUsingGet: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/auth/info`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：系统授权接口
     * @name LoginUsingPost
     * @summary 登录授权
     * @request POST:/auth/login
     */
    loginUsingPost: (authUser: AuthUserDto, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/auth/login`,
        method: 'POST',
        body: authUser,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：系统授权接口
     * @name LogoutUsingDelete
     * @summary 退出登录
     * @request DELETE:/auth/logout
     */
    logoutUsingDelete: (params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/auth/logout`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：在线用户管理
     * @name QueryUsingGet14
     * @summary 查询在线用户
     * @request GET:/auth/online
     */
    queryUsingGet14: (
      query?: { filter?: string; page?: number; size?: number; sort?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/auth/online`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：在线用户管理
     * @name DeleteUsingDelete10
     * @summary 踢出用户
     * @request DELETE:/auth/online
     */
    deleteUsingDelete10: (keys: string[], params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/auth/online`,
        method: 'DELETE',
        body: keys,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 系统：在线用户管理
     * @name DownloadUsingGet10
     * @summary 导出数据
     * @request GET:/auth/online/download
     */
    downloadUsingGet10: (query?: { filter?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/auth/online/download`,
        method: 'GET',
        query: query,
        ...params,
      }),
  };
  service = {
    /**
     * No description
     *
     * @tags stencilset-rest-resource
     * @name GetStencilsetUsingGet
     * @summary getStencilset
     * @request GET:/service/editor/stencilset
     * @secure
     */
    getStencilsetUsingGet: (params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/service/editor/stencilset`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags model-editor-json-rest-resource
     * @name GetEditorJsonUsingGet
     * @summary getEditorJson
     * @request GET:/service/model/{modelId}/json
     * @secure
     */
    getEditorJsonUsingGet: (modelId: string, params: RequestParams = {}) =>
      this.request<InputStream, void>({
        path: `/service/model/${modelId}/json`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags model-save-rest-resource
     * @name SaveModelUsingPut
     * @summary saveModel
     * @request PUT:/service/model/{modelId}/save
     * @secure
     */
    saveModelUsingPut: (
      modelId: string,
      query: { description?: string; json_xml: string; name?: string; svg_xml: string },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/service/model/${modelId}/save`,
        method: 'PUT',
        query: query,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
