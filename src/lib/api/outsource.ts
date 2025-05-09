const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const outsourceApi = {
  // 获取外包列表
  getOutsources: async () => {
    const response = await fetch(`${API_BASE_URL}/outsources`);
    return response.json();
  },

  // 获取单个外包
  getOutsource: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/outsources/${id}`);
    return response.json();
  },

  // 创建外包
  createOutsource: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/outsources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // 更新外包
  updateOutsource: async (id: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/outsources/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // 删除外包
  deleteOutsource: async (id: string) => {
    await fetch(`${API_BASE_URL}/outsources/${id}`, {
      method: 'DELETE',
    });
  },
}; 