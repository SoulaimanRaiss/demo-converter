<template>
    <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="card">
            <div class="card-body">  
              <div v-if="!results.length > 0">
                <h4 class="mb-2" style="font-size: 18px; color: #666">Base Unit <span class="text-danger">*</span></h4>
                <ul class="list-group">
                  <li class="list-group-item d-flex">
                    <input type="number" class="form-control" step="0.000001" min="0" v-model="base.unit" placeholder="example:- 1000">
                    <input type="text" class="form-control" v-model="base.unit_name" placeholder="example:- Meter">
                  </li> 
                </ul>
                <hr>
                    <form @submit.prevent="Result">
                  <h4 class="mb-2" style="font-size: 18px; color: #666">Conversion Rate</h4>
                 <ul class="list-group">
                  <li class="list-group-item d-flex" v-for="(rat, index) in rates" v-bind:rate="rat" :key="index">
                    <input type="number" class="form-control" step="0.000001" min="0"  v-model="rat.rate"  placeholder="example:- 100" required>
                    <input type="text" class="form-control" v-model="rat.rate_name" placeholder="kilometer" required>
                  </li> 
                </ul>
                <div class="d-flex justify-content-center mt-4">
                  <button class="btn btn-info mr-2" @click="addItem" :disabled="allows" type="button">Add new unit</button>
                  <button class="btn btn-success"  type="submit" :disabled="allows">Result</button>
                </div>
                    </form> 
              </div>
              <div v-if="results.length > 0">
                <h2 class="text-center" style="font-size: 22px;">Result</h2>
                <h4 class="mb-2" style="font-size: 18px; color: #666">Base Unit</h4>
                <ul class="list-group">
                  <li class="list-group-item">Unit: {{ base.unit }}</li> 
                  <li class="list-group-item">Unit Name: {{ base.unit_name }}</li> 
                </ul>
                <hr>
                <h4 class="mb-2" style="font-size: 18px; color: #666">Conversion Rate</h4>
                <ul class="list-group">
                  <li class="list-group-item" v-for="(result, index) in results" v-bind:result="result" :key="index" style="text-transform: capitalize">{{ result.rate_name }} : {{ result.rate }}</li> 
                </ul>
                <button type="button" class="btn btn-success mt-3" @click="back">Back</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return { 
       base: {
         unit: '',
         unit_name: ''
       },
       rates: [
         {
           rate: '',
           rate_name: ''
         }
       ],
       results: [],
       unit: false,
       unit_name: false
    }
  },
   watch: {
        'base.unit': {
            handler: function(val) {
              if(val.unit != ''){
                this.unit =  true
              }else{
                 this.unit =  false
              }
            }
        },  
        'base.unit_name': {
            handler: function(val) {
              if( val.unit_name != ''){
                this.unit_name =  true
              }else{
                 this.unit_name =  false
              }
            }
        },  
        
    },
    computed: {
        allows(){
          if(this.unit && this.unit_name){
            return false
          }
          return true
        }
    },
  methods: {
    addItem(){
      if(this.base.unit != '' && this.base.unit_name ){
         let data = {
           rate: '',
           rate_name: ''
        };
        this.rates.push(data)
      }
    }, 
    Result(){
        let result = this.rates.map(val => {
          return {
            rate_name: val.rate_name,
            rate: val.rate * this.base.unit
          }
        } )
        this.results = result
    },
    back(){
      this.results = []; 
      this.base = {
          unit: '',
         unit_name: ''
      };
       this.rates =  [
         {
           rate: '',
           rate_name: ''
         }
       ];  
      this.$nextTick(()=>{
           this.unit =  false
          this.unit_name = false  
      })
    }
  },
   
}
</script>