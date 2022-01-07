<template>
  <div class="card">
    <div class="header flex">
      <el-button
        type="primary"
        icon="el-icon-collection-tag"
        class="mr20"
        @click="typeClass = true"
      >分类管理</el-button>
      <el-button v-if="meth[0]" type="primary" icon="el-icon-upload" @click="uploadNew">创建直播</el-button>
      <el-select clearable class="ml20" v-model="selectInput" placeholder="请选择直播类型">
        <el-option
          v-for="item in dynamicTags"
          :key="item._id"
          :label="item.name"
          :value="item.name"
        ></el-option>
      </el-select>
      <el-input
        clearable
        placeholder="请输入内容"
        v-model="input"
        class="input-with-select findInput ml20"
      >
        <el-select
          clearable
          v-model="classType"
          slot="prepend"
          placeholder="请选择"
          style="width: 120px"
        >
          <el-option
            v-for="(item, index) in tableHeader"
            :key="index + 'h'"
            :label="item.name"
            :value="item.prop"
          ></el-option>
        </el-select>
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="(find.currentPage = 1), getNewsList()"
        ></el-button>
      </el-input>
    </div>
    <!-- 编辑区域 -->
    <div v-if="dialogVisible" class="window">
      <span>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
          style="width: 100%"
        >
          <div class="flex">
            <el-form-item label="直播分类:" prop="type">
              <el-select clearable style="width: 100%" v-model="ruleForm.type" placeholder="请选择">
                <el-option
                  v-for="item in dynamicTags"
                  :key="item._id"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="直播名称:" prop="name">
              <el-input clearable v-model="ruleForm.name" placeholder="请输入直播名称"></el-input>
            </el-form-item>
            <el-form-item label="直播描述:" prop="description">
              <el-input clearable v-model="ruleForm.description" placeholder="请输入产品描述"></el-input>
            </el-form-item>
            <el-form-item label="开始时间:" prop="loandays">
              <el-date-picker
                style="width:100%"
                v-model="ruleForm.loandays"
                type="datetime"
                format="yyyy-MM-dd HH:mm:ss"
                @blur="datePicker()"
                placeholder="选择开始时间"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="直播状态:" prop="recomtype">
              <el-select clearable v-model="ruleForm.recomtype" placeholder="请选择">
                <el-option
                  v-for="item in fixedInfo.recomtypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="总浏览量:" prop="totalview">
              <el-input clearable v-model="ruleForm.totalview" placeholder="请输入总浏览量"></el-input>
            </el-form-item>

            <el-form-item label="是否推荐:" prop="recommend">
              <el-select
                clearable
                style="width: 100%"
                v-model="ruleForm.recommend"
                placeholder="请选择"
              >
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="直播封面:" prop="productlogo">
              <div style="position: relative">
                <el-input clearable placeholder="请上传直播封面" v-model="ruleForm.productlogo" disabled></el-input>
                <el-upload
                  style="position: absolute; top: 3px; right: -35px"
                  class="upload-demo f20"
                  :data="ruleForm"
                  :action="this.$api.uploadProductLogo"
                  :headers="uploadHeader"
                  :on-error="onError"
                  :on-success="logoSuccess"
                  :show-file-list="false"
                >
                  <i class="el-icon-upload" v-if="meth[0] || meth[2]" style="font-size: 30px"></i>
                </el-upload>
              </div>
            </el-form-item>

            <el-form-item label="功能选项:" prop="match">
              <el-select
                clearable
                style="width: 100%"
                v-model="ruleForm.match"
                multiple
                placeholder="请选择"
              >
                <el-option
                  v-for="(item,index) in fixedInfo.match"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="ruleForm.match.includes('图片直播')" label="图片直播链接:" prop="cation">
              <el-input clearable v-model="ruleForm.cation" placeholder="请输入图片直播链接"></el-input>
            </el-form-item>
            <!-- <div v-if="ruleForm.match.includes('广告图片')" style="width: 100%">
              <div class="proBg mt20">
                <div
                  class="fw600 f18 mb20 flex"
                  style="padding: 15px; border-bottom: 1px solid #909399;"
                >
                  <div>直播间广告轮播片</div>
                  
                </div>
                <div class="flex" style="padding:0 20px 20px 15px;">
                  <div class="lunbo">
                    <el-upload
                      style="position:relative;left:80px;top:9px;"
                      class="upload-demo f20"
                      :data="ruleForm"
                      :action="this.$api.uploadProductImg"
                      :headers="uploadHeader"
                      :on-error="onError"
                      :on-success="handSuccess"
                      :show-file-list="false"
                    >
                    <i class="el-icon-upload" v-if="meth[0] || meth[2]" style="font-size: 30px"></i>
                  </el-upload>
                  </div>
                </div>
              </div>
            </div>-->
          </div>
        </el-form>
        <span v-if="ruleForm.match.includes('活动介绍')">
          <div class="fw600 mt20">活动介绍：</div>
          <UE
            class="mt20"
            v-if="showUE"
            :defaultMsg="ruleForm.details"
            :config="config"
            :id="ueId"
            ref="editor"
          ></UE>
        </span>
      </span>
      <div class="flex mt10 windBtn">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" v-if="meth[2] || meth[0]" @click="uploadBtn('ruleForm')">确 定</el-button>
      </div>
    </div>
    <!-- 表格区域 -->
    <el-table v-if="!dialogVisible" :data="tableData" stripe>
      <el-table-column label="#" type="index" width="50"></el-table-column>
      <el-table-column label="直播封面" min-width="100px">
        <template slot-scope="scope">
          <el-tooltip placement="right">
            <div slot="content">
              <img :src="scope.row.productlogo" style="width:200px" />
            </div>
            <img :src="scope.row.productlogo" class="tableImg" style="width:80px;" />
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in tableHeader"
        :key="index"
        :prop="item.prop"
        :label="item.name"
        show-overflow-tooltip
        min-width="100px"
      ></el-table-column>
      <el-table-column label="操作" width="100px">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="editRow(scope.$index, scope.row)"
            type="text"
            size="small"
          >编辑</el-button>
          <el-button
            v-if="meth[1]"
            @click.native.prevent="deleteRow(scope.$index, scope.row)"
            type="text"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分类管理 -->
    <el-dialog title="产品分类" :visible.sync="typeClass" width="50%" :before-close="iconClose">
      <span>
        <el-form
          :model="iconForm"
          :rules="iconrules"
          ref="iconForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="分类名称:" prop="name">
            <el-input clearable v-model="iconForm.name" placeholder="请输入分类名称" class="new-input"></el-input>
          </el-form-item>
          <el-form-item label="分类描述:" prop="remaks">
            <el-input clearable v-model="iconForm.remaks" placeholder="请输入分类描述" class="new-input"></el-input>
          </el-form-item>
          <el-form-item label="展示顺序:" prop="number">
            <el-input
              clearable
              v-model="iconForm.number"
              type="number"
              placeholder="展示顺序:数值越小越靠前"
              class="new-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="首页导航:" prop="super">
            <el-select
              clearable
              v-model="iconForm.super"
              placeholder="请选择是否在首页展示"
              class="new-input"
            >
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="图片:" prop="imgurl">
            <el-input
              clearable
              disabled
              v-model="iconForm.imgurl"
              placeholder="图片访问地址"
              class="new-input"
            ></el-input>
            <el-upload
              class="upload-demo"
              :data="ruleForm"
              :action="this.$api.uploadIconlImg"
              :headers="uploadHeader"
              :on-error="onError"
              :file-list="fileList"
              :on-success="iconFormSuccess"
              :show-file-list="false"
              :limit="1"
            >
              <el-button size="small" type="primary" v-if="meth[0] || meth[2]">点击上传</el-button>
              <span slot="tip" class="el-upload__tip" v-if="meth[0] || meth[2]">图标为1:1方形</span>
            </el-upload>
          </el-form-item>
        </el-form>
        <div class="flex">
          <div
            class="mr10 mb20"
            style="width: 120px; position: relative"
            v-for="(item, index) in dynamicTags"
            :key="index + 'img'"
          >
            <i
              v-if="meth[1]"
              class="el-icon-circle-close colorRed pointer"
              style="font-size: 20px; position: absolute; top: 2px; left: 2px"
              @click="tagClose(item._id, item.imgurl)"
            ></i>
            <img :src="item.imgurl" style="width: 120px; height: 120px; margin: 0 auto" />
            <div class="nameText">
              <div style="text-align: center">{{ item.name }}</div>
              <div class="color2" style="margin-top: 2px">{{ item.remaks }}</div>
            </div>
          </div>
        </div>
      </span>
      <div class="flex mt10 windBtn">
        <el-button @click="iconClose">取 消</el-button>
        <el-button type="primary" v-if="meth[0] || meth[2]" @click="uploadIconBtn('iconForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 页码条 -->
    <el-pagination
      v-if="!dialogVisible"
      class="mt20"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="find.currentPage"
      :page-sizes="[10, 20, 50, 100, 200]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="find.total"
    ></el-pagination>
  </div>
</template>

<script>
import UE from '@/components/common/UE'
import fixedInfo from '../assets/js/fixedInfo.js'
export default {
  components: {
    UE
  },
  data() {
    return {
      fixedInfo: fixedInfo, //选项配置
      showUE: false,
      uploadHeader: {
        authorization: JSON.parse(sessionStorage.getItem('userInfo') || '{}')
          .token
      },
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 220
      },
      iconForm: {
        name: '', //导航名称
        number: '', //导航顺序
        super: '', //是否推荐至首页
        imgurl: '', //导航图标
        remaks: '' //分类描述
      },
      iconrules: {
        name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }],
        number: [
          {
            required: true,
            message: '请输入分类排序：数值越小越靠前',
            trigger: 'blur'
          }
        ],
        super: [
          { required: true, message: '请输入是否展示到首页', trigger: 'blur' }
        ],
        imgurl: [{ required: true, message: '请上传图标图片', trigger: 'blur' }]
      },
      fileList: [],
      classType: 'name',
      dynamicTags: [], //团队标签
      inputVisible: false,
      inputValue: '',
      selectInput: '',
      input: '', //查询框
      ueId: 'editor5', //多实例情况下使用
      dialogVisible: false,
      isAdd: true,
      typeClass: false,
      otherVisible: false, //其他要求显示
      otherValue: '', //其他要求值
      ruleForm: {
        name: '',
        description: '', //产品描述
        recommend: '是', //不推荐 推荐
        type: '',
        productlogo: '',
        // productimg: '',
        cation: '', //图片直播链接
        totalview: '', // 总计浏览
        details: '', //备注信息
        loandays: '', //开始时间
        time: '',
        recomtype: '', //推荐类型 爆款、独家、新品、优惠、限时
        match: [] //匹配条件 数组
      },
      rules: {
        name: [{ required: true, message: '请输入产品名称', trigger: 'blur' }],
        type: [{ required: true, message: '请选择产品分类', trigger: 'blur' }],
        productlogo: [
          { required: true, message: '请上传直播封面', trigger: 'blur' }
        ],
        loandays: [
          { required: true, message: '请选择直播时间', trigger: 'blur' }
        ]
      },
      tableData: [],
      tableHeader: [
        { name: '直播名称', prop: 'name' },
        { name: '直播描述', prop: 'description' },
        { name: '直播类型', prop: 'type' },
        { name: '是否推荐', prop: 'recommend' },
        { name: '直播时间', prop: 'loandays' },
        { name: '创建时间', prop: 'time' }
      ],
      find: {
        currentPage: 1, //当前页码
        total: 0, //总页数
        skip: 0, //偏移量
        limit: 10 //每一页的数量
      }
    }
  },
  mounted(opaction) {
    this.mixinMethod(this.$route.path)
    if (this.$route.query.name) {
      this.classType = 'name'
      this.input = this.$route.query.name
    }
    this.getNewsList()
    this.findTagList()
  },
  watch: {
    dialogVisible(val) {
      if (val) {
        this.showUE = val
      }
    }
  },
  methods: {
    datePicker() {
      var date = new Date(this.ruleForm.loandays)
      var y = date.getFullYear()

      var m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m

      var d = date.getDate()
      d = d < 10 ? '0' + d : d

      var h = date.getHours()
      h = h < 10 ? '0' + h : h

      //获得分
      var mm = date.getMinutes()
      mm = mm < 10 ? '0' + mm : mm

      //获得秒
      var ss = date.getSeconds()
      ss = ss < 10 ? '0' + ss : ss

      this.ruleForm.loandays =
        y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + ss
    },
    handleCloseTag(tag) {
      this.ruleForm.othercomponents.splice(
        this.ruleForm.othercomponents.indexOf(tag),
        1
      )
    },
    showInput() {
      this.otherVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let otherValue = this.otherValue
      if (otherValue) {
        this.ruleForm.othercomponents.push(otherValue)
      }
      this.otherVisible = false
      this.otherValue = ''
    },
    //上传按钮重置
    uploadNew() {
      ;(this.ruleForm = {
        name: '',
        description: '', //产品描述
        recommend: '是', //不推荐 推荐
        type: '',
        productlogo: '',
        // productimg: '',
        cation: '', //图片直播链接
        totalview: '', // 总计浏览
        details: '', //备注信息
        loandays: '', //开始时间
        time: '',
        recomtype: '', //推荐类型 爆款、独家、新品、优惠、限时
        match: [] //匹配条件 数组
      }),
        (this.dialogVisible = true)
      this.isAdd = true
    },
    async findTagList() {
      //查询分类图标列表
      await this.$axios.post(this.$api.findProductClass).then(res => {
        if (res.code == 200) {
          let arr = res.data
          this.dynamicTags = this.$common.bubbleSort(arr, 'number')
        }
      })
    },
    async tagClose(tag, imgname) {
      //删除分类图标
      this.$confirm('此操作将永久删除该产品分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.$axios
            .post(this.$api.delProductClass, { _id: tag })
            .then(async res => {
              if (res.code == 200) {
                this.$message.success('删除分类成功')
                await this.$axios
                  .post(this.$api.delIconlImg, {
                    imgurl: imgname
                  })
                  .then(res => {
                    if (res.code == 200) {
                      this.$message.success('删除图标成功')
                    }
                  })
                this.findTagList()
              }
            })
        })
        .catch(() => {})
    },
    //产品分类图标上传成功
    async iconFormSuccess(res, file, fileList) {
      if (res.code == 200) {
        if (this.iconForm.imgurl) {
          await this.$axios.post(this.$api.delIconlImg, {
            imgurl: this.iconForm.imgurl
          })
        }
        this.iconForm.imgurl = res.data
        this.fileList = []
        this.$logsImg.createlogsImg(
          this.$api.uploadIconlImg,
          this.iconForm.imgurl
        ) //添加操作日志
        this.$message.success('图片上传成功')
      }
    },
    //上传产品Logo成功钩子
    async logoSuccess(res, file, fileList) {
      if (res.code == 200) {
        if (!this.isAdd) {
          let newArr = {
            _id: this.ruleForm._id,
            productlogo: res.data
          }
          await this.$axios.post(this.$api.updataProduct, {
            data: JSON.stringify(newArr)
          })
        }
        this.ruleForm.productlogo = res.data
        this.$logsImg.createlogsImg(
          this.$api.uploadProductLogo,
          this.ruleForm.productlogo
        ) //添加操作日志
        this.$message.success('logo上传成功')
      }
    },
    //上传产品图片成功钩子
    async handSuccess(res, file, fileList) {
      //console.log(res.data)
      if (res.code == 200) {
        if (!this.isAdd) {
          let newArr = {
            _id: this.ruleForm._id,
            productimg: res.data
          }
          await this.$axios.post(this.$api.updataProduct, {
            data: JSON.stringify(newArr)
          })
        }
        // if(this.ruleForm.productimg){
        //   await this.$axios.post(this.$api.delProductImg, this.ruleForm)
        // }
        this.ruleForm.productimg = res.data
        this.$logsImg.createlogsImg(
          this.$api.uploadProductImg,
          this.ruleForm.productimg
        ) //添加操作日志
        this.$message.success('图片上传成功')
      }
    },
    onError(err, file, fileList) {
      this.$message.error('图片上传失败')
    },
    handleSizeChange(val) {
      this.find.limit = val
      this.getNewsList()
    },
    handleCurrentChange(val) {
      this.find.currentPage = val
      this.getNewsList()
    },
    async getNewsList() {
      var data = {
        skip: this.find.limit * (this.find.currentPage - 1),
        limit: this.find.limit,
        selectInput: this.selectInput,
        fuzz: this.classType,
        input: this.input
      }
      await this.$axios.post(this.$api.findProduct, data).then(res => {
        this.tableData = res.data[0].data
        this.find.total = (res.data[0].total[0] || {}).total || 0
      })
    },
    //编辑按钮
    editRow(index, row) {
      this.isAdd = false
      this.ruleForm = row
      // this.showUE = true
      this.dialogVisible = true
    },
    //删除行
    deleteRow(index, row) {
      this.$confirm('确认删除该产品吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios
          .post(this.$api.delateProduct, { _id: row._id })
          .then(res => {
            if (res.code == 200) {
              this.$message.success('删除成功')
              this.getNewsList()
            }
          })
        if (row.productlogo) {
          this.$axios.post(this.$api.delProductLogo, row)
        }
        if (row.productimg) {
          this.$axios.post(this.$api.delProductImg, row)
        }
      })
    },
    handleClose() {
      if (this.isAdd) {
        //新增产品时点了取消，要把图片删除
        if (this.ruleForm.productimg) {
          this.$axios.post(this.$api.delProductImg, this.ruleForm)
        }
        if (this.ruleForm.productlogo) {
          this.$axios.post(this.$api.delProductLogo, this.ruleForm)
        }
      }
      this.dialogVisible = false
      // this.showUE = false;
    },
    //上传信息
    async uploadBtn(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.ruleForm.match.includes('活动介绍')) {
            this.ruleForm.details = this.$refs.editor.getUEContent()
          }
          if (this.isAdd) {
            //新增
            delete this.ruleForm._id
            var res = await this.$axios.post(this.$api.uploadProduct, {
              data: JSON.stringify(this.ruleForm)
            })
          } else {
            var res = await this.$axios.post(this.$api.updataProduct, {
              data: JSON.stringify(this.ruleForm)
            })
          }
          if (res.code == 200) {
            this.$message.success('操作成功')
            this.dialogVisible = false
            this.getNewsList()
          }
        } else {
          return false
        }
      })
    },
    //创建产品分类
    async uploadIconBtn(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          var res = await this.$axios.post(
            this.$api.createProductClass,
            this.iconForm
          )
          if (res.code == 200) {
            this.$message.success('创建分类成功')
            this.findTagList()
            this.iconForm.imgurl = ''
            this.typeClass = false
          }
        } else {
          return false
        }
      })
    },
    //删除分类图标
    async iconClose() {
      if (this.iconForm.imgurl) {
        await this.$axios
          .post(this.$api.delIconlImg, {
            imgurl: this.iconForm.imgurl
          })
          .then(res => {
            if (res.code == 200) {
              this.iconForm.imgurl = ''
              this.$message.success('删除图标成功')
            }
          })
      }
      this.typeClass = false
    }
  }
}
</script>

<style lang='scss' scoped>
.lunbo {
  width: 200px;
  height: 50px;
  border: 1px dashed #000;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.nameText {
  // border-bottom:1px dashed #909399;
  padding: 2px;
  text-align: center;
}
.window {
  width: 100%;
  height: auto;
  /* background:red; */
  box-sizing: border-box;
  padding: 15px 0;
}
.windBtn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.findInput {
  width: 500px;
}
.new-input {
  width: 220px !important;
}
/* .el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
} */
</style>
