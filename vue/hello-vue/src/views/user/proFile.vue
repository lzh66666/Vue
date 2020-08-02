<template>
    <div>
      <h1>个人信息</h1>
      {{$route.params.id}}
      {{$route.params.name}}
      {{id}}
      {{name}}
    </div>
</template>

<script>
    export default {
      name: "UserProFile",
      props: ['id','name'],
      beforeRouteEnter: (to,from,next) => {
        console.log('进入路由之前');//加载数据
        next(vm => {
          vm.getData();//进入路由之前执行getData()
        })
      },
      beforeRouteLeave: (to,from,next) => {
        console.log('进入路由之后');
        next()
      },
      methods: {
        getData() {
          this.axios({
            method: 'get',
            url: 'http://localhost:8080/static/mock/data.json'
          }).then((response) => {
            console.log(response)
          })
        }
      }
    }
</script>

<style scoped>

</style>
