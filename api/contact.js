import http from '~/http/axios.js'
import { tenantId } from '@/common/setting.js'

export const sendMessage = (params) => {
  params.tenantId = tenantId
  return http.request({
    url: 'blade-cms/contact/submit',
    method: 'post',
    data: params,
  })
}
