<template>
  <router-view />
  <div class="user-page-container">
    <div class="user-page">
      <!-- 头像部分 -->
      <div class="user-avatar">
        <img src="../../assets/image/user.png" alt="User Avatar" /><br>
        <i class="fa fa-star"></i>
         <!-- 添加可爱的星星图标 -->
      </div>
      <!-- 用户信息部分，使用表格展示 -->
      <table class="user-info-table">
        <tbody>
          <tr>
            <th>昵称</th>
            <td>{{ user.username }}</td>
          </tr>
          <tr>
            <th>性别</th>
            <td>{{ user.gender }}</td>
          </tr>
          <tr>
            <th>年龄</th>
            <td>{{ user.age }}</td>
          </tr>
          <tr>
            <th>大学</th>
            <td>{{ user.university }}</td>
          </tr>
          <tr>
            <th>邮箱</th>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <th>联系方式</th>
            <td>{{ user.contact }}</td>
          </tr>
          <tr>
            <th>自我介绍</th>
            <td>{{ user.introduction }}</td>
          </tr>
        </tbody>
      </table>
      <!-- 操作按钮部分 -->
      <div class="user-actions">
        <button @click="openEditProfile">
          <i class="fa fa-pencil"></i> 修改个人资料
        </button>
        <button @click="openChangePassword">
          <i class="fa fa-lock"></i> 修改密码
        </button>
        <button @click="logout">
          <i class="fa fa-sign-out"></i> 退出账号
        </button>
      </div>

      <!-- 修改个人资料模态框 -->
      <div v-if="isEditProfileOpen" class="modal" >
        <div class="modal-content" >
          <span class="close" @click="closeEditProfile">&times;</span>
          <h2>
            <i class="fa fa-pencil"></i> 修改个人资料
          </h2>
          <form @submit.prevent="saveProfile" style="margin-right: 15px;">
            <label for="username">昵称:</label>
            <input type="text" id="username" v-model="editedUser.username" style="background:white; color:#333;" />
            <label for="gender">性别:</label>
            <input type="text" id="gender" v-model="editedUser.gender" style="background:white; color:#333;" />
            <label for="age">年龄:</label>
            <input type="number" id="age" v-model="editedUser.age" style="background:white; color:#333;" />
            <label for="university">大学:</label>
            <input type="text" id="university" v-model="editedUser.university" style="background:white; color:#333;" />
            <label for="email">邮箱:</label>
            <input type="email" id="email" v-model="editedUser.email" style="background:white; color:#333;" />
            <label for="contact">联系方式:</label>
            <input type="text" id="contact" v-model="editedUser.contact" style="background:white; color:#333;" />
            <label for="introduction">自我介绍:</label>
            <textarea id="introduction" v-model="editedUser.introduction" style="background:white; color:#333;"></textarea>
            <button type="submit">
              <i class="fa fa-save"></i> 保存
            </button>
          </form>
        </div>
      </div>

      <!-- 修改密码模态框 -->
      <div v-if="isChangePasswordOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeChangePassword">&times;</span>
          <h2>
            <i class="fa fa-lock"></i> 修改密码
          </h2>
          <form @submit.prevent="changePassword" style="margin-right: 15px;">
            <label for="oldPassword">旧密码:</label>
            <input type="password" id="oldPassword" v-model="oldPassword" style="background:white; color:#333;" />
            <label for="newPassword">新密码:</label>
            <input type="password" id="newPassword" v-model="newPassword" style="background:white; color:#333;" />
            <label for="confirmPassword">确认新密码:</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" style="background:white; color:#333;" />
            <button type="submit">
              <i class="fa fa-save"></i> 保存
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "张三",
        gender: "男",
        age: 22,
        university: "西安电子科技大学",
        avatar: "https://example.com/avatar.jpg",
        email: "zhangsan123@163.com",
        contact: "13800138000",
        introduction: "大家好，这是一个双创管理与展示的平台，欢迎大家进行浏览和参与问卷答题。",
      },
      editedUser: {},
      isEditProfileOpen: false,
      isChangePasswordOpen: false,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  created() {
    // 初始化编辑数据
    this.editedUser = { ...this.user };
  },
  methods: {
    openEditProfile() {
      this.isEditProfileOpen = true;
    },
    closeEditProfile() {
      this.isEditProfileOpen = false;
      // 重置编辑数据
      this.editedUser = { ...this.user };
    },
    saveProfile() {
      // 保存修改后的用户信息
      this.user = { ...this.editedUser };
      this.closeEditProfile();
      // 这里可以添加发送请求保存数据到后端的逻辑
    },
    openChangePassword() {
      this.isChangePasswordOpen = true;
    },
    closeChangePassword() {
      this.isChangePasswordOpen = false;
      // 重置密码输入框
      this.oldPassword = "";
      this.newPassword = "";
      this.confirmPassword = "";
    },
    changePassword() {
      // 验证密码
      if (this.newPassword !== this.confirmPassword) {
        alert("新密码和确认密码不一致，请重新输入。");
        return;
      }
      // 这里可以添加发送请求修改密码到后端的逻辑
      this.closeChangePassword();
      alert("密码修改成功。");
    },
    logout() {
      // 这里可以添加退出账号的逻辑，如清除本地存储的 token 等
      alert("已退出账号。");
    },
  },
};
</script>

<style lang="less" scoped>
.user-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:-50px;
  min-height: 100vh;
}

.user-page {
  text-align: center;
  padding: 20px;
  background-color: #fce4ec; /* 淡粉色背景 */
  width: 90%; /* 缩小30% */
  max-width: 500px; /* 最大宽度 */
  border-radius: 20px;

  .user-avatar {
    margin-bottom: 20px;
    position: relative;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid #e1bee7; /* 淡紫色边框 */
    }
    .fa-star {
      position: absolute;
      bottom: 0;
      right: 30%;
      color: #ffeb3b;
      font-size: 20px;
    }
  }

  .user-info-table {
    
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;

    th,
    td {
      
      padding: 10px;
      border-bottom: 1px solid #e1bee7;
      color: #7b1fa2; /* 淡紫色文字 */
    }

    th {
      text-align: left;
      font-weight: bold;
    }
  }

  .user-actions {
    button {
      margin: 5px;
      background-color: #e1bee7; /* 淡紫色按钮 */
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
        background-color: #ce93d8;
      }
      .fa {
        margin-right: 5px;
      }
    }
  }

  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);

    .modal-content {
      background-color: #fce4ec; /* 淡粉色模态框背景 */
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 500px;
      border-radius: 20px;

      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        &:hover,
        &:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      }

      h2 {
        margin-top: 0;
        color: #7b1fa2; /* 淡紫色标题 */
        .fa {
          margin-right: 5px;
        }
      }

      form {
        label {
          display: block;
          margin-bottom: 5px;
          color: #7b1fa2; /* 淡紫色标签 */
        }
        input,
        textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          background-color: #e1bee7; /* 淡紫色按钮 */
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: background-color 0.3s;
          &:hover {
            background-color: #ce93d8;
          }
          .fa {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>    