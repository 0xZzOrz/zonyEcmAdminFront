import { request } from 'umi';

// =====================字典===========================

export async function getDicts(options?: Record<string, any>) {
  return request('/api/dict', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function addDict(body: Record<string, any>, options?: Record<string, any>) {
  return request('/api/dict', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export async function editDict(body: Record<string, any>, options?: Record<string, any>) {
  return request('/api/dict', {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

export async function getDictsDetail(options?: Record<string, any>) {
  return request('/api/dictDetail', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function addDictsDetail(body: Record<string, any>, options?: Record<string, any>) {
  return request('/api/dictDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function editDictsDetail(body: Record<string, any>, options?: Record<string, any>) {
  return request('/api/dictDetail', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function delDictsDetail(id: string, options?: Record<string, any>) {
  return request(`/api/dictDetail/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
