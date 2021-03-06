import request from "../../utils/request";
export function query(params) {
  return request({
    url: "admin/type/index"
  });
}
export function addItem(params) {
  return request({
    method: "POST",
    url: "admin/type/add_type",
    params
  });
}
export function editItem(params) {
  return request({
    method: "POST",
    url: "admin/type/upd_type",
    params
  });
}
export function delItem(params) {
  return request({
    method: "POST",
    url: "admin/type/del_type",
    params
  });
}
