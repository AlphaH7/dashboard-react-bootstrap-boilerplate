import ApiClient from './ApiClient';

const execAPI = (success, fail) => {
  const apiClient = new ApiClient();
  apiClient.setUrl();
  try {
    return success(apiClient);
  } catch (e) {
    apiClient.processError(e);
    if (fail) {
      fail(e);
    }
    throw e;
  }
};

const getRecentPosts = async (user) => {
  return execAPI(async (apiClient) => {
    const response = await apiClient.get('getrecentposts');
    return response;
  });
};

export {
    getRecentPosts
};
