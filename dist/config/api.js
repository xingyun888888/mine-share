"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by gaochao on 18/5/3.
 */

// let apiServerAddress = "http://localhost:8081";
var apiServerAddress = "http://47.106.81.10:8080";

var api = {
  "articleList": apiServerAddress + "/admin/get_article_list.action",
  "articleById": apiServerAddress + "/admin/getArticleById.action"
};

exports.default = api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJhcGlTZXJ2ZXJBZGRyZXNzIiwiYXBpIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUE7QUFDQSxJQUFJQSxtQkFBbUIsMEJBQXZCOztBQUVBLElBQUlDLE1BQU07QUFDUixpQkFBY0QsbUJBQWlCLGdDQUR2QjtBQUVSLGlCQUFjQSxtQkFBbUI7QUFGekIsQ0FBVjs7a0JBTWVDLEciLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGdhb2NoYW8gb24gMTgvNS8zLlxuICovXG5cbi8vIGxldCBhcGlTZXJ2ZXJBZGRyZXNzID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODFcIjtcbmxldCBhcGlTZXJ2ZXJBZGRyZXNzID0gXCJodHRwOi8vNDcuMTA2LjgxLjEwOjgwODBcIjtcblxubGV0IGFwaSA9IHtcbiAgXCJhcnRpY2xlTGlzdFwiOmFwaVNlcnZlckFkZHJlc3MrXCIvYWRtaW4vZ2V0X2FydGljbGVfbGlzdC5hY3Rpb25cIixcbiAgXCJhcnRpY2xlQnlJZFwiOmFwaVNlcnZlckFkZHJlc3MgKyBcIi9hZG1pbi9nZXRBcnRpY2xlQnlJZC5hY3Rpb25cIlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdfQ==