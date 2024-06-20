<template>
  <div class="main">
    <div class="warning-title">FBI WARNING</div>
    <div class="warning-content">
      <div class="en">
        <p>
          Serious warning ! The system has detected your current unfriendly
          behavior.
        </p>
        <p>
          Please immediately stop illegal operations such as website
          infiltration and password cracking. The IP address and other network
          information you are currently using have been automatically recorded
          and highlighted. If it causes any loss to our website or is required
          by relevant national regulatory authorities, we will unconditionally
          cooperate in submitting it.
        </p>
        <p>Please abide by the law, abide by morality, and cherish freedom !</p>
      </div>
      <hr />
      <div class="cn">
        <p>
          严重警告！系统已监测到你当前的不友善行为，请立即停止网站渗透、密码破解等非法操作。
        </p>
        <p>
          你当前使用的IP地址及其他网络信息已被自动记录并重点标注，如对本站造成损失或国家相
        </p>
        <p>关主管部门要求，本站将无条件配合上交。</p>
        <p>请遵守法律，恪守道德，珍惜自由！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FbiWarning',
}
</script>

<style scoped>
body {
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.main {
  text-align: center;
}

.warning-title {
  margin: 20px auto;
  width: 140px;
  background: #f33;
  color: #eee;
  text-shadow: 0 0 1px #fff;
  font-size: 18px;
  text-align: center;
}

.warning-content {
  margin: 20px auto;
  width: 740px;
}

.warning-content .cn,
.warning-content .en {
  color: #ddd;
  text-shadow: 0 0 2px #fff;
  font-size: 18px;
}

p {
  margin: 15px auto;
}
</style>
