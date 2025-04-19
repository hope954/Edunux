<!-- <template>
    <div>我是user啦啦啦</div>
    
</template>

<script>
export default{

}
</script>
<style lang="less" scoped>
</style> -->
<template>
    <router-view />
    <div class="user-page">
      <!-- 头像部分 -->
      <div class="user-avatar">
        <img src="../../assets/image/user.png" alt="User Avatar" />
      </div>
      <!-- 用户信息部分 -->
      <div class="user-info">
        <p><strong>用户名:</strong> {{ user.username }}</p>
        <p><strong>性别:</strong> {{ user.gender }}</p>
        <p><strong>年龄:</strong> {{ user.age }}</p>
        <p><strong>大学:</strong> {{ user.university }}</p>
        <p><strong>邮箱:</strong> {{ user.email }}</p>
        <p><strong>联系方式:</strong> {{ user.contact }}</p>
        <p><strong>自我介绍:</strong> {{ user.introduction }}</p>
      </div>
      <!-- 操作按钮部分 -->
      <div class="user-actions">
        <button @click="openEditProfile">修改个人资料</button>
        <button @click="openChangePassword">修改密码</button>
        <button @click="logout">退出账号</button>
      </div>
  
      <!-- 修改个人资料模态框 -->
      <div v-if="isEditProfileOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeEditProfile">&times;</span>
          <h2>修改个人资料</h2>
          <form @submit.prevent="saveProfile">
            <label for="username">用户名:</label>
            <input type="text" id="username" v-model="editedUser.username" />
            <label for="gender">性别:</label>
            <input type="text" id="gender" v-model="editedUser.gender" />
            <label for="age">年龄:</label>
            <input type="number" id="age" v-model="editedUser.age" />
            <label for="university">大学:</label>
            <input type="text" id="university" v-model="editedUser.university" />
            <label for="email">邮箱:</label>
            <input type="email" id="email" v-model="editedUser.email" />
            <label for="contact">联系方式:</label>
            <input type="text" id="contact" v-model="editedUser.contact" />
            <label for="introduction">自我介绍:</label>
            <textarea id="introduction" v-model="editedUser.introduction"></textarea>
            <button type="submit">保存</button>
          </form>
        </div>
      </div>
  
      <!-- 修改密码模态框 -->
      <div v-if="isChangePasswordOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeChangePassword">&times;</span>
          <h2>修改密码</h2>
          <form @submit.prevent="changePassword">
            <label for="oldPassword">旧密码:</label>
            <input type="password" id="oldPassword" v-model="oldPassword" />
            <label for="newPassword">新密码:</label>
            <input type="password" id="newPassword" v-model="newPassword" />
            <label for="confirmPassword">确认新密码:</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" />
            <button type="submit">保存</button>
          </form>
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
          introduction: "大家好，这是一个双创管理与展示的平台，欢迎大家进行浏览和参与问卷答题。"
        },
        editedUser: {},
        isEditProfileOpen: false,
        isChangePasswordOpen: false,
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
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
      }
    }
  };
  </script>
  
  <style lang="less" scoped>
  .user-page {
    text-align: center;
    padding: 20px;
  
    .user-avatar {
      margin-bottom: 20px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
  
    .user-info {
      margin-bottom: 20px;
      p {
        margin: 5px 0;
      }
    }
  
    .user-actions {
      button {
        margin: 5px;
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
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 500px;
  
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
        }
  
        form {
          label {
            display: block;
            margin-bottom: 5px;
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
            background-color: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
    }
  }
  </style>