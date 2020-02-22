export function getIndexMultidata(page, size){
  this.request("/index?page=" + page + "&size=" + size);
  if (resp && resp.status == 200) {
    return resp.data;
  }
}