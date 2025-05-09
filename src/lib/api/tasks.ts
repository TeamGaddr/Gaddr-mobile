const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const taskApi = {
  // 获取任务列表
  getTasks: async () => {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    return response.json();
  },

  // 获取单个任务
  getTask: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`);
    return response.json();
  },

  // 创建任务
  createTask: async (data: any) => {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // 更新任务
  updateTask: async (id: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // 删除任务
  deleteTask: async (id: string) => {
    await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
  },
}; 