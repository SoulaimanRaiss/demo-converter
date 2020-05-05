<template>
    <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="card">
            <div class="card-body"> 
              <div class="form-group">
                <label for="type">Type</label>
                  <select v-model="type" class="form-control">
                    <option value="0" selected>Meter converter</option>
                    <option value="1">ERO converter</option>
                  </select>
              </div>
              <div v-if="type == 0">
                <h4 class="mb-2">Meter Converter</h4>
                <hr>
                 <form @submit.prevent="meterConverter">
                    <div class="form-group">
                      <label for="meter">Meter</label>
                      <input type="number" class="form-control" step="0.000001" min="0" v-model="meters.meter" id="meter" required>  
                    </div>
                    <div class="form-group">
                      <label for="kilometer">Kilometer</label>
                      <input type="number" class="form-control" step="0.000001" min="0" id="kilometer" v-model="meters.kilometer" required>  
                    </div>
                    <div class="form-group">
                      <label for="centimeter">Centimeter</label>
                      <input type="number" class="form-control" step="0.000001" min="0" v-model="meters.centimeter" id="centimeter" required>  
                    </div>
                    <div class="form-group">
                      <button class="btn btn-success" type="submit">Show Result</button>
                    </div>
                    <div class="output d-flex justify-content-between mt-1">
                          <div>KM: <strong>{{ meters.km }}</strong></div>
                          <div>CM: <strong>{{ meters.cm }}</strong></div>
                    </div>
                 </form>
              </div>
             <div v-if="type == 1">
               <h3>EUR Converter</h3>
               <form @submit.prevent="EurConverter">
                    <div class="form-group">
                      <label for="eur">EUR</label>
                      <input type="number" class="form-control" step="0.000001" min="0" v-model="eurs.eur" id="eur" required>  
                    </div>
                    <div class="form-group">
                      <label for="pln">PLN</label>
                      <input type="number" class="form-control" step="0.000001" min="0" id="pln" v-model="eurs.pln" required>  
                    </div>
                    <div class="form-group">
                      <label for="usd">USD</label>
                      <input type="number" class="form-control" step="0.000001" min="0" v-model="eurs.usd" id="usd" required>  
                    </div>
                    <div class="form-group">
                      <button class="btn btn-success" type="submit">Show Result</button>
                    </div>
                    <div class="output d-flex justify-content-between mt-1">
                          <div>PLN: <strong>{{ eurs.result.pln }}</strong></div>
                          <div>USD: <strong>{{ eurs.result.usd }}</strong></div>
                    </div>
                 </form> 
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
      type: '0',
      meters: {
        meter: '',
        kilometer: '',
        centimeter: '',
        km: '',
        cm: ''
      },
      eurs: {
        eur: '', 
        usd: '',
        pln: '',
        result: {
          pln: '',
          usd: ''
        }
      }
    }
  },
  methods: {
    meterConverter(){
        if(this.meters.meter != '' && this.meters.kilometer != '' && this.meters.centimeter){
            this.meters.km = this.meters.meter * this.meters.kilometer; 
            this.meters.cm = this.meters.meter * this.meters.centimeter; 
        } 
    },
    EurConverter(){
        if(this.eurs.eur != '' && this.eurs.pln != '' && this.eurs.usd){
            this.eurs.result.pln = this.eurs.eur * this.eurs.pln; 
            this.eurs.result.usd = this.eurs.eur * this.eurs.usd; 
        } 
    }
  },
  //  watch: {
  //       'meter': {
  //           handler: function(val) {
  //             if(val != ''){
  //                this.km = 0.0001 * val;
  //                this.cm = 100 * val; 
  //             }else{
  //                this.km = '';
  //                this.cm = '';
  //             }
  //           }
  //       }, 
  //       'eur': {
  //           handler: function(val) {
  //             if(val != ''){
  //                this.pln = 4.55 * val;
  //                this.usd = 1.09 * val; 
  //             }else{
  //                this.usd = '';
  //                this.pln = '';
  //             }
  //           },
  //       }, 
    // }
}
</script>