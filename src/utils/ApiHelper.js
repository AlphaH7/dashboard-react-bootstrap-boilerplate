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

const getPostFilters = async (user) => {
  return execAPI(async (apiClient) => {
    const response = await apiClient.get('getpostfilters');
    return response;
  });
};

const getNewConnections = async (user) => {
  return execAPI(async (apiClient) => {
    const response = await apiClient.get('getnewconnections');
    return response;
  });
};

const getGroups = async (user) => {
  return execAPI(async (apiClient) => {
    const response = await apiClient.get('getgroups');
    return response;
  });
};

const getQuests = async (user) => {
  return execAPI(async (apiClient) => {
    const response = await apiClient.get('getquests');
    return response;
  });
};

export {
  getRecentPosts,
  getPostFilters,
  getNewConnections,
  getGroups,
  getQuests
};
