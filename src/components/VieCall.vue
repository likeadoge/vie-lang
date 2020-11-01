<template>
<div class="call-cntr">

    <div class="call">
        <div class="function">
            <div class="name">{{funcName}}</div>
            <div class="line"></div>
        </div>
        <div class="arguments">
            <div v-for="v in argus" :key="v.value" class="argu">
                <vie-number v-if="isNumber(v)" :value="v"></vie-number>
                <vie-call v-if="isCall(v)" :value="v"></vie-call>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {Number,Call,Variable} from '@/lang/Expr'
import {NumberType} from '@/lang/Type'
import VieNumber from './VieNumber'

export default {
    name:'VieCall',
    components:{VieNumber},
    props:{
        value:[Call],
    },
    computed:{
        funcName(){
            return  this.value.func instanceof Variable ? this.value.func.name : `[anonymous]` 
        },
        argus(){
            return this.value.argus
        }
    },

    methods:{
        isNumber(v){
            return v instanceof Number||(v instanceof Variable && v.type instanceof NumberType)
        },
        isCall(v){
            return v instanceof Call
        }
    }
}
</script>

<style scoped>

.arguments{
    display: inline-flex;
}
.argu{
    margin:4px 4px;
}

.call{
    display: inline-flex;
    flex-direction: column;
}

.function{
    padding: 0 20px;

}


.function>.line{
    height:8px;
    width:100%;
    border:1px solid rgb(165, 165, 165);
    border-bottom: none;
    border-radius: 3px 3px 0 0;
}
</style>