module.exports = {
  //数据类别
  categoryList: [{
    value: '我的客户',
    label: '我的客户'
  },
  {
    value: '公海客户',
    label: '公海客户'
  },
  {
    value: '全部客户',
    label: '全部客户'
  }
  ],
  //审核状态
  statusList: [
    {
      value: '草稿',
      label: '草稿'
    },
    {
      value: '待审核',
      label: '待审核'
    },
    {
      value: '审核中',
      label: '审核中'
    },
    {
      value: '驳回',
      label: '驳回'
    },
    {
      value: '拒绝',
      label: '拒绝'
    },
    {
      value: '通过',
      label: '通过'
    },
    {
      value: '审核结束',
      label: '审核结束'
    }
  ],
  //报备客户状态
  vipstatusList: [
    {
      value: '新客户',
      label: '新客户'
    },
    {
      value: '正在跟进',
      label: '正在跟进'
    },
    {
      value: '邀约上门',
      label: '邀约上门'
    },
    {
      value: '上门签单',
      label: '上门签单'
    },
    {
      value: '办理成功',
      label: '办理成功'
    },
    {
      value: '拒绝客户',
      label: '拒绝客户'
    },
    {
      value: '放弃客户',
      label: '放弃客户'
    },
    {
      value: '空号',
      label: '空号'
    }
  ],
  //是否有烟草证
  tobaccoList: [
    {
      value: '是',
      label: '是'
    },
    {
      value: '否',
      label: '否'
    }
  ],
  // 办证时间
  tobaccotimeList: [
    {
      value: '小于1年',
      label: '小于1年'
    },
    {
      value: '大于1年',
      label: '大于1年'
    }
  ],
  // 月开烟量
  volumesmokeList: [
    {
      value: '小于5千元',
      label: '小于5千元'
    },
    {
      value: '5千元~8千元',
      label: '5千元~8千元'
    },
    {
      value: '大于8千元',
      label: '大于8千元'
    }
  ],
  //烟草证等级
  tobaccorankList: [
    {
      value: '小于7档',
      label: '小于7档'
    },
    {
      value: '7档~10档',
      label: '7档~10档'
    },
    {
      value: '大于10档',
      label: '大于10档'
    }
  ],
  // 法人/股东
  identityList: [
    {
      value: '法人',
      label: '法人'
    }, {
      value: '股东',
      label: '股东'
    },
  ],
  // 企业成立时间
  establishmentList: [
    {
      value: '小于3个月',
      label: '小于3个月'
    }, {
      value: '3个月~6个月',
      label: '3个月~6个月'
    }, {
      value: '6个月~1年',
      label: '6个月~1年'
    }, {
      value: '1年~2年',
      label: '1年~2年'
    }, {
      value: '大于两年',
      label: '大于两年'
    },
  ],
  //法人/股东变更
  enterpriseList: [
    {
      value: '小于1年',
      label: '小于1年'
    }, {
      value: '大于1年',
      label: '大于1年'
    },
  ],
  //法人/股东占股
  ticketList: [
    {
      value: '小于10%',
      label: '小于10%'
    },
    {
      value: '大于10%',
      label: '大于10%'
    }
  ],
  // 年开票额
  invoicingList: [
    {
      value: '小于50万',
      label: '小于50万'
    }, {
      value: '50万~100万',
      label: '50万~100万'
    }, {
      value: '100万~200万',
      label: '100万~200万'
    }, {
      value: '大于200万',
      label: '大于200万'
    },
  ],
  // 开票记录
  taxrecordList: [
    {
      value: '小于6个月',
      label: '小于6个月'
    }, {
      value: '6个月~12个月',
      label: '6个月~12个月'
    }, {
      value: '大于12个月',
      label: '大于12个月'
    },
  ],
  // 纳税等级
  gradeList: [
    {
      value: 'A级',
      label: 'A级'
    }, {
      value: 'B级',
      label: 'B级'
    }, {
      value: 'C级',
      label: 'C级'
    }, {
      value: 'D级',
      label: 'D级'
    }, {
      value: 'M级',
      label: 'M级'
    },
  ],
  // 年纳税金额
  payingList: [
    {
      value: '小于20万',
      label: '小于20万'
    }, {
      value: '20万~50万',
      label: '20万~50万'
    }, {
      value: '大于50万',
      label: '大于50万'
    },
  ],
  //直播状态
  recomtypeList: [ 
    {
      value: '预告',
      label: '预告'
    }, {
      value: '直播中',
      label: '直播中'
    }, {
      value: '回放',
      label: '回放'
    }
  ],
  recomintroList: [ //介绍类型 无隐形费用、全程托管、专家顾问、一对一服务、急速办理、官方保障、银企合作
    {
      value: '无隐形费用',
      label: '无隐形费用'
    }, {
      value: '全程托管',
      label: '全程托管'
    }, {
      value: '专家顾问',
      label: '专家顾问'
    }, {
      value: '一对一服务',
      label: '一对一服务'
    }, {
      value: '急速办理',
      label: '急速办理'
    }, {
      value: '官方保障',
      label: '官方保障'
    }, {
      value: '银企合作',
      label: '银企合作'
    },
  ],
  //还款方式
  repaymentList: [
    {
      value: '先息后本',
      label: '先息后本'
    },
    {
      value: '等额本息',
      label: '等额本息'
    },
    {
      value: '等额本金',
      label: '等额本金'
    },
    {
      value: '其他',
      label: '其他'
    }
  ],
  //职业要求
  hiresList: [
    {
      value: '企业主',
      label: '企业主'
    },
    {
      value: '个体户',
      label: '个体户'
    },
    {
      value: '公务员',
      label: '公务员'
    },
    {
      value: '上班族',
      label: '上班族'
    },
    {
      value: '自由职业',
      label: '自由职业'
    },
    {
      value: '无固定职业',
      label: '无固定职业'
    }
  ],
  //社保情况
  socialList: [
    {
      value: '无社保',
      label: '无社保'
    },
    {
      value: '未满6个月',
      label: '未满6个月'
    },
    {
      value: '6个月以上',
      label: '6个月以上'
    }
  ],
  //公积金情况
  providentList: [
    {
      value: '无公积金',
      label: '无公积金'
    },
    {
      value: '未满6个月',
      label: '未满6个月'
    },
    {
      value: '6个月以上',
      label: '6个月以上'
    }
  ],
  //房屋情况
  housesList: [
    {
      value: '是',
      label: '是'
    },
    {
      value: '否',
      label: '否'
    }
  ],
  //车辆情况
  carList: [
    {
      value: '是',
      label: '是'
    },
    {
      value: '否',
      label: '否'
    }
  ],
  //芝麻分
  sesameList: [
    {
      value: '无芝麻分',
      label: '无芝麻分'
    },
    {
      value: '小于600分',
      label: '小于600分'
    },
    {
      value: '600分~700分',
      label: '600分~700分'
    }, {
      value: '大于700分',
      label: '大于700分'
    }
  ],
  //微粒贷
  microcreditList: [
    {
      value: '无微粒贷',
      label: '无微粒贷'
    }, {
      value: '小于1千',
      label: '小于1千'
    },
    {
      value: '1千~2千',
      label: '1千~2千'
    },
    {
      value: '2千~5千',
      label: '2千~5千'
    }, {
      value: '5千~1万',
      label: '5千~1万'
    }, {
      value: '大于1万',
      label: '大于1万'
    }
  ],
  //保险情况
  policyList: [
    {
      value: '是',
      label: '是'
    }, {
      value: '否',
      label: '否'
    }
  ],
  // 投保时间
  policyearList: [
    {
      value: '半年以上',
      label: '半年以上'
    }, {
      value: '一年以上',
      label: '一年以上'
    }, {
      value: '两年以上',
      label: '两年以上'
    }
  ],
  //信用卡
  creditList: [
    {
      value: '是',
      label: '是'
    }, {
      value: '否',
      label: '否'
    }
  ],

  //所需资料
  demand: [
    {
      value: '身份证',
      label: '身份证'
    },
    {
      value: '工资流水',
      label: '工资流水'
    },
    {
      value: '社保卡',
      label: '社保卡'
    }
    ,
    {
      value: '房产证明',
      label: '房产证明'
    }
    ,
    {
      value: '车产证明',
      label: '车产证明'
    }
    ,
    {
      value: '营业执照',
      label: '营业执照'
    }
    ,
    {
      value: '贷款用途证明',
      label: '贷款用途证明'
    }
    ,
    {
      value: '户口本',
      label: '户口本'
    }
    ,
    {
      value: '公积金缴纳明细',
      label: '公积金缴纳明细'
    }
    ,
    {
      value: '婚姻证明',
      label: '婚姻证明'
    }
    ,
    {
      value: '芝麻分',
      label: '芝麻分'
    }
    ,
    {
      value: '微粒贷',
      label: '微粒贷'
    }
    ,
    {
      value: '保单证明',
      label: '保单证明'
    },
    {
      value: '经营流水',
      label: '经营流水'
    }
    ,
    {
      value: '详版征信',
      label: '详版征信'
    }
  ],
  //匹配条件
  match: [
    {
      value: '文明互动',
      label: '文明互动'
    }, {
      value: '直播介绍',
      label: '直播介绍'
    }, {
      value: '收藏功能',
      label: '收藏功能'
    }, {
      value: '分享功能',
      label: '分享功能'
    }, {
      value: '送礼功能',
      label: '送礼功能'
    }, {
      value: '图片直播',
      label: '图片直播'
    }, {
      value: '商务合作',
      label: '商务合作'
    }
    // , {
    //   value: '广告图片',
    //   label: '广告图片'
    // }
  ],
  //条件关键
  key: [
    {
      value: '选中的都需要满足',
      label: '选中的都需要满足'
    },
    {
      value: '选中的满足任意一条',
      label: '选中的满足任意一条'
    }
  ],
  //省市
  address: [{ "value": "北京", "label": "北京", "children": [{ "value": "北京市", "label": "北京市" }] }, { "value": "天津", "label": "天津", "children": [{ "value": "天津市", "label": "天津市" }] }, { "value": "河北省", "label": "河北省", "children": [{ "value": "石家庄市", "label": "石家庄市" }, { "value": "唐山市", "label": "唐山市" }, { "value": "秦皇岛市", "label": "秦皇岛市" }, { "value": "邯郸市", "label": "邯郸市" }, { "value": "邢台市", "label": "邢台市" }, { "value": "保定市", "label": "保定市" }, { "value": "张家口市", "label": "张家口市" }, { "value": "承德市", "label": "承德市" }, { "value": "沧州市", "label": "沧州市" }, { "value": "廊坊市", "label": "廊坊市" }, { "value": "衡水市", "label": "衡水市" }] }, { "value": "山西省", "label": "山西省", "children": [{ "value": "太原市", "label": "太原市" }, { "value": "大同市", "label": "大同市" }, { "value": "阳泉市", "label": "阳泉市" }, { "value": "长治市", "label": "长治市" }, { "value": "晋城市", "label": "晋城市" }, { "value": "朔州市", "label": "朔州市" }, { "value": "晋中市", "label": "晋中市" }, { "value": "运城市", "label": "运城市" }, { "value": "忻州市", "label": "忻州市" }, { "value": "临汾市", "label": "临汾市" }, { "value": "吕梁市", "label": "吕梁市" }] }, { "value": "内蒙古自治区", "label": "内蒙古自治区", "children": [{ "value": "呼和浩特市", "label": "呼和浩特市" }, { "value": "包头市", "label": "包头市" }, { "value": "乌海市", "label": "乌海市" }, { "value": "赤峰市", "label": "赤峰市" }, { "value": "通辽市", "label": "通辽市" }, { "value": "鄂尔多斯市", "label": "鄂尔多斯市" }, { "value": "呼伦贝尔市", "label": "呼伦贝尔市" }, { "value": "巴彦淖尔市", "label": "巴彦淖尔市" }, { "value": "乌兰察布市", "label": "乌兰察布市" }, { "value": "兴安盟", "label": "兴安盟" }, { "value": "锡林郭勒盟", "label": "锡林郭勒盟" }, { "value": "阿拉善盟", "label": "阿拉善盟" }] }, { "value": "辽宁省", "label": "辽宁省", "children": [{ "value": "沈阳市", "label": "沈阳市" }, { "value": "大连市", "label": "大连市" }, { "value": "鞍山市", "label": "鞍山市" }, { "value": "抚顺市", "label": "抚顺市" }, { "value": "本溪市", "label": "本溪市" }, { "value": "丹东市", "label": "丹东市" }, { "value": "锦州市", "label": "锦州市" }, { "value": "营口市", "label": "营口市" }, { "value": "阜新市", "label": "阜新市" }, { "value": "辽阳市", "label": "辽阳市" }, { "value": "盘锦市", "label": "盘锦市" }, { "value": "铁岭市", "label": "铁岭市" }, { "value": "朝阳市", "label": "朝阳市" }, { "value": "葫芦岛市", "label": "葫芦岛市" }] }, { "value": "吉林省", "label": "吉林省", "children": [{ "value": "长春市", "label": "长春市" }, { "value": "吉林市", "label": "吉林市" }, { "value": "四平市", "label": "四平市" }, { "value": "辽源市", "label": "辽源市" }, { "value": "通化市", "label": "通化市" }, { "value": "白山市", "label": "白山市" }, { "value": "松原市", "label": "松原市" }, { "value": "白城市", "label": "白城市" }, { "value": "延边朝鲜族自治州", "label": "延边朝鲜族自治州" }] }, { "value": "黑龙江省", "label": "黑龙江省", "children": [{ "value": "哈尔滨市", "label": "哈尔滨市" }, { "value": "齐齐哈尔市", "label": "齐齐哈尔市" }, { "value": "鸡西市", "label": "鸡西市" }, { "value": "鹤岗市", "label": "鹤岗市" }, { "value": "双鸭山市", "label": "双鸭山市" }, { "value": "大庆市", "label": "大庆市" }, { "value": "伊春市", "label": "伊春市" }, { "value": "佳木斯市", "label": "佳木斯市" }, { "value": "七台河市", "label": "七台河市" }, { "value": "牡丹江市", "label": "牡丹江市" }, { "value": "黑河市", "label": "黑河市" }, { "value": "绥化市", "label": "绥化市" }, { "value": "大兴安岭地区", "label": "大兴安岭地区" }] }, { "value": "上海", "label": "上海", "children": [{ "value": "上海市", "label": "上海市" }] }, { "value": "江苏省", "label": "江苏省", "children": [{ "value": "南京市", "label": "南京市" }, { "value": "无锡市", "label": "无锡市" }, { "value": "徐州市", "label": "徐州市" }, { "value": "常州市", "label": "常州市" }, { "value": "苏州市", "label": "苏州市" }, { "value": "南通市", "label": "南通市" }, { "value": "连云港市", "label": "连云港市" }, { "value": "淮安市", "label": "淮安市" }, { "value": "盐城市", "label": "盐城市" }, { "value": "扬州市", "label": "扬州市" }, { "value": "镇江市", "label": "镇江市" }, { "value": "泰州市", "label": "泰州市" }, { "value": "宿迁市", "label": "宿迁市" }] }, { "value": "浙江省", "label": "浙江省", "children": [{ "value": "杭州市", "label": "杭州市" }, { "value": "宁波市", "label": "宁波市" }, { "value": "温州市", "label": "温州市" }, { "value": "嘉兴市", "label": "嘉兴市" }, { "value": "湖州市", "label": "湖州市" }, { "value": "绍兴市", "label": "绍兴市" }, { "value": "金华市", "label": "金华市" }, { "value": "衢州市", "label": "衢州市" }, { "value": "舟山市", "label": "舟山市" }, { "value": "台州市", "label": "台州市" }, { 
    "value": "丽水市", "label": "丽水市" }] }, { "value": "安徽省", "label": "安徽省", "children": [{ "value": "合肥市", "label": "合肥市" }, { "value": "芜湖市", "label": "芜湖市" }, { "value": "蚌埠市", "label": "蚌埠市" }, { "value": "淮南市", "label": "淮南市" }, { "value": "马鞍山市", "label": "马鞍山市" }, { "value": "淮北市", "label": "淮北市" }, { "value": "铜陵市", "label": "铜陵市" }, { "value": "安庆市", "label": "安庆市" }, { "value": "黄山市", "label": "黄山市" }, { "value": "滁州市", "label": "滁州市" }, { "value": "阜阳市", "label": "阜阳市" }, { "value": "宿州市", "label": "宿州市" }, { "value": "六安市", "label": "六安市" }, { "value": "亳州市", "label": "亳州市" }, { "value": "池州市", "label": "池州市" }, { "value": "宣城市", "label": "宣城市" }] }, { "value": "福建省", "label": "福建省", "children": [{ "value": "福州市", "label": "福州市" }, { "value": "厦门市", "label": "厦门市" }, { "value": "莆田市", "label": "莆田市" }, { "value": "三明市", "label": "三明市" }, { "value": "泉州市", "label": "泉州市" }, { "value": "漳州市", "label": "漳州市" }, { "value": "南平市", "label": "南平市" }, { "value": "龙岩市", "label": "龙岩市" }, { "value": "宁德市", "label": "宁德市" }] }, { "value": "江西省", "label": "江西省", "children": [{ "value": "南昌市", "label": "南昌市" }, { "value": "景德镇市", "label": "景德镇市" }, { "value": "萍乡市", "label": "萍乡市" }, { "value": "九江市", "label": "九江市" }, { "value": "新余市", "label": "新余市" }, { "value": "鹰潭市", "label": "鹰潭市" }, { "value": "赣州市", "label": "赣州市" }, { "value": "吉安市", "label": "吉安市" }, { "value": "宜春市", "label": "宜春市" }, { "value": "抚州市", "label": "抚州市" }, { "value": "上饶市", "label": "上饶市" }] }, { "value": "山东省", "label": "山东省", "children": [{ "value": "济南市", "label": "济南市" }, { "value": "青岛市", "label": "青岛市" }, { "value": "淄博市", "label": "淄博市" }, { "value": "枣庄市", "label": "枣庄市" }, { "value": "东营市", "label": "东营市" }, { "value": "烟台市", "label": "烟台市" }, { "value": "潍坊市", "label": "潍坊市" }, { "value": "济宁市", "label": "济宁市" }, { "value": "泰安市", "label": "泰安市" }, { "value": "威海市", "label": "威海市" }, { "value": "日照市", "label": "日照市" }, { "value": "莱芜市", "label": "莱芜市" }, { "value": "临沂市", "label": "临沂市" }, { "value": "德州市", "label": "德州市" }, { "value": "聊城市", "label": "聊城市" }, { "value": "滨州市", "label": "滨州市" }, { "value": "菏泽市", "label": "菏泽市" }] }, { "value": "河南省", "label": "河南省", "children": [{ "value": "郑州市", "label": "郑州市" }, { "value": "开封市", "label": "开封市" }, { "value": "洛阳市", "label": "洛阳市" }, { "value": "平顶山市", "label": "平顶山市" }, { "value": "安阳市", "label": "安阳市" }, { "value": "鹤壁市", "label": "鹤壁市" }, { "value": "新乡市", "label": "新乡市" }, { "value": "焦作市", "label": "焦作市" }, { "value": "济源市", "label": "济源市" }, { "value": "濮阳市", "label": "濮阳市" }, { "value": "许昌市", "label": "许昌市" }, { "value": "漯河市", "label": "漯河市" }, { "value": "三门峡市", "label": "三门峡市" }, { "value": "南阳市", "label": "南阳市" }, { "value": "商丘市", "label": "商丘市" }, { "value": "信阳市", "label": "信阳市" }, { "value": "周口市", "label": "周口市" }, { "value": "驻马店市", "label": "驻马店市" }] }, { "value": "湖北省", "label": "湖北省", "children": [{ "value": "武汉市", "label": "武汉市" }, { "value": "黄石市", "label": "黄石市" }, { "value": "十堰市", "label": "十堰市" }, { "value": "宜昌市", "label": "宜昌市" }, { "value": "襄阳市", "label": "襄阳市" }, { "value": "鄂州市", "label": "鄂州市" }, { "value": "荆门市", "label": "荆门市" }, { "value": "孝感市", "label": "孝感市" }, { "value": "荆州市", "label": "荆州市" }, { "value": "黄冈市", "label": "黄冈市" }, { "value": "咸宁市", "label": "咸宁市" }, { "value": "随州市", "label": "随州市" }, { "value": "恩施土家族苗族自治州", "label": "恩施土家族苗族自治州" }, { "value": "仙桃市", "label": "仙桃市" }, { "value": "潜江市", "label": "潜江市" }, { "value": "天门市", "label": "天门市" }, { "value": "神农架林区", "label": "神农架林区" }] }, { "value": "湖南省", "label": "湖南省", "children": [{ "value": "长沙市", "label": "长沙市" }, { "value": "株洲市", "label": "株洲市" }, { "value": "湘潭市", "label": "湘潭市" }, { "value": "衡阳市", "label": "衡阳市" }, { "value": "邵阳市", "label": "邵阳市" }, { "value": "岳阳市", "label": "岳阳市" }, { "value": "常德市", "label": "常德市" }, { "value": "张家界市", "label": "张家界市" }, { "value": "益阳市", "label": "益阳市" }, { "value": "郴州市", "label": "郴州市" }, { "value": "永州市", "label": "永州市" }, { "value": "怀化市", "label": "怀化市" }, { "value": "娄底市", "label": "娄底市" }, { "value": "湘西土家族苗族自治州", "label": "湘西土家族苗族
自治州" }] }, { 
      "value": "广东省", "label": "广东省", "children": [{ "value": "广州市", "label": "广州市" }, { "value": "韶关市", "label": "韶关市" }, { "value": "深圳市", "label": "深圳市" }, { "value": "珠海市", "label": "珠海市" }, { "value": "汕头市", "label": "汕头市" }, { "value": "佛山市", "label": "佛山市" }, { "value": "江门市", "label": "江门市" }, { "value": "湛江市", "label": "湛江市" }, { "value": "茂名市", "label": "茂名市" }, { "value": "肇庆市", "label": "肇庆市" }, { "value": "惠州市", "label": "惠州市" }, { "value": "梅州市", "label": "梅州市" }, { "value": "汕尾市", "label": "汕尾市" }, { "value": "河源市", "label": "河源市" }, { "value": "阳江市", "label": "阳江市" }, { "value": "清远市", "label": "清远市" }, { "value": "东莞市", "label": "东莞市" }, { "value": "中山市", "label": "中山市" }, { "value": "潮州市", "label": "潮州市" }, { "value": "揭阳市", "label": "揭阳市" }, { "value": "云浮市", "label": "云浮市" }] }, { "value": "广西壮族自治区", "label": "广西壮族自治区", "children": [{ "value": "南宁市", "label": "南宁市" }, { "value": "柳州市", "label": "柳州市" }, { "value": "桂林市", "label": "桂林市" }, { "value": "梧州市", "label": "梧州市" }, { "value": "北海市", "label": "北海市" }, { "value": "防城港市", "label": "防城港市" }, { "value": "钦州市", "label": "钦州市" }, { "value": "贵港市", "label": "贵港市" }, { "value": "玉林市", "label": "玉林市" }, { "value": "百色市", "label": "百色市" }, { "value": "贺州市", "label": "贺州市" }, { "value": "河池市", "label": "河池市" }, { "value": "来宾市", "label": "来宾市" }, { "value": "崇左市", "label": "崇左市" }] }, { "value": "海南省", "label": "海南省", "children": [{ "value": "海口市", "label": "海口市" }, { "value": "三亚市", "label": "三亚市" }, { "value": "五指山市", "label": "五指山市" }, { "value": "琼海市", "label": "琼海市" }, { "value": "儋州市", "label": "儋州市" }, { "value": "文昌市", "label": "文昌市" }, { "value": "万宁市", "label": "万宁市" }, { "value": "东方市", "label": "东方市" }, { "value": "定安县", "label": "定安县" }, { "value": "屯昌县", "label": "屯昌县" }, { "value": "澄迈县", "label": "澄迈县" }, { "value": "临高县", "label": "临高县" }, { "value": "白沙黎族自治县", "label": "白沙黎族自治县" }, { "value": "昌江黎族自治县", "label": "昌江黎族自治县" }, { "value": "乐东黎族自治县", "label": "乐东黎族自治县" }, { "value": "陵水黎族自治县", "label": "陵水黎族自治县" }, { "value": "保亭黎族苗族自治县", "label": "保亭黎族苗族自治县" }, { "value": "琼中黎族苗族自治县", "label": "琼中黎族苗族自治县" }, { "value": "西沙群岛", "label": "西沙群岛" }, { "value": "南沙群岛", "label": "南沙群岛" }, { "value": "中沙群岛的岛礁及其海域", "label": "中沙群岛的岛礁及其海域" }] }, { "value": "重庆", "label": "重庆", "children": [{ "value": "重庆市", "label": "重庆市" }] }, { "value": "四川省", "label": "四川省", "children": [{ "value": "成都市", "label": "成都市" }, { "value": "自贡市", "label": "自贡市" }, { "value": "攀枝花市", "label": "攀枝花市" }, { "value": "泸州市", "label": "泸州市" }, { "value": "德阳市", "label": "德阳市" }, { "value": "绵阳市", "label": "绵阳市" }, { "value": "广元市", "label": "广元市" }, { "value": "遂宁市", "label": "遂宁市" }, { "value": "内江市", "label": "内江市" }, { "value": "乐山市", "label": "乐山市" }, { "value": "南充市", "label": "南充市" }, { "value": "眉山市", "label": "眉山市" }, { "value": "宜宾市", "label": "宜宾市" }, { "value": "广安市", "label": "广安市" }, { "value": "达州市", "label": "达州市" }, { "value": "雅安市", "label": "雅安市" }, { "value": "巴中市", "label": "巴中市" }, { "value": "资阳市", "label": "资阳市" }, { "value": "阿坝藏族羌族自治州", "label": "阿坝藏族羌族自治州" }, { "value": "甘孜藏族自治州", "label": "甘孜藏族自治州" }, { "value": "凉山彝族自治州", "label": "凉山彝族自治州" }] }, { "value": "贵州省", "label": "贵州省", "children": [{ "value": "贵阳市", "label": "贵阳市" }, { "value": "六盘水市", "label": "六盘水市" }, { "value": "遵义市", "label": "遵义市" }, { "value": "安顺市", "label": "安顺市" }, { "value": "铜仁地区", "label": "铜仁地区" }, { "value": "黔西南布依族苗族自治州", "label": "黔西南布依族苗族自治州" }, { "value": "毕节地区", "label": "毕节地区" }, { "value": "黔东南苗族侗族自治州", "label": "黔东南苗族侗族自治州" }, { "value": "黔南布依族苗族自治州", "label": "黔南布依族苗族自治州" }] }, { "value": "云南省", "label": "云南省", "children": [{ "value": "昆明市", "label": "昆明市" }, { "value": "曲靖市", "label": "曲靖市" }, { "value": "玉溪市", "label": "玉溪市" }, { "value": "保山市", "label": "保山市" }, { "value": "昭通市", "label": "昭通市" }, { "value": "丽江市", "label": "丽江市" }, { "value": "普洱市", "label": "普洱市" }, { "value": "临沧市", "label": "临沧市" }, { "value": "楚雄彝族自治州", "label": "楚雄彝族自治州" }, { "value": "红河哈尼族彝族自治州", "label": "红河哈尼族彝族自治州" }, { "value": "文山壮族苗族自治州", "label": "文山壮族苗族自治州" }, { 
        "value": "西双版纳傣族自治州", "label": "西双版纳傣族自治州" }, { "value": "大理白族自治州", "label": "大理白族自治州" }, { "value": "德宏傣族景颇族自治州", "label": "德宏傣族景颇族自治州" }, { "value": "怒江傈僳族自治州", "label": "怒江傈僳族自治州" }, { "value": "迪庆藏族自治州", "label": "迪庆藏族自治州" }] }, { "value": "西藏自治区", "label": "西藏自治区", "children": [{ "value": "拉萨市", "label": "拉萨市" }, { "value": "昌都地区", "label": "昌都地区" }, { "value": "山南地区", "label": "山南地区" }, { "value": "日喀则地区", "label": "日喀则地区" }, { "value": "那曲地区", "label": "那曲地区" }, { "value": "阿里地区", "label": "阿里地区" }, { "value": "林芝地区", "label": "林芝地区" }] }, { "value": "陕西省", "label": "陕西省", "children": [{ "value": "西安市", "label": "西安市" }, { "value": "铜川市", "label": "铜川市" }, { "value": "宝鸡市", "label": "宝鸡市" }, { "value": "咸阳市", "label": "咸阳市" }, { "value": "渭南市", "label": "渭南市" }, { "value": "延安市", "label": "延安市" }, { "value": "汉中市", "label": "汉中市" }, { "value": "榆林市", "label": "榆林市" }, { "value": "安康市", "label": "安康市" }, { "value": "商洛市", "label": "商洛市" }] }, { "value": "甘肃省", "label": "甘肃省", "children": [{ "value": "兰州市", "label": "兰州市" }, { "value": "嘉峪关市", "label": "嘉峪关市" }, { "value": "金昌市", "label": "金昌市" }, { "value": "白银市", "label": "白银市" }, { "value": "天水市", "label": "天水市" }, { "value": "武威市", "label": "武威市" }, { "value": "张掖市", "label": "张掖市" }, { "value": "平凉市", "label": "平凉市" }, { "value": "酒泉市", "label": "酒泉市" }, { "value": "庆阳市", "label": "庆阳市" }, { "value": "定西市", "label": "定西市" }, { "value": "陇南市", "label": "陇南市" }, { "value": "临夏回族自治州", "label": "临夏回族自治州" }, { "value": "甘南藏族自治州", "label": "甘南藏族自治州" }] }, { "value": "青海省", "label": "青海省", "children": [{ "value": "西宁市", "label": "西宁市" }, { "value": "海东地区", "label": "海东地区" }, { "value": "海北藏族自治州", "label": "海北藏族自治州" }, { "value": "黄南藏族自治州", "label": "黄南藏族自治州" }, { "value": "海南藏族自治州", "label": "海南藏族自治州" }, { "value": "果洛藏族自治州", "label": "果洛藏族自治州" }, { "value": "玉树藏族自治州", "label": "玉树藏族自治州" }, { "value": "海西蒙古族藏族自治州", "label": "海西蒙古族藏族自治州" }] }, { "value": "宁夏回族自治区", "label": "宁夏回族自治区", "children": [{ "value": "银川市", "label": "银川市" }, { "value": "石嘴山市", "label": "石嘴山市" }, { "value": "吴忠市", "label": "吴忠市" }, { "value": "固原市", "label": "固原市" }, { "value": "中卫市", "label": "中卫市" }] }, { "value": "新疆维吾尔自治区", "label": "新疆维吾尔自治区", "children": [{ "value": "乌鲁木齐市", "label": "乌鲁木齐市" }, { "value": "克拉玛依市", "label": "克拉玛依市" }, { "value": "吐鲁番地区", "label": "吐鲁番地区" }, { "value": "哈密地区", "label": "哈密地区" }, { "value": "昌吉回族自治州", "label": "昌吉回族自治州" }, { "value": "博尔塔拉蒙古自治州", "label": "博尔塔拉蒙古自治州" }, { "value": "巴音郭楞蒙古自治州", "label": "巴音郭楞蒙古自治州" }, { "value": "阿克苏地区", "label": "阿克苏地区" }, { "value": "克孜勒苏柯尔克孜自治州", "label": "克孜勒苏柯尔克孜自治州" }, { "value": "喀什地区", "label": "喀什地区" }, { "value": "和田地区", "label": "和田地区" }, { "value": "伊犁哈萨克自治州", "label": "伊犁哈萨克自治州" }, { "value": "塔城地区", "label": "塔城地区" }, { "value": "阿勒泰地区", "label": "阿勒泰地区" }, { "value": "石河子市", "label": "石河子市" }, { "value": "阿拉尔市", "label": "阿拉尔市" }, { "value": "图木舒克市", "label": "图木舒克市" }, { "value": "五家渠市", "label": "五家渠市" }] }, { "value": "台湾省", "label": "台湾省", "children": [{ "value": "台北市", "label": "台北市" }, { "value": "高雄市", "label": "高雄市" }, { "value": "台南市", "label": "台南市" }, { "value": "台中市", "label": "台中市" }, { "value": "金门县", "label": "金门县" }, { "value": "南投县", "label": "南投县" }, { "value": "基隆市", "label": "基隆市" }, { "value": "新竹市", "label": "新竹市" }, { "value": "嘉义市", "label": "嘉义市" }, { "value": "新北市", "label": "新北市" }, { "value": "宜兰县", "label": "宜兰县" }, { "value": "新竹县", "label": "新竹县" }, { "value": "桃园县", "label": "桃园县" }, { "value": "苗栗县", "label": "苗栗县" }, { "value": "彰化县", "label": "彰化县" }, { "value": "嘉义县", "label": "嘉义县" }, { "value": "云林县", "label": "云林县" }, { "value": "屏东县", "label": "屏东县" }, { "value": "台东县", "label": "台东县" }, { "value": "花莲县", "label": "花莲县" }, { "value": "澎湖县", "label": "澎湖县" }] }, { "value": "香港特别行政区", "label": "香港特别行政区", "children": [{ "value": "香港岛", "label": "香港岛" }, { "value": "九龙", "label": "九龙" }, { "value": "新界", "label": "新界" }] }, { "value": "澳门特别行政区", "label": "澳门特别行政区", "children": [{ "value": "澳门半岛", "label": "澳门半岛" }, { "value": "离岛", "label": "离岛" }] }, { "value": "海外", 
"label": "海外", "children": [{ 
          "value": "海外", "label": "海外" }] }],


}
