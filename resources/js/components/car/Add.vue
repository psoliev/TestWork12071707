<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Добавить автомобиль</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Марка</label>
                                    <input type="text" class="form-control" v-model="car.brand">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Имя</label>
                                    <input type="text" class="form-control" v-model="car.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Модель</label>
                                    <input type="text" class="form-control" v-model="car.model">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Даты выпуска</label>
                                    <input type="text" class="form-control" v-model="car.release_date">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Описание</label>
                                    <input type="text" class="form-control" v-model="car.description">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-car",
    data(){
        return {
            car:{
                brand:"",
                name:"",
                model:"",
                release_date:"",
                description:""
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/car',this.car).then(response=>{
                this.$router.push({name:"carList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
