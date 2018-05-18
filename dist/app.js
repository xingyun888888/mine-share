'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/article/index', 'pages/article/detail'],
      window: {
        backgroundTextStyle: '#9A32CD',
        navigationBarBackgroundColor: '#9A32CD',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        color: "#333",
        selectedColor: "#9A32CD",
        backgroundColor: "#f2f2f2",
        borderStyle: "#fff",
        list: [{
          pagePath: "pages/index",
          text: "首页",
          iconPath: "images/tab_home.png",
          selectedIconPath: "images/tab_home_press.png"
        }, {
          pagePath: "pages/article/index",
          text: "文章",
          iconPath: "images/tab_article.png",
          selectedIconPath: "images/tab_article_press.png"
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          console.dir(res);
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJjYiIsInRoYXQiLCJ3ZXB5IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImRpciIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBdUNFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFwQ2ZBLE1Bb0NlLEdBcENOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwscUJBRkssRUFHTCxzQkFISyxDQURBO0FBTVBDLGNBQVE7QUFDTkMsNkJBQXFCLFNBRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FORDtBQVlQQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHlCQUFpQixTQUhYO0FBSU5DLHFCQUFhLE1BSlA7QUFLTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGFBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSxxQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLHFCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsd0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEk7QUFMQTtBQVpELEtBb0NNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBQ1U7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHV0MsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLTCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDREsscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQUosZUFBS0wsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJRLElBQUlSLFFBQS9CO0FBQ0FHLGdCQUFNQSxHQUFHSyxJQUFJUixRQUFQLENBQU47QUFDRDtBQUxjLE9BQWpCO0FBT0Q7Ozs7RUExRDBCSyxlQUFLTSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvYXJ0aWNsZS9pbmRleCcsXG4gICAgICAncGFnZXMvYXJ0aWNsZS9kZXRhaWwnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICcjOUEzMkNEJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjOUEzMkNEJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgICBzZWxlY3RlZENvbG9yOiBcIiM5QTMyQ0RcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjJmMmYyXCIsXG4gICAgICBib3JkZXJTdHlsZTogXCIjZmZmXCIsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9pbmRleFwiLFxuICAgICAgICAgIHRleHQ6IFwi6aaW6aG1XCIsXG4gICAgICAgICAgaWNvblBhdGg6IFwiaW1hZ2VzL3RhYl9ob21lLnBuZ1wiLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiaW1hZ2VzL3RhYl9ob21lX3ByZXNzLnBuZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9hcnRpY2xlL2luZGV4XCIsXG4gICAgICAgICAgdGV4dDogXCLmlofnq6BcIixcbiAgICAgICAgICBpY29uUGF0aDogXCJpbWFnZXMvdGFiX2FydGljbGUucG5nXCIsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCJpbWFnZXMvdGFiX2FydGljbGVfcHJlc3MucG5nXCJcbiAgICAgICAgfV1cbiAgICB9XG4gIH1cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gIH1cbiAgb25MYXVuY2goKSB7XG4gICAgdGhpcy50ZXN0QXN5bmMoKVxuICB9XG4gIGFzeW5jIHRlc3RBc3luYyAoKSB7XG4gIH1cbiAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIGNvbnNvbGUuZGlyKHJlcyk7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19