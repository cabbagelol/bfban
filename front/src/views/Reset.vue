<template>
  <div class="container">
    <div class="content">
      <Form :label-width="80" style="position: relative;">
        <Divider>{{$t("reset.title")}}</Divider>

        <FormItem :label="$t('reset.form.qq')">
          <Input type="text" v-model="reset.qq" :placeholder="$t('reset.form.qq')" />
        </FormItem>

        <FormItem :label="$t('reset.form.password')">
          <Input type="password" v-model="reset.password" :placeholder="$t('reset.form.password')" />
        </FormItem>

        <FormItem :label="$t('reset.form.passwordRepeat')">
          <Input type="password" v-model="reset.passwordRepeat" :placeholder="$t('reset.form.passwordRepeat')" />
        </FormItem>

        <FormItem>
          <Button @click.prevent.stop="handleReset" type="primary">{{$t('reset.form.submit')}}</Button>
        </FormItem>

        <Spin size="large" fix v-show="spinShow"></Spin>
      </Form>
    </div>
  </div>

</template>

<script>
import { getCsrfToken, waitForAction } from '@/mixins/common';
import ajax, { baseURL } from "@/mixins/ajax";
const { mapActions, mapMutations } = Vuex;

export default {
  data() {
    return {
      reset: {
        qq: '',
        password: '',
        passwordRepeat: '',
      },
      spinShow: false,
    }
  },
  beforeMount() {
  },
  methods: {
    handleReset() {
      const {qq, password, passwordRepeat} = _.each(this.reset, (v, k, o) => {
        o[k] = v.trim();
      });

      const { token } = this.$route.query

      if (qq && password && passwordRepeat && password === passwordRepeat) {
        this.spinShow = true;

        ajax({
          method: 'post',
          url: '/account/reset',
          data: {
            qq,
            token,
            password,
            passwordRepeat,
          },
        })
        .then((res) => {
          this.spinShow = false;

          const d = res.data;

          this.$Message.success(d.msg);
          if (d.error === 1) {
            this.reset.password = '';
            this.reset.passwordRepeat = '';
          } else {
            this.$router.push('/signin')
          }
        })
      } else {
        this.$Message.error('请规范填写');
      }
    }
  }
}
</script>

<style>
</style>

