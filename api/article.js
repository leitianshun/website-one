import http from "~/http/axios.js";
import { tenantId } from "@/common/setting.js";

const getArticleIdList = () => {
  return http.request({
    url: "/cms/article/listAllId",
    method: "get",
    params: {
      tenantId
    }
  })
}

const getArticleDetail = (id) => {
  const paramWithTenanId = {
    tenantId,
    id,
  };
  return http.request({
    url: "/cms/article/detail",
    method: "get",
    params: {
      ...paramWithTenanId,
    },
  });
};

const getArticleCategoryTreeList = () => {
  return http.request({
    url: "/cms/category/tree-list",
    method: "get",
    params: {
      tenantId,
    },
  });
};

const getArticleCategoryList = (current, size) => {
  const paramWithTenant = {
    tenantId,
  };
  return http.request({
    url: "/cms/category/list",
    method: "GET",
    params: {
      ...paramWithTenant,
      current,
      size,
    },
  });
};

const getArticleTagList = (current, size) => {
  const paramWithTenant = {
    tenantId,
  };
  return http.request({
    url: "/cms/tag/list",
    method: "GET",
    params: {
      ...paramWithTenant,
      current,
      size,
    },
  });
};

const getArticlesList = (current, size, params) => {
  const paramWithTenant = {
    ...params,
    tenantId,
  };
  return http.request({
    url: "/cms/article/page",
    method: "GET",
    params: {
      ...paramWithTenant,
      current,
      size,
    },
  });
};

export { getArticleIdList, getArticleDetail, getArticleCategoryTreeList, getArticleCategoryList, getArticleTagList, getArticlesList };
