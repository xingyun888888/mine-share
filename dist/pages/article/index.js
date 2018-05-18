'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../config/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleIndex = function (_wepy$page) {
  _inherits(ArticleIndex, _wepy$page);

  function ArticleIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ArticleIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ArticleIndex.__proto__ || Object.getPrototypeOf(ArticleIndex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '文章列表',
      enablePullDownRefresh: true
    }, _this.data = {
      list: null
    }, _this.methods = {
      goDetail: function goDetail(e) {
        this.$navigate({ url: "detail?id=" + e.currentTarget.dataset.id });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ArticleIndex, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      console.log("调用下拉刷新");
      wx.stopPullDownRefresh();
      var self = this;
      _wepy2.default.request({
        url: _api2.default.articleList,
        method: "get",
        success: function success(res) {
          self.list = res.data.data;
          self.$apply();
          wx.vibrateShort({});
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // 打开调试
      wx.setEnableDebug({
        enableDebug: true
      });
      var self = this;
      _wepy2.default.request({
        url: _api2.default.articleList,
        method: "get",
        success: function success(res) {
          self.list = res.data.data;
          self.$apply();
        }

      });
    }
  }]);

  return ArticleIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ArticleIndex , 'pages/article/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkFydGljbGVJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwibGlzdCIsIm1ldGhvZHMiLCJnb0RldGFpbCIsImUiLCIkbmF2aWdhdGUiLCJ1cmwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwiY29uc29sZSIsImxvZyIsInd4Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsInNlbGYiLCJ3ZXB5IiwicmVxdWVzdCIsImFwaSIsImFydGljbGVMaXN0IiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsIiRhcHBseSIsInZpYnJhdGVTaG9ydCIsInNldEVuYWJsZURlYnVnIiwiZW5hYmxlRGVidWciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRzs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw2QkFBc0I7QUFGZixLLFFBS1RDLEksR0FBTztBQUNKQyxZQUFLO0FBREQsSyxRQW1CUEMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0NDLENBREQsRUFDRztBQUNULGFBQUtDLFNBQUwsQ0FBZSxFQUFDQyxLQUFJLGVBQWFGLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxFQUExQyxFQUFmO0FBQ0Q7QUFITyxLOzs7Ozt3Q0FmUztBQUNqQkMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQUMsU0FBR0MsbUJBQUg7QUFDQSxVQUFJQyxPQUFPLElBQVg7QUFDQUMscUJBQUtDLE9BQUwsQ0FBYTtBQUNYVixhQUFJVyxjQUFJQyxXQURHO0FBRVhDLGdCQUFPLEtBRkk7QUFHWEMsaUJBQVEsaUJBQVNDLEdBQVQsRUFBYTtBQUNuQlAsZUFBS2IsSUFBTCxHQUFZb0IsSUFBSXJCLElBQUosQ0FBU0EsSUFBckI7QUFDQWMsZUFBS1EsTUFBTDtBQUNBVixhQUFHVyxZQUFILENBQWdCLEVBQWhCO0FBQ0Q7QUFQVSxPQUFiO0FBU0Q7Ozs2QkFRTztBQUNOO0FBQ0FYLFNBQUdZLGNBQUgsQ0FBa0I7QUFDaEJDLHFCQUFhO0FBREcsT0FBbEI7QUFHQSxVQUFJWCxPQUFPLElBQVg7QUFDQ0MscUJBQUtDLE9BQUwsQ0FBYTtBQUNUVixhQUFJVyxjQUFJQyxXQURDO0FBRVRDLGdCQUFPLEtBRkU7QUFHVEMsaUJBQVEsaUJBQVNDLEdBQVQsRUFBYTtBQUNqQlAsZUFBS2IsSUFBTCxHQUFZb0IsSUFBSXJCLElBQUosQ0FBU0EsSUFBckI7QUFDQWMsZUFBS1EsTUFBTDtBQUVIOztBQVBRLE9BQWI7QUFVRjs7OztFQS9DcUNQLGVBQUtXLEk7O2tCQUExQjlCLFkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gICBpbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9jb25maWcvYXBpXCJcblxuICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZUluZGV4IGV4dGVuZHMgd2VweS5wYWdle1xuICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlofnq6DliJfooagnLFxuICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOnRydWVcbiAgICAgICB9XG5cbiAgICAgICBkYXRhID0ge1xuICAgICAgICAgIGxpc3Q6bnVsbFxuICAgICAgIH1cblxuICAgICAgIG9uUHVsbERvd25SZWZyZXNoKCl7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIuiwg+eUqOS4i+aLieWIt+aWsFwiKTtcbiAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTtcbiAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgIHVybDphcGkuYXJ0aWNsZUxpc3QsXG4gICAgICAgICAgIG1ldGhvZDpcImdldFwiLFxuICAgICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgc2VsZi5saXN0ID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICAgICAgIHd4LnZpYnJhdGVTaG9ydCh7fSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH0pXG4gICAgICAgfVxuXG4gICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgIGdvRGV0YWlsKGUpe1xuICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOlwiZGV0YWlsP2lkPVwiK2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkfSk7XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgb25Mb2FkKCl7XG4gICAgICAgICAvLyDmiZPlvIDosIPor5VcbiAgICAgICAgIHd4LnNldEVuYWJsZURlYnVnKHtcbiAgICAgICAgICAgZW5hYmxlRGVidWc6IHRydWVcbiAgICAgICAgIH0pXG4gICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOmFwaS5hcnRpY2xlTGlzdCxcbiAgICAgICAgICAgICAgbWV0aG9kOlwiZ2V0XCIsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgICAgIHNlbGYubGlzdCA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG4gICAgICAgfVxuICAgfVxuXG4iXX0=