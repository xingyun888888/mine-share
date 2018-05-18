/**
 * Created by gaochao on 18/5/3.
 */

// let apiServerAddress = "http://localhost:8081";
let apiServerAddress = "http://47.106.81.10:8080";

let api = {
  "articleList":apiServerAddress+"/admin/get_article_list.action",
  "articleById":apiServerAddress + "/admin/getArticleById.action"
}


export default api;
