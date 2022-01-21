<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"carAdd"}' class="btn btn-primary">Создать</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Автомобили</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Марка</th>
                                <th>Имя</th>
                                <th>Модель</th>
                                <th>Даты выпуска</th>
                                <th>Описание</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tbody v-if="cars.length > 0">
                            <tr v-for="(car,key) in cars" :key="key">
                                <td>{{ car.id }}</td>
                                <td>{{ car.brand }}</td>
                                <td>{{ car.name }}</td>
                                <td>{{ car.model }}</td>
                                <td>{{ car.release_date }}</td>
                                <td>{{ car.description }}</td>
                                <td>
                                    <router-link :to='{name:"carEdit",params:{id:car.id}}' class="btn btn-success">Изменить</router-link>
                                    <button type="button" @click="deleteCar(car.id)" class="btn btn-danger">Удалить</button>
                                </td>
                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr>
                                <td colspan="7" align="center">Автомобили не найдены.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"cars",
    data(){
        return {
            cars:[]
        }
    },
    mounted(){
        this.getCars()
    },
    methods:{
        async getCars(){
            await this.axios.get('/api/car').then(response=>{
                this.cars = response.data
            }).catch(error=>{
                console.log(error)
                this.cars = []
            })
        },
        deleteCar(id){
            if(confirm("Вы уверены, что хотите удалить этот автомобиль?")){
                this.axios.delete(`/api/car/${id}`).then(response=>{
                    this.getCars()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
